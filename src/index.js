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
import TypeProp,{Member}from './chap03/TypeProp';
import StateParent from './chap03/StateParent';
import EventMouse from './chap03/EventMouse';
import EventCompare from './chap03/EventCompare';
import EventError from './chap03/EventError';
import EventObj from './chap03/EventObj';
import EventPoint from './chap03/EventPoint';

const root = ReactDOM.createRoot(document.getElementById('root'));//ここから4


root.render(
  <EventPoint/>
)


/*
root.render(
  <EventError src='./image/wings.jpg' alt="サンプルじゃい"/>
)
*/

/*
root.render(
  <EventMouse
  alt="ロゴ画像"
  beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
  afterSrc="https://www.web-deli.com/image/home_chara.gif"
  />
);
*/


/*
 root.render(
   <StateParent/>
 );
*/

/*
root.render(
  <TypeProp 
  prop1={new Member()}
  prop2="男性"
  prop3="鈴木花子"
  prop4={[333,'鈴木花子']}
  prop5={{ '鈴木花子':15,'力涼子':'三十' }}
  prop6={{ age:35,sex:'女性' }}
  />
);
*/

/*
root.render(
  <ListTemplate src={books} render={elem => (
    <>
      <dt>
        <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
          {elem.title}（{elem.price}円）
        </a>
      </dt>
      <dd>{elem.summary}</dd>
    </>
  )}/>
);
*/
//ここまで4
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();//5
