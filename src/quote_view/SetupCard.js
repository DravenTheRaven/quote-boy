import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputVal from '../components/InputVal.js'
import SetPiece from '../components/SetPiece.js'
import Card from 'react-bootstrap/Card';
import '../App.scss';

function SetupCard({ handlePriceChange, quantity, setupPiece, handleSetupPiece, showContinue, handleShowContinue }) {
  const [setupCost, setSetupCost] = useState(0);
  const [setups, setSetups] = useState(0)
let holdPiece = parseFloat(setups) * parseFloat(setupCost) / parseFloat(quantity)


  function handleSetupCost(e) {
    setSetupCost(e.target.value);
  }

  function handleSetups(e) {
    setSetups(e.target.value);

  }

  const showSetupTotal = () => {
    handleSetupPiece(holdPiece)
    handleShowContinue()
  }



console.log(holdPiece)


  return (
    <Card>
      <InputVal handleChange={handlePriceChange}
                name="quantity"
                value={quantity}
                text="Quantity"
                />
      <InputVal handleChange={handleSetupCost}
                name="setupCost"
                value={setupCost}
                text="Setup Cost"
                />
      <InputVal handleChange={handleSetups}
                name="setups"
                value={setups}
                text="Number of Setups"
                />
<p>{setupPiece}</p>
                <Button onClick={showSetupTotal} >Submit</Button>
    </Card>
  )
}

export default SetupCard
