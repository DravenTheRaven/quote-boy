import React from "react";
import { useState } from 'react';
import BlankCard from './BlankCard.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SetupCard from './SetupCard.js'
import PriceCard from './PriceCard.js'
import PrintingCard from './PrintingCard.js'
import Button from 'react-bootstrap/Button';
import './App.scss';

function Quote() {
  const [blank, setBlank] = useState({
    blankCost: "",
    cost2XL: "",
    cost3XL: "",
  });

  const [state, setState] = useState({
    numberOfLocations: "",
    printingCost: "",
    finalPrice: "",
    setups: "",
    setupCost: "",
    profitMargin: "",
    quantity: "",
  });

  const [checks, setChecks] = useState({
    check2XL: false,
    check3XL: false,
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  }

  function handleBlank(e) {
    const value = e.target.value;
    setBlank({
      ...blank,
      [e.target.name]: value
    });
  }
console.log(blank)
  console.log(state)
  function handleCheck(e) {
    const checked = e.target.checked;
    setChecks({
      ...checks,
      [e.target.name]: checked
    })
  }
    console.log(checks)

  return(
    <div >
      <div id="container" >
        <BlankCard blankCost={blank.blankCost}
                   cost2XL={blank.cost2XL}
                   cost3XL={blank.cost3XL}
                   check2XL={checks.check2XL}
                   check3XL={checks.check3XL}
                   handleChange={handleChange}
                   handleCheck={handleCheck}
                   handleBlank={handleBlank}
                   />
        <SetupCard handleChange={handleChange}
                   setupCost={state.setupCost}
                   setups={state.setups}
                   quantity={state.quantity}
                   />
        <PrintingCard handleChange={handleChange}
                      profitMargin={state.profitMargin}
                      numberOfLocations={state.numberOfLocations}
                      printingCost={state.printingCost}
                      />
        <Row>
          <Col>
            <PriceCard blankCost={blank.blankCost}
                      setupCost={state.setupCost}
                      setups={state.setups}
                      quantity={state.quantity}
                      printingCost={state.printingCost}
                      profitMargin={state.profitMargin}
                      price={state.finalPrice}
                      handleChange={handleChange}
                      />
            <Button variant="dark"
                    as="input"
                    type="submit"
                    className="w-25"
                    value="Submit"
                    />{' '}
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Quote;
