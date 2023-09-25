import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './layouts/Header';
import SideMenu from './layouts/SideMenu';

import Main from './views/Main';
import SalesMenu from './views/Sales/SalesMenu';
import SalesPlan from './views/Sales/SalesPlan';
import OrderInfo from './views/Sales/OrderInfo';
import ReleaseInfo from './views/Sales/ReleaseInfo';
import SalesInfo from './views/Sales/SalesInfo';

import './App.css';
import { HOME_PATH, ORDER_INFO_PATH, RELEASE_INFO_PATH, SALES_INFO_PATH, SALES_MENU, SALES_PLAN_PATH } from './constants';
import Container from './layouts/Container';

function App() {

  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={ HOME_PATH } element={ <Main/> } />
        <Route path={ SALES_MENU } element={ <SalesMenu/> } />
        <Route path={ SALES_PLAN_PATH } element={ <SalesPlan/> } />
        <Route path={ ORDER_INFO_PATH } element={ <OrderInfo/> } />
        <Route path={ RELEASE_INFO_PATH } element={ <ReleaseInfo/> } />
        <Route path={ SALES_INFO_PATH } element={ <SalesInfo/> } />
      </Route>
    </Routes>
  );
}

export default App;
