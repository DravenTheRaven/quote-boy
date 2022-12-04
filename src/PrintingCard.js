import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Printing from './components/Printing.js'
import InputVal from './components/InputVal.js'
import './App.scss';

function PrintingCard() {

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
  console.log(state)
  return (
    <Card>
                  <Printing  />
        <InputVal handleChange={handleChange}
                  name="profitMargin"
                  value={state.profitMargin}
                  text="Profit Margin"
                  />
                  </Card>
  )
}

export default PrintingCard
