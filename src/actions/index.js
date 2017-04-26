import {MOVE_KNIGHT} from '../Constants'

export const moveKnight = (kx, ky) => {
    return {
        type: MOVE_KNIGHT,
        position: {kx, ky}
    }
};