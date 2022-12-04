import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.scss';

function Price({ blankCost, printingCost, setups, setupCost, profitMargin, quantity, handleChange, finalPrice }) {
  const setUpPerPiece = ((parseFloat(setupCost) * parseFloat(setups)) / parseFloat(quantity));
  const cost = (parseFloat(blankCost) + parseFloat(setUpPerPiece) + parseFloat(printingCost));
  const finalMargin = (1 - (parseFloat(profitMargin) / 100));
  finalPrice = cost / finalMargin;
  return (
  <>
    <Form.Group controlId="price" className="border border-secondary border-5">
      <Row>
        <Col xs={4}>
          <Form.Label>Price:</Form.Label>
        </Col>
        <Col xs={8}>
          <Form.Control name="price"
                        value={finalPrice}
                        size="sm"
                        onChange={handleChange}
                        readOnly
                        />
          {Number.isNaN(finalPrice) !== true && <p>{cost}</p>}
          {Number.isNaN(finalPrice) !== true && <p>{finalPrice}</p>}
        </Col>
      </Row>
    </Form.Group>
  </>
  )
}

export default Price
