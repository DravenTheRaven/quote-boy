import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function priceMargin(profitMargin) {
  let finalMargin = ( 1 - (parseFloat(profitMargin) / 100));

}


function getPrice(profitMargin, totalCost) {
  return parseFloat(totalCost) / parseFloat(profitMargin);

}



export default getPrice 
