import React from 'react'

import SalesMenu from '../SalesMenu'

import './style.css'

export default function ReleaseInfo() {
  return (
    <div id='release-info-wrapper'>
      <SalesMenu/>
      <div className='release-info-right'>
        <div className='release-info-top-container'>
          <div className='release-info-top-text'>출고 정보 등록</div>
        </div>
        <div className='release-info-divider'></div>
        {/* ---------------------------------------------------------- */}
        <div className='release-info-register-container'>
          <div className='release-info-register-container-box'>
            <div className='release-info-dept'>
              <div className='release-info-dept-text'>부서*</div>
              <div className='release-info-dept-box'>
                <div className='release-info-dept-box-code-box'>
                  <input className='release-info-dept-box-code-box-text'/>
                </div>
                <div className='release-info-dept-search-button'>검색</div>
                <div className='release-info-dept-box-name-box'>
                  <div className='release-info-dept-box-name-box-text'>부서명</div>
                </div>
              </div>
            </div>
            <div className='release-info-employee'>
              <div className='release-info-employee-text'>사원*</div>
              <div className='release-info-employee-box'>
                <div className='release-info-employee-box-code-box'>
                  <input className='release-info-employee-box-code-box-text'/>
                </div>
                <div className='release-info-employee-search-button'>검색</div>
                <div className='release-info-employee-box-name-box'>
                  <div className='release-info-employee-box-name-box-text'>사원명</div>
                </div>
              </div>
            </div>
            <div className='release-info-customer'>
              <div className='release-info-customer-text'>거래처코드*</div>
              <div className='release-info-customer-box'>
                <div className='release-info-customer-box-code-box'>
                  <input className='release-info-customer-box-code-box-text'/>
                </div>
                <div className='release-info-customer-search-button'>검색</div>
                <div className='release-info-customer-box-name-box'>
                  <div className='release-info-customer-box-name-box-text'>거래처명</div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}
          <div className='release-info-register-container-box'>
            <div className='release-info-date'>
              <div className='release-info-date-text'>출고 일자*</div>
              <div className='release-info-date-container'>
                <div className='release-info-date-select-box'>
                  <input className='release-info-date-select' />
                </div>
              </div>
            </div>
            <div className='release-info-product-code'>
              <div className='release-info-product-code-text'>품번*</div>
              <div className='release-info-product-code-box'>
                <div className='release-info-product-code-box-code-box'>
                  <input className='release-info-product-code-box-code-box-text'/>
                </div>
                <div className='release-info-product-code-search-button'>검색</div>
                <div className='release-info-product-code-box-name-box'>
                  <div className='release-info-product-code-box-name-box-text'>품번</div>
                </div>
              </div>
            </div>
            <div className='release-info-product-name'>
              <div className='release-info-product-name-text'>품명*</div>
              <div className='release-info-product-name-box'>
                <div className='release-info-product-name-box-code-box'>
                  <input className='release-info-product-name-box-code-box-text'/>
                </div>
                <div className='release-info-product-name-search-button'>검색</div>
                <div className='release-info-product-name-box-name-box'>
                  <div className='release-info-product-name-box-name-box-text'>품명</div>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------------------------------------------- */}
          <div className='release-info-register-container-box'>
            <div className='release-info-order-quantity'>
              <div className='release-info-order-quantity-text'>주문단위수량*</div>
              <div className='release-info-order-quantity-box'>
                <input className='release-info-order-quantity-input' />
              </div>
            </div>
            <div className='release-info-price'>
              <div className='release-info-price-text'>단가*</div>
              <div className='release-info-price-box'>
                <input className='release-info-price-input' />
              </div>
            </div>
            <div className='release-info-supply-price'>
              <div className='release-info-supply-price-text'>공급가*</div>
              <div className='release-info-supply-price-box'>
                <input className='release-info-supply-price-input' />
              </div>
            </div>
            <div className='release-info-surtax'>
              <div className='release-info-surtax-text'>부가세*</div>
              <div className='release-info-surtax-box'>
                <input className='release-info-surtax-input' />
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------- */}
        <div className='release-info-register-button-container'>
          <div className='release-info-register-button'>
            <div className='release-info-register-button-text'>등록</div>
          </div>
        </div>
        <div className='release-info-view-top'>
          <div className='release-info-view-top-text'>출고 정보 현황</div>
        </div>
        <div className='release-info-view-container'>
          <div className='release-info-view-container-top'></div>
          <div className='release-info-view-container-bottom'></div>
        </div>
        <div className='release-info-bottom'>
          <div className='release-info-bottom-button-save'>
            <div className='release-info-bottom-button-save-text'>수정 및 저장</div>
          </div>
          <div className='release-info-bottom-button-cancel'>
            <div className='release-info-bottom-button-cancel-text'>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}
