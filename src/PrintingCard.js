import React from "react";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Printing from './components/Printing.js'
import InputVal from './components/InputVal.js'
import Form from 'react-bootstrap/Form';
import './App.scss';

function PrintingCard({ handleChange, profitMargin, numberOfLocations, printingCost }) {
const [showTotal, setShowTotal] = useState(false);

const handleShowTotal = () => {
  setShowTotal(true);
}

  return (
    <Card>
    <Form.Label>Printing Cost</Form.Label>
    {showTotal === false &&
      <>
      <Printing  handleChange={handleChange}
                 numberOfLocations={numberOfLocations}
                 printingCost={printingCost}
                 handleShowTotal={handleShowTotal}
                 showTotal={showTotal}
                 />
        </>}
        {showTotal === true &&
        <>

        <InputVal handleChange={handleChange}
                  name="profitMargin"
                  value={profitMargin}
                  text="Profit Margin"
                  />
          </>}
      </Card>
  )
}

export default PrintingCard
