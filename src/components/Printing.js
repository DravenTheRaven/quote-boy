import React from 'react'
import Button from 'react-bootstrap/Button';
import InputVal from './InputVal.js'
import '../App.scss';

function Printing({ handleChange, numberOfLocations, printingCost}) {

  return(
  <>
    <div>
      <InputVal name='printingCost'
                text='Location Cost'
                value={printingCost}
                handleChange={handleChange}
                />
                <Button variant="dark"
                        as="input"
                        type="submit"
                        className="w-25"
                        value="Submit"
                        />{' '}
    </div>
  </>
  )
}

export default Printing
