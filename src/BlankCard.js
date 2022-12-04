import React from "react";
import { useState } from 'react';
import InputVal from './components/InputVal.js'
import Oversize from './components/Oversize.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './App.scss';

function BlankCard({ blankCost, cost2XL, cost3XL, handleChange }) {
  const [state, setState] = useState({
    blankCost: "",
    cost2XL: "",
    cost3XL: "",

  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
      console.log(value)

  }
  console.log({blankCost})
  console.log(state)
  function handleCheck(e) {
    const checked = e.target.checked;
    setState({
      ...state,
      [e.target.name]: checked
    })
  }

  return (
  <Card>
    <Form.Group className="border border-dark">
    <InputVal handleChange={handleChange}
              name="blankCost"
              blankCost={state.blankCost}
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
    </Card>
  )
}

export default BlankCard
