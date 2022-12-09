import React from 'react';
import InputVal from 'components/InputVal.js';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import 'App.scss';

export default function PriceCard() {
  return (
    <>
      <InputVal name="toalCost"
                text="Total Cost"
                />
      <InputVal name="profitMargin"
                text="Profit Margin"
                />
      <InputVal name="totalPrice"
                text="Price"
                />
    </>
  )
}
