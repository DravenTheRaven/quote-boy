import React from 'react';
import {InputVal, BlankCard, SetupCard, PrintingCard, PriceCard, JobInfoView, Button, Col, Row} from 'index.js'
import { useReducer } from 'react'
import quoteReducer from 'quoteReducer.js'
import 'App.scss';

function QuoteView() {
  const initialState = {
    blankCost: "",
    quantity: "",
    setupCost: "",
    setups: "",
    locationCost: "",
    printingCost: [],
    profitMargin: "",
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
            <Row>
            <Col>
            {(quoteState.valSaved === 0 && quoteState.disabledTog === false) &&
              <div className="quoteButtonContainer">
                <Button onClick={handleClick}>Submit</Button>
              </div>
            }
            </Col>
            <Col>
            {(quoteState.valSaved === 1 && quoteState.disabledTog === true) &&
              <div className="quoteButtonContainer">
                <Button onClick={handleMakeAChange}>Make Changes</Button>
              </div>
            }
            </Col>
            </Row>
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
