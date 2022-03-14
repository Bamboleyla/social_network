import React from 'react';
import './App.css';
import BlockContent from '../../components/BlockContent/BlockContent';
import BlockNavigation from '../../components/BlockNavigation/BlockNavigation';
import BlockDialogsContainer from '../../components/BlockDialogs/BlockDialogsContainer';
import { Route } from 'react-router';
import { BlockUsersContainer } from '../../components/BlockUsers/BlockUsersContainer';
import BlockHeaderContainer from '../../components/BlockHeader/BlockHeaderContainer';
import Preloader from '../../components/common/Preloader';
import { Suspense } from 'react';

const BlockNews = React.lazy(() => import('../../components/BlockNews/BlockNews'));
const LoginPage = React.lazy(() => import('../../components/BlockLogin/LoginPage'));

const App = () => {
  return (
    <div className="app-wrapper" >
      < BlockHeaderContainer />
      < BlockNavigation />
      < div className='app-wrapper-content' >
        < Route path='/dialogs' render={() => < BlockDialogsContainer />} />
        < Route path='/contents' render={() => < BlockContent />} />
        < Route path='/news' render={() => {
          return <Suspense fallback={< Preloader />} >
            < BlockNews />
          </Suspense>
        }} />

        < Route path='/users' render={() => < BlockUsersContainer />} />

        < Route path='/login' render={() => {
          return <Suspense fallback={< Preloader />} >
            < LoginPage />
          </Suspense>
        }} />

      </div>
    </div>);
}

export default App;