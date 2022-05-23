const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "MANAGE_PLAYLIST":
      return { ...state, playlists: payload };
    default:
      throw new Error("Invalid case");
  }
};

export { dataReducer };
