import React from 'react'
import CheckVal from './CheckVal.js'
import InputVal from './InputVal.js'
import '../App.scss';

function Oversize({ value, text, handleChange, handleCheck, checkOver, name }) {

  return (
  <>
    <CheckVal name={`check${text}`}
              checkOver={checkOver}
              handleCheck={handleCheck}
              text={text}
              />
   {checkOver &&
     <>
      <InputVal text={`${text} Cost: `}
                size="sm"
                name={`cost${text}`}
                value={value}
                handleChange={handleChange}
                />
     </>
    }
  </>
  )
}

export default Oversize
