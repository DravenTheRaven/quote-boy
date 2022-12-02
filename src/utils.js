import React from "react";
//import { useState } from 'react';

function priceMargin(profitMargin) {
  let finalMargin = ( 1 - (parseFloat(profitMargin) / 100));

}

function printing() {
  
}



function getPrice(cost, profitMargin) {
  let price = parseFloat(cost) / parseFloat(profitMargin);

}

export { priceMargin, getPrice }
