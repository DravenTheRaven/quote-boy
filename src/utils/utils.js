export const getSetupPiece = (setups, setupCost, quantity) => {
  return (parseFloat(setups) * parseFloat(setupCost)) / parseFloat(quantity)
}

export const getTotalPrint = (printingCost) => {
  if(printingCost.length <= 0) {
    return 0;
  } else {
    if(Number.isNaN(printingCost.reduce((previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue)))) {
      return 0;
    } else if(parseFloat(printingCost.reduce((previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue)))!== NaN) {
      return printingCost.reduce((previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue))
    }
  }
}

export const getTotalCost = (blankCost, setupPiece, totalPrint) => {
  return (parseFloat(blankCost) + parseFloat(setupPiece) + parseFloat(totalPrint))  
}

export const getFinalMargin = (profitMargin) => {
  return (100 - parseFloat(profitMargin)) / 100 
}

export const getTotalPrice = (totalCost, finalMargin) => {
  return parseFloat(totalCost) / parseFloat(finalMargin) 
}

export const getProfit = (totalPrice, totalCost) => {
  return parseFloat(totalPrice) - parseFloat(totalCost)
}

export const getMarkup = (profit, totalCost) => {
  return (parseFloat(profit) / parseFloat(totalCost)) * 100
}


  