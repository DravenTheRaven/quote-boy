import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../App.scss';

function Output({ quantity, handleJobView, customer, jobName, itemNumber, itemColor, totalPrice }) {
  return(
    <div id="customerFacing">
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>{`Customer: ${customer}`}</ListGroup.Item>
            <ListGroup.Item>{`Job Name: ${jobName}`}</ListGroup.Item>
            <ListGroup.Item>{`Item Number: ${itemNumber}`}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item>{`Color: ${itemColor}`}</ListGroup.Item>
            <ListGroup.Item>{`Quantity: ${quantity}`}</ListGroup.Item>
            <ListGroup.Item>{`Price: ${totalPrice}`}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Button onClick={handleJobView}>New Quote</Button>
    </div>
  )
}

export default Output
