import { HallWayContainer } from './pages/HallWay/HallWayContainer';
import { Home } from './pages/Home/Home.jsx';
import React from "react";
import { Route, Routes } from "react-router-dom";
import BlockContent from './components/BlockContent/BlockContent';
import BlockDialogsContainer from './components/BlockDialogs/BlockDialogsContainer';
import { BlockUsersContainer } from './components/BlockUsers/BlockUsersContainer';
import { Settings } from './pages/Settings/Settings';
import { Music } from './pages/Music/Music';
import { News } from './pages/News/News';

const App = () => {
  return (
    <Routes>
      < Route path='/' element={< HallWayContainer />} />
      < Route path='/home' element={< Home />} >
        <Route index element={<BlockContent />} />
        <Route path="dialogs" element={<BlockDialogsContainer />} />
        <Route path="news" element={<News />} />
        <Route path="music" element={<Music />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<BlockUsersContainer />} />
      </Route>
    </Routes>
  );
}

export default App;