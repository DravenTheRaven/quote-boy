import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.scss';

function Price({ blankCost, printingCost, setups, setupCost, profitMargin, quantity }) {
  const setUpPerPiece = ((parseFloat(setupCost) * parseFloat(setups)) / parseFloat(quantity))
  const cost = (parseFloat(blankCost) + parseFloat(setUpPerPiece) + parseFloat(printingCost))
  const finalMargin = (1 - (profitMargin / 100))
  const price = cost / finalMargin
  return (
  <>

  <Form.Group controlId="price">
  <Row>
  <Col xs={4}>
    <Form.Label>Price:</Form.Label>
  </Col>
  <Col xs={8}>
    <Form.Control  name="price"
                  value={price}
                  size="sm"

                  readOnly
                  />
      </Col>
      </Row>
  </Form.Group>
  </>
  )
}

export default Price