import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import YesNoCheck from './YesNoCheck.js'
import '../App.scss';

function Printing() {
  return(
  <>
    <div className="border border-dark border-5">
      <Row>
        <Col>
          <Form.Group className="border border-dark border-5" controlId="printingCost">
            <Form.Label>{`Printing Cost: `}</Form.Label>
            <Form.Control name="printingCost"  className="w-25" size="sm" />
          </Form.Group>
        </Col>
        <Col>
          <YesNoCheck text="Is there another location?"/>
        </Col>
      </Row>
    </div>
  </>
  )
}

export default Printing
