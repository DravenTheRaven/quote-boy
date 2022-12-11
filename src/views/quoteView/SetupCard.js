import React from 'react';
import InputVal from 'components/InputVal.js'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'App.scss';

export default function SetupCard({ inputAction, setups, setupCost, disabledTog, quantity }) {
  let setupPiece = (setups * setupCost) / quantity
  return (
    <>
      <Card>
        <Row>
          <Col>
            <InputVal name='setups'
                      text="Number of Setups"
                      handleChange={inputAction}
                      value={setups}
                      disabledTog={disabledTog}
                      />
          </Col>
          <Col>
            <InputVal name='setupCost'
                      text='Setup Cost'
                      handleChange={inputAction}
                      value={setupCost}
                      disabledTog={disabledTog}
                      />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{`Quantity: ${quantity}`}</p>
          </Col>
          <Col>
        <p>{`Setup per Piece: $${(Math.round((setupPiece + Number.EPSILON) * 100) / 100).toFixed(2)}`}</p>
          </Col>
        </Row>
      </Card>
    </>
  );
}
