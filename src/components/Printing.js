import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.scss';

function Printing() {
  return(
  <>
  <Row>
    <Col>
      <Form.Group>
        <Form.Label htmlFor="printingCost">{`Printing Cost: `}</Form.Label>
        <Form.Control name="printingCost"  className="w-25" size="sm" />
      </Form.Group>
    </Col>

    <Col>
      <LocationCheck />
    </Col>
  </Row>
  </>
  )
}



function LocationCheck() {
  return (
    <>
    <Row>
      <Col>
      <Form.Label>Is there another location?</Form.Label>
      </Col>
    </Row>

    <Row>
      <Col xs={3}>
        <Button variant="dark" size="sm">Yes</Button>{' '}
      </Col>
      <Col xs={3}>
        <Button variant="dark"  size="sm">No</Button>{' '}
      </Col>
    </Row>
    </>
  )
}
export default Printing
