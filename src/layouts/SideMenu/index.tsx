import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ACCOUNTING_INVOICE_PATH, ACCOUNTING_PATH, HOME_PATH, HUMAN_EMPLOYEE_INFO, HUMAN_PATH, SALES_PATH, SALES_PLAN_PATH, SYSTEM_COMPANY_INFO, SYSTEM_PATH } from 'src/constants';
import { useUserStore } from 'src/stores';
import { useCookies } from 'react-cookie';
import './style.css'


export default function SideMenu() {

     //!              state             //
    const { pathname } = useLocation();
    // description : 로그인 유저 정보 상태 //
    const { user, setUser } = useUserStore();
    // description : Cookie 상태 //
    const [cookies, setCookie] = useCookies();

    
    //!              function            //
    const navigator = useNavigate();
    const showSystemMenu = pathname.includes(SYSTEM_PATH);
    const showSalesMenu = pathname.includes(SALES_PATH);
    const showHumanMenu = pathname.includes(HUMAN_PATH);
    const showAccountinMenu = pathname.includes(ACCOUNTING_PATH);

    //!             event handler              //
    // description : 홈 버튼 클릭 이벤트 //
    const onHomeButtonClickHandler = () => {
      navigator(HOME_PATH);
    }
    // description : 영업관리 버튼 클릭 이벤트 //
    const onSalesMenuButtonClickHandler = () => {
      navigator(SALES_PLAN_PATH);
    }
    // description : 시스템관리 버튼 클릭 이벤트 //
    const onSystemMenuMenuButtonClickHandler = () => {
      navigator(SYSTEM_COMPANY_INFO);
    }
    // description : 인사관리 버튼 클릭 이벤트 //
    const onHumanMenuMenuButtonClickHandler = () => {
      navigator(HUMAN_EMPLOYEE_INFO);
    }
    // description : 회계관리 버튼 클릭 이벤트 //
    const onAccountingMenuMenuButtonClickHandler = () => {
      navigator(ACCOUNTING_INVOICE_PATH);
    }
    // description : 로그아웃 버튼 클릭 이벤트 //
    const onSignOutButtonClickHandler = () => {
      if(!user) return;
      console.log('로그아웃:'+user);
      setCookie('accessToken', '', { expires: new Date(), path: HOME_PATH });
      setUser(null);
      navigator(HOME_PATH);
      alert('로그아웃 완료');
    }

    
    //!             render             //
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
          <div className={ showHumanMenu ? 'side-menu-human-manage-active' : 'side-menu-human-resource'} onClick={onHumanMenuMenuButtonClickHandler}>
            <div className={ showHumanMenu ? 'side-menu-human-resource-icon-active' : 'side-menu-human-resource-icon'}></div>
            <div className="side-menu-human-resource-text">인사관리</div>
          </div>
          <div className={ showSalesMenu ? 'side-menu-sales-active' : 'side-menu-sales'} onClick={onSalesMenuButtonClickHandler}>
            <div className={ showSalesMenu ? 'side-menu-sales-icon-active' : 'side-menu-sales-icon'}></div>
            <div className="side-menu-sales-text">영업관리</div>
          </div>
          <div className={ showAccountinMenu ? 'side-menu-funds-active' : 'side-menu-funds'} onClick={onAccountingMenuMenuButtonClickHandler} >
            <div className={ showAccountinMenu ? 'side-menu-funds-icon-active' : 'side-menu-funds-icon'}></div>
            <div className="side-menu-funds-text">회계관리</div>
          </div>
          <div className="side-menu-search">
            <div className="side-menu-search-icon"></div>
            <div className="side-menu-search-text">조회</div>
          </div>
        </div>
        <div className="side-menu-bottom">
          <div className="side-menu-logout" onClick={onSignOutButtonClickHandler}>
            <div className="side-menu-logout-icon"></div>
            <div className="side-menu-logout-text">로그아웃</div>
          </div>
        </div>
      </div>
    )
}
