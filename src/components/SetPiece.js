import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.scss';

function SetPiece({ setupPiece, handleChange, value, name, showSetupTotal }) {


  return (
    <>
      <Form.Group className="border border-dark border-5">
        <Form.Label htmlFor="setupPiece">Setup Per Piece:</Form.Label>
          <Form.Control  name={name}
                         id="setupPiece"
                         value={value}
                         onChange={handleChange}
                         size="sm"
                         className="w-25"

                         readonly
                         />

      </Form.Group>
    </>
  )
}

export default SetPiece
