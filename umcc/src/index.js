import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppJson from './AppJson';
import BasicCalendar from './BasicCalendar';

// import BasicCalendar from './BasicCalendar';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <h1>The following events are from events.json</h1>
    <AppJson />
    <div>
    <h1>The following events are from eventdata.js</h1>
    </div>
    <BasicCalendar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
