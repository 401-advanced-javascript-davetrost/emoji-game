import {
  LAUNCH_GAME,
  launchGame,
  GO_BIKING,
  HAVE_DRINK,
  DRINK_WATER,
  GO_PLAY,
  STUDY,
  TAKE_NAP,
  EAT_SNACK,
  READ_JOKE,
  DRINK_COFFEE,
  DECREMENT_TIMER,
  END_GAME,
  endGame,
  decrementTimer,
  drinkCoffee,
  readJoke,
  eatSnack,
  takeNap,
  study,
  goPlay,
  drinkWater,
  haveDrink,
  goBiking,
  handleSelection
} from './emojiActions';

describe('emoji actions', () => {
  it('creates a launch game action', () => expect(launchGame()).toEqual({ type: LAUNCH_GAME }));
  it('creates an end game action', () => expect(endGame()).toEqual({ type: END_GAME }));
  it('creates a decrement timer action', () => expect(decrementTimer()).toEqual({ type: DECREMENT_TIMER }));
  it('creates a drink coffee action', () => expect(drinkCoffee()).toEqual({ type: DRINK_COFFEE }));
  it('creates a read joke action', () => expect(readJoke()).toEqual({ type: READ_JOKE }));
  it('creates a eat snack action', () => expect(eatSnack()).toEqual({ type: EAT_SNACK }));
  it('creates a take nap action', () => expect(takeNap()).toEqual({ type: TAKE_NAP }));
  it('creates a study action', () => expect(study()).toEqual({ type: STUDY }));
  it('creates a go play action', () => expect(goPlay()).toEqual({ type: GO_PLAY }));
  it('creates a drink water action', () => expect(drinkWater()).toEqual({ type: DRINK_WATER }));
  it('creates a have a drink action', () => expect(haveDrink()).toEqual({ type: HAVE_DRINK }));
  it('creates a go biking action', () => expect(goBiking()).toEqual({ type: GO_BIKING }));
  it('creates a handle selection action', () => expect(handleSelection('action')).toEqual({ type: 'action' }));
});
