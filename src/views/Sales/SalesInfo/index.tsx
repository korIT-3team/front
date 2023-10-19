import React from 'react'

import SalesMenu from '../SalesMenu'

import './style.css'

export default function SalesInfo() {
  return (
    <div id='sales-info-wrapper'>
      <SalesMenu/>
      <div className='sales-info-right'>
        <div className='sales-info-top-container'>
          <div className='sales-info-top-text'>매출 정보 등록</div>
        </div>
        <div className='sales-info-divider'></div>
        {/* ---------------------------------------------------------- */}
        <div className='sales-info-register-container'>
          <div className='sales-info-register-container-box'>
            <div className='sales-info-dept'>
              <div className='sales-info-dept-text'>부서*</div>
              <div className='sales-info-dept-box'>
                <div className='sales-info-dept-box-code-box'>
                  <input className='sales-info-dept-box-code-box-text'/>
                </div>
                <div className='sales-info-dept-search-button'>검색</div>
                <div className='sales-info-dept-box-name-box'>
                  <div className='sales-info-dept-box-name-box-text'>부서명</div>
                </div>
              </div>
            </div>
            <div className='sales-info-employee'>
              <div className='sales-info-employee-text'>사원*</div>
              <div className='sales-info-employee-box'>
                <div className='sales-info-employee-box-code-box'>
                  <input className='sales-info-employee-box-code-box-text'/>
                </div>
                <div className='sales-info-employee-search-button'>검색</div>
                <div className='sales-info-employee-box-name-box'>
                  <div className='sales-info-employee-box-name-box-text'>사원명</div>
                </div>
              </div>
            </div>
            <div className='sales-info-customer'>
              <div className='sales-info-customer-text'>거래처코드*</div>
              <div className='sales-info-customer-box'>
                <div className='sales-info-customer-box-code-box'>
                  <input className='sales-info-customer-box-code-box-text'/>
                </div>
                <div className='sales-info-customer-search-button'>검색</div>
                <div className='sales-info-customer-box-name-box'>
                  <div className='sales-info-customer-box-name-box-text'>거래처명</div>
                </div>
              </div>
            </div>
          </div>
          <div className='sales-info-register-container-box'>
            <div className='sales-info-sales-detail'>
              <div className='sales-info-sales-detail-text'>매출상세*</div>
              <div className='sales-info-sales-detail-box'>
                <input className='sales-info-sales-detail-input' />
              </div>
            </div>
            <div className='sales-info-sales-price'>
              <div className='sales-info-sales-price-text'>매출금액*</div>
              <div className='sales-info-sales-price-box'>
                <input className='sales-info-sales-price-input' />
              </div>
            </div>
            <div className='sales-info-deadline-date'>
              <div className='sales-info-deadline-date-text'>매출마감일자*</div>
              <div className='sales-info-deadline-date-container'>
                <div className='sales-info-deadline-date-select-box'>
                  <input className='sales-info-deadline-date-select' />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------- */}
        <div className='sales-info-register-button-container'>
          <div className='sales-info-register-button'>
            <div className='sales-info-register-button-text'>등록</div>
          </div>
        </div>
        <div className='sales-info-view-top'>
          <div className='sales-info-view-top-text'>매출 정보 현황</div>
        </div>
        <div className='sales-info-view-container'>
          <div className='sales-info-view-container-top'></div>
          <div className='sales-info-view-container-bottom'></div>
        </div>
        <div className='sales-info-bottom'>
          <div className='sales-info-bottom-button-save'>
            <div className='sales-info-bottom-button-save-text'>수정 및 저장</div>
          </div>
          <div className='sales-info-bottom-button-cancel'>
            <div className='sales-info-bottom-button-cancel-text'>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}
