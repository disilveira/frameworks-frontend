export const ADD_TO_PLAYLIST = "ADD_TO_PLAYLIST";

export const addToPlaylist = movie => ({
    type: ADD_TO_PLAYLIST,
    payload: movie
});