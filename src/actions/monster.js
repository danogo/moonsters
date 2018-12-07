import {
  REQUEST_MONSTER_PENDING,
  REQUEST_MONSTER_SUCCESS,
  REQUEST_MONSTER_FAILED
} from './actionTypes';
import { url, apiCall } from '../api/config';

export const reqMonster = () => dispatch => {
  dispatch({type: REQUEST_MONSTER_PENDING});
  apiCall(url.monster)
    .then(data => dispatch({type: REQUEST_MONSTER_SUCCESS, monstersInfo: data.data}))
    .catch(error => dispatch({type: REQUEST_MONSTER_FAILED, error: error}));
};