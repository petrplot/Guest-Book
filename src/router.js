import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllGuestsListPage from './pages/AllGuestsListPage';
import CreatedGuestPage from './pages/CreatedGuestPage'
import GuestPage from './pages/GuestPage';

//маршрутизатор
const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<AllGuestsListPage/>}/>
      <Route path="/" element={<AllGuestsListPage/>}/>
      <Route path="/create" element={<CreatedGuestPage/>}/>
      <Route path="/guests" element={<AllGuestsListPage/>}/>
      <Route path="/guests/:id" element={<GuestPage/>}/>
    </Routes>
  )
};

export default Router;
