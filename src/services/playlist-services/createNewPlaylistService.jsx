import axios from "axios";

const createNewPlaylistService = (authToken, playlist) => {
  return axios.post(
    "/api/user/playlists",
    { playlist },
    { headers: { authorization: authToken } }
  );
};

export { createNewPlaylistService };
