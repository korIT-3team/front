import React from 'react'

import SalesMenu from '../SalesMenu'

import './style.css'

export default function OrderInfo() {
  return (
    <div id='order-info-wrapper'>
      <SalesMenu/>
      <div className='order-info-right'>
        <div className='order-info-top-container'>
          <div className='order-info-top-text'>수주 정보 등록</div>
        </div>
        <div className='order-info-divider'></div>
        <div className='order-info-view-top'>
          <div className='order-info-view-top-text'>수주 정보 조회</div>
        </div>
        <div className='order-info-search-function'>
          <div className='order-info-search-container'>
            <div className='order-info-search-order-code'>
              <div className='order-info-search-order-code-text'>주문번호</div>
            </div>
            <input className='order-info-search-order-code-box-name-box-text' />
          </div>
          <div className='order-info-search-container'>
            <div className='order-info-search-order-date'>
              <div className='order-info-search-order-date-text'>주문일자</div>
            </div>
            <input className='order-info-search-order-date-box-name-box-text' />
          </div>
        </div>
        <div className='order-info-view-top'>
          <div className='order-info-view-top-text'>수주 등록</div>
        </div>
        <div className='order-info-view-container'>
          <div className='order-info-view-container-box'>
            <div className='order-info-view-container-first-table'>
              <div className='order-info-view-container-first-table-title'>
                <div className='order-info-view-container-first-table-title-no'>No</div>
                <div className='order-info-view-container-first-table-title-order-code'>주문번호</div>
                <div className='order-info-view-container-first-table-title-order-date'>주문일자</div>
                <div className='order-info-view-container-first-table-title-dept-code'>부서코드</div>
                <div className='order-info-view-container-first-table-title-emp-code'>사원코드</div>
                <div className='order-info-view-container-first-table-title-cust-code'>거래처코드</div>
                <div className='order-info-view-container-first-table-title-manager'>담당자</div>
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='order-info-view-container-first-table-body-container'>
                <div className='order-info-view-container-first-table-body'>
                  <div className='order-info-view-container-first-table-body-no'></div>
                  <input className='order-info-view-container-first-table-body-order-code'/>
                  <input className='order-info-view-container-first-table-body-order-date'/>
                  <input className='order-info-view-container-first-table-body-dept-code'/>
                  <input className='order-info-view-container-first-table-body-emp-code'/>
                  <input className='order-info-view-container-first-table-body-cust-code'/>
                  <input className='order-info-view-container-first-table-body-manager'/>
                </div>
                <div className='order-info-view-container-first-table-body-new'>
                  <div className='order-info-view-container-first-table-body-new-no'></div>
                  <input className='order-info-view-container-first-table-body-new-order-code'/>
                  <input className='order-info-view-container-first-table-body-new-order-date'/>
                  <input className='order-info-view-container-first-table-body-new-dept-code'/>
                  <input className='order-info-view-container-first-table-body-new-emp-code'/>
                  <input className='order-info-view-container-first-table-body-new-cust-code'/>
                  <input className='order-info-view-container-first-table-body-new-manager'/>
                </div>
              </div>
              {/* 여기까지 */}
            </div>
          </div>
        </div>
        <div className='order-info-view-container'>
          <div className='order-info-view-container-box'>
            <div className='order-info-view-container-second-table'>
              <div className='order-info-view-container-second-table-title'>
                <div className='order-info-view-container-second-table-title-no'>No</div>
                <div className='order-info-view-container-second-table-title-product-code'>품번</div>
                <div className='order-info-view-container-second-table-title-product-name'>품명</div>
                <div className='order-info-view-container-second-table-title-unit'>단위</div>
                <div className='order-info-view-container-second-table-title-order-quantity'>주문수량</div>
                <div className='order-info-view-container-second-table-title-price'>단가</div>
                <div className='order-info-view-container-second-table-title-total-price'>합계금액</div>
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='order-info-view-container-second-table-body-container'>
                <div className='order-info-view-container-second-table-body'>
                  <div className='order-info-view-container-second-table-body-no'></div>
                  <input className='order-info-view-container-second-table-body-product-code'/>
                  <input className='order-info-view-container-second-table-body-product-name'/>
                  <input className='order-info-view-container-second-table-body-unit'/>
                  <input className='order-info-view-container-second-table-body-order-quantity'/>
                  <input className='order-info-view-container-second-table-body-price'/>
                  <input className='order-info-view-container-second-table-body-total-price'/>
                </div>
                <div className='order-info-view-container-second-table-body'>
                  <div className='order-info-view-container-second-table-body-new-no'></div>
                  <input className='order-info-view-container-second-table-body-new-product-code'/>
                  <input className='order-info-view-container-second-table-body-new-product-name'/>
                  <input className='order-info-view-container-second-table-body-new-unit'/>
                  <input className='order-info-view-container-second-table-body-new-order-quantity'/>
                  <input className='order-info-view-container-second-table-body-new-price'/>
                  <input className='order-info-view-container-second-table-body-new-total-price'/>
                </div>
              </div>
              {/* 여기까지 */}
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
