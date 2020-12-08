import { ADD_TO_PLAYLIST } from "../actions/playlistAction";

const initialState = {
    movies: []
};

export const playlist = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_PLAYLIST:
            return {
                ...state,
                movies: action.payload
            };
        default:
            return state;
    }
};