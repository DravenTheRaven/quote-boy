import React from 'react';
import InputVal from 'components/InputVal.js';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'App.scss';

export default function PriceCard({ profitMargin, printingCost, blankCost, setupCost, setups, quantity, inputAction }) {
  let totalPrint = printingCost.reduce((previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue))
  
  console.log(`total printing ${totalPrint}`)
  let setupPiece = (parseFloat(setups) * parseFloat(setupCost)) / parseFloat(quantity)
  let totalCost = (parseFloat(blankCost) + parseFloat(setupPiece) + parseFloat(totalPrint))
  let finalMargin = ((100 - parseFloat(profitMargin)) / 100)
  let totalPrice = parseFloat(totalCost) / parseFloat(finalMargin)
  console.log(finalMargin)
  return (
    <>
      <InputVal name="toalCost"
                text="Total Cost"
                value={totalCost}
                readonly
                />
      <InputVal name="profitMargin"
                text="Profit Margin"
                value={profitMargin}
                handleChange={inputAction}
                />
      <InputVal name="totalPrice"
                text="Price"
                value={totalPrice}
                readonly
                />
    </>
  )
}
