import React from "react";
import { useReducer } from 'react';
import InputVal from 'components/InputVal.js';
import 'App.scss';

export default function JobInfoView({ inputAction, customerName,jobName, itemNumber, itemColor, quantity, disabledTog }) {
  return (
    <>
      <InputVal name="customerName"
                text="Cutomer Name"
                handleChange={inputAction}
                value={customerName}
                disabledTog={disabledTog}
                />
      <InputVal name="jobName"
                text="Job Name"
                handleChange={inputAction}
                value={jobName}
                disabledTog={disabledTog}
                />
      <InputVal name="itemNumber"
                text="itemNumber"
                handleChange={inputAction}
                value={itemNumber}
                disabledTog={disabledTog}
                />
      <InputVal name="itemColor"
                text="itemColor"
                handleChange={inputAction}
                value={itemColor}
                disabledTog={disabledTog}
                />                
      <InputVal name="quantity"
                text="Quantity"
                handleChange={inputAction}
                value={quantity}
                disabledTog={disabledTog}
                />
    </>
  );
}
