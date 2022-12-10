export default function quoteReducer(quoteState, action) {
  switch (action.type) {
    case 'submit': {
      return {
        ...quoteState,
        valSaved: 1,
        disabledTog: true
      }
    }
    case 'make changes': {
      return {
        ...quoteState,
        valSaved: 0,
        disabledTog: false
      }
    }
    case 'continue': {
      if(quoteState.show < 1) {
        return {
          ...quoteState,
          show: 1,        
        }
      } else if(quoteState.show >= 5) {
        return {
          ...quoteState,
          show: 5
        }
      } else {
        return {
          ...quoteState,
          show: quoteState.show + 1,
          valSaved: 0,
          disabledTog: false
        }
      }
    }
    case 'goBack': {
      if(quoteState.show <= 1) {
        return {
          ...quoteState,
          show: 1
        }
      } else if(quoteState.show > 5) {
        return {
          ...quoteState,
          show: 5
        }
      } else {
        return {
        ...quoteState,
        show: quoteState.show - 1,
        }
      }
    }
    case 'change': {
      return {
        ...quoteState,
        [action.payload.key]: action.payload.value,
      };
    }
    case 'add print location': {
      return {
        ...quoteState,
        printingCost: quoteState.printingCost.concat(quoteState.locationCost),
        locationCost: ""
      }
    }
  }
}
