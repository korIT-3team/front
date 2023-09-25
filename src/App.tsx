import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Main from './views/Main';
import SalesPlan from './views/Sales/SalesPlan';
import OrderInfo from './views/Sales/OrderInfo';
import ReleaseInfo from './views/Sales/ReleaseInfo';
import SalesInfo from './views/Sales/SalesInfo';

import './App.css';
import { HOME_PATH, ORDER_INFO_PATH, RELEASE_INFO_PATH, SALES_INFO_PATH, SALES_PLAN_PATH, SYSTEM_COMPANY_INFO } from './constants';
import Container from './layouts/Container';
import Company from './views/System/Company';

function App() {

  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={ HOME_PATH } element={ <Main/> } />
        <Route path={ SALES_PLAN_PATH } element={ <SalesPlan/> } />
        <Route path={ ORDER_INFO_PATH } element={ <OrderInfo/> } />
        <Route path={ RELEASE_INFO_PATH } element={ <ReleaseInfo/> } />
        <Route path={ SALES_INFO_PATH } element={ <SalesInfo/> } />
        <Route path={ SYSTEM_COMPANY_INFO } element={ <Company/> } />
      </Route>
    </Routes>
  );
}

export default App;
