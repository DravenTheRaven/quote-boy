

import React from "react";
import { useState } from 'react';
import * as Utils from './utils.js'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Quote() {
  const [state, setState] = useState({
    blankCost: "",
    printingCost: "10",
    price: 0,
    setups: 0,
    setupCost: 0,
    profitMargin: 0,
    check2XL: "",
    check3XL: "",
  });


  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value

    });
      console.log(value)

  }

  function handleCheck(e) {
    const checked = e.target.checked;
    setState({
      ...state,
      [e.target.name]: checked
    })
  }
  //Utils.priceMargin(25);
  //Utils.getPrice(6, .75);
  //Utils.setPiece(15, 5, 144);
        console.log(state)
  return(
<div className="wrap">
  <div id="container">
  <Form>
    <BlankCost handleChange={handleChange}
               blankCost={state.blankCost}
               name="blankCost"
               className="flox"
               />
    <Oversize handleChange={handleChange}
              checkOver={state.check2XL}
              name="check2XL"
              handleCheck={handleCheck}
              size="2XL"
              className="flox"
              />
    <Oversize handleChange={handleChange}
              checkOver={state.check3XL}
              name="check3XL"
              handleCheck={handleCheck}
              size="3XL"
              className="flox"
              />
    <Quantity handleChange={handleChange}
              quantity={state.quantity}
              name="quantity"
              className="flox"
              />
    <Printing  />
    <SetupCost handleChange={handleChange}
               setupCost={state.setupCost}
               className="flox"
               />
    <Setups handleChange={handleChange}
            setups={state.setups}
            />
    <SetPiece handleChange={handleChange}
                    setupCost={state.setupCost}
                    setups={state.setups}
                    quantity={state.quantity}

                    name="setUpPerPiece"
                    />

    <Margin className="flox"
            handleChange={handleChange}/>

    <Price blankCost={state.blankCost}
           setupCost={state.setupCost}
           printingCost={state.printingCost}
           setups={state.setups}
           quantity={state.quantity}
           profitMargin={state.profitMargin}
/>
    <button className="flox" >{`Submit`}</button>
    </Form>
  </div>
  <div className="out">
    <Output quantity={state.quantity}/>

  </div>
</div>

  )

}


function BlankCost({ blankCost, handleChange }) {
  return(
  <>

  <Form.Group controlId="blankCost">
   <Form.Label>{`Blank Cost: `}</Form.Label>
     <Form.Control type="number"
            step="0.01"
            name="blankCost"
            size="sm"
            value={blankCost}
            onChange={handleChange}
            />
     <p>{blankCost}</p>
</Form.Group>


  </>
  )
}

function Oversize({ size, handleChange, handleCheck, checkOver }) {

  return (
  <>
   <label htmlFor={`check${size}`}>{`${size} `}
     <input type="checkbox"
            id={`check${size}`}
            name={`check${size}`}
            value={checkOver}
            onChange={handleCheck}
            />
   </label>
   {checkOver &&
   <label htmlFor={`${size}Cost`}>{`${size} Cost: `}
     <input type="number"
            step="0.01"
            name={`${size}Cost`}
            size="5"
            />
   </label>
    }
  </>
  )
}

function Quantity({ quantity, handleChange }) {
  return(
  <>
  <label htmlFor="quantity">{`Quantity: `}
    <input type="number"
           name="quantity"
           value={quantity}
           onChange={handleChange} size="5"/>
      <p>{quantity}</p>
  </label>
  </>
  )
}

function Printing() {
  return(
  <>
  <label htmlFor="printingCost">{`Printing Cost: `}
    <input type="number" step="0.01" name="printingCost"  size="5" />
      <p>"L"</p>
    </label>
  </>
  )
}

function SetupCost({ setupCost, handleChange }) {
  return(
  <>
  <label htmlFor="setupCost">{`Setup Cost: `}
    <input type="number"
           step="0.01"
           name="setupCost"
           id="setupCost"
           value={setupCost}
           onChange={handleChange}
           size="5"
           />
      <p>{setupCost}</p>
  </label>
  </>
  )
}

function Setups({ setups, handleChange }) {
  return(
  <>
  <label htmlFor="setups">{`Setups: `}
    <input type="number"
           name="setups"
           id="setups"
           value={setups}
           onChange={handleChange}
           size="5"
           />
      <p>{setups}</p>
  </label>
  </>
  )
}

function SetPiece({ setupCost, setups, quantity, handleChange }) {
   let setUpPerPiece = ((parseFloat(setupCost) * parseFloat(setups)) / parseFloat(quantity))

  return (
    <>
    <label htmlFor="setUpPerPiece">Setup Per Piece:
    <input  name="setUpPerPiece"
            id="setUpPerPiece"
            value={setUpPerPiece}
            onChange={handleChange}
            size="5"
            readOnly
            />
    <p></p>
    </label>
    </>
  )
}

function Margin({ handleChange }) {
  return(
  <>
  <label htmlFor="profitMargin">{`Profit Margin: `}
    <input type="number" name="profitMargin" onChange={handleChange} size="5"/>
  </label>
  </>
  )
}

function Price({ blankCost, printingCost, setups, setupCost, profitMargin, quantity }) {
  const setUpPerPiece = ((parseFloat(setupCost) * parseFloat(setups)) / parseFloat(quantity))
  const cost = (parseFloat(blankCost) + parseFloat(setUpPerPiece) + parseFloat(printingCost))
  const finalMargin = (1 - (profitMargin / 100))
  const price = cost / finalMargin
  return (
  <>
  <p>{`Total Cost: ${cost}`}</p>


  <p>{`Price: ${price}`}</p>
  </>
  )
}

function Output({ quantity }) {
  return(
  <div id="customerFacing">
    <p>{`Customer: `}</p>
      <p>{`Job Name: `}</p>
      <p>{`Item Number: `}</p>
      <p>{`Color: `}</p>
      <p>{`Quantity: ${quantity}`}</p>
      <p>{`Price: `}</p>
  </div>
    )
}

export default Quote;
