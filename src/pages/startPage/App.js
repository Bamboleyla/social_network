import React from 'react';
import './App.css';
import BlockContent from '../../components/BlockContent/BlockContent';
import BlockHeader from '../../components/BlockHeader/BlockHeader';
import BlockNavigation from '../../components/BlockNavigation/BlockNavigation';
import BlockDialogs from '../../components/BlockDialogs/BlockDialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
/* Здесь выводится вся StartPage, которая состоит на данный момент из трех блоков */
const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <BlockHeader />
        <BlockNavigation />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' component={BlockDialogs} />
          <Route path='/contents' component={BlockContent} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;