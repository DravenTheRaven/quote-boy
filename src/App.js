import React from "react";
import QuoteView from 'views/quoteView/QuoteView.js';
import quoteReducer from 'quoteReducer.js'
import 'App.scss';

export default function App() {
  

  return (
    <div id="appContain">

      <div className="appWrap">
        <QuoteView />
      </div>
    </div>
  );
}
