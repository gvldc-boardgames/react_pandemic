import * as types from '../constants/actionTypes';


export function createQuickGameInit(numberOfPlayers) {
  return { type: types.CREATE_QUICK_GAME_INIT, numberOfPlayers };
}

export function createCustomGameInit(players, difficulty) {
  return { type: types.CREATE_CUSTOM_GAME_INIT, players, difficulty };
}

export function createGame(players, playerDeck, infectionDeck, difficulty) {
  return { type: types.CREATE_GAME, players, playerDeck, infectionDeck, difficulty };
}

export function dealCardsInit() {
  return { type: types.DEAL_CARDS_INIT };
}

export function dealCards(playerId, cards, playerIndex) {
  return { type: types.DEAL_CARDS, playerId, cards, playerIndex };
}

export function insertEpidemicCardsInit() {
  return { type: types.INSERT_EPIDEMIC_CARDS_INIT };
}

export function insertPlayerCard(index, card) {
  return { type: types.INSERT_PLAYER_CARD, index, card };
}

export function startGame() {
  return { type: types.START_GAME };
}

export function victory() {
  return { type: types.VICTORY };
}

export function defeat(message) {
  return { type: types.DEFEAT, message };
}

export function continueTurn() {
  return { type: types.CONTINUE };
}

export function passTurn(playerId) {
  return { type: types.PASS_TURN, playerId };
}

export function animationMoveComplete() {
  return { type: types.ANIMATION_MOVE_COMPLETE };
}

export function animationDrawCardsInitComplete() {
  return { type: types.ANIMATION_DRAW_CARDS_INIT_COMPLETE };
}

export function animationDrawInfectionCardComplete() {
  return { type: types.ANIMATION_DRAW_INFECTION_CARD_COMPLETE };
}

export function animationInfectNeighborComplete(cityId, originId, color) {
  return { type: types.ANIMATION_INFECT_NEIGHBOR_COMPLETE, cityId, originId, color };
}

export function animationDealCardsComplete() {
  return { type: types.ANIMATION_DEAL_CARDS_COMPLETE };
}

export function animationDealCardsInitComplete() {
  return { type: types.ANIMATION_DEAL_CARDS_INIT_COMPLETE };
}

export function animationInsertEpidemicCardsComplete() {
  return { type: types.ANIMATION_INSERT_EPIDEMIC_CARDS_COMPLETE };
}

export function animationCardDiscardFromHandComplete(cardType, playerId, id) {
  return { type: types.ANIMATION_CARD_DISCARD_FROM_HAND_COMPLETE, cardType, id, playerId };
}

export function animationEpidemicInfectComplete() {
  return { type: types.ANIMATION_EPIDEMIC_INFECT_COMPLETE };
}

export function animationCureDiseaseComplete() {
  return { type: types.ANIMATION_CURE_DISEASE_COMPLETE };
}
