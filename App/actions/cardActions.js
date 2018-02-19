import * as types from './actionTypes';
import { Cards } from '../mocks'

export function getCards() {
  return {
    type: types.GET_CARDS,
    payload: Cards
  };
}