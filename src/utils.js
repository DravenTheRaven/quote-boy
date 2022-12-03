import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function priceMargin(profitMargin) {
  let finalMargin = ( 1 - (parseFloat(profitMargin) / 100));

}

function printing({ printingCost }) {
  let costLog = [];

}



function getPrice(cost, profitMargin) {
  let price = parseFloat(cost) / parseFloat(profitMargin);

}

function Printing() {
  return(
  <>
  <Form.Group>
    <Form.Label htmlFor="printingCost">{`Printing Cost: `}</Form.Label>
    <Form.Control    name="printingCost"  size="sm" />
  </Form.Group>
  </>
  )
}

export { priceMargin, getPrice }

export default Printing
