const dataReducer = (state, action) => {
  switch (action.type) {
    case "MANAGE_PLAYLIST":
      return { ...state, playlists: action.payload };
    default:
      throw new Error("Invalid case");
  }
};

export { dataReducer };
