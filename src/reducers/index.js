import { combineReducers } from 'redux';
import knightPosition from './Game';
import sandwich from './Sandwich';

const reducer = combineReducers({
  knightPosition, sandwich,
});

export default reducer;
