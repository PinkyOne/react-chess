import { CHANGE_TEXT, MOVE_KNIGHT } from '../constants/Actions';
import { positionToText } from '../helpers/PositionHelper';

const knightPosition = (state = { x: 1, y: 1, text: 'B2' }, action) => {
  switch (action.type) {
    case MOVE_KNIGHT:
      {
        const text = positionToText(action.position);
        return { ...action.position, text };
      }
    case CHANGE_TEXT:
      {
        const text = action.text;
        return { ...state, text };
      }
    default:
      return state;
  }
};

export default knightPosition;
