import React from 'react';
import InputVal from 'components/InputVal.js';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'App.scss';

export default function BlankCard({ inputAction, blankCost, disabledTog }) {
  return (
    <>
      <Card>
        <InputVal name='blankCost'
                  text="Blank Cost"
                  handleChange={inputAction}
                  value={blankCost}
                  disabledTog={disabledTog}
                  />
        <Form.Check type="switch" label="2XLs?"/>
        <Form.Check type="switch" label="3XLs?"/>
        <InputVal name='twoXLCost'
                  text='2XL Cost'
                  handleChange={inputAction}
                  disabledTog={disabledTog}
                  />
        <InputVal name='threeXLCost'
                  text='3XL Cost'
                  handleChange={inputAction}
                  disabledTog={disabledTog}
                  />
      </Card>
    </>
  );
}
