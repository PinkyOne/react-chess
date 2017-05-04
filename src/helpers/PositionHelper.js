import { LETTERS } from '../constants/Strings';

export const positionToText = (position) => {
  if (!position) return false;
  const { x, y } = position;
  return LETTERS[y] + (x + 1);
};

export default positionToText;
