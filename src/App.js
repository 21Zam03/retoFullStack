import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { URL_INDEX, URL_INFOFUTBOLISTA } from './utils/constants';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Inicio = lazy(() => import('./components/Inicio'));
const InfoFutbolista = lazy(() => import('./components/Jugador'));

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Suspense>
          <Routes>
            <Route path={URL_INDEX} element={<Inicio/>}/>
            <Route path={`${URL_INFOFUTBOLISTA}/:idSoccerPlayer`} element={<InfoFutbolista/>}/>
          </Routes>
        </Suspense>
      </Main>
    </div>
  );
}

export default App;
