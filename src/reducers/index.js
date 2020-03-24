import {combineReducers} from "redux";
import * as actionTypes from '../actions/types';

const intialUserState = {
    currentUser: null,
    isLoading:true
};

const user_reducer = (state = intialUserState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false
            };
        case actionTypes.CLEAR_USER:
            return {
                ...state,
                isLoading:false
            };
        default:
            return state;
    }
};

const intinalChannelState = {
    currentChannel: null,
    isPrivateChannel: false
};

const channel_reducer = (state = intinalChannelState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload.currentChannel
            };
        case actionTypes.SET_PRIVATE_CHANNEL:
            return {
                ...state,
                isPrivateChannel: action.payload.isPrivateChannel
            };
        default:
            return state;
    }
};

const rooReducer = combineReducers({
    user:user_reducer,
    channel: channel_reducer
});

export default rooReducer;