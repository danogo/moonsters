const initialStateMonster = {
  monstersInfo: [],
  error: '',
  isPending: false
};

export default (state = initialStateMonster, action) => {
  switch(action.type) {
    case 'REQUEST_MONSTER_PENDING':
      return {
        ...state,
        isPending: true
      };
    case 'REQUEST_MONSTER_SUCCESS':
      return {
        ...state,
        isPending: false,
        monstersInfo: action.monstersInfo
      };
    case 'REQUEST_MONSTER_FAILED':
      return {
        ...state,
        isPending: false,
        error: action.error
      };
    default:
      return state;
  }
};