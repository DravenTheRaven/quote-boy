import React from 'react';
import InputVal from 'components/InputVal.js';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'App.scss';

export default function BlankCard({ inputAction, blankCost, disabledTog, vendor }) {
  return (
    <>
      <Card>
        <Row>
          <Col>
            <InputVal name='blankCost'
                      text="Blank Cost"
                      handleChange={inputAction}
                      value={blankCost}
                      disabledTog={disabledTog}
                      />
          </Col>
          <Col>
            <InputVal name='vendor'
                      text='Vendor'
                      handleChange={inputAction}
                      value={vendor}
                      disabledTog={disabledTog} 
                      />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Check type="switch" label="2XLs?"/>
          </Col>
          <Col>
            <Form.Check type="switch" label="3XLs?"/>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputVal name='twoXLCost'
                      text='2XL Cost'
                      handleChange={inputAction}
                      disabledTog={disabledTog}
                      />
          </Col>
          <Col>
            <InputVal name='threeXLCost'
                      text='3XL Cost'
                      handleChange={inputAction}
                      disabledTog={disabledTog}
                      />
          </Col>
        </Row>
      </Card>
    </>
  );
}
