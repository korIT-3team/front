import React, { ChangeEvent } from 'react'

import SystemMenu from '../SystemMenu'

import { useNavigate } from 'react-router-dom';
import { HOME_PATH, SYSTEM_PRODUCT_INFO } from 'src/constants';

import { useProductInfoStore, useProductRequestStore } from 'src/stores';

import './style.css'

export default function ProductInfo() {

  // state //

  // description: 조회 조건 정보 store //
  const {productName, procurementCategory, setProductName, setProcurementCategory} = useProductRequestStore();

  // description : 전표 유형 선택 이벤트 //
  const onProcurementCategoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    let type = 0;
    if(value === '전체'){
      type = 0;
    }
    else if(value === '생산'){
      type = 1;
    }
    else if(value === '구매'){
      type = 2;
    }
    setProcurementCategory(type);
  }
  
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
                <div className='product-info-search-button'>검색</div>
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
                <div className='product-info-search-type-combo-box-container'>
                  <select className='product-info-search-type-combo-box-text' onChange={onProcurementCategoryChangeHandler} name="procurement-category" id="procurement-category">
                    <option value="전체">전체</option>
                    <option value="생산">매입</option>
                    <option value="구매">매출</option>
                  </select>
                </div>
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
                <div className='product-info-middle-left-bottom-table'>
                  <div className='product-info-middle-left-bottom-table-title'>
                    <div className='product-info-middle-left-bottom-table-title-no'>No</div>
                    <div className='product-info-middle-left-bottom-table-title-product-code'>품번</div>
                    <div className='product-info-middle-left-bottom-table-title-product-name'>품명</div>
                  </div>
                  <div className='product-info-middle-left-bottom-table-body'>
                    <div className='product-info-middle-left-bottom-table-body-no'>1</div>
                    <div className='product-info-middle-left-bottom-table-body-product-code'>1</div>
                    <div className='product-info-middle-left-bottom-table-body-product-name'>책1</div>
                  </div>
                </div>
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
