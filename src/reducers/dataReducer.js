const dataReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_NEW_PLAYLIST":
      return { ...state, playlists: action.payload };
    default:
      throw new Error("Invalid case");
  }
};

export { dataReducer };
