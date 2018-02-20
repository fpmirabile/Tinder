import * as types from './actionTypes';
import { Cards } from '../mocks'

export function getCards() {
  return (dispatch) => fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(getCardsSuccess(Cards));
    })
    .catch((error) => {
      console.error(error);
    });
}

function getCardsSuccess(Cards) {
  return {
    type: types.GET_CARDS_SUCCESS,
    payload: Cards
  }
}