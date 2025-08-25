import React, { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import AppRouter from 'app/providers/router/ui/AppRouter';
import { Layout } from 'widgets/Layout';

function App() {
  const {theme} = useTheme();

  return (
    <Suspense fallback="loading">
      <div className={classNames('app', {hovered: true, active: false}, [theme])}>
        <Layout>
          <AppRouter />
        </Layout>
      </div>
    </Suspense>
  );
}

export default App;