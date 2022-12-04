import React from "react";
import { useState } from 'react';
import BlankCard from './BlankCard.js'
import SetupCard from './SetupCard.js'
import PriceCard from './PriceCard.js'
import PrintingCard from './PrintingCard.js'
import Button from 'react-bootstrap/Button';
import './App.scss';

function Quote() {
  const [state, setState] = useState({
    blankCost: "",
    cost2XL: "",
    cost3XL: "",
    printingCost: "10",
    finalPrice: 0,
    setups: 0,
    setupCost: 0,
    profitMargin: 0,
    check2XL: false,
    check3XL: false,
    quantity: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  console.log(state)
  function handleCheck(e) {
    const checked = e.target.checked;
    setState({
      ...state,
      [e.target.name]: checked
    })
  }

  return(
    <div >
      <div id="container" >
        <BlankCard blankCost={state.blankCost}
                   cost2XL={state.cost2XL}
                   cost3XL={state.cost3XL}
                   check2XL={state.check2XL}
                   check3XL={state.check3XL}
                   handleChange={handleChange}
                   handleCheck={handleCheck}
                   />
        <SetupCard handleChange={handleChange}
                   setupCost={state.setupCost}
                   setups={state.setups}
                   quantity={state.quantity}
                   />
        <PrintingCard handleChange={handleChange}
                      profitMargin={state.profitMargin}
                      />
        <PriceCard blankCost={state.blankCost}
                   setupCost={state.setupCost}
                   setups={state.setups}
                   quantity={state.quantity}
                   printingCost={state.printingCost}
                   profitMargin={state.profitMargin}
                   price={state.finalPrice}
                   handleChange={handleChange}
                   />
        <Button variant="dark" as="input" type="submit" className="w-25" value="Submit" />{' '}
      </div>
    </div>
  )
}

export default Quote;
