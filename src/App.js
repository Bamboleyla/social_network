import React from 'react';
import './App.css';
import BlockContent from './BlockContent';
import BlockHeader from './BlockHeader';
import BlockNavigation from './BlockNavigation';
/* Здесь выводится вся StartPage, которая состоит на данный момент из трех блоков */
const App = () => {
  return (
    <div className="app-wrapper">
      <BlockHeader />
      <BlockNavigation />
      <BlockContent />
    </div>
  );
}

export default App;