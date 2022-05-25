import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import {
  CreateNewPlaylistPage,
  HistoryPage,
  Home,
  MyPlaylistPage,
  PlaylistListingPage,
  VideoListingPage,
  VideoPage,
  WatchLaterPage,
  Logout,
  Login,
  Signup,
  NotFound,
  LikedVideoPage
} from "./pages";

import { NavBar } from "./components";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createplaylist" element={<CreateNewPlaylistPage />} />
        <Route path="/myplaylist/:playlistId" element={<MyPlaylistPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/allplaylists" element={<PlaylistListingPage />} />
        <Route path="/videolist" element={<VideoListingPage />} />
        <Route path="/videopage/:videoId" element={<VideoPage />} />
        <Route path="/watchlater" element={<WatchLaterPage />} />        
        <Route path="/favourites" element={<LikedVideoPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman-test" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
