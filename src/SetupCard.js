import React from "react";
import { useState } from 'react';
import InputVal from './components/InputVal.js'
import SetPiece from './components/SetPiece.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './App.scss';

function SetupCard() {
  const [state, setState] = useState({
    setups: 0,
    setupCost: 0,
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
    <InputVal handleChange={handleChange}
              name="quantity"
              value={state.quantity}
              text="Quantity"
              />
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
              </Card>
  )
}

export default SetupCard
