import React from 'react'

import { useNavigate } from 'react-router-dom';
import './style.css'
import { SYSTEM_COMPANY_INFO, SYSTEM_CUSTOMER_INFO, SYSTEM_DEPT_INFO, SYSTEM_EMPLOYEE_INFO, SYSTEM_PRODUCT_INFO } from 'src/constants';

export default function SystemMenu() {

  // function //
  const navigator = useNavigate();

  // event handler //
  const onCompanyInfoButtonClickHandler = () => {
    navigator(SYSTEM_COMPANY_INFO);
  }
  const onDeptInfoButtonClickHandler = () => {
    navigator(SYSTEM_DEPT_INFO);
  }
  const onEmployeeInfoButtonClickHandler = () => {
    navigator(SYSTEM_EMPLOYEE_INFO);
  }
  const onCustomerInfoButtonClickHandler = () => {
    navigator(SYSTEM_CUSTOMER_INFO);
  }
  const onProductInfoButtonClickHandler = () => {
    navigator(SYSTEM_PRODUCT_INFO);  
  }

  // render //
  return (
    <div id='system-menu'>
      <div className='system-menu-left'>
        <div className='system-menu-left-top'>
          <div className='system-menu-left-top-text'>시스템관리</div>
        </div>
        <div className='system-menu-left-detail'>
          <div className='system-menu-left-detail-left'>
            <div className='vertical-divider'></div>
          </div>
          <div className='system-menu-left-detail-right'>
            <div className='system-menu-left-detail-right-text'>
              <div className='company-info-registration' onClick={onCompanyInfoButtonClickHandler}>회사등록</div>
              <div className='dept-info-registration' onClick={onDeptInfoButtonClickHandler}>부서등록</div>
              <div className='employee-info-registration' onClick={onEmployeeInfoButtonClickHandler}>사원등록</div>
              <div className='customer-info-registration' onClick={onCustomerInfoButtonClickHandler}>거래처등록</div>
              <div className='product-info-registration' onClick={onProductInfoButtonClickHandler}>품목등록</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
