import React from "react";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Printing from '../components/Printing.js'
import InputVal from '../components/InputVal.js'
import Form from 'react-bootstrap/Form';
import '../App.scss';

function PrintingCard({ printingCost, handlePrintingCost, showContinue, handleShowContinue }) {
const [showTotal, setShowTotal] = useState(false);

const handleShowTotal = () => {
  setShowTotal(true);
  handleShowContinue()
}

  return (
    <Card>
    <Form.Label>Printing Cost</Form.Label>
    {showTotal === false &&
      <>
      <Printing  handleShowContinue={handleShowContinue}
                 printingCost={printingCost}
                 handleShowTotal={handleShowTotal}
                 showTotal={showTotal}
                 handlePrintingCost={handlePrintingCost}
            
                 />
        </>}

        {showTotal === true &&
        <>
  <p>{`Total Printing Cost: ${printingCost}`}</p>

          </>}
      </Card>
  )
}

export default PrintingCard
