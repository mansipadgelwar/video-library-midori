const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "MANAGE_PLAYLIST":
      return { ...state, playlists: payload.playlists };
    case "MANAGE_HISTORY":
      return { ...state, playlists: payload.history };
    default:
      throw new Error("Invalid case");
  }
};

export { dataReducer };
