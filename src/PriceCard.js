import React from "react";
import Price from './components/Price.js'
import './App.scss';

function PriceCard({ blankCost, setupCost, printingCost, setups, quantity, profitMargin, finalPrice, handleChange }) {

return (
  <Price blankCost={blankCost}
         setupCost={setupCost}
         printingCost={printingCost}
         setups={setups}
         quantity={quantity}
         profitMargin={profitMargin}
         price={finalPrice}
         handleChange={handleChange}
         />
       )
     }

export default PriceCard
