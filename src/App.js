import React from "react";
import { useState } from 'react';
import JobInfo from './JobInfo.js'
import Quote from './Quote.js';
import Output from './components/Output.js'
import './App.scss';

function App() {
  const [view, setView] = useState('jobInfoView');

  const handleQuote = () => {
    setView("quoteView");
  }

  const handleOutput = () => {
    setView("outputView");
  }

  const handleJobView = () => {
    setView("jobInfoView");
  }

  return (
    <div id="appContain">
    {view === 'quoteView' &&
      <div className="appWrap" id="quoteWrap">
        <Quote handleOutput={handleOutput}/>
      </div>
      }
    {view === 'outputView' &&
      <div className="appWrap" id="outputWrap">
        <Output handleJobView={handleJobView}/>
      </div>
      }
    {view === 'jobInfoView' &&
      <div className="appWrap" id="jobinfoWrap">
        <JobInfo handleQuote={handleQuote}/>
      </div>
      }
      </div>
  )
}

export default App;
