import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "./index.scss";

import moment from "moment";

moment.locale("zh-cn");

export class App extends Component {
    render() {
        return (
            <ConfigProvider locale={zhCN}>
                react app
            </ConfigProvider>
        );
    }
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(<App />);
