import React from 'react'

import SystemMenu from '../SystemMenu'

import { useNavigate } from 'react-router-dom';
import { HOME_PATH, SYSTEM_CUSTOMER_INFO } from 'src/constants';

import './style.css'

export default function CustomerInfo() {

  // state //

  // function //
  const navigator = useNavigate();

  // event handler //
  // description: 수정 및 저장 버튼 클릭 이벤트 //
  const onSaveButtonClickHandler = () => {
    navigator(SYSTEM_CUSTOMER_INFO);
  }

  // description: 취소버튼 클릭 이벤트 //
  const onCancelButtonClickHandler = () => {
    navigator(HOME_PATH);
  }

  // component //

  // effect //


  // render //
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
                <input className='code-search-input-box' placeholder='거래처 코드 입력'/>
                <button className='custom-search-button'>검색</button>
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
                <input className='name-search-input-box' placeholder='거래처 명 입력' />
                <button className='custom-search-button'>검색</button>
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
            <div className='customer-info-middle-left-bottom'>
              <div className='customer-info-middle-left-bottom-container'>
                
              </div>
            </div>
          </div>
          <div className='customer-info-middle-right'>
            <div className='customer-info-middle-right-top'>
              <div className='customer-info-middle-right-top-text'>거래처 정보 등록</div>
            </div>
            <div className='customer-info-middle-right-bottom'>
              <div className='customer-info-middle-right-bottom-container'>
                <div className='customer-name'>
                  <div className='customer-name-text'>거래처 명</div>
                  <input className='customer-name-input' />
                </div>
                <div className='customer-business-number'>
                  <div className='customer-business-number-text'>사업자 등록번호</div>
                  <input className='customer-business-number-input' />
                </div>
                <div className='customer-address'>
                  <div className='customer-address-text'>거래처 주소</div>
                  <input className='customer-address-input' />
                </div>
                <div className='customer-address-detail'>
                  <div className='customer-address-detail-text'>거래처 상세주소</div>
                  <input className='customer-address-detail-input' />
                </div>
                <div className='customer-tel-number'>
                  <div className='customer-tel-number-text'>거래처 전화번호</div>
                  <input className='customer-tel-number-input' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='customer-info-bottom'>
          <div className='customer-info-bottom-button-save'>
            <div className='customer-info-bottom-button-save-text' onClick={onSaveButtonClickHandler}>수정 및 저장</div>
          </div>
          <div className='customer-info-bottom-button-cancel'>
            <div className='customer-info-bottom-button-cancel-text' onClick={onCancelButtonClickHandler}>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}
