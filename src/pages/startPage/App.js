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

/************************* Ленивая загрузка компоненнт BlockNews и LoginPage *********************************************************************************************/
const BlockNews = React.lazy(() => import('../../components/BlockNews/BlockNews'));
const LoginPage = React.lazy(() => import('../../components/BlockLogin/LoginPage'));

const App = () => {
  return (
    <div className="app-wrapper" >
      < BlockHeaderContainer /> {/* Блок Header стартовой страницы */}
      < BlockNavigation /> {/* Блок Навигации по приложению */}
      < div className='app-wrapper-content' >
        < Route path='/dialogs' render={() => < BlockDialogsContainer />} /> {/* Страница Сообщений */}
        < Route path='/contents' render={() => < BlockContent />} /> {/*Страница с Постами */}
        < Route path='/news' render={() => {
          { /* Страница Новости с использованием Suspense, которая пока лениво загружается BlockNews выведет пользователю Preloader */ }
          return <Suspense fallback={< Preloader />} >
            < BlockNews />
          </Suspense>
        }} />

        < Route path='/users' render={() => < BlockUsersContainer />} /> {/* Список Пользователей */}

        < Route path='/login' render={() => {
          { /* Страница Логанизации с использованием Suspense, которая пока лениво загружается LoginPage выведет пользователю Preloader */ }
          return <Suspense fallback={< Preloader />} >
            < LoginPage /> {/* Страница Логанизации */}
          </Suspense>
        }} />

      </div>
    </div>);
}

export default App;