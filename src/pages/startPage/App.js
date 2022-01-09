import React from 'react';
import './App.css';
import BlockContent from '../../components/BlockContent/BlockContent';
import BlockNavigation from '../../components/BlockNavigation/BlockNavigation';
import BlockDialogsContainer from '../../components/BlockDialogs/BlockDialogsContainer';
//import BlockNews from '../../components/BlockNews/BlockNews';
import { Route } from 'react-router';
import { BlockUsersContainer } from '../../components/BlockUsers/BlockUsersContainer';
import BlockHeaderContainer from '../../components/BlockHeader/BlockHeaderContainer';
import Preloader from '../../components/common/Preloader';
import { Suspense } from 'react';
//import LoginPage from '../../components/BlockLogin/LoginPage';

/************************* Ленивая загрузка компоненнт BlockNews и LoginPage *********************************************************************************************/
const BlockNews = React.lazy(() => import('../../components/BlockNews/BlockNews'));
const LoginPage = React.lazy(() => import('../../components/BlockLogin/LoginPage'));

const App = () => {
  return (
    <div className="app-wrapper">
      <BlockHeaderContainer />
      <BlockNavigation />
      <div className='app-wrapper-content'>
        {/* Страница Сообщения */}
        <Route path='/dialogs' render={() => <BlockDialogsContainer />} />
        {/* Страница Посты */}
        <Route path='/contents' render={() => <BlockContent />} />
        {/* Страница Новости с использованием Suspense, которая пока лениво загружается BlockNews выведет пользователю Preloader */}
        <Route path='/news' render={() => { return <Suspense fallback={<Preloader />}><BlockNews /></Suspense> }} />
        {/* Страница Список Пользователей */}
        <Route path='/users' render={() => <BlockUsersContainer />} />
        {/* Страница Логанизации с использованием Suspense, которая пока лениво загружается LoginPage выведет пользователю Preloader */}
        <Route path='/login' render={() => { return <Suspense fallback={<Preloader />}><LoginPage /></Suspense> }} />
      </div>
    </div>
  );
}

export default App;