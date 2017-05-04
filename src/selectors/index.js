import { createSelector } from 'reselect';
import { positionToText } from '../helpers/PositionHelper';

const getPosition = (state) => {
  const { x, y } = state;
  return { x, y };
};

export const getPositionText = createSelector(
  [getPosition],
  position => positionToText(position),
);

export default getPositionText;
