import React from 'react';
import InputVal from 'components/InputVal.js'
import Card from 'react-bootstrap/Card';
import 'App.scss';

export default function SetupCard({ inputAction, setups, setupCost, disabledTog, quantity }) {
  let setupPiece = (setups * setupCost) / quantity
  return (
    <>
      <Card>
        <InputVal name='setups'
                  text="Number of Setups"
                  handleChange={inputAction}
                  value={setups}
                  disabledTog={disabledTog}
                  />
        <InputVal name='setupCost'
                  text='Setup Cost'
                  handleChange={inputAction}
                  value={setupCost}
                  disabledTog={disabledTog}
                  />
        <InputVal name='quantity'
                  text='Quantity'
                  value={quantity}                  
                  disabledTog={true}
                  />
        <p>{`Setup per Piece: \$${(Math.round((setupPiece + Number.EPSILON) * 100) / 100).toFixed(2)}`}</p>
      </Card>
    </>
  );
}
