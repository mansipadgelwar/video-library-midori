import axios from "axios";

const getAllLikedVideos = (authToken) => {
    return axios.get("/api/user/likes",{
        headers: {authorization: authToken}
    })
}

export {getAllLikedVideos};