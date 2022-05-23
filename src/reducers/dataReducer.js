const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "MANAGE_PLAYLIST":
      return { ...state, playlists: payload };
    case "DISPLAY_LOADER":
      return { ...state, videoLoader: payload.videoLoader };
    default:
      throw new Error("Invalid case");
  }
};

export { dataReducer };
