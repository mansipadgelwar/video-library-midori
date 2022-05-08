import axios from "axios";

const clearCompleteHistoryOfUserService = (authToken) => {
  axios.delete("/api/user/history/all", {
    headers: { authorization: authToken }
  });
};

export { clearCompleteHistoryOfUserService };
