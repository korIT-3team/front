import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Container from './layouts/Container';

import Main from './views/Main';
import SalesPlan from './views/Sales/SalesPlan';
import OrderInfo from './views/Sales/OrderInfo';
import ReleaseInfo from './views/Sales/ReleaseInfo';
import SalesInfo from './views/Sales/SalesInfo';
import Company from './views/System/Company';
import CustomerInfo from './views/System/Customer';
import ProductInfo from './views/System/Product';

import './App.css';
import { HOME_PATH, ORDER_INFO_PATH, RELEASE_INFO_PATH, SALES_INFO_PATH, SALES_PLAN_PATH, SYSTEM_COMPANY_INFO, SYSTEM_CUSTOMER_INFO, SYSTEM_PRODUCT_INFO } from './constants';


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
        <Route path={ SYSTEM_CUSTOMER_INFO } element={ <CustomerInfo/> } />
        <Route path={ SYSTEM_PRODUCT_INFO } element={ <ProductInfo/> } />
      </Route>
    </Routes>
  );
}

export default App;
