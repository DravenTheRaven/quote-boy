import React from 'react';
import InputVal from 'components/InputVal.js';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'App.scss';

export default function PrintingCard({ disabledTog, printingCost, locationCost, inputAction, addLocation }) {
  let locationNumber = 1;

  function handleLocationPush() {
    addLocation()   
  }

  let locations = printingCost.map(location => 
  <li key={locationNumber++}>{`Location ${locationNumber} Cost: ${location}`}</li>) 


  return (
    <>
      <Card>
        <InputVal name='locationCost'
                  text='Location Cost'
                  value={locationCost}
                  handleChange={inputAction}
                  disabledTog={false}
                  />
        <Row>
          <Col>
            <Form.Label>Is there another location? </Form.Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={handleLocationPush}>Yes</Button>
          </Col>
          <Col>
            <Button>No</Button>
          </Col>
        </Row>
      <ul>{locations}</ul>
      </Card>
    </>
  )
}
