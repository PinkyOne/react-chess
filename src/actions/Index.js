export const moveKnight = (x,y) => {
  return {
    type: 'MOVE',
    position: [x,y]
  }
}