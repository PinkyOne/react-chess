import {MOVE_KNIGHT,CHANGE_TEXT} from '../Constants'

export const moveKnight = (x, y) => {
    return {
        type: MOVE_KNIGHT,
        position: {x, y}
    }
};

export const changeText = (text) => {
    return {
        type: CHANGE_TEXT,
        text: text
    }
};

export default moveKnight;