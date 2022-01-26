import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/vi_VN';

ReactDOM.render(
  <ConfigProvider locale={enUS}>
    {/* <React.StrictMode> */}
    <App />,
    {/* </React.StrictMode> */}
  </ConfigProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
