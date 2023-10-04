import React from 'react'

import SalesMenu from '../SalesMenu'

import './style.css'

export default function OrderInfo() {
  return (
    <div id='order-info-wrapper'>
      <SalesMenu/>
      <div className='order-info-right'>
        <div className='order-info-top-container'>
          <div className='order-info-top-text'>수주 등록</div>
        </div>
        <div className='order-info-divider'></div>
        <div className='order-info-register-container'>
          <div className='order-info-register-container-top'>
            <div className='order-info-register-container-top-dept'></div>
            <div className='order-info-register-container-top-employee'></div>
            <div className='order-info-register-container-top-customer'></div>
          </div>
          <div className='order-info-register-container-bottom'>
            <div className='order-info-register-container-bottom-date'></div>
            <div className='order-info-register-container-bottom-manager'></div>
          </div>
        </div>
        <div className='order-info-register-button-container'>
          <div className='order-info-register-button'>
            <div className='order-info-register-button-text'>등록</div>
          </div>
        </div>
        <div className='order-info-view-top'>
          <div className='order-info-view-top-text'>수주 등록 현황</div>
        </div>
        <div className='order-info-view-container'>
          <div className='order-info-view-container-box-top'>
            <div className='order-info-view-container-top-table'>
              <div className='order-info-view-container-top-table-title'>
                <div className='order-info-view-container-top-table-title-no'>No</div>
                <div className='order-info-view-container-top-table-title-order-code'>주문번호</div>
                <div className='order-info-view-container-top-table-title-order-date'>주문일자</div>
                <div className='order-info-view-container-top-table-title-customer'>거래처</div>
                <div className='order-info-view-container-top-table-title-manager'>담당자</div>
              </div>
              <div className='order-info-view-container-top-table-body'>
                <div className='order-info-view-container-top-table-body-no'>1</div>
                <div className='order-info-view-container-top-table-body-order-code'>5000</div>
                <div className='order-info-view-container-top-table-body-order-date'>2023-09-05</div>
                <div className='order-info-view-container-top-table-body-customer'>1001</div>
                <div className='order-info-view-container-top-table-body-manager'>조수인</div>
              </div>
            </div>
          </div>
          <div className='order-info-view-container-box-bottom'>
            <div className='order-info-view-container-bottom-table'>
              <div className='order-info-view-container-bottom-table-title'>
                <div className='order-info-view-container-bottom-table-title-no'>No</div>
                <div className='order-info-view-container-bottom-table-title-product-code'>품번</div>
                <div className='order-info-view-container-bottom-table-title-product-name'>품명</div>
                <div className='order-info-view-container-bottom-table-title-unit'>단위</div>
                <div className='order-info-view-container-bottom-table-title-order-quantity'>주문수량</div>
                <div className='order-info-view-container-bottom-table-title-price'>단가</div>
                <div className='order-info-view-container-bottom-table-title-total-price'>합계 금액</div>
              </div>
              <div className='order-info-view-container-bottom-table-body'>
                <div className='order-info-view-container-bottom-table-body-no'>1</div>
                <div className='order-info-view-container-bottom-table-body-product-code'>3001</div>
                <div className='order-info-view-container-bottom-table-body-product-name'>책1</div>
                <div className='order-info-view-container-bottom-table-body-unit'>EA</div>
                <div className='order-info-view-container-bottom-table-body-order-quantity'>30</div>
                <div className='order-info-view-container-bottom-table-body-price'>20,000원</div>
                <div className='order-info-view-container-bottom-table-body-total-price'>600,000원</div>
              </div>
            </div>
          </div>
        </div>
        <div className='order-info-bottom'>
          <div className='order-info-bottom-button-save'>
            <div className='order-info-bottom-button-save-text'>수정 및 저장</div>
          </div>
          <div className='order-info-bottom-button-cancel'>
            <div className='order-info-bottom-button-cancel-text'>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}
