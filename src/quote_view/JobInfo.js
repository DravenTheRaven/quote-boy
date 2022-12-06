import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputVal from '../components/InputVal.js'
import '../App.scss';

function JobInfo({ handleQuote, customer, jobName, itemNumber, itemColor, handleChange }) {

  return (
    <div className="container border border-dark">
      <Form.Label>Job Information</Form.Label>
      <Row>
        <Col>
          <InputVal handleChange={handleChange}
                    name="customer"
                    blankCost={customer}
                    value={customer}
                    text="Customer"
                    />
        </Col>
        <Col>
          <InputVal handleChange={handleChange}
                    name="jobName"
                    blankCost={jobName}
                    value={jobName}
                    text="Job Name"
                    />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputVal handleChange={handleChange}
                    name="itemNumber"
                    blankCost={itemNumber}
                    value={itemNumber}
                    text="Item Number"
                    />
        </Col>
        <Col>
          <InputVal handleChange={handleChange}
                    name="itemColor"
                    blankCost={itemColor}
                    value={itemColor}
                    text="Item Color"
                    />
        </Col>
      </Row>
      <Button onClick={handleQuote}>Continue</Button>
    </div>
  )
}

export default JobInfo
