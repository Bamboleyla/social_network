import React from 'react';
import './App.css';
import BlockContent from '../../components/BlockContent/BlockContent';
import BlockHeader from '../../components/BlockHeader/BlockHeader';
import BlockNavigation from '../../components/BlockNavigation/BlockNavigation';
import BlockDialogs from '../../components/BlockDialogs/BlockDialogs';
import BlockNews from '../../components/BlockNews/BlockNews';
import { Route } from 'react-router';
/* Здесь выводится вся StartPage, которая состоит на данный момент из трех блоков */
const App = (props) => {
  let state = props.store.getState();
  return (
    <div className="app-wrapper">
      <BlockHeader />
      <BlockNavigation />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <BlockDialogs state={state.dialogsPage} addMessage={props.store.addMessage.bind(props.store)} />} /> {/* Сообщения */}
        <Route path='/contents' render={() => <BlockContent state={state.contentPage} addPost={props.store.addPost.bind(props.store)} syncingPost={props.store.syncingPost.bind(props.store)} />} /> {/* Посты */}
        <Route path='/news' render={() => <BlockNews />} />                                                               {/* Блок с новостями */}
      </div>
    </div>
  );
}

export default App;