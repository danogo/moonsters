import {
  REQUEST_MONSTER_PENDING,
  REQUEST_MONSTER_SUCCESS,
  REQUEST_MONSTER_FAILED
} from './constants';
import { url, apiCall } from '../api/configApi';

export const reqMonster = () => dispatch => {
  dispatch({type: REQUEST_MONSTER_PENDING});
  apiCall(url.monster)
    .then(data => dispatch({type: REQUEST_MONSTER_SUCCESS, monsters: data}))
    .catch(error => dispatch({type: REQUEST_MONSTER_FAILED, errorMonster: error}));
}