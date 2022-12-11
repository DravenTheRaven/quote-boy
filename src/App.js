import React from "react";

import quoteReducer from 'quoteReducer.js'
import ChessView from 'ChessView.js'
import { useState } from 'react'
import 'App.scss';

export default function App() {
  const [jobArr, setJobArr] = useState([])

  return (
    <div id="appContain">

      <div className="appWrap">
      <ChessView jobArr={jobArr}/>
      </div>
    </div>
  );
}
