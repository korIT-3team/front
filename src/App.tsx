import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Container from './layouts/Container';

import Main from './views/Main';
import SalesPlan from './views/Sales/SalesPlan';
import OrderInfo from './views/Sales/OrderInfo';
import ReleaseInfo from './views/Sales/ReleaseInfo';
import SalesInfo from './views/Sales/SalesInfo';

import { HOME_PATH, ORDER_INFO_PATH, RELEASE_INFO_PATH, SALES_INFO_PATH, SALES_PLAN_PATH } from './constants';

import './App.css';

function App() {

  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={ HOME_PATH } element={ <Main/> } />
        <Route path={ SALES_PLAN_PATH } element={ <SalesPlan/> } />
        <Route path={ ORDER_INFO_PATH } element={ <OrderInfo/> } />
        <Route path={ RELEASE_INFO_PATH } element={ <ReleaseInfo/> } />
        <Route path={ SALES_INFO_PATH } element={ <SalesInfo/> } />
      </Route>
    </Routes>
  );
}

export default App;
