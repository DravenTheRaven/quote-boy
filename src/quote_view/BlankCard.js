import React from "react";
import InputVal from '../components/InputVal.js'
import Button from 'react-bootstrap/Button';
import Oversize from '../components/Oversize.js'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import '../App.scss';

function BlankCard({ blankCost, cost2XL, cost3XL, check2XL, check3XL, handleCheck, handleBlank, showContinue, handleShowContinue }) {
console.log(showContinue)

  return (
  <Card className="border border-dark">
    <Form.Group className="border border-dark">
      <InputVal handleChange={handleBlank}
                name="blankCost"
                blankCost={blankCost}
                value={blankCost}
                text="Blank Cost"
                />
      <Oversize handleChange={handleBlank}
                checkOver={check2XL}
                name="check2XL"
                handleCheck={handleCheck}
                text="2XL"
                value={cost2XL}
                className="flox"
                />
      <Oversize handleChange={handleBlank}
                checkOver={check3XL}
                name="check3XL"
                handleCheck={handleCheck}
                text="3XL"
                value={cost3XL}
                className="flox"
                />
                  <Button onClick={handleShowContinue}>Save</Button>
      </Form.Group>

<div className="quoteButtonContainer">
{showContinue === true &&
  <div className="quoteButtonContainer">
  <p>{`${showContinue}`}</p>
    <p>{`saved blank cost ${blankCost}`}</p>
  </div>
}
</div>
    </Card>

  )
}

export default BlankCard
