import _ from 'lodash';

import { getCurrentPlayer } from './gameplay';
import { getCurrentCityId, getCityColor } from './cities';
import { enhanceCard } from './decks';
import events from '../constants/events';


const HAND_LIMIT = 7;

export function sortHand(hand) {
  return _.sortBy(hand, ['cardType', 'color', 'name']);
}

export function getCitiesInPlayersHand(state, playerId) {
  const hand = getPlayerHand(state, playerId);
  return _.filter(hand, { cardType: 'city' });
}

export function getCurrentPlayerHand(state) {
  return getPlayerHand(state, getCurrentPlayer(state).id);
}

export function getPlayerHand(state, playerId) {
  return sortHand(state.players[playerId].hand.map(_.partialRight(enhanceCard, state)));
}

export function isOverHandLimit(state, playerId) {
  return state.players[playerId].hand.length > HAND_LIMIT;
}

export function hasCurrentCityInHand(state, playerId = null) {
  const cityId = getCurrentCityId(state);
  return hasCityInHand(state, cityId, playerId);
}

export function hasCityInHand(state, cityId = null, playerId = null) {
  const hand = playerId ? getPlayerHand(state, playerId) : getCurrentPlayerHand(state);
  return !!_.find(hand, { cardType: 'city', id: cityId || getCurrentCityId(state) });
}

export function getCardsOfColorInCurrentHand(state, color) {
  const hand = getCurrentPlayerHand(state);
  return hand.filter((c) => c.cardType === 'city' && getCityColor(state, c.id) === color);
}

export function getEventsInHands(state) {
  const result = [];
  _.forOwn(state.players, (player, id) => {

    result.push(..._.filter(player.hand, { cardType: 'event' })
      .map((c) => ({ ...c, name: events[c.id].name, playerId: id})));
  });
  return result;
}

export function getResPopOwner(state) {
  let playerId = null;
  _.forOwn(state.players, (player, id) => {
    const hand = getPlayerHand(state, id);
    if (_.find(hand, { cardType: 'event', id: 'res_pop' })) {
      playerId = id;
      return false;
    }
  });
  return playerId;
}
