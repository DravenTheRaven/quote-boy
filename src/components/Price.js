import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../App.scss';

function Price({ totalCost, profitMargin, totalPrice, handleChange, handleOutput, handlePriceChange, handleTotalPrice, handleTotalPriceChange, handleShowContinue }) {
  let finalMargin = (100 - parseFloat(profitMargin)) / 100
let holdPrice = parseFloat(totalCost) / parseFloat(finalMargin)

const handleSave = () => {
  handleTotalPrice(holdPrice);
  handleShowContinue();
  console.log(holdPrice)
}
console.log(totalPrice)
  return (
  <>
  <p>{finalMargin}</p>
    <Form.Group controlId="price" className="border border-secondary border-5 h-50">
      <Row >
        <Col xs={4}>
          <Form.Label>Price:</Form.Label>
        </Col>
        <Col xs={8}>
          <Form.Control name="finalPrice"
                        value={holdPrice}
                        size="sm"
                        onChange={handleTotalPriceChange}
                        readOnly
                        />
        </Col>
      </Row>
      <Button onClick={handleSave}>Save</Button>
    </Form.Group>
    <Button onClick={handleOutput}>Continue</Button>
  </>
  )
}

export default Price
