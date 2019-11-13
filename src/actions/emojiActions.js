
export const LAUNCH_GAME = 'LAUNCH_GAME';
export const launchGame = payload => ({ type: LAUNCH_GAME, payload });

export const END_GAME = 'END_GAME';
export const endGame = payload => ({ type: END_GAME, payload });

export const DECREMENT_TIMER = 'DECREMENT_TIMER';
export const decrementTimer = payload => ({ type: DECREMENT_TIMER, payload });

export const DRINK_COFFEE = 'DRINK_COFFEE';
export const drinkCoffee = payload => ({ type: DRINK_COFFEE, payload });

export const READ_JOKE = 'READ_JOKE';
export const readJoke = payload => ({ type: READ_JOKE, payload });

export const EAT_SNACK = 'EAT_SNACK';
export const eatSnack = payload => ({ type: EAT_SNACK, payload });

export const TAKE_NAP = 'TAKE_NAP';
export const takeNap = payload => ({ type: TAKE_NAP, payload });

export const STUDY = 'STUDY';
export const study = payload => ({ type: STUDY, payload });

export const GO_PLAY = 'GO_PLAY';
export const goPlay = payload => ({ type: GO_PLAY, payload });

export const DRINK_WATER = 'DRINK_WATER';
export const drinkWater = payload => ({ type: DRINK_WATER, payload });

export const HAVE_DRINK = 'HAVE_DRINK';
export const haveDrink = payload => ({ type: HAVE_DRINK, payload });

export const GO_BIKING = 'GO_BIKING';
export const goBiking = payload => ({ type: GO_BIKING, payload });

export const HANDLE_SELECTION = 'HANDLE_SELECTION';
export const handleSelection = actionName => ({ type: actionName });
