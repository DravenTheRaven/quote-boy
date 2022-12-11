import React from 'react';
import { useState } from 'react';
import InputVal from 'components/InputVal.js';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'App.scss';

export default function PrintingCard({ disabledTog, printingCost, locationCost, inputAction, addLocation }) {
  let locationNumber = 1;
  const [buttonTog, setButtonTog] = useState(0);

  function handleButtonTog() {
    setButtonTog(1)
  }

  function handleLocationPush() {
    addLocation()   
    setButtonTog(0)
  }

  function handleLast() {
    addLocation()
    setButtonTog(2)
  }
console.log(buttonTog)
  let locations = printingCost.map(location => 
  <Col xs={6}>
    <li key={locationNumber++}>
      {`Location ${locationNumber}: $${location}`}
    </li>
  </Col>) 


  return (
    <>
      <Card>
        <Row>
          <Col>
            <InputVal name='locationCost'
                      text='Location Cost'
                      value={locationCost}
                      handleChange={inputAction}
                      disabledTog={false}
                      />
          </Col>
          <Col>
            {buttonTog === 1 &&
              <>       
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
                    <Button onClick={handleLast}>No</Button>
                  </Col>
                </Row>
              </>
            }
            { buttonTog === 0 &&
              <>
              <Row>
                  <Col>
                    <Form.Label>Current Printing Total: </Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button onClick={handleButtonTog}>Submit</Button>
                  </Col>
                </Row>
              </> 
            }
            { buttonTog === 2 &&
              <>
              <Row>
                  <Col>
                    <Form.Label>Total Printing Cost: </Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button onClick={handleButtonTog}>Submit</Button>
                  </Col>
                </Row>
              </> 
            }
          </Col>
        </Row>
        <ul>
          <Row className='w-50'>
            {locations}
          </Row>
        </ul>
      </Card>
    </>
  )
}
