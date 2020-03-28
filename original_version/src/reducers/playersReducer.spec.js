import { expect } from 'chai';

import * as types from '../constants/actionTypes';
import reducer from './playersReducer';


describe('PlayersReducer', () => {
  const getInitialState = () => ({
    0: {
      id: '0',
      name: 'P1',
      hand: [
        { cardType: 'city', id: '0' },
        { cardType: 'city', id: '2' },
        { cardType: 'event', id: '0' }
      ]
    },
    1: {
      id: '1',
      name: 'P2',
      hand: [
        { cardType: 'city', id: '4' }
      ]
    }
  });

  it('discards one card on ANIMATION_CARD_DISCARD_FROM_HAND_COMPLETE', () => {
    const action = { type: types.ANIMATION_CARD_DISCARD_FROM_HAND_COMPLETE, cardType: 'city', id: '0', playerId: '0' };

    const initial = getInitialState();
    const expected = { ...initial,
      0: {
        id: '0',
        name: 'P1',
        hand: [
          { cardType: 'city', id: '2' },
          { cardType: 'event', id: '0' }
        ]
      }};
    expect(reducer(initial, action)).to.eql(expected);
  });

  it('adds one card to the hand on CARD_DRAW_CARDS_HANDLE', () => {
    const action = { type: types.CARD_DRAW_CARDS_HANDLE, card: { cardType: 'city', id: '3'}, playerId: '0' };

    const initial = getInitialState();
    const expected = { ...initial,
      0: {
        id: '0',
        name: 'P1',
        hand: [
          { cardType: 'city', id: '0' },
          { cardType: 'city', id: '2' },
          { cardType: 'event', id: '0' },
          { cardType: 'city', id: '3' }
        ]
      }};
    expect(reducer(getInitialState(), action)).to.eql(expected);
  });

  it('does not add epidemic cards to the hand on CARD_DRAW_CARDS_HANDLE', () => {
    const action = { type: types.CARD_DRAW_CARDS_HANDLE, card: { cardType: 'epidemic' }, playerId: '0' };

    const initial = getInitialState();
    expect(reducer(initial, action)).to.eql(initial);
  });

  it('shares cards between players on PLAYER_SHARE_CARD', () => {
    const action = { type: types.PLAYER_SHARE_CARD, giverId: '0', receiverId: '1', cityId: '0' };

    expect(reducer(getInitialState(), action)).to.eql({
      0: {
        id: '0',
        name: 'P1',
        hand: [
          { cardType: 'city', id: '2' },
          { cardType: 'event', id: '0' }
        ]
      },
      1: {
        id: '1',
        name: 'P2',
        hand: [
          { cardType: 'city', id: '4' },
          { cardType: 'city', id: '0' }
        ]
      }
    });
  });

  it('stores contingency planner\'s special event on CONT_PLANNER_CHOOSE_EVENT', () => {
    const action = { type: types.CONT_PLANNER_CHOOSE_EVENT, eventId: '0', playerId: '0' };
    const initial = getInitialState();
    const expected = { ...initial,
      0: { ...initial[0], specialEvent: '0' }
    };
    expect(reducer(initial, action)).to.eql(expected);
  });

  it('cleans up contingency planner\'s special event on CONT_PLANNER_EVENT_COMPLETE', () => {
    const action = { type: types.CONT_PLANNER_EVENT_COMPLETE, eventId: '0', playerId: '0' };
    const initial = { ...getInitialState(),
      0: { ...getInitialState()[0], specialEvent: '0' }
    };
    const expected = { ...initial,
      0: { ...initial[0], specialEvent: null }
    };
    expect(reducer(initial, action)).to.eql(expected);
  });
});
