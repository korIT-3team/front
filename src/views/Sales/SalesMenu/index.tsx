import React from 'react'

import { useNavigate } from 'react-router-dom';
import { ORDER_INFO_PATH, RELEASE_INFO_PATH, SALES_INFO_PATH, SALES_PLAN_PATH } from 'src/constants';

import './style.css'

export default function SalesMenu() {

  // function //
  const navigator = useNavigate();

  // event handler //
  const onSalesPlanButtonClickHandler = () => {
    navigator(SALES_PLAN_PATH);
  }
  const onOrderRegistrationButtonClickHandler = () => {
    navigator(ORDER_INFO_PATH);
  }
  const onReleaseInfoButtonClickHandler = () => {
    navigator(RELEASE_INFO_PATH);
  }
  const onSalesInfoButtonClickHandler = () => {
    navigator(SALES_INFO_PATH);
  }


  // render //
  return (
    <div id='sales-menu'>
      <div className='sales-plan-left'>
        <div className='sales-plan-left-main'>
          <div className='sales-plan-left-main-text'>영업 관리</div>
        </div>
        <div className='sales-plan-left-detail'>
          <div className='sales-plan-left-detail-left'>
            <div className='vertical-divider'></div>
          </div>
          <div className='sales-plan-left-detail-right'>
            <div className='sales-plan-left-detail-right-text'>
              <div className='sales-plan-registration' onClick={onSalesPlanButtonClickHandler}>판매 계획 등록</div>
              <div className='order-registration' onClick={onOrderRegistrationButtonClickHandler}>수주 등록</div>
              <div className='release-info-registration' onClick={onReleaseInfoButtonClickHandler}>출고 정보 등록</div>
              <div className='sales-info-registration' onClick={onSalesInfoButtonClickHandler}>매출 정보 등록</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
