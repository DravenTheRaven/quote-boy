import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.scss';

function Output({ quantity }) {
  return(
    <div id="customerFacing">
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>{`Customer: `}</ListGroup.Item>
            <ListGroup.Item>{`Job Name: `}</ListGroup.Item>
            <ListGroup.Item>{`Item Number: `}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item>{`Color: `}</ListGroup.Item>
            <ListGroup.Item>{`Quantity: ${quantity}`}</ListGroup.Item>
            <ListGroup.Item>{`Price: `}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default Output
