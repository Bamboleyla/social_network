import { HallWayContainer } from "./pages/HallWay/HallWayContainer";
import { Route, Routes } from "react-router-dom";
import BlockContent from "./components/BlockContent/BlockContent";
import BlockDialogsContainer from "./components/BlockDialogs/BlockDialogsContainer";
import { Settings } from "./pages/Settings/Settings";
import { Music } from "./pages/Music/Music";
import { News } from "./pages/News/News";
import { Profile } from "./pages/Profile/Profile";
import { BlockUsersContainer } from "./components/BlockUsers/BlockUsersContainer";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HallWayContainer />} />
      <Route path="/profile" element={<Profile />}>
        <Route index element={<BlockContent />} />
        <Route path="dialogs" element={<BlockDialogsContainer />} />
        <Route path="news" element={<News />} />
        <Route path="music" element={<Music />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<BlockUsersContainer />} />
      </Route>
    </Routes>
  );
};

export default App;
