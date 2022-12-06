import React from "react";
import { useState } from 'react';
import BlankCard from './BlankCard.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SetupCard from './SetupCard.js'
import PriceCard from './PriceCard.js'
import PrintingCard from './PrintingCard.js'
import Button from 'react-bootstrap/Button';
import '../App.scss';

function Quote({ handleOutput, handlePriceChange, quantity, totalPrice, profitMargin, handleTotalPrice }) {
  const [showContinue, setShowContinue] = useState(false);
  const [setupPiece, setSetupPiece] = useState(0);
  const [printingCost, setPrintingCost] = useState(0);
  const [show, setShow] = useState(1);
  const [blank, setBlank] = useState({
    blankCost: "",
    cost2XL: "",
    cost3XL: "",
  });

  const [checks, setChecks] = useState({
    check2XL: false,
    check3XL: false,
  });

  function handleBlank(e) {
    const value = e.target.value;
    setBlank({
      ...blank,
      [e.target.name]: value
    });
  }

  function handleCheck(e) {
    const checked = e.target.checked;
    setChecks({
      ...checks,
      [e.target.name]: checked
    });
  }

  const handleNext = () => {
    if(show===4) {
      setShow(4)
      setShowContinue(false);
    } else {
      setShowContinue(false)
      setShow(show + 1);
    }
  }

  const handleLast = () => {

    if(show===1) {
      setShow(1);
    } else {
      setShow(show - 1);
      setShowContinue(true);
    }
  }

  function handleShowContinue() {
    setShowContinue(true);
  }

  const handlePrintingCost = (holdVal) => {
    setPrintingCost(parseFloat(printingCost) + parseFloat(holdVal))
  }

  const handleSetupPiece = (holdPiece) => {
    setSetupPiece(holdPiece)
  }

  return(
    <div id="wrap">
      <div id="container" >
        {show === 1 &&
          <div className="quoteCard">
            <BlankCard blankCost={blank.blankCost}
                       cost2XL={blank.cost2XL}
                       cost3XL={blank.cost3XL}
                       check2XL={checks.check2XL}
                       check3XL={checks.check3XL}
                       handleCheck={handleCheck}
                       handleBlank={handleBlank}
                       showContinue={showContinue}
                       handleShowContinue={handleShowContinue}
                       />
          </div>
          }
        {show === 2 &&
          <div className="quoteCard">
            <SetupCard handlePriceChange={handlePriceChange}
                       quantity={quantity}
                       setupPiece={setupPiece}
                       handleSetupPiece={handleSetupPiece}

                       showContinue={showContinue}
                       handleShowContinue={handleShowContinue}
                       />
          </div>
          }
        {show === 3 &&
          <div className="quoteCard">
            <PrintingCard printingCost={printingCost}
                          handlePrintingCost={handlePrintingCost}
                          showContinue={showContinue}
                          handleShowContinue={handleShowContinue}
                          />
          </div>
          }
        {show === 4 &&
          <div className="quoteCard">
            <PriceCard blankCost={blank.blankCost}
                       setupPiece={setupPiece}
                       showContinue={showContinue}
                       handleShowContinue={handleShowContinue}
                       printingCost={printingCost}
                       profitMargin={profitMargin}
                       totalPrice={totalPrice}
                       handleOutput={handleOutput}
                       handlePriceChange={handlePriceChange}
                       handleTotalPrice={handleTotalPrice}
                      />
          </div>
          }
          <Row >
            <Col >
              <div className="quoteButtonContainer">
                <Button variant="dark"
                        as="input"
                        className="w-50"
                        value="Go Back"
                        onClick={handleLast}
                        readOnly
                        />{' '}
              </div>
            </Col>
          {showContinue === true &&
            <Col >
              <div className="quoteButtonContainer">
                <Button variant="dark"
                        as="input"
                        type="submit"
                        className="w-50"
                        value="Continue"
                        onClick={handleNext}
                        readOnly
                        />{' '}
              </div>
            </Col>
          }
          {(showContinue === false && show === 4) === true &&
            <Col >
              <div className="quoteButtonContainer">
                <Button variant="dark"
                        as="input"
                        
                        className="w-50"
                        value="Submit"
                        onClick={handleOutput}
                        readOnly
                        />{' '}
              </div>
            </Col>
          }
          </Row>
      </div>
    </div>
  )
}

export default Quote;
