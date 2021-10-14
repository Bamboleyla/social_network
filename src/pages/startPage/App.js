import React from 'react';
import './App.css';
import BlockContent from '../../components/BlockContent/BlockContent';
import BlockHeader from '../../components/BlockHeader/BlockHeader';
import BlockNavigation from '../../components/BlockNavigation/BlockNavigation';
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