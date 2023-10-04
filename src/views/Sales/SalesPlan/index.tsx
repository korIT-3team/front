import React from 'react'

import SalesMenu from '../SalesMenu'

import './style.css'

export default function SalesPlan() {
  return (
    <div id='sales-plan-wrapper'>
      <SalesMenu/>
      <div className='sales-plan-right'>
        <div className='sales-plan-top-container'>
          <div className='sales-plan-top-text'>판매 계획 등록</div>
        </div>
        <div className='sales-plan-divider'></div>
        <div className='sales-plan-register-container'>
          <div className='sales-plan-register-container-top'>
            <div className='sales-plan-register-container-top-dept'>
              <div className='sales-plan-register-container-top-dept-text'>부서*</div>
              <div className='sales-plan-register-container-top-dept-box'></div>
            </div>
            <div className='sales-plan-register-container-top-employee'>
              <div className='sales-plan-register-container-top-employee-text'>사원*</div>
              <div className='sales-plan-register-container-top-employee-box'></div>
            </div>
            <div className='sales-plan-register-container-top-year'>
              <div className='sales-plan-register-container-top-year-text'>계획 연도*</div>
              <div className='sales-plan-register-container-top-year-box'></div>
            </div>
            <div className='sales-plan-register-container-top-month'>
              <div className='sales-plan-register-container-top-month-text'>계획 월*</div>
              <div className='sales-plan-register-container-top-month-box'></div>
            </div>
          </div>
          <div className='sales-plan-register-container-bottom'>
            <div className='sales-plan-register-container-bottom-quantity'>
              <div className='sales-plan-register-container-bottom-quantity-text'>계획 수량*</div>
              <div className='sales-plan-register-container-bottom-quantity-box'></div>
            </div>
            <div className='sales-plan-register-container-bottom-exchange-type'>
              <div className='sales-plan-register-container-bottom-exchange-type-text'>환종*</div>
              <div className='sales-plan-register-container-bottom-exchange-type-box'></div>
            </div>
            <div className='sales-plan-register-container-bottom-exchange-rate'>
              <div className='sales-plan-register-container-bottom-exchange-rate-text'>환율*</div>
              <div className='sales-plan-register-container-bottom-exchange-rate-box'></div>
            </div>
            <div className='sales-plan-register-container-bottom-price'>
              <div className='sales-plan-register-container-bottom-price-text'>예상 단가*</div>
              <div className='sales-plan-register-container-bottom-price-box'></div>
            </div>
            <div className='sales-plan-register-container-bottom-total-price'>
              <div className='sales-plan-register-container-bottom-total-price-text'>예상 금액*</div>
              <div className='sales-plan-register-container-bottom-total-price-box'></div>
            </div>
          </div>
        </div>
        <div className='sales-plan-register-button-container'>
          <div className='sales-plan-register-button'>
            <div className='sales-plan-register-button-text'>등록</div>
          </div>
        </div>
        <div className='sales-plan-view-top'>
          <div className='sales-plan-view-top-text'>판매 계획</div>
        </div>
        <div className='sales-plan-view-container'>
          <div className='sales-plan-view-container-box'>
            <div className='sales-plan-view-container-table'>
              <div className='sales-plan-view-container-table-title'>
                <div className='sales-plan-view-container-table-title-no'>No</div>
                <div className='sales-plan-view-container-table-title-product-code'>품번</div>
                <div className='sales-plan-view-container-table-title-product-name'>품명</div>
                <div className='sales-plan-view-container-table-title-unit'>단위</div>
                <div className='sales-plan-view-container-table-title-plan-quantity'>계획수량</div>
                <div className='sales-plan-view-container-table-title-exchange-rate-type'>환종</div>
                <div className='sales-plan-view-container-table-title-exchange-rate'>환율</div>
                <div className='sales-plan-view-container-table-title-expect-price'>예상단가</div>
                <div className='sales-plan-view-container-table-title-expect-total-price'>예상금액</div>
                <div className='sales-plan-view-container-table-title-expect-korean-price'>예상원화금액</div>
              </div>
              <div className='sales-plan-view-container-table-body'>
                <div className='sales-plan-view-container-table-body-no'>1</div>
                <div className='sales-plan-view-container-table-body-product-code'>4000</div>
                <div className='sales-plan-view-container-table-body-product-name'>책1</div>
                <div className='sales-plan-view-container-table-body-unit'>EA</div>
                <div className='sales-plan-view-container-table-body-plan-quantity'>30</div>
                <div className='sales-plan-view-container-table-body-exchange-rate-type'>달러</div>
                <div className='sales-plan-view-container-table-body-exchange-rate'>1330.00</div>
                <div className='sales-plan-view-container-table-body-expect-price'>20.00$</div>
                <div className='sales-plan-view-container-table-body-expect-total-price'>1,000.00$</div>
                <div className='sales-plan-view-container-table-body-expect-korean-price'>1,330,000원</div>
              </div>
            </div>
          </div>
        </div>
        <div className='sales-plan-bottom'>
          <div className='sales-plan-bottom-button-save'>
            <div className='sales-plan-bottom-button-save-text'>수정 및 저장</div>
          </div>
          <div className='sales-plan-bottom-button-cancel'>
            <div className='sales-plan-bottom-button-cancel-text'>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}
