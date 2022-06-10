import axios from "axios";

const createNewPlaylistService = (authToken, newPlaylistName) => {
  return axios.post(
    "/api/user/playlists",
    {
      playlist: {
        title: newPlaylistName,
        description: "",
      },
    },
    { headers: { authorization: authToken } }
  );
};

export { createNewPlaylistService };
