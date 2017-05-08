import { MAKE_SANDWICH, APOLOGIZE, CHANGE_NAME } from '../constants/Actions';

const initialState = {
  name: 'Mr. Incognito',
  message: 'You can order a sandwich with a secret sauce',
  isMade: false,
};

const sandwich = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_SANDWICH: {
      const name = action.forPerson;
      const message = `Sandwich with secret sauce for ${name} is done`;
      return { name, message, isMade: true };
    }
    case APOLOGIZE: {
      const shopName = action.fromPerson;
      const name = action.toPerson;
      const message = `${shopName} make apologize to ${name}, we out of secret sauce`;
      return { name, message, isMade: false };
    }
    case CHANGE_NAME: {
      return { ...state, name: action.text };
    }
    default:
      return state;
  }
};

export default sandwich;
