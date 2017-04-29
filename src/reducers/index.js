import {combineReducers} from 'redux'
import {knightPosition, positionText} from './Game'

const reducer = combineReducers({
    knightPosition, positionText
});

export default reducer
