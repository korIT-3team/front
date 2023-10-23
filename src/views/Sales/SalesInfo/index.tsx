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
        <div className='sales-info-view-top'>
          <div className='sales-info-view-top-text'>매출 정보 조회</div>
        </div>
        <div className='sales-info-search-function'>
          <div className='sales-info-search-container'>
            <div className='sales-info-search-sales-code'>
              <div className='sales-info-search-sales-code-text'>매출마감번호</div>
            </div>
            <input className='sales-info-search-sales-code-box-name-box-text' />
          </div>
          <div className='sales-info-search-container'>
            <div className='sales-info-search-deadline-date'>
              <div className='sales-info-search-deadline-date-text'>마감일자</div>
            </div>
            <input className='sales-info-search-deadline-date-box-name-box-text' />
          </div>
        </div>
        <div className='sales-info-view-top'>
          <div className='sales-info-view-top-text'>매출 정보 등록</div>
        </div>
        <div className='sales-info-view-container'>
          <div className='sales-info-view-container-box'>
            <div className='sales-info-view-container-first-table'>
              <div className='sales-info-view-container-first-table-title'>
                <div className='sales-info-view-container-first-table-title-no'>No</div>
                <div className='sales-info-view-container-first-table-title-sales-code'>마감번호</div>
                <div className='sales-info-view-container-first-table-title-deadline-date'>마감일자</div>
                <div className='sales-info-view-container-first-table-title-dept-code'>부서코드</div>
                <div className='sales-info-view-container-first-table-title-emp-code'>사원코드</div>
                <div className='sales-info-view-container-first-table-title-cust-code'>거래처코드</div>
                <div className='sales-info-view-container-first-table-title-sales-detail'>매출상세</div>
                <div className='sales-info-view-container-first-table-title-sales-price'>매출금액</div>
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='sales-info-view-container-first-table-body-container'>
                <div className='sales-info-view-container-first-table-body'>
                  <div className='sales-info-view-container-first-table-body-no'></div>
                  <input className='sales-info-view-container-first-table-body-sales-code'/>
                  <input className='sales-info-view-container-first-table-body-deadline-date'/>
                  <input className='sales-info-view-container-first-table-body-dept-code'/>
                  <input className='sales-info-view-container-first-table-body-emp-code'/>
                  <input className='sales-info-view-container-first-table-body-cust-code'/>
                  <input className='sales-info-view-container-first-table-body-sales-detail'/>
                  <input className='sales-info-view-container-first-table-body-sales-price'/>
                </div>
                <div className='sales-info-view-container-first-table-body-new'>
                  <div className='sales-info-view-container-first-table-body-new-no'></div>
                  <input className='sales-info-view-container-first-table-body-new-sales-code'/>
                  <input className='sales-info-view-container-first-table-body-new-deadline-date'/>
                  <input className='sales-info-view-container-first-table-body-new-dept-code'/>
                  <input className='sales-info-view-container-first-table-body-new-emp-code'/>
                  <input className='sales-info-view-container-first-table-body-new-cust-code'/>
                  <input className='sales-info-view-container-first-table-body-new-sales-detail'/>
                  <input className='sales-info-view-container-first-table-body-new-sales-price'/>
                </div>
              </div>
              {/* 여기까지 */}
            </div>
          </div>
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
