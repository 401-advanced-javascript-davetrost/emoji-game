import { createStore } from 'redux';

const gameLength = 10;

const isTired = state => state.coffees < 1 && state.naps < 1;
const isHyper = state => state.coffees > 3;
const isEducated = state => state.studies > 2;
const isHungry = state => state.snacks < 1;

const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

const getActions = state => ([
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees', count: state.coffees },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks', count: state.snacks },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps', count: state.naps },
  { name: 'STUDY', text: 'Study', stateName: 'studies', count: state.studies },
]);

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0,
  getActions: getActions,
  getFace: getFace,
  timer: 0,
  gameIsActive: false,
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'LAUNCH_GAME':
      return { ...state, gameIsActive: true, timer: gameLength };
    case 'END_GAME':
      return { ...initialState, gameIsActive: false };
    case 'DECREMENT_TIMER':
      return { 
        ...state, 
        timer: state.gameIsActive ? state.timer - 1 : state.timer,
        gameIsActive: state.timer > 0 ? state.gameIsActive : false,
      };
    case 'DRINK_COFFEE':
      return { ...state, coffees: state.coffees + 1 };
    case 'EAT_SNACK':
      return { ...state, snacks: state.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.studies + 1 };
    default:
      console.log(`unhandled name: ${name}`);
      return state;
  }
}

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
