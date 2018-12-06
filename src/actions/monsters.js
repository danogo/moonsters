import {
  SHOW_NEXT_CARD,
  SHOW_PREVIOUS_CARD,
  REQUEST_MONSTERS_PENDING,
  REQUEST_MONSTERS_SUCCESS,
  REQUEST_MONSTERS_FAILED
} from './constants';
import { apiCall, url } from '../api/configApi';

// action creators
export const showNextCard = () => (
  {
    type: SHOW_NEXT_CARD
  }
);

export const showPrevCard = () => (
  {
    type: SHOW_PREVIOUS_CARD
  }
);

export const reqMonsters = () => dispatch => {
  dispatch({type: REQUEST_MONSTERS_PENDING});
  apiCall(url.monsters)
    .then(data => dispatch({type: REQUEST_MONSTERS_SUCCESS, monsters: data}))
    .catch(error => dispatch({type: REQUEST_MONSTERS_FAILED, errorMonsters: error}));
}