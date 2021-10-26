import React from 'react';
import './App.css';
import BlockContent from '../../components/BlockContent/BlockContent';
import BlockHeader from '../../components/BlockHeader/BlockHeader';
import BlockNavigation from '../../components/BlockNavigation/BlockNavigation';
import BlockDialogs from '../../components/BlockDialogs/BlockDialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
/* Здесь выводится вся StartPage, которая состоит на данный момент из трех блоков */
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <BlockHeader />
        <BlockNavigation />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <BlockDialogs messageData={props.messageData} dialogsData={props.dialogsData} />} />
          <Route path='/contents' render={() => <BlockContent commentsData={props.commentsData} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;