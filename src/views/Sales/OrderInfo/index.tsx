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
          <div className='order-info-register-container-box'>
            <div className='order-info-dept'>
              <div className='order-info-dept-text'>부서*</div>
              <div className='order-info-dept-box'>
                <div className='order-info-dept-box-code-box'>
                  <input className='order-info-dept-box-code-box-text'/>
                </div>
                <div className='order-info-dept-search-button'>검색</div>
                <div className='order-info-dept-box-name-box'>
                  <div className='order-info-dept-box-name-box-text'>부서명</div>
                </div>
              </div>
            </div>
            <div className='order-info-employee'>
              <div className='order-info-employee-text'>사원*</div>
              <div className='order-info-employee-box'>
                <div className='order-info-employee-box-code-box'>
                  <input className='order-info-employee-box-code-box-text'/>
                </div>
                <div className='order-info-employee-search-button'>검색</div>
                <div className='order-info-employee-box-name-box'>
                  <div className='order-info-employee-box-name-box-text'>사원명</div>
                </div>
              </div>
            </div>
            <div className='order-info-customer'>
              <div className='order-info-customer-text'>거래처코드*</div>
              <div className='order-info-customer-box'>
                <div className='order-info-customer-box-code-box'>
                  <input className='order-info-customer-box-code-box-text'/>
                </div>
                <div className='order-info-customer-search-button'>검색</div>
                <div className='order-info-customer-box-name-box'>
                  <div className='order-info-customer-box-name-box-text'>거래처명</div>
                </div>
              </div>
            </div>
          </div>
          <div className='order-info-register-container-box-second'>
            <div className='order-info-date'>
              <div className='order-info-date-text'>주문 일자*</div>
              <div className='order-info-date-container'>
                <div className='order-info-date-select-box'>
                  <input className='order-info-date-select' />
                </div>
              </div>
            </div>
            <div className='order-info-manager'>
              <div className='order-info-manager-text'>담당자*</div>
              <div className='order-info-manager-box'>
                <div className='order-info-manager-box-code-box'>
                  <input className='order-info-manager-box-code-box-text'/>
                </div>
                <div className='order-info-manager-search-button'>검색</div>
                <div className='order-info-manager-box-name-box'>
                  <div className='order-info-manager-box-name-box-text'>담당자명</div>
                </div>
              </div>
            </div>
          </div>
          <div className='order-info-register-container-box'>
            <div className='order-info-product-code'>
              <div className='order-info-product-code-text'>품번*</div>
              <div className='order-info-product-code-box'>
                <div className='order-info-product-code-box-code-box'>
                  <input className='order-info-product-code-box-code-box-text'/>
                </div>
                <div className='order-info-product-code-search-button'>검색</div>
                <div className='order-info-product-code-box-name-box'>
                  <div className='order-info-product-code-box-name-box-text'>품번</div>
                </div>
              </div>
            </div>
            <div className='order-info-product-name'>
              <div className='order-info-product-name-text'>품명*</div>
              <div className='order-info-product-name-box'>
                <div className='order-info-product-name-box-code-box'>
                  <input className='order-info-product-name-box-code-box-text'/>
                </div>
                <div className='order-info-product-name-search-button'>검색</div>
                <div className='order-info-product-name-box-name-box'>
                  <div className='order-info-product-name-box-name-box-text'>품명</div>
                </div>
              </div>
            </div>
            <div className='order-info-order-quantity'>
              <div className='order-info-order-quantity-text'>주문 수량*</div>
              <div className='order-info-order-quantity-box'>
                <input className='order-info-order-quantity-input' />
              </div>
            </div>
            <div className='order-info-price'>
              <div className='order-info-price-text'>단가*</div>
              <div className='order-info-price-box'>
                <input className='order-info-price-input' />
              </div>
            </div>
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
