import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HOME_PATH, SALES_PATH, SALES_PLAN_PATH, SYSTEM_COMPANY_INFO, SYSTEM_PATH } from 'src/constants';
import './style.css'

export default function SideMenu() {

  const { pathname } = useLocation();

  // function //
  const navigator = useNavigate();
  const showSystemMenu = pathname.includes(SYSTEM_PATH);
  const showSalesMenu = pathname.includes(SALES_PATH);

  // event handler //
  const onHomeButtonClickHandler = () => {
    navigator(HOME_PATH);
  }
  const onSalesMenuButtonClickHandler = () => {
    navigator(SALES_PLAN_PATH);
  }
  const onSystemMenuMenuButtonClickHandler = () => {
    navigator(SYSTEM_COMPANY_INFO);
  }

  // render //
  return (
    <div id='side-menu'>
      <div className="side-menu-top">
        <div className="side-menu-home" onClick={onHomeButtonClickHandler}>
          <div className="side-menu-home-icon"></div>
          <div className="side-menu-home-text">HOME</div>
        </div>
        <div className={ showSystemMenu ? 'side-menu-system-manage-active' : 'side-menu-system-manage'} onClick={onSystemMenuMenuButtonClickHandler}>
          <div className={ showSystemMenu ? 'side-menu-system-manage-icon-active' : 'side-menu-system-manage-icon'}></div>
          <div className="side-menu-system-manage-text">시스템관리</div>
        </div>
        <div className="side-menu-human-resource">
          <div className="side-menu-human-resource-icon"></div>
          <div className="side-menu-human-resource-text">인사관리</div>
        </div>
        <div className={ showSalesMenu ? 'side-menu-sales-active' : 'side-menu-sales'} onClick={onSalesMenuButtonClickHandler}>
          <div className={ showSalesMenu ? 'side-menu-sales-icon-active' : 'side-menu-sales-icon'}></div>
          <div className="side-menu-sales-text">영업관리</div>
        </div>
        <div className="side-menu-funds">
          <div className="side-menu-funds-icon"></div>
          <div className="side-menu-funds-text">회계관리</div>
        </div>
        <div className="side-menu-search">
          <div className="side-menu-search-icon"></div>
          <div className="side-menu-search-text">조회</div>
        </div>
      </div>
      <div className="side-menu-bottom">
        <div className="side-menu-logout">
          <div className="side-menu-logout-icon"></div>
          <div className="side-menu-logout-text">로그아웃</div>
        </div>
      </div>
    </div>
  )
}
