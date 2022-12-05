import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputVal from './InputVal.js'
import '../App.scss';

function Printing({ handleChange, numberOfLocations, printingCost, showTotal, handleShowTotal}) {
  let locationNumber = 1;
  const [holdArr, setHoldArr] =useState ([]);
  const [showButton, setShowButton] = useState(true);
  const [holdVal, setHoldVal] = useState(0);

  const handleLocation = () => {

    holdArr.concat(parseFloat(holdVal));
    setShowButton(false);
    setHoldArr([
      ...holdArr, {id: locationNumber++, cost: parseFloat(holdVal)}
    ])
setHoldVal("")
  }
  console.log(holdArr.map(location => location.cost ))
  const handleNewLocation = () => {
    setShowButton(true);

  }

  function handleHoldVal(e) {
    setHoldVal(e.target.value);
  }

  return(
  <>
    <div>
    {showButton === true &&
    <>
      <InputVal name='printingCost'
                text='Location Cost'
                value={holdVal}
                handleChange={handleHoldVal}
                />
        <Button variant="dark"
                as="input"
                type="submit"
                className="w-25"
                value="Submit"
                onClick={handleLocation}
                />{' '}
      </>
        }
      {showButton === false &&
      <>
      <Form.Label>Is there another location?</Form.Label>
        <Button variant="dark"
                as="input"
                type="submit"
                className="w-25"
                value="Yes"
                onClick={handleNewLocation}
                />{' '}
      <Button variant="dark"
              as="input"
              type="submit"
              className="w-25"
              value="No"
              onClick={handleShowTotal}
              />{' '}
      </>
    }
    </div>
  </>
  )
}

export default Printing
