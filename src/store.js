import { createStore } from 'redux';

const gameLength = 10;

const isTired = state => state.coffees < 1 && state.naps < 1;
const isLaughing = state => state.jokes > 5;
const isHyper = state => state.coffees > 3;
const isEducated = state => state.studies > 2;
const isHungry = state => state.snacks < 2;
const isFullOfSnacks = state => state.snacks > 6;
const isBored = state => state.plays < 1;
const isIntoxicated = state => state.drinks >= 1;
const isHydrated = state => state.waters >= 1 && state.snacks >= 1;
const isWasted = state => state.drinks >= 3;
const isSuperWasted = state => state.drinks >= 10;

const getFace = state => {
  if(isFullOfSnacks(state)) return '💩';
  if(isWasted(state) && isHydrated(state)) return '🥴';
  if(isSuperWasted(state)) return '☠️';
  if(isWasted(state)) return '🤢';
  if(isIntoxicated(state)) return '😊';
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isHyper(state) && isLaughing(state)) return '😹';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isLaughing(state)) return '🤣';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';
  if(isBored(state)) return '😐';
  return '😀';
};

const getActions = state => ([
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees', count: state.coffees },
  { name: 'DRINK_WATER', text: 'Drink Water', stateName: 'waters', count: state.waters },
  { name: 'READ_JOKE', text: 'Read a Joke', stateName: 'jokes', count: state.jokes },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks', count: state.snacks },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps', count: state.naps },
  { name: 'STUDY', text: 'Study', stateName: 'studies', count: state.studies },
  { name: 'GO_PLAY', text: 'Go Play', stateName: 'plays', count: state.plays },
  { name: 'HAPPY_HOUR', text: 'Happy Hour', stateName: 'drinks', count: state.drinks },
  { name: 'BIKING', text: 'Ride a Bike', stateName: 'biking', count: state.biking },
]);

const initialState = {
  coffees: 0,
  jokes: 0,
  snacks: 0,
  naps: 0,
  studies: 0,
  plays: 0,
  drinks: 0,
  waters: 0,
  biking: 0,
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
    case 'READ_JOKE':
      return { ...state, jokes: state.jokes + 1 };
    case 'EAT_SNACK':
      return { ...state, snacks: state.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.studies + 1 };
    case 'GO_PLAY':
      return { ...state, plays: state.plays + 1 };
    case 'DRINK_WATER':
      return { ...state, waters: state.waters + 1 };
    case 'HAPPY_HOUR':
      return { ...state, drinks: state.drinks + 1 };
    case 'BIKING':
      return { ...state, biking: 1 };
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
