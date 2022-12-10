import React from 'react';
import InputVal from 'components/InputVal.js';
import BlankCard from 'views/quoteView/BlankCard.js';
import SetupCard from 'views/quoteView/SetupCard.js';
import PrintingCard from 'views/quoteView/PrintingCard.js';
import PriceCard from 'views/quoteView/PriceCard.js';
import JobInfoView from 'views/JobInfoView.js'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useReducer } from 'react'
import quoteReducer from 'quoteReducer.js'
import 'App.scss';

function QuoteView() {
  const initialState = {
    blankCost: 0,
    quantity: 0,
    setupCost: 0,
    setups: 0,
    locationCost: 0,
    printingCost: [0],
    profitMargin: 0,
    show: 1,
    valSaved: 0,
    customerName: "",
    jobName: "",
    itemColor: "",
    itemNumber: "",
    disabledTog: false
  }

  const [quoteState, dispatch] = useReducer(quoteReducer, initialState)

  function handleClick() {
    dispatch({ type: 'submit'})
  }

  function handleContinue() {
    dispatch({ type: 'continue'})
  }

  function handleBack() {
    dispatch({ type: 'goBack'})
  }

  function handleMakeAChange() {
    dispatch({ type: 'make changes'})
  }

  function addLocation() {
    dispatch({type: 'add print location'})
  }

  const inputAction = (event) => {
    dispatch({
      type: 'change',
      payload: { key: event.target.name, value: event.target.value },
    });    
  };

  console.log(quoteState.printingCost)
  console.log(quoteState.locationCost)
  return (
    <>
      <div id="wrap">
        <div id="container">
          { quoteState.show === 1 &&
            <div className="quoteCard">
              <JobInfoView inputAction={inputAction}
                           customerName={quoteState.customerName}
                           quantity={quoteState.quantity}
                           jobName={quoteState.jobName}
                           itemColor={quoteState.itemColor}
                           itemNumber={quoteState.itemNumber}
                           disabledTog={quoteState.disabledTog}/>
            </div>
          }
          { quoteState.show === 2 &&
            <div className="quoteCard">
              <BlankCard inputAction={inputAction}
                         blankCost={quoteState.blankCost}
                         disabledTog={quoteState.disabledTog}/>
            </div>
          }
          { quoteState.show === 3 &&
            <div className="quoteCard">
              <SetupCard inputAction={inputAction}
                         setups={quoteState.setups}
                         setupCost={quoteState.setupCost}
                         disabledTog={quoteState.disabledTog}
                         quantity={quoteState.quantity}/>
            </div>
          }
          { quoteState.show === 4 &&
            <div className="quoteCard">
              <PrintingCard inputAction={inputAction}
                            disabledTog={quoteState.disabledTog}
                            locationCost={quoteState.locationCost}
                            printingCost={quoteState.printingCost}
                            addLocation={addLocation}/>
            </div>
          }
          { quoteState.show === 5 &&
            <div className="quoteCard">
              <PriceCard inputAction={inputAction}
                         disabledTog={quoteState.disabledTog}
                         profitMargin={quoteState.profitMargin}
                         printingCost={quoteState.printingCost}
                         blankCost={quoteState.blankCost}
                         setupCost={quoteState.setupCost}
                         setups={quoteState.setups}
                         quantity={quoteState.quantity}
                         />
            </div>
          }
          <div className="buttonWrap">
            {(quoteState.valSaved === 0 && quoteState.disabledTog === false) &&
              <div className="quoteButtonContainer">
                <Button onClick={handleClick}>Submit</Button>
              </div>
            }
            {(quoteState.valSaved === 1 && quoteState.disabledTog === true) &&
              <div className="quoteButtonContainer">
                <Button onClick={handleMakeAChange}>Make Changes</Button>
              </div>
            }
          </div>
          <div className="buttonWrap">
            {quoteState.valSaved === 1 &&
              <Row>
                <Col>
                  <div className="quoteButtonContainer">
                    <Button onClick={handleBack}>Go Back</Button>
                  </div>
                </Col>
                <Col>
                  <div className="quoteButtonContainer">
                    <Button onClick={handleContinue}>Continue</Button>
                  </div>
                </Col>
              </Row>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default QuoteView
