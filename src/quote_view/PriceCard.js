import React from "react";
import InputVal from '../components/InputVal.js'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Price from '../components/Price.js'
import '../App.scss';

function PriceCard({ blankCost, setupPiece, showContinue, handleShowContinue, printingCost,  profitMargin, handleOutput, totalPrice, handlePriceChange, handleTotalPriceChange, handleTotalPrice }) {
let totalCost= parseFloat(blankCost) + parseFloat(setupPiece) + parseFloat(printingCost);
return (
  <>

<Row>
<Col>
  <InputVal value={totalCost}
            text="Total Cost"
            name="totalCost"
            />
</Col>
<Col>
  <InputVal value={profitMargin}
            text="Profit Margin"
            name="profitMargin"
          handleChange={handlePriceChange} />
          </Col>
          </Row>
  <Price
         totalCost={totalCost}
         profitMargin={profitMargin}
         handleTotalPriceChange={handleTotalPriceChange}
         totalPrice={totalPrice}
         handlePriceChange={handlePriceChange}
         handleOutput={handleOutput}
         handleTotalPrice={handleTotalPrice}
         showContinue={showContinue}
         handleShowContinue={handleShowContinue}
         />
         </>
       )
     }

export default PriceCard
