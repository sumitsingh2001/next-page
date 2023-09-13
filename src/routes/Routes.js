import React, { lazy, Suspense } from 'react';
import { Routes as DomRoutes, Route } from 'react-router-dom';
import { AppRoute } from './RoutePaths';
const MainComponent = lazy(() => '../components/mainPage');
const Cart = lazy(() => '../components/cartPage');

const Routes = () => {
  return (
    <DomRoutes>
      <Route
        path={AppRoute.HOME}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <MainComponent />
          </Suspense>
        }
      />
      <Route
        path={AppRoute.CART}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        }
      />
    </DomRoutes>
  );
};

export default Routes;
