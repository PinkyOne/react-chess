import {MOVE_KNIGHT} from '../Constants'

export default function knightPosition(state = {x: 1, y: 1}, action) {
    switch (action.type) {
        case MOVE_KNIGHT:
            return {...action.position};
        default:
            return state;
    }
}