import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InputVal from 'components/InputVal.js';
import BlankCard from 'views/quoteView/BlankCard.js';
import SetupCard from 'views/quoteView/SetupCard.js';
import PrintingCard from 'views/quoteView/PrintingCard.js';
import PriceCard from 'views/quoteView/PriceCard.js';
import JobInfoView from 'views/JobInfoView.js'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export {InputVal, BlankCard, SetupCard, PrintingCard, PriceCard, JobInfoView, Button, Col, Row}