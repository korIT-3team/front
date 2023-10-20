import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom';
import './style.css'
import { SEARCHVIEW_EMPLOYEE_LIST_PATH, SEARCHVIEW_FUNDS_LIST_PATH, SEARCHVIEW_INCENTIVE_LIST_PATH } from 'src/constants';

export default function SearchViewMenu() {

  //!        function         //
  const navigator = useNavigate();
  const { pathname } = useLocation();

  const clickFundsListMenu = pathname.includes(SEARCHVIEW_FUNDS_LIST_PATH);
  const clickEmployeeListMenu = pathname.includes(SEARCHVIEW_EMPLOYEE_LIST_PATH);
  const clickIncentiveListMenu = pathname.includes(SEARCHVIEW_INCENTIVE_LIST_PATH);

  //!        event handler         //
  // description: 사내자금현황조회 클릭 핸들러 //
  const onFundsListMenuClickHandler = () => {
    navigator(SEARCHVIEW_FUNDS_LIST_PATH);
  }
  // description: 사원목록 조회 클릭 핸들러 //
  const onEmployeeListMenuClickHandler = () => {
    navigator(SEARCHVIEW_EMPLOYEE_LIST_PATH);
  } 
  // description: 사원목록 조회 클릭 핸들러 //
  const onIncentiveListMenuClickHandler = () => {
    navigator(SEARCHVIEW_INCENTIVE_LIST_PATH);
  }

  //!         render        //
  // render //
  return (
    <div id='accounting-menu'>
      <div className='accounting-menu-left'>
        <div className='accounting-menu-left-top'>
          <div className='accounting-menu-left-top-text'>조회</div>
        </div>
        <div className='accounting-menu-left-detail'>
          <div className='accounting-menu-left-detail-left'>
            <div className='vertical-divider'></div>
          </div>
          <div className='accounting-menu-left-detail-right'>
            <div className='accounting-menu-left-detail-right-text'>
              <div className={clickFundsListMenu? 'invoice-check-active' : 'invoice-check' } onClick={onFundsListMenuClickHandler}>사내자금현황</div>
              <div className={clickEmployeeListMenu? 'invoice-check-active' : 'invoice-check' } onClick={onEmployeeListMenuClickHandler}>사원목록</div>
              <div className={clickIncentiveListMenu? 'inoutcome-check-active' : 'inoutcome-check' } onClick={onIncentiveListMenuClickHandler}>급여정보</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
