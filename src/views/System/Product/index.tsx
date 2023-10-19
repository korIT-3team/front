import React, { ChangeEvent, useEffect, useState } from 'react'

import SystemMenu from '../SystemMenu'

import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_PATH, SYSTEM_PRODUCT_INFO } from 'src/constants';

import { useProductInfoStore, useProductRequestStore, useProductResponseStore, useSelectedProductStore } from 'src/stores';

import './style.css'

export default function ProductInfo() {

  // state //
  // description: path 상태 //
  const { pathname } = useLocation();
  // description: 암호화 상태 //
  const [ passwordState, setPasswordState ] = useState<boolean>(true);

  // description: 조회 조건 정보 store //
  const { setProductNameInfo, setProcurementCategoryInfo, resetProductRequest } = useProductRequestStore();
  
  // description: Product List 정보 불러오기
  const { productList, setProductList, resetProductList } = useProductResponseStore();
  
  // description: 품명 선택 //
  const { selectedProductName, setSelectedProductName } = useSelectedProductStore();
  // description: 조달구분 선택 //
  const { selectedProcurementCategory, setSelectedProcurementCategory } = useSelectedProductStore();
  
  // description: Product 정보 //
  const { productCode, productName, procurementCategory, productPrice } = useProductInfoStore();
  const { setProductCode, setProductName, setProcurementCategory, setProductPrice } = useProductInfoStore();

  
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

  // description: 품명 조회 입력 이벤트
  const onProductNameInfoChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProductNameInfo(event.target.value);
  }
 
  // description: 품명 입력 이벤트
  const onProductNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  }

  // description: 조달구분 조회 선택 이벤트 //
  const onProcurementCategoryInfoChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
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
    setProcurementCategoryInfo(type);
  }

  // description: 조달구분 선택 이벤트 //
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

  // description: 단가 입력 이벤트 //
  const onPriceChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProductPrice(event.target.valueAsNumber);
  }

  

  // component //

  // effect //
  useEffect(() => {
    resetProductList();
    resetProductRequest();
  }, [pathname])

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
                <input className='name-search-input-box' placeholder='품명 입력' onChange={onProductNameInfoChangeHandler} />
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
                  <select className='product-info-search-type-combo-box-text' onChange={onProcurementCategoryInfoChangeHandler} name="procurement-category" id="procurement-category">
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
                  <input className='product-name-input' type='text' onChange={onProductNameChangeHandler} />
                </div>
                <div className='product-type'>
                  <div className='product-type-text'>조달구분</div>
                  <select className='product-type-combo-box-text' onChange={onProcurementCategoryChangeHandler} name="procurement-category" id="procurement-category">
                    <option value="전체">전체</option>
                    <option value="생산">매입</option>
                    <option value="구매">매출</option>
                  </select>
                </div>
                <div className='product-price'>
                  <div className='product-price-text'>단가</div>
                  <input className='product-price-input' onChange={onPriceChangeHandler} />
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
