import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.scss';

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

export default Oversize
