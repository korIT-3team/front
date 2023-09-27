import React from 'react'

import SystemMenu from '../SystemMenu'

import { useNavigate } from 'react-router-dom';
import { HOME_PATH, SYSTEM_PRODUCT_INFO } from 'src/constants';

import './style.css'

export default function ProductInfo() {

  // state //

  // function //
  const navigator = useNavigate();

  // event handler //
  // description: 수정 및 저장 버튼 클릭 이벤트 //
  const onSaveButtonClickHandler = () => {
    navigator(SYSTEM_PRODUCT_INFO);
  }

  // description: 취소버튼 클릭 이벤트 //
  const onCancelButtonClickHandler = () => {
    navigator(HOME_PATH);
  }

  // component //

  // effect //

  // render //
  return (
    <div id='product-info'>
      <SystemMenu/>
      <div className='product-info-wrapper'>
        <div className='product-info-top'>
          <div className='product-info-top-text'>품목 등록</div>
        </div>
        <div className='divider'></div>
        <div className='product-info-search'>
          <div className='product-info-search-container'>
            <div className='product-info-search-name'>
              <div className='product-info-search-name-text-container'>
                <div className='product-info-search-name-text'>품명 *</div>
              </div>
              <div className='product-info-search-name-container'>
                <input className='name-search-input-box' placeholder='품명 입력' />
                <button className='custom-search-button'>검색</button>
                <div className='name-search-input-box-display'>
                  <div className='name-search-input-box-display-text'>검색출력</div>
                </div>
              </div>
            </div>
            <div className='product-info-search-type'>
              <div className='product-info-search-type-text-container'>
                <div className='product-info-search-type-text'>조달 구분 *</div>
              </div>
              <div className='product-info-search-type-container'>
                <input className='type-search-input-box' />
                <div className='type-search-input-box-display'>
                  <div className='type-search-input-box-display-text'>검색출력</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='product-info-middle'>
          <div className='product-info-middle-left'>
            <div className='product-info-middle-left-top'>
              <div className='product-info-middle-left-top-text'>품목 리스트</div>
            </div>
            <div className='product-info-middle-left-bottom'>
              <div className='product-info-middle-left-bottom-container'>
                
              </div>
            </div>
          </div>
          <div className='product-info-middle-right'>
            <div className='product-info-middle-right-top'>
              <div className='product-info-middle-right-top-text'>품목 정보 등록</div>
            </div>
            <div className='product-info-middle-right-bottom'>
              <div className='product-info-middle-right-bottom-container'>
                <div className='product-name'>
                  <div className='product-name-text'>품명</div>
                  <input className='product-name-input' />
                </div>
                <div className='product-type'>
                  <div className='product-type-text'>조달구분</div>
                  <input className='product-type-input' />
                </div>
                <div className='product-price'>
                  <div className='product-price-text'>단가</div>
                  <input className='product-price-input' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='product-info-bottom'>
          <div className='product-info-bottom-button-save'>
            <div className='product-info-bottom-button-save-text' onClick={onSaveButtonClickHandler}>수정 및 저장</div>
          </div>
          <div className='product-info-bottom-button-cancel'>
            <div className='product-info-bottom-button-cancel-text' onClick={onCancelButtonClickHandler}>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}
