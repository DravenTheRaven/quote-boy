import React from 'react';
import InputVal from 'components/InputVal.js';
import { getSetupPiece, getTotalPrint, getTotalCost, getFinalMargin, getTotalPrice, getProfit, getMarkup } from 'utils/utils.js'
import 'App.scss';

export default function PriceCard({ profitMargin, printingCost, blankCost, setupCost, setups, quantity, inputAction }) {
  let totalPrint = getTotalPrint(printingCost)
  let setupPiece = getSetupPiece(setups, setupCost, quantity)
  let totalCost = getTotalCost(blankCost, setupPiece, totalPrint)
  let finalMargin = getFinalMargin(profitMargin)
  let totalPrice = getTotalPrice(totalCost, finalMargin)
  let profit = getProfit(totalPrice, totalCost)
  let markup = getMarkup(profit, totalCost)

  return (
    <>
      <p>{`Total Cost: \$${(Math.round((totalCost + Number.EPSILON) * 100) / 100).toFixed(2)}`}</p>
      <InputVal name="profitMargin"
                text="Profit Margin"
                value={profitMargin}
                handleChange={inputAction}
                />
      <p>{`Price: \$${(Math.round((totalPrice + Number.EPSILON) * 100) / 100).toFixed(2)}`}</p>
      <p>{`Profit: \$${(Math.round((profit + Number.EPSILON) * 100) / 100).toFixed(2)}`}</p>
      <p>{`Markup: \$${(Math.round((markup + Number.EPSILON) * 100) / 100).toFixed(2)}`}</p>
                
    </>
  )
}
