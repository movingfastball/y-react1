import React from 'react';//1
import ReactDOM from 'react-dom/client';//1
import './index.css';//2
import App from './App';//2
import reportWebVitals from './reportWebVitals';//3
import MyHello from './chap03/MyHello';
import EventBasic from './chap03/EventBasic';
import StateBasic from './chap03/StateBasic';
import books from './chap03/books';
import ForList from './chap03/ForList';

import ForFilter from './chap03/ForFilter';
import ForSort from './chap03/ForSort';
import ForItem from './chap03/ForItem';
import SelectStyle from './chap03/SelectStyle';
import StyledPanel from './chap03/StyledPanel';
import TitledPanel from './chap03/TitledPanel';
import ListTemplate from './chap03/ListTemplate';



const root = ReactDOM.createRoot(document.getElementById('root'));//ここから4

root.render(
  <ListTemplate src={books}>
    {elem => (
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title}（{elem.price}円）
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>
    )}
  </ListTemplate>
);

//ここまで4
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();//5
