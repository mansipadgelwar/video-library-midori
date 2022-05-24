const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "MANAGE_PLAYLIST":
      return { ...state, playlists: [...payload] };
    case "MANAGE_HISTORY":
      return { ...state, history: [...payload] };
    default:
      throw new Error("Invalid case");
  }
};

export { dataReducer };
