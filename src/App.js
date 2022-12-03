

import React from "react";
import { useState } from 'react';
import * as Utils from './utils.js'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Quote() {
  const [state, setState] = useState({
    blankCost: "",
    cost2XL: "",
    cost3XL: "",
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
<div className="wrap text-bg-primary">
  <div id="container" >

    <InputVal handleChange={handleChange}
              name="blankCost"
              value={state.blankCost}
              text="Blank Cost" />
    <Form.Group>
    <Oversize handleChange={handleChange}
              inputVal={InputVal}
              checkOver={state.check2XL}
              name="check2XL"
              handleCheck={handleCheck}
              text="2XL"
              value={state.cost2XL}
              className="flox"
              />
    <Oversize handleChange={handleChange}
              inputVal={InputVal}
              checkOver={state.check3XL}
              name="check3XL"
              handleCheck={handleCheck}
              text="3XL"
              value={state.cost3XL}
              className="flox"
              />

    </Form.Group>
    <InputVal handleChange={handleChange}
              name="quantity"
              value={state.quantity}
              text="Quantity"
              />
    <Printing  />
    <InputVal handleChange={handleChange}
              name="setupCost"
              value={state.setupCost}
              text="Setup Cost"
              />
    <InputVal handleChange={handleChange}
              name="setups"
              value={state.setups}
              text="Number of Setups"
              />
    <SetPiece handleChange={handleChange}
              setupCost={state.setupCost}
              setups={state.setups}
              quantity={state.quantity}
              name="setUpPerPiece"
              />
    <InputVal handleChange={handleChange}
              name="profitMargin"
              value={state.profitMargin}
              text="Profit Margin"
              />
    <Price blankCost={state.blankCost}
           setupCost={state.setupCost}
           printingCost={state.printingCost}
           setups={state.setups}
           quantity={state.quantity}
           profitMargin={state.profitMargin}
           value={state.price}
           />
    <button className="flox" >{`Submit`}</button>
  </div>
  <div className="out">
    <Output quantity={state.quantity}/>
  </div>
</div>
  )
}

function InputVal({value, handleChange, name, text }) {
  return (
    <>
    <Form.Group controlId={name}>
    <Form.Label >{`${text}: `}</Form.Label>
    <Form.Control name={name}
                  value={value}
                  onChange={handleChange}
                  text={text}
                  size="sm"
                  className='w-25'
                  />
    </Form.Group>
</>
  )
}

function Oversize({ value, text, handleChange, handleCheck, checkOver, inputVal, name }) {

  return (
  <>

  <Form.Group as={Row}>

  <Form.Group  as={Row} controlId={`check${text}`}>

  <Col  sm={"auto"}>
   <Form.Label >{`${text} `}</Form.Label>
   </Col>
   <Col  sm={"auto"}>
     <Form.Check
            name={`check${text}`}
            value={checkOver}
            onChange={handleCheck}
            />
    </Col>

</Form.Group>

   {checkOver &&
     <>

  <Form.Group as={Row}   controlId={`cost${text}`}>
  <Col sm={"auto"}>
   <Form.Label>{`${text} Cost: `}</Form.Label>
   </Col>
   <Col sm={"auto"}>
     <Form.Control size="sm"


                   name={`cost${text}`}
                   value={value}
                   onChange={handleChange}
                   />
      </Col>
  </Form.Group>

      </>
    }
</Form.Group>

  </>
  )
}

function Printing() {
  return(
  <>
  <Form.Group>
    <Form.Label htmlFor="printingCost">{`Printing Cost: `}</Form.Label>
    <Form.Control  className='w-25'  name="printingCost"  size="sm" />
  </Form.Group>
  </>
  )
}



function SetPiece({ setupCost, setups, quantity, handleChange }) {
   let setUpPerPiece = ((parseFloat(setupCost) * parseFloat(setups)) / parseFloat(quantity))

  return (
    <>
    <Form.Group>
    <Form.Label htmlFor="setUpPerPiece">Setup Per Piece:</Form.Label>
    <Form.Control  name="setUpPerPiece"
            id="setUpPerPiece"
            value={setUpPerPiece}
            onChange={handleChange}
            size="sm"
            className='w-25'
            readOnly
            />
    </Form.Group>
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
  <Form.Group controlId="totalCost">
  <Form.Label>Total Cost:</Form.Label>
  <Form.Control  name="totalCost"
                 value={cost}
                 size="sm"
                 className='w-25'
                 readOnly
                 />
  </Form.Group>
  <Form.Group controlId="price">
    <Form.Label>Price:</Form.Label>
    <Form.Control  name="price"
                  value={price}
                  size="sm"
                  className='w-25'
                  readOnly
                  />
  </Form.Group>
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
