import React from 'react';
import './App.css';
import BlockContent from '../../components/BlockContent/BlockContent';
import BlockNavigation from '../../components/BlockNavigation/BlockNavigation';
import BlockDialogsContainer from '../../components/BlockDialogs/BlockDialogsContainer';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { BlockUsersContainer } from '../../components/BlockUsers/BlockUsersContainer';
import BlockHeaderContainer from '../../components/BlockHeader/BlockHeaderContainer';
import Preloader from '../../components/common/Preloader';
import { Suspense } from 'react';
import { HallWayContainer } from '../HallWay/HallWayContainer';

const BlockNews = React.lazy(() => import('../../components/BlockNews/BlockNews'));
const LoginPage = React.lazy(() => import('../../components/BlockLogin/LoginPage'));

const App = () => {
  //const navigate = useNavigate();
  return (
    <Routes>
      < Route path='/' element={< HallWayContainer />} />
    </Routes>
  );
}

export default App;

{/* <div className="app-wrapper" >
      < BlockHeaderContainer />
      < BlockNavigation />
      < div className='app-wrapper-content' >
        <Routes>
          < Route path='/' element={< HallWayContainer navigate={navigate} />} />
          < Route path='/dialogs' element={< BlockDialogsContainer />} />
          < Route path='/contents' element={< BlockContent />} />
          < Route path='/news' element={() => {
            return <Suspense fallback={< Preloader />} >
              < BlockNews />
            </Suspense>
          }} />

          < Route path='/users' element={< BlockUsersContainer />} />

          < Route path='/login' element={() => {
            return <Suspense fallback={< Preloader />} >
              < LoginPage />
            </Suspense>
          }} />
        </Routes>
      </div>
    </div> */}