import { MOVE_KNIGHT, CHANGE_TEXT } from '../constants/Actions';

export const moveKnight = (x, y) => ({
  type: MOVE_KNIGHT,
  position: { x, y },
});

export const changeText = text => ({
  type: CHANGE_TEXT,
  text,
});

export default moveKnight;
