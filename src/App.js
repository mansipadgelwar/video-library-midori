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
  LikedVideoPage,
} from "./pages";

import { NavBar, RequiresAuth } from "./components";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/createplaylist"
          element={
            <RequiresAuth>
              <CreateNewPlaylistPage />
            </RequiresAuth>
          }
        />
        <Route path="/myplaylist/:playlistId" element={<MyPlaylistPage />} />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <HistoryPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/allplaylists"
          element={
            <RequiresAuth>
              <PlaylistListingPage />
            </RequiresAuth>
          }
        />
        <Route path="/videolist" element={<VideoListingPage />} />
        <Route path="/videopage/:videoId" element={<VideoPage />} />
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLaterPage />
            </RequiresAuth>
          }
        />
        <Route
          path="/favourites"
          element={
            <RequiresAuth>
              <LikedVideoPage />
            </RequiresAuth>
          }
        />
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
