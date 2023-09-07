import React from 'react';
import { Routes as DomRoutes, Route } from 'react-router-dom';
import { AppRoute } from './RoutePaths';
import MainComponent from '../components/mainPage';
import Cart from '../components/cartPage';

const Routes = () => {
  return (
    <DomRoutes>
      <Route path={AppRoute.HOME} element={<MainComponent />} />
      <Route path={AppRoute.CART} element={<Cart />} />
    </DomRoutes>
  );
};

export default Routes;
