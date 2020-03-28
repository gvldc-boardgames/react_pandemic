import * as types from '../constants/actionTypes';

export function treatDisease(cityId, color, count) {
  return { type: types.PLAYER_TREAT_DISEASE, cityId, color, count };
}

export function treatAllDisease(cityId, color, count) {
  return { type: types.PLAYER_TREAT_ALL_DISEASE, cityId, color, count };
}

export function cureDiseaseInit(color) {
  return { type: types.PLAYER_CURE_DISEASE_INIT, color };
}

export function cureDiseaseShowCards(cards, color) {
  return { type: types.PLAYER_CURE_DISEASE_SHOW_CARDS, cards, color };
}

export function cureDiseaseComplete(cityIds, color) {
  return { type: types.PLAYER_CURE_DISEASE_COMPLETE, cityIds, color };
}

export function cureDiseaseCancel() {
  return { type: types.PLAYER_CURE_DISEASE_CANCEL };
}

export function eradicateDisease(color) {
  return { type: types.ERADICATE_DISEASE, color };
}

export function initOutbreak(cityId, color) {
  return { type: types.OUTBREAK_INIT, cityId, color };
}

export function infectCity(cityId, color, count, initial = false) {
  return { type: types.INFECT_CITY, cityId, color, count, initial };
}

export function infectNeighbor(cityId, originId, color) {
  return { type: types.INFECT_NEIGHBOR, cityId, originId, color };
}

export function completeOutbreak(cityId) {
  return { type: types.OUTBREAK_COMPLETE, cityId };
}

export function queueOutbreak(cityId, color) {
  return { type: types.OUTBREAK_QUEUE, cityId, color };
}

export function infectCities() {
  return { type: types.INFECT_CITIES };
}

export function useDiseaseCubes(color, count) {
  return { type: types.USE_DISEASE_CUBES, count, color };
}

export function oneQuietNightSkip() {
  return { type: types.EVENT_ONE_QUIET_NIGHT_SKIP };
}

export function medicTreatCuredDiseases(cityId, cubes) {
  return { type: types.MEDIC_TREAT_CURED_DISEASES, cityId, cubes };
}

export function medicPreventInfection(playerId, cityId, color, count) {
  return { type: types.MEDIC_PREVENT_INFECTION, playerId, cityId, color, count };
}

export function quarSpecPreventInfection(playerId, cityId, color, count) {
  return { type: types.QUAR_SPEC_PREVENT_INFECTION, playerId, cityId, color, count };
}
