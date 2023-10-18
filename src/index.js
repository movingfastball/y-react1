import React from 'react';//1
import ReactDOM from 'react-dom/client';//1
import './index.css';//2
import App from './App';//2
import reportWebVitals from './reportWebVitals';//3


const root = ReactDOM.createRoot(document.getElementById('root'));//ここから4

const dest = 'https://ja.react.dev';

  root.render(
    <p className="hoge">WINGSプロジェクト</p>
  )


//ここまで4
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();//5
