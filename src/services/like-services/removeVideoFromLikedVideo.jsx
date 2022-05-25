import axios from "axios"

const removeVideoFromLikedVideos = (authToken,videoId) => {
    console.log("remove from likes");
    return axios.delete(`/api/user/likes/${videoId}`,{
        headers: {authorization: authToken}
    });
};

export {removeVideoFromLikedVideos};

