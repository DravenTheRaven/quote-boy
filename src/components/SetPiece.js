import React from 'react'
import Form from 'react-bootstrap/Form';
import '../App.scss';

function SetPiece({ setupCost, setups, quantity, handleChange }) {
   let setUpPerPiece = ((parseFloat(setupCost) * parseFloat(setups)) / parseFloat(quantity))

  return (
    <>
    <Form.Group className="border border-dark border-5">
    <Form.Label htmlFor="setUpPerPiece">Setup Per Piece:</Form.Label>
    <Form.Control  name="setUpPerPiece"
            id="setUpPerPiece"
            value={setUpPerPiece}
            onChange={handleChange}
            size="sm"
            className="w-25"
            readOnly
            />
    </Form.Group>
    </>
  )
}

export default SetPiece
