import React from "react";
import { useState } from 'react';
import JobInfo from './quote_view/JobInfo.js'
import Quote from './quote_view/Quote.js';
import Output from './quote_view/Output.js'

import './App.scss';

function App() {
  const [view, setView] = useState('jobInfoView');
  const [totalPrice, setTotalPrice] = useState(0);
  const [job, setJob] = useState({
      customer: "",
      jobName: "",
      itemNumber: "",
      itemColor: "",
    });

    const [priceInfo, setPriceInfo] = useState({
        quantity: "",
        profitMargin: "",
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

  const handleTotalPrice = (holdPrice) => {
    setTotalPrice(holdPrice)

  }

  function handleTotalPriceChange(e) {
    setTotalPrice(e.target.value)

  }
console.log(totalPrice)
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
    console.log(totalPrice)
  }

  return (
    <div id="appContain">
    {view === 'quoteView' &&
      <div className="appWrap" id="quoteWrap">
        <Quote handleOutput={handleOutput}
               handlePriceChange={handlePriceChange}
               quantity={priceInfo.quantity}
               totalPrice={totalPrice}
               profitMargin={priceInfo.profitMargin}
               handleTotalPrice={handleTotalPrice}
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
                itemColor={job.itemColor}
                totalPrice={totalPrice}
                handlePriceChange={handlePriceChange}/>
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
