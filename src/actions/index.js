import {MOVE_KNIGHT} from '../Constants'

const moveKnight = (x, y) => {
    return {
        type: MOVE_KNIGHT,
        position: {x, y}
    }
};

export default moveKnight;