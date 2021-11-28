import React from 'react';
import './App.css';
import BlockContent from '../../components/BlockContent/BlockContent';
import BlockNavigation from '../../components/BlockNavigation/BlockNavigation';
import BlockDialogsContainer from '../../components/BlockDialogs/BlockDialogsContainer';
import BlockNews from '../../components/BlockNews/BlockNews';
import { Route } from 'react-router';
import BlockUsersContainer from '../../components/BlockUsers/BlockUsersContainer';
import BlockHeaderContainer from '../../components/BlockHeader/BlockHeaderContainer';
/* Здесь выводится вся StartPage, которая состоит на данный момент из трех блоков */
const App = () => {
  return (
    <div className="app-wrapper">
      <BlockHeaderContainer />
      <BlockNavigation />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <BlockDialogsContainer />} />             {/* Страница Сообщения */}
        <Route path='/contents' render={() => <BlockContent />} />                     {/* Страница Посты */}
        <Route path='/news' render={() => <BlockNews />} />                            {/* Страница Новости */}
        <Route path='/users' render={() => <BlockUsersContainer />} />                 {/* Страница Список Пользователей */}
      </div>
    </div>
  );
}

export default App;