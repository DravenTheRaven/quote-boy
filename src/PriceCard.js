import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Price from './components/Price.js'
import InputVal from './components/InputVal.js'
import './App.scss';

function PriceCard() {

  const [state, setState] = useState({
    blankCost: "",
    cost2XL: "",
    cost3XL: "",
    printingCost: "10",
    price: 0,
    setups: 0,
    setupCost: 0,
    profitMargin: 0,
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
      console.log(value)

  }
  console.log(state)
return (
  <Price blankCost={state.blankCost}
         setupCost={state.setupCost}
         printingCost={state.printingCost}
         setups={state.setups}
         quantity={state.quantity}
         profitMargin={state.profitMargin}
         value={state.price}
         />
)
}

export default PriceCard
