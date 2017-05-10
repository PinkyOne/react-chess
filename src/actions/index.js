import { MOVE_KNIGHT, CHANGE_TEXT, MAKE_SANDWICH, APOLOGIZE, CHANGE_NAME } from '../constants/Actions';
import { SHOP_NAME } from '../constants/Strings';

export const moveKnight = (x, y) => ({
  type: MOVE_KNIGHT,
  position: { x, y },
});

export const changeText = text => ({
  type: CHANGE_TEXT,
  text,
});

export const changeName = text => ({
  type: CHANGE_NAME,
  text,
});

export const makeASandwich = forPerson => ({
  type: MAKE_SANDWICH,
  forPerson,
});

export const apologize = (toPerson, error) => ({
  type: APOLOGIZE,
  fromPerson: SHOP_NAME,
  toPerson,
  error,
});

function fetchSecretSauce() {
  return fetch('https://api.github.com');
}

export function makeASandwichWithSecretSauce(forPerson) {
  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize(forPerson, error)),
    );
  };
}

export default moveKnight;
