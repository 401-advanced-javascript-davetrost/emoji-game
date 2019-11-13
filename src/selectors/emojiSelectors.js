import {
  DRINK_COFFEE,
  DRINK_WATER,
  READ_JOKE,
  EAT_SNACK,
  TAKE_NAP,
  STUDY,
  GO_PLAY,
  GO_BIKING,
  HAVE_DRINK
} from '../actions/emojiActions';

export const getTimer = ({ emoji }) => emoji.timer;
export const getGameIsActive = ({ emoji }) => emoji.gameIsActive;
export const getBiking = ({ emoji }) => emoji.biking;
export const getCoffees = ({ emoji }) => emoji.coffees;
export const getJokes = ({ emoji }) => emoji.jokes;
export const getSnacks = ({ emoji }) => emoji.snacks;
export const getNaps = ({ emoji }) => emoji.naps;
export const getStudies = ({ emoji }) => emoji.studies;
export const getPlays = ({ emoji }) => emoji.plays;
export const getDrinks = ({ emoji }) => emoji.drinks;
export const getWaters = ({ emoji }) => emoji.waters;
export const getGetActions = ({ emoji }) => emoji.getActions;
export const getGetFace = ({ emoji }) => emoji.getFace;
export const getGameLength = ({ emoji }) => emoji.gameLength;

const isTired = state => getCoffees(state) < 1 && getNaps(state) < 1;
const isLaughing = state => getJokes(state) > 5;
const isHyper = state => getCoffees(state) > 3;
const isEducated = state => getStudies(state) > 2;
const isHungry = state => getSnacks(state) < 2;
const isFullOfSnacks = state => getSnacks(state) > 6;
const isBored = state => getPlays(state) < 1;
const isIntoxicated = state => getDrinks(state) >= 1;
const isHydrated = state => getWaters(state) >= 1 && getSnacks(state) >= 1;
const isWasted = state => getDrinks(state) >= 3;
const isSuperWasted = state => getDrinks(state) >= 10;

export const getFace = state => {
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

export const getActions = state => ([
  { name: DRINK_COFFEE, text: 'Drink Coffee', stateName: 'coffees', count: getCoffees(state) },
  { name: DRINK_WATER, text: 'Drink Water', stateName: 'waters', count: getWaters(state) },
  { name: READ_JOKE, text: 'Read a Joke', stateName: 'jokes', count: getJokes(state) },
  { name: EAT_SNACK, text: 'Snack', stateName: 'snacks', count: getSnacks(state) },
  { name: TAKE_NAP, text: 'Nap', stateName: 'naps', count: getNaps(state) },
  { name: STUDY, text: 'Study', stateName: 'studies', count: getStudies(state) },
  { name: GO_PLAY, text: 'Go Play', stateName: 'plays', count: getPlays(state) },
  { name: HAVE_DRINK, text: 'Have a Drink', stateName: 'drinks', count: getDrinks(state) },
  { name: GO_BIKING, text: 'Bike', stateName: 'biking', count: getBiking(state) },
]);

