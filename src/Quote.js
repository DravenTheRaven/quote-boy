import React from "react";
import { useState } from 'react';
import Printing from './components/Printing.js'
import SetPiece from './components/SetPiece.js'
import InputVal from './components/InputVal.js'
import Oversize from './components/Oversize.js'
import Price from './components/Price.js'
import Output from './components/Output.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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

        console.log(state)
  return(
<div >
  <div id="container" >
    <Form.Group>
    <InputVal handleChange={handleChange}
              name="blankCost"
              value={state.blankCost}
              text="Blank Cost" />

    <Oversize handleChange={handleChange}
              inputVal={InputVal}
              checkOver={state.check2XL}
              name="check2XL"
              handleCheck={handleCheck}
              text="2XL"
              value={state.cost2XL}
              className="flox"
              />
    <Oversize handleChange={handleChange}
              inputVal={InputVal}
              checkOver={state.check3XL}
              name="check3XL"
              handleCheck={handleCheck}
              text="3XL"
              value={state.cost3XL}
              className="flox"
              />
    </Form.Group>
    <InputVal handleChange={handleChange}
              name="quantity"
              value={state.quantity}
              text="Quantity"
              />
    <Printing  />
    <InputVal handleChange={handleChange}
              name="setupCost"
              value={state.setupCost}
              text="Setup Cost"
              />
    <InputVal handleChange={handleChange}
              name="setups"
              value={state.setups}
              text="Number of Setups"
              />
    <SetPiece handleChange={handleChange}
              setupCost={state.setupCost}
              setups={state.setups}
              quantity={state.quantity}
              name="setUpPerPiece"
              />
    <InputVal handleChange={handleChange}
              name="profitMargin"
              value={state.profitMargin}
              text="Profit Margin"
              />
    <Price blankCost={state.blankCost}
           setupCost={state.setupCost}
           printingCost={state.printingCost}
           setups={state.setups}
           quantity={state.quantity}
           profitMargin={state.profitMargin}
           value={state.price}
           />
     <Button variant="dark" as="input" type="submit" className="w-25" value="Submit" />{' '}
  </div>
</div>
  )
}

export default Quote;
