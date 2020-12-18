import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "No scrubs", duration: "4:05" },
    { title: "Macakrena", duration: "2:35" },
    { title: "Ectasy", duration: "5:20" },
    { title: "All Star", duration: "3:15" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
