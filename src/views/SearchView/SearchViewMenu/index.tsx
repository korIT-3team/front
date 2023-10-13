import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom';
import './style.css'
import { SEARCHVIEW_FUNDS_LIST_PATH } from 'src/constants';

export default function SearchViewMenu() {

  // function //
  const navigator = useNavigate();
  const { pathname } = useLocation();

  const clickFundsListMenu = pathname.includes(SEARCHVIEW_FUNDS_LIST_PATH);

  // event handler //
  const onFundsListMenuClickHandler = () => {
    navigator(SEARCHVIEW_FUNDS_LIST_PATH);
  }

  // render //
  return (
    <div id='accounting-menu'>
      <div className='accounting-menu-left'>
        <div className='accounting-menu-left-top'>
          <div className='accounting-menu-left-top-text'>회계관리</div>
        </div>
        <div className='accounting-menu-left-detail'>
          <div className='accounting-menu-left-detail-left'>
            <div className='vertical-divider'></div>
          </div>
          <div className='accounting-menu-left-detail-right'>
            <div className='accounting-menu-left-detail-right-text'>
              <div className={clickFundsListMenu? 'invoice-check-active' : 'invoice-check' } onClick={onFundsListMenuClickHandler}>사내자금현황</div>
              <div className='invoice-check' >사원목록</div>
              <div className='invoice-check' >근태현황</div>
              <div className='inoutcome-check' >급여정보</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
