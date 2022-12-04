import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.scss';

function CheckVal({ value, handleCheck, name,  text }) {
  return (
    <>
      <Row>
        <Col xs={4}>
          <Form.Label >{`${text}: `}</Form.Label>
        </Col>
        <Col xs={8}>
          <Form.Check name={name}
                      value={value}
                      onChange={handleCheck}
                      text={text}
                      size="sm"
                      />
        </Col>
      </Row>
    </>
  )
}

export default CheckVal
