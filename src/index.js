import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/startPage/App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: "Dmitriy" },
  { id: 2, name: "Luba" },
  { id: 3, name: "Gleb" },
  { id: 4, name: "Masha" },
  { id: 5, name: "Anya" },
  { id: 6, name: "Bulya" },
  { id: 7, name: "Lusya" },
  { id: 8, name: "Vitya" },
];

let messageData = [
  { id: 1, message: "Hi, have a nice day!" },
  { id: 2, message: "And good luck on your project!" },
  { id: 3, message: "React is wonderful!" },
];

let commentsData = [
  { id: 1, message: "Hello World!", likes: "0" },
  { id: 2, message: "I'ts test message from props", likes: "9" },
  { id: 3, message: "I like it", likes: "10" },
  { id: 4, message: "Yahoo", likes: "5" },
  { id: 5, message: "I'ts work, i'ts wonderfull", likes: "3" },
];

ReactDOM.render(
  <React.StrictMode>
    <App messageData={messageData} dialogsData={dialogsData} commentsData={commentsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
