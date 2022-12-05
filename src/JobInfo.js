import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputVal from './components/InputVal.js'
import './App.scss';

function JobInfo({ handleQuote }) {
  const [state, setState] = useState({
    customer: "",
    jobName: "",
    itemNumber: "",
    itemColor: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  return (
    <div className="container border border-dark">
      <Form.Label>Job Information</Form.Label>
      <Row>
        <Col>
          <InputVal handleChange={handleChange}
                    name="customer"
                    blankCost={state.customer}
                    value={state.customer}
                    text="Customer"
                    />
        </Col>
        <Col>
          <InputVal handleChange={handleChange}
                    name="jobName"
                    blankCost={state.jobName}
                    value={state.jobName}
                    text="Job Name"
                    />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputVal handleChange={handleChange}
                    name="itemNumber"
                    blankCost={state.itemNumber}
                    value={state.itemNumber}
                    text="Item Number"
                    />
        </Col>
        <Col>
          <InputVal handleChange={handleChange}
                    name="itemColor"
                    blankCost={state.itemColor}
                    value={state.itemColor}
                    text="Item Color"
                    />
        </Col>
      </Row>
      <Button onClick={handleQuote}>Continue</Button>
    </div>
  )
}

export default JobInfo
