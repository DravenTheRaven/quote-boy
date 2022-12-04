import React from "react";
import { useState } from 'react';
import Printing from './components/Printing.js'
import SetPiece from './components/SetPiece.js'
import InputVal from './components/InputVal.js'
import Oversize from './components/Oversize.js'
import BlankCard from './BlankCard.js'
import SetupCard from './SetupCard.js'
import PriceCard from './PriceCard.js'
import PrintingCard from './PrintingCard.js'
import Price from './components/Price.js'
import Output from './components/Output.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './App.scss';


function Quote() {
  const [state, setState] = useState({
    blankCost: "",
    cost2XL: "",
    cost3XL: "",
    printingCost: "10",
    price: 0,
    setups: 0,
    setupCost: 0,
    profitMargin: 0,
    check2XL: "",
    check3XL: "",
  });


  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
      console.log(value)

  }

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
             onChange={handleChange}/>
  <SetupCard />
  <PrintingCard />
  <PriceCard />

     <Button variant="dark" as="input" type="submit" className="w-25" value="Submit" />{' '}
  </div>
</div>
  )
}

export default Quote;
