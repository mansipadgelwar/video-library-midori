const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "MANAGE_PLAYLIST":
      return { ...state, playlists: [...payload] };
    case "MANAGE_HISTORY":
      return { ...state, history: [...payload] };
    case "MANAGE_WATCH_LATER":
      return { ...state, watchlater: [...payload] };
    case "MANAGE_SINGLE_PLAYLIST":
      return { ...state, singlePlaylists: [...payload] };
    case "MANAGE_LIKES":
      return { ...state, likes: [...payload] };

    default:
      throw new Error("Invalid case");
  }
};

export { dataReducer };
