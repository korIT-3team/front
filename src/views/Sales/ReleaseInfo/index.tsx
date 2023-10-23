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
        <div className='release-info-view-top'>
          <div className='release-info-view-top-text'>출고 정보 조회</div>
        </div>
        <div className='release-info-search-function'>
          <div className='release-info-search-container'>
            <div className='release-info-search-release-code'>
              <div className='release-info-search-release-code-text'>출고번호</div>
            </div>
            <input className='release-info-search-release-code-box-name-box-text' />
          </div>
          <div className='release-info-search-container'>
            <div className='release-info-search-release-date'>
              <div className='release-info-search-release-date-text'>출고일자</div>
            </div>
            <input className='release-info-search-release-date-box-name-box-text' />
          </div>
        </div>
        <div className='release-info-view-top'>
          <div className='release-info-view-top-text'>출고 정보 등록</div>
        </div>
        <div className='release-info-view-container'>
          <div className='release-info-view-container-box'>
            <div className='release-info-view-container-first-table'>
              <div className='release-info-view-container-first-table-title'>
                <div className='release-info-view-container-first-table-title-no'>No</div>
                <div className='release-info-view-container-first-table-title-release-code'>출고번호</div>
                <div className='release-info-view-container-first-table-title-release-date'>출고일자</div>
                <div className='release-info-view-container-first-table-title-dept-code'>부서코드</div>
                <div className='release-info-view-container-first-table-title-emp-code'>사원코드</div>
                <div className='release-info-view-container-first-table-title-cust-code'>거래처코드</div>
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='release-info-view-container-first-table-body-container'>
                <div className='release-info-view-container-first-table-body'>
                  <div className='release-info-view-container-first-table-body-no'></div>
                  <input className='release-info-view-container-first-table-body-release-code'/>
                  <input className='release-info-view-container-first-table-body-release-date'/>
                  <input className='release-info-view-container-first-table-body-dept-code'/>
                  <input className='release-info-view-container-first-table-body-emp-code'/>
                  <input className='release-info-view-container-first-table-body-cust-code'/>
                </div>
                <div className='release-info-view-container-first-table-body-new'>
                  <div className='release-info-view-container-first-table-body-new-no'></div>
                  <input className='release-info-view-container-first-table-body-new-release-code'/>
                  <input className='release-info-view-container-first-table-body-new-release-date'/>
                  <input className='release-info-view-container-first-table-body-new-dept-code'/>
                  <input className='release-info-view-container-first-table-body-new-emp-code'/>
                  <input className='release-info-view-container-first-table-body-new-cust-code'/>
                </div>
              </div>
              {/* 여기까지 */}
            </div>
          </div>
        </div>
        <div className='release-info-view-container'>
          <div className='release-info-view-container-box'>
            <div className='release-info-view-container-second-table'>
              <div className='release-info-view-container-second-table-title'>
                <div className='release-info-view-container-second-table-title-no'>No</div>
                <div className='release-info-view-container-second-table-title-product-code'>품번</div>
                <div className='release-info-view-container-second-table-title-product-name'>품명</div>
                <div className='release-info-view-container-second-table-title-order-quantity'>주문수량</div>
                <div className='release-info-view-container-second-table-title-price'>단가</div>
                <div className='release-info-view-container-second-table-title-supply-price'>공급가</div>
                <div className='release-info-view-container-second-table-title-surtax'>부가세</div>
                <div className='release-info-view-container-second-table-title-total-price'>합계금액</div>
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='release-info-view-container-second-table-body-container'>
                <div className='release-info-view-container-second-table-body'>
                  <div className='release-info-view-container-second-table-body-no'></div>
                  <input className='release-info-view-container-second-table-body-product-code'/>
                  <input className='release-info-view-container-second-table-body-product-name'/>
                  <input className='release-info-view-container-second-table-body-order-quantity'/>
                  <input className='release-info-view-container-second-table-body-price'/>
                  <input className='release-info-view-container-second-table-body-supply-price'/>
                  <input className='release-info-view-container-second-table-body-surtax'/>
                  <input className='release-info-view-container-second-table-body-total-price'/>
                </div>
                <div className='release-info-view-container-second-table-body'>
                  <div className='release-info-view-container-second-table-body-new-no'></div>
                  <input className='release-info-view-container-second-table-body-new-product-code'/>
                  <input className='release-info-view-container-second-table-body-new-product-name'/>
                  <input className='release-info-view-container-second-table-body-new-order-quantity'/>
                  <input className='release-info-view-container-second-table-body-new-price'/>
                  <input className='release-info-view-container-second-table-body-new-supply-price'/>
                  <input className='release-info-view-container-second-table-body-new-surtax'/>
                  <input className='release-info-view-container-second-table-body-new-total-price'/>
                </div>
              </div>
              {/* 여기까지 */}
            </div>
          </div>
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
