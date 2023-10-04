import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import Employee from './views/Human/Employee';
import { ACCOUNTING_INVOICE_PATH, HOME_PATH, HUMAN_ANNUAL_PRICE, HUMAN_APPLY_DAY_OFF, HUMAN_EMPLOYEE_INFO, HUMAN_INCENTIVE, HUMAN_MANAGE_DAY_OFF, HUMAN_WORK_TIME, ORDER_INFO_PATH, RELEASE_INFO_PATH, SALES_INFO_PATH, SALES_PLAN_PATH, SYSTEM_COMPANY_INFO, SYSTEM_CUSTOMER_INFO, SYSTEM_DEPT_INFO, SYSTEM_EMPLOYEE_INFO, SYSTEM_PRODUCT_INFO } from './constants';
import { useUserStore } from './stores';
import { useCookies } from 'react-cookie';
import GetLoginUserResponseDto from './interfaces/response/user/get-login-user.response.dto';
import ResponseDto from './interfaces/response/response.dto';
import { getSignInUserRequest } from './apis';
import AnnualPrice from './views/Human/AnnualPrice';
import Incentive from './views/Human/Incentive';
import ManageDayOff from './views/Human/ManageDayOff';
import ApplyDayOff from './views/Human/ApplyDayOff';
import WorkTime from './views/Human/WorkTime';
import InvoiceList from './views/Accounting/InvoiceList';
import Department from './views/System/Department';
import SystemEmployee from './views/System/Employee';


function App() {
  //!              state             //
  // description : 유저 스토어 상태 //
  const { user, setUser } = useUserStore();
  // description : Cookie 상태 //
  const [cookies, setCookie] = useCookies();
  // description: path 상태 //
  const { pathname } = useLocation();

  //!            function             //
  const getSignInUserResponseHandler = (result: GetLoginUserResponseDto | ResponseDto) => {
    const { code } = result;
    if (code === 'NU') alert('토큰 정보가 잘못됐습니다.');
    if (code === 'DE') alert('데이터베이스 에러입니다.');
    if (code !== 'SU') return;

    setUser({...result as GetLoginUserResponseDto});
  }

  // //!             effect             //
  useEffect(() => {
    const accessToken = cookies.accessToken;
    console.log(accessToken);
    if (!user && accessToken) getSignInUserRequest(accessToken).then(getSignInUserResponseHandler);
  }, [pathname]);

  //!             render             //
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={ HOME_PATH } element={ <Main/> } />
        <Route path={ SALES_PLAN_PATH } element={ <SalesPlan/> } />
        <Route path={ ORDER_INFO_PATH } element={ <OrderInfo/> } />
        <Route path={ RELEASE_INFO_PATH } element={ <ReleaseInfo/> } />
        <Route path={ SALES_INFO_PATH } element={ <SalesInfo/> } />
        <Route path={ SYSTEM_COMPANY_INFO } element={ <Company/> } />
        <Route path={ SYSTEM_DEPT_INFO } element={ <Department /> } />
        <Route path={ SYSTEM_EMPLOYEE_INFO } element={ <SystemEmployee /> } />
        <Route path={ SYSTEM_CUSTOMER_INFO } element={ <CustomerInfo/> } />
        <Route path={ SYSTEM_PRODUCT_INFO } element={ <ProductInfo/> } />
        <Route path={ HUMAN_EMPLOYEE_INFO } element={ <Employee/> } />
        <Route path={ HUMAN_ANNUAL_PRICE } element={ <AnnualPrice/> } />
        <Route path={ HUMAN_INCENTIVE } element={ <Incentive/> } />
        <Route path={ HUMAN_MANAGE_DAY_OFF } element={ <ManageDayOff/> } />
        <Route path={ HUMAN_APPLY_DAY_OFF } element={ <ApplyDayOff/> } />
        <Route path={ HUMAN_WORK_TIME } element={ <WorkTime/> } />
        <Route path={ ACCOUNTING_INVOICE_PATH } element={ <InvoiceList/> } />
      </Route>
    </Routes>
  );
}

export default App;
