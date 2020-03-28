import { expect } from 'chai';

import * as sel from './map';


describe('Map selector', () => {
  const getState = () => ({
    players: {
      0: {
        id: '0',
        name: 'P1',
        hand: []
      },
      1: {
        id: '1',
        name: 'P2',
        hand: []
      }
    },
    currentMove: {
      player: 0
    },

    map: {
      matrix: [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
      ],

      playersLocations: {
        0: '0',
        1: '1'
      },

      locations: {
        0: {
          coords: [200, 100],
          station: true,
          yellow: 2,
          red: 1,
          black: 2,
          blue: 1
        },
        1: {
          coords: [100, 100],
          yellow: 1,
          red: 0,
          black: 0,
          blue: 1
        },
        2: {
          coords: [100, 200],
          yellow: 1,
          red: 0,
          black: 0,
          blue: 1
        }
      }
    }
  });

  it('shows if the current player is at a station', () => {
    expect(sel.isAtStation(getState())).to.be.true;

    expect(sel.isAtStation({ ...getState(), currentMove: { player: 1 }})).to.be.false;
  });

  it('gets the current map location', () => {
    expect(sel.getCurrentMapLocation(getState())).to.eql({
      coords: [200, 100],
      station: true,
      yellow: 2,
      red: 1,
      black: 2,
      blue: 1
    });
  });

  it('shows if a city has a station', () => {
    expect(sel.isStation(getState(), '0')).to.be.true;
    expect(sel.isStation(getState(), '1')).to.be.false;
  });

  it('gets the player\'s current city id', () => {
    expect(sel.getPlayerCityId(getState(), '0')).to.equal('0');
    expect(sel.getPlayerCityId(getState(), '1')).to.equal('1');
  });
});
