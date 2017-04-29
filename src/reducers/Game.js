import {CHANGE_TEXT, MOVE_KNIGHT} from '../Constants'

export function knightPosition(state = {x: 1, y: 1}, action) {
    switch (action.type) {
        case MOVE_KNIGHT:
            return {...action.position};
        default:
            return state;
    }
}
const getPositionText = (position) => {
    const {x, y} = position;
    const letters = 'ABCDEFGH';
    return letters[y] + (x + 1);
};

export function positionText(state = {x: 1, y: 1, text: 'B2'}, action) {
    switch (action.type) {
        case MOVE_KNIGHT: {
            const text = getPositionText(action.position);
            return {...action.position, text};
        }
        case CHANGE_TEXT: {
            const text = action.text;
            return {...state, text};
        }
        default:
            return state;
    }
}