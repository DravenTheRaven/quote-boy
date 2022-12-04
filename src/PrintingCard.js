import React from "react";
import Card from 'react-bootstrap/Card';
import Printing from './components/Printing.js'
import InputVal from './components/InputVal.js'
import './App.scss';

function PrintingCard({ handleChange, profitMargin, numberOfLocations, printingCost }) {

  return (
    <Card>
    <InputVal name='numberOfLocations'
              text='Number of Locations'
              value={numberOfLocations}
              handleChange={handleChange}
              />

      <Printing  handleChange={handleChange}
                 numberOfLocations={numberOfLocations}
                 printingCost={printingCost}

                 />

        <InputVal handleChange={handleChange}
                  name="profitMargin"
                  value={profitMargin}
                  text="Profit Margin"
                  />
      </Card>
  )
}

export default PrintingCard
