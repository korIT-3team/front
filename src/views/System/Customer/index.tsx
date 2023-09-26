import React from 'react'

import SystemMenu from '../SystemMenu'

import './style.css'

export default function CustomerInfo() {
  return (
    <div id='customer-info'>
      <SystemMenu/>
      <div className='customer-info-wrapper'>
        <div className='customer-info-top'>
          <div className='customer-info-top-text'>거래처등록</div>
        </div>
        <div className='divider'></div>
        <div className='customer-info-search'>
          <div className='customer-info-search-container'>
            <div className='customer-info-search-code'>
              <div className='customer-info-search-code-text-container'>
                <div className='customer-info-search-code-text'>거래처 코드 *</div>
              </div>
              <div className='customer-info-search-code-container'>
                <input className='code-search-input-box' />
                <div className='custom-search-button'>버튼</div>
                <div className='code-search-input-box-display'>
                  <div className='code-search-input-box-display-text'>검색출력</div>
                </div>
              </div>
            </div>
            <div className='customer-info-search-name'>
              <div className='customer-info-search-name-text-container'>
                <div className='customer-info-search-name-text'>거래처 명 *</div>
              </div>
              <div className='customer-info-search-name-container'>
                <input className='name-search-input-box' />
                <div className='custom-search-button'>버튼</div>
                <div className='name-search-input-box-display'>
                  <div className='name-search-input-box-display-text'>검색출력</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='customer-info-middle'>
          <div className='customer-info-middle-left'>
            <div className='customer-info-middle-left-top'>
              <div className='customer-info-middle-left-top-text'>거래처 리스트</div>
            </div>
            <div className='customer-info-middle-left-bottom'></div>
          </div>
          <div className='customer-info-middle-right'>
            <div className='customer-info-middle-right-top'>
              <div className='customer-info-middle-right-top-text'>거래처 정보</div>
            </div>
            <div className='customer-info-middle-right-bottom'></div>
          </div>
        </div>
        <div className='customer-info-bottom'>
          <div className='customer-info-bottom-button-save'>
            <div className='customer-info-bottom-button-save-text'>수정 및 저장</div>
          </div>
          <div className='customer-info-bottom-button-cancel'>
            <div className='customer-info-bottom-button-cancel-text'>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}
