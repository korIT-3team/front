import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom';
import './style.css'
import { ACCOUNTING_INVOICE_PATH, ACCOUNTING_IN_OUT_COME_PATH } from 'src/constants';

export default function AccountingMenu() {

  // function //
  const navigator = useNavigate();
  const { pathname } = useLocation();

  const clickAccountingInvoiceMenu = pathname.includes(ACCOUNTING_INVOICE_PATH);
  const clickAccountingInOutComeMenu = pathname.includes(ACCOUNTING_IN_OUT_COME_PATH);

  // event handler //
  const onInvoiceMenuClickHandler = () => {
    navigator(ACCOUNTING_INVOICE_PATH);
  }
  const onInOutComeMenuClickHandler = () => {
    navigator(ACCOUNTING_IN_OUT_COME_PATH);
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
              <div className={clickAccountingInvoiceMenu? 'invoice-check-active' : 'invoice-check' } onClick={onInvoiceMenuClickHandler}>전표조회</div>
              <div className={clickAccountingInOutComeMenu? 'inoutcome-check-active' : 'inoutcome-check' } onClick={onInOutComeMenuClickHandler}>매입매출장</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
