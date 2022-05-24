const videoReducer = (videoState, { type, payload }) => {
  switch (type) {
    case "DISPLAY_LOADER":
      return { ...videoState, videoLoader: payload.videoLoader };
    case "SET_VIDEOS":
      return { ...videoState, videos: payload.videos, videoLoader: false };
    default:
      throw new Error("Invalid case");
  }
};

export { videoReducer };
