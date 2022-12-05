import React from "react";
import InputVal from './components/InputVal.js'
import SetPiece from './components/SetPiece.js'
import Card from 'react-bootstrap/Card';
import './App.scss';

function SetupCard({ handleChange, quantity, setups, setupCost, handlePriceChange }) {

  return (
    <Card>
      <InputVal handleChange={handlePriceChange}
                name="quantity"
                value={quantity}
                text="Quantity"
                />
      <InputVal handleChange={handleChange}
                name="setupCost"
                value={setupCost}
                text="Setup Cost"
                />
      <InputVal handleChange={handleChange}
                name="setups"
                value={setups}
                text="Number of Setups"
                />
      <SetPiece handleChange={handleChange}
                setupCost={setupCost}
                setups={setups}
                quantity={quantity}
                name="setUpPerPiece"
                />
    </Card>
  )
}

export default SetupCard
