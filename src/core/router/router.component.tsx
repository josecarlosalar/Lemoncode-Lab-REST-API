import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { RickMortyCollectionScene, RickMortyScene } from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.hotelCollection}
          element={<RickMortyCollectionScene />}
        />
        <Route path={switchRoutes.createHotel} element={<RickMortyScene />} />
        <Route path={switchRoutes.editHotel} element={<RickMortyScene />} />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.hotelCollection} />}
        />
      </Routes>
    </HashRouter>
  );
};
