import {
  isTired,
  isHyper,
  isLaughing,
  isEducated,
  isHungry,
  isFullOfSnacks,
  isBored,
  getFace,
  isIntoxicated
} from './emojiSelectors';

describe('emoji selectors', () => {
  it('knows if it is tired or not', () => {
    expect(isTired({ emoji: { coffees: 0, naps: 0 } })).toBeTruthy();
    expect(isTired({ emoji: { coffees: 1, naps: 0 } })).toBeFalsy();
  });

  it('knows if it is laughing or not', () => {
    expect(isLaughing({ emoji: { jokes: 2 } })).toBeFalsy();
    expect(isLaughing({ emoji: { jokes: 6 } })).toBeTruthy();
  });

  it('knows if it is hyper or not', () => {
    expect(isHyper({ emoji: { coffees: 4 } })).toBeTruthy();
    expect(isHyper({ emoji: { coffees: 3 } })).toBeFalsy();
  });

  it('knows if it is educated or not', () => {
    expect(isEducated({ emoji: { studies: 3 } })).toBeTruthy();
    expect(isEducated({ emoji: { studies: 2 } })).toBeFalsy();
  });

  it('knows if it is hungry or not', () => {
    expect(isHungry({ emoji: { snacks: 0 } })).toBeTruthy();
    expect(isHungry({ emoji: { snacks: 2 } })).toBeFalsy();
  });

  it('knows if it is too full or not', () => {
    expect(isFullOfSnacks({ emoji: { snacks: 7 } })).toBeTruthy();
    expect(isFullOfSnacks({ emoji: { snacks: 2 } })).toBeFalsy();
  });

  it('knows if it is bored or not', () => {
    expect(isBored({ emoji: { plays: 0 } })).toBeTruthy();
    expect(isBored({ emoji: { plays: 1 } })).toBeFalsy();
  });

  it('knows if it is intoxicated or not', () => {
    expect(isIntoxicated({ emoji: { drinks: 0 } })).toBeFalsy();
    expect(isIntoxicated({ emoji: { drinks: 1 } })).toBeTruthy();
  });

  it('is very angry if tired and hungry', () => {
    expect(getFace({ emoji: { coffees: 0, naps: 0, snacks: 0 } })).toEqual('🤬');
  });

  it('is sick if hyper and hungry', () => {
    expect(getFace({ emoji: { coffees: 4, snacks: 0 } })).toEqual('🤮');
  });

  it('is sleeping if tired', () => {
    expect(getFace({ emoji: { coffees: 0, naps: 0, snacks: 2 } })).toEqual('😴');
  });

  it('is crazy if hyper', () => {
    expect(getFace({ emoji: { coffees: 4, naps: 0, snacks: 0, studies: 0 } })).toEqual('🤮');
  });

  it('is mindblown if educated', () => {
    expect(getFace({ emoji: { coffees: 1, naps: 0, snacks: 1, studies: 3 } })).toEqual('🤯');
  });

  it('is angry if hungry', () => {
    expect(getFace({ emoji: { coffees: 1, naps: 0, snacks: 0, studies: 0 } })).toEqual('😡');
  });

  it('is bored if not tired, hungry, educated, or hungry', () => {
    expect(getFace({ emoji: { coffees: 1, naps: 1, snacks: 2, studies: 0, plays: 0 } })).toEqual('😐');
  });

  it('is excited if playing and also not tired, hungry, educated, or hungry', () => {
    expect(getFace({ emoji: { coffees: 1, naps: 1, snacks: 2, studies: 0, plays: 1 } })).toEqual('😆');
  });
});
