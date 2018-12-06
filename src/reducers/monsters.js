const initialStateMonsters = {
  monsters: [],
  error: '',
  currentIndex: 0,
  isPending: false,
  showCard: false,
  direction: undefined
}

export default (state = initialStateMonsters, action) => {
  switch (action.type) {
    case 'SHOW_NEXT_CARD':
      return { 
        ...state, 
        currentIndex: state.currentIndex === state.cards.length - 1 ? 0 : state.currentIndex + 1,
        direction: 'next'
      };
    case 'SHOW_PREVIOUS_CARD':
      return {
        ...state, 
        currentIndex: state.currentIndex === 0 ? state.cards.length - 1 : state.currentIndex - 1,
        direction: 'prev'
      };
    case 'REQUEST_MONSTERS_PENDING':
      return {
        ...state,
        isPending: true
      };
    case 'REQUEST_MONSTERS_SUCCESS': 
      return {
        ...state,
        isPending: false,
        monsters: action.monsters,
        showCard: true
      };
    case 'REQUEST_MONSTERS_FAILED':
      return {
        ...state,
        isPending: false,
        error: action.error
      }
    default:
      return state;
  }
};