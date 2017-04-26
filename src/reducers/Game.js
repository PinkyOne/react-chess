let knightPosition = [1, 1];

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
         (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}

export default function moveKnight(state = knightPosition, action) {
  switch (action.type){
    case 'MOVE':
      return action.position;
    default:
      return state;
  }
}