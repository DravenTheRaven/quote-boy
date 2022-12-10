import React from "react";
import InputVal from 'components/InputVal.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'App.scss';

export default function JobInfoView({ inputAction, customerName, jobName, itemNumber, itemColor, quantity, disabledTog }) {
  return (
    <>
      <Row>
        <Col>
          <InputVal name="customerName"
                    text="Cutomer Name"
                    handleChange={inputAction}
                    value={customerName}
                    disabledTog={disabledTog}
                    />
        </Col>
        <Col>            
          <InputVal name="jobName"
                    text="Job Name"
                    handleChange={inputAction}
                    value={jobName}
                    disabledTog={disabledTog}
                    />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputVal name="itemNumber"
                    text="Item Number"
                    handleChange={inputAction}
                    value={itemNumber}
                    disabledTog={disabledTog}
                    />
        </Col>
        <Col>
          <InputVal name="itemColor"
                    text="Item Color"
                    handleChange={inputAction}
                    value={itemColor}
                    disabledTog={disabledTog}
                    />
        </Col>
      </Row>                
          <InputVal name="quantity"
                    text="Quantity"
                    handleChange={inputAction}
                    value={quantity}
                    disabledTog={disabledTog}
                    />

      
    </>
  );
}
