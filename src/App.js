import React from "react";
import JobInfo from './JobInfo.js'
import Quote from './Quote.js';
import Output from './components/Output.js'
import './App.scss';

function App() {
  return (
    <div id="appContain">
  <div className="appWrap" id="quoteWrap">
    <Quote />
  </div>
    <div className="appWrap" id="outputWrap">
      <Output />
    </div>
    <div className="appWrap" id="jobinfoWrap">
      <JobInfo />
    </div>
</div>
  )
}

export default App;
