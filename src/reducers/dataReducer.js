import { ACTION_TYPE } from "../utils";

const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.MANAGE_PLAYLIST:
      return { ...state, playlists: [...payload] };
    case ACTION_TYPE.MANAGE_HISTORY:
      return { ...state, history: [...payload] };
    case ACTION_TYPE.MANAGE_WATCH_LATER:
      return { ...state, watchlater: [...payload] };
    case ACTION_TYPE.MANAGE_LIKES:
      return { ...state, likes: [...payload] };

    default:
      throw new Error("Invalid case");
  }
};

export { dataReducer };
