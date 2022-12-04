import React from "react";
import JobInfo from './JobInfo.js'
import Quote from './Quote.js';
import Output from './components/Output.js'
import './App.scss';

function App() {
  return (
  <div>
    <Quote />
    <div className="out">
      <Output />
      <JobInfo />
    </div>
  </div>
  )
}

export default App;
