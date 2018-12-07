import { combineReducers } from 'redux';
import monstersReducer from '../reducers/monsters';
import monsterReducer from '../reducers/monster';

export default combineReducers({
  monstersReducer,
  monsterReducer
});