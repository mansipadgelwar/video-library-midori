import "../HistoryPage/HistoryPage.css";
import { VideoCard } from "../../components";
import { useServices } from "../../context/servicesContext/servicesContext";
import { clearCompleteHistoryOfUserService } from "../../services";
import { useToast } from "../../custom-hooks/useToast";
import { useAuth } from "../../context/authContext/authenticationContext";

const HistoryPage = () => {
  const { state, dispatch } = useServices();
  const { showToast } = useToast();
  const { authToken } = useAuth();

  console.log(state.history);

  const clearAllHistory = async (e) => {
    e.preventDefault();
    try {
      const {
        data: { history }
      } = await clearCompleteHistoryOfUserService(authToken);
      showToast("History cleared successfully", "success");
      dispatch({ type: "MANAGE_HISTORY", payload: history });
    } catch (error) {
      showToast("Unable to clear history", "error");
      console.error("Unable to clear all history", error);
    }
  };

  return (
    <div className="main-content-page">
      <div className="menu-bar">
        <div className="page-title h3 text-bold">My Playlists</div>
        <div>
          <button className="btn btn-cta" onClick={(e) => clearAllHistory(e)}>
            Clear Full History
          </button>
        </div>
      </div>
      <div className="history-video-container">
        {state.history.map(({ id, title }) => {
          return <VideoCard key={id} id={id} title={title} />;
        })}
      </div>
    </div>
  );
};

export { HistoryPage };
