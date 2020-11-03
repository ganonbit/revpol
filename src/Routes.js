import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { path } from './appConstants';

const Home = lazy(() => import('./pages/Home'));

const Routes = () => {
  return (
    <Suspense fallback='routes fallback'>
      <Switch>
        <Route render={() => <Home />} />
        <Redirect to={path.home} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
