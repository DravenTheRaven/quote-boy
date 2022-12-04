import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../App.scss';

function YesNoCheck({ text }) {
  return (
    <>
      <div className="border border-dark">
        <Row>
          <Col>
            <Form.Label>{text}</Form.Label>
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
      </div>
    </>
  )
}

export default YesNoCheck
