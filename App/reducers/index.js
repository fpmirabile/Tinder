import { combineReducers } from 'redux';

import tinder from './tinder';
import cards from './cards';

export default combineReducers({
  tinder,
  cards
});
