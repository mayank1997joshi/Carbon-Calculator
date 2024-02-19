import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FormLayout from './FormLayout';
const routerConainer = [{ path: '/', element: <FormLayout /> }];
const NormalRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        {routerConainer.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Routes>
    </HashRouter>
  );
};

export default NormalRoutes;
