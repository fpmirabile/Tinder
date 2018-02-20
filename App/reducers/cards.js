import * as types from '../actions/actionTypes';

const initialState = {
    data: []
}

export default function (state = initialState, action = {}) {
    switch(action.type) {
        case types.GET_CARDS_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}