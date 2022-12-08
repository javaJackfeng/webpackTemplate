const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    process.env.NODE_ENV === "production"
                        ? MiniCssExtractPlugin.loader
                        : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/i,
                use: [
                    process.env.NODE_ENV === "production"
                        ? MiniCssExtractPlugin.loader
                        : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName:
                                    process.env.NODE_ENV === "production"
                                        ? "[hash:base64:5]"
                                        : "[path][name]__[local]-[hash:base64:5]",
                            },
                            importLoaders: 1,
                        },
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.less$/i,
                use: [
                    process.env.NODE_ENV === "production"
                        ? MiniCssExtractPlugin.loader
                        : "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        },
                    },
                    "postcss-loader",
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    'height-sm': "26px"
                                }
                            }
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'img/[hash:10][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'font/[hash:10][ext]'
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
        }),
    ],
    resolve: {
        alias: {
            "@src": path.resolve(__dirname, "../src/"),
            "@utils": path.resolve(__dirname, "../src/utils/"),
            "@components": path.resolve(__dirname, "../src/components/"),
            "@pages": path.resolve(__dirname, "../src/pages/"),
            "@service": path.resolve(__dirname, "../src/service/"),
        },
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    stats: "normal",
};
