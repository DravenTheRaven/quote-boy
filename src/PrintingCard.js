import React from "react";
import Card from 'react-bootstrap/Card';
import Printing from './components/Printing.js'
import InputVal from './components/InputVal.js'
import './App.scss';

function PrintingCard({ handleChange, profitMargin }) {

  return (
    <Card>
      <Printing  />
        <InputVal handleChange={handleChange}
                  name="profitMargin"
                  value={profitMargin}
                  text="Profit Margin"
                  />
      </Card>
  )
}

export default PrintingCard
