import React from "react";
import { useState } from 'react';
import JobInfo from './JobInfo.js'
import Quote from './Quote.js';
import Output from './components/Output.js'
import './App.scss';

function App() {
  const [view, setView] = useState('jobInfoView');
  const [job, setJob] = useState({
      customer: "",
      jobName: "",
      itemNumber: "",
      itemColor: "",
    });

    const [priceInfo, setPriceInfo] = useState({
        totalPrice: "",
        quantity: "",
      });

  const handleQuote = () => {
    setView("quoteView");
  }

  const handleOutput = () => {
    setView("outputView");
  }

  const handleJobView = () => {
    setView("jobInfoView");
  }

  function handleJobChange(e) {
    const value = e.target.value;
    setJob({
      ...job,
      [e.target.name]: value
    });
    console.log(job)
  }

  function handlePriceChange(e) {
    const value = e.target.value;
    setPriceInfo({
      ...priceInfo,
      [e.target.name]: value
    });
    console.log(priceInfo)
  }

  return (
    <div id="appContain">
    {view === 'quoteView' &&
      <div className="appWrap" id="quoteWrap">
        <Quote handleOutput={handleOutput}
               handlePriceChange={handlePriceChange}
               quantity={priceInfo.quantity}
               totalPrice={priceInfo.totalPrice}
               />
      </div>
      }
    {view === 'outputView' &&
      <div className="appWrap" id="outputWrap">
        <Output handleJobView={handleJobView}
                quantity={priceInfo.quantity}
                customer={job.customer}
                jobName={job.jobName}
                itemNumber={job.itemNumber}
                itemColor={job.itemColor}/>
      </div>
      }
    {view === 'jobInfoView' &&
      <div className="appWrap" id="jobinfoWrap">
        <JobInfo handleQuote={handleQuote}
                 customer={job.customer}
                 jobName={job.jobName}
                 itemNumber={job.itemNumber}
                 itemColor={job.itemColor}
                 handleChange={handleJobChange}
                 />
      </div>
      }
      </div>
  )
}

export default App;
