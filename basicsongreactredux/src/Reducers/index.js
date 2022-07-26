
import {combineReducers} from 'redux';
const songListReducer = () => {
    return {
        songs:[
            { title: "abc",duration: "4:05"},
            { title: "xyz",duration: "4:06"},
            { title: "pqr",duration: "4:07"},
            { title: "def",duration: "4:08"},
            { title: "ghi",duration: "4:09"},
        ],
        favoriteTitle:"abc"
    }
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SELECT_SONG") {
        return action.payload;
    }
        return selectedSong;
}
export default combineReducers({songs: songListReducer, selectedSong:selectedSongReducer});