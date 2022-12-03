import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import { useState } from 'react';

function priceMargin(profitMargin) {
  let finalMargin = ( 1 - (parseFloat(profitMargin) / 100));

}

function printing({ printingCost }) {
  let costLog = [];

}



function getPrice(cost, profitMargin) {
  let price = parseFloat(cost) / parseFloat(profitMargin);

}

export { priceMargin, getPrice }
