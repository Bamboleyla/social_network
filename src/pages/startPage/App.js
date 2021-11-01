import React from 'react';
import './App.css';
import BlockContent from '../../components/BlockContent/BlockContent';
import BlockHeader from '../../components/BlockHeader/BlockHeader';
import BlockNavigation from '../../components/BlockNavigation/BlockNavigation';
import BlockDialogs from '../../components/BlockDialogs/BlockDialogs';
import BlockNews from '../../components/BlockNews/BlockNews';
import { Route } from 'react-router';
import { addMessage, addPost, syncingPost } from '../../redux/state'
/* Здесь выводится вся StartPage, которая состоит на данный момент из трех блоков */
const App = (props) => {
  return (
    <div className="app-wrapper">
      <BlockHeader />
      <BlockNavigation />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <BlockDialogs state={props.state.dialogsPage} addMessage={addMessage} />} /> {/* Сообщения */}
        <Route path='/contents' render={() => <BlockContent state={props.state.contentPage} addPost={addPost} syncingPost={syncingPost} />} /> {/* Посты */}
        <Route path='/news' render={() => <BlockNews />} />                                                               {/* Блок с новостями */}
      </div>
    </div>
  );
}

export default App;