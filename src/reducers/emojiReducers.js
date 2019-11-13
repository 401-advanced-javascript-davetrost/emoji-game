import {
  LAUNCH_GAME,
  END_GAME,
  DECREMENT_TIMER,
  DRINK_COFFEE,
  READ_JOKE,
  EAT_SNACK,
  TAKE_NAP,
  STUDY,
  GO_PLAY,
  DRINK_WATER,
  HAVE_DRINK,
  GO_BIKING
} from '../actions/emojiActions';
import { getActions, getFace } from '../selectors/emojiSelectors';

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
  timer: 0,
  gameIsActive: false,
  getActions: getActions,
  getFace: getFace,
  gameLength: 10,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LAUNCH_GAME:
      return { ...state, gameIsActive: true, timer: state.gameLength };
    case END_GAME:
      return { ...initialState, gameIsActive: false };
    case DECREMENT_TIMER:
      return { 
        ...state, 
        timer: state.gameIsActive ? state.timer - 1 : state.timer,
        gameIsActive: state.timer > 0 ? state.gameIsActive : false,
      };
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case READ_JOKE:
      return { ...state, jokes: state.jokes + 1 };
    case EAT_SNACK:
      return { ...state, snacks: state.snacks + 1 };
    case TAKE_NAP:
      return { ...state, naps: state.naps + 1 };
    case STUDY:
      return { ...state, studies: state.studies + 1 };
    case GO_PLAY:
      return { ...state, plays: state.plays + 1 };
    case DRINK_WATER:
      return { ...state, waters: state.waters + 1 };
    case HAVE_DRINK:
      return { ...state, drinks: state.drinks + 1 };
    case GO_BIKING:
      return { ...state, biking: 1 };
    default:
      console.log(`unhandled name: ${action.type}`);
      return state;
  }
}
