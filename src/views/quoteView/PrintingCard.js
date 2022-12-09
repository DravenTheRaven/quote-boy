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
  let holdArr = [];
  function handleLocationPush() {
    addLocation()
    holdArr.push({
      id: locationNumber++,
      cost: parseFloat(locationCost)});
    
    
  }
  let locations = holdArr.map(location => 
  <li key={`Location${locationNumber}`}>{location.cost}</li>) 
console.log(holdArr)
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
