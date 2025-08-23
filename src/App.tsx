import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { Suspense } from 'react';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

function App() {
  const {theme, setTheme} = useTheme();
  classNames('app', {hovered: true, active: false}, [theme])

  return (
    <div className={classNames('app', {hovered: true, active: false}, [theme])}>
      <Link to={ '/' }>Main page</Link>
      <Link to={ '/about' }>About page</Link>
      <button onClick={ setTheme }>Изменить тему</button>
      <Suspense fallback={ <>Loading...</> }>
        <Routes>
          <Route path="/" element={ <MainPageAsync /> } />
          <Route path="/about" element={ <AboutPageAsync /> } />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;