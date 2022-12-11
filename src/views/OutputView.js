import { getTotalPrint, getTotalCost, getFinalMargin, getTotalPrice, getSetupPiece} from 'utils/utils.js'
import {InputVal, Button, Col, Row} from 'index.js'

export default function OutputView({ blankCost, quantity, setupCost, profitMargin, customerName, printingCost, setups,  jobName, itemColor, itemNumber }) {
	let totalPrint = getTotalPrint(printingCost)
  let setupPiece = getSetupPiece(setups, setupCost, quantity)
  let totalCost = getTotalCost(blankCost, setupPiece, totalPrint)
  let finalMargin = getFinalMargin(profitMargin)
  let totalPrice = getTotalPrice(totalCost, finalMargin)

  return(
    <>
			<Row>
				<Col>
					<p>{`Customer: ${customerName}`}</p>
				</Col>
				<Col>
					<p>{`Job Name: ${jobName}`}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{`Item Number: ${itemNumber}`}</p>
				</Col>
				<Col>
					<p>{`Item Color: ${itemColor}`}</p>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>{`Quantity: ${quantity}`}</p>
				</Col>
				<Col>
					<p>{`Price: $${(Math.round((totalPrice + Number.EPSILON) * 100) / 100).toFixed(2)}`}</p>
				</Col>
			</Row>
    </>
  )
}