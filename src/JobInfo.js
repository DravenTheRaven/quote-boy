import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './App.scss';

function JobInfo() {
  return (
    <div className="container border border-dark">
    <Form.Label>Job Information</Form.Label>

    <Row>
    <Col>
    <Form.Group>
      <Form.Label>Customer:</Form.Label>
      <Form.Control  size="sm"/>
      <Form.Label>Job Name:</Form.Label>
      <Form.Control size="sm"/>
    </Form.Group>
    </Col>
    <Col>
    <Form.Group>
      <Form.Label>Item Number:</Form.Label>
      <Form.Control size="sm"/>
      <Form.Label>Color:</Form.Label>
      <Form.Control size="sm"/>
      </Form.Group>
      </Col>
      </Row>
      <Button>Continue</Button>
      </div>


  )
}

export default JobInfo
