import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.scss';

function InputVal({value, handleChange, name, text }) {
  return (
    <>
    <Form.Group  controlId={name}>
    <Row>
    <Col xs={4}>
    <Form.Label >{`${text}: `}</Form.Label>
    </Col>
    <Col xs={8}>
    <Form.Control name={name}
                  value={value}
                  onChange={handleChange}
                  text={text}
                  size="sm"

                  />
    </Col>
    </Row>
    </Form.Group>
</>
  )
}

export default InputVal
