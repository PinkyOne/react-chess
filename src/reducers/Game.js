import {MOVE_KNIGHT} from '../Constants'
let knightPosition = [1, 1];

export default function boardReducer(state = knightPosition, action) {
    switch (action.type) {
        case MOVE_KNIGHT:
            return action.position;
        default:
            return state;
    }
}