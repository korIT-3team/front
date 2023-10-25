import React, { ChangeEvent, useEffect, useState } from 'react'

import SystemMenu from '../SystemMenu'

import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_PATH, SYSTEM_PRODUCT_INFO } from 'src/constants';

import { useProductInfoStore, useProductRequestStore, useProductResponseStore, useSelectedProductStore } from 'src/stores';

import './style.css'
import { ProductInfo } from 'src/stores/systemProduct/productlist.response.store';

export default function Product() {

  // state //
  // description: path 상태 //
  const { pathname } = useLocation();

  // description: 조회 조건 정보 store //
  const { setProductCode, setProductName, resetProductRequest } = useProductRequestStore();
  
  // description: Product 정보 상태 //
  const { productCodeInfo, productCompanyCode, productNameInfo, procurementCategoryInfo, productPriceInfo } = useProductInfoStore();
  const { setProductCodeInfo, setProductCompanyCode, setProductNameInfo, setProcurementCategoryInfo, setProductPriceInfo } = useProductInfoStore();

  // description: Product List 정보 불러오기
  const { productList, setProductList, resetProductList } = useProductResponseStore();
  
  // description: 선택 품목 코드 //
  const {selectedProductCode, setSelectedProductCode} = useSelectedProductStore();

  // description: 기존 품목 선택 상태 //
  const [prodInfoList, setProdInfoList] = useState<boolean>(false);

  // description: 새로 품목 선택 상태 //
  const [newProdInfo, setNewProdInfo] = useState<boolean>(true);
  
  
  // function //
  const navigator = useNavigate();

  // event handler //
  // -------------------------------------------------------------------
  // description: 품목정보 수정을 위한 클릭 //
  const onProductInfoListClickHandler = () => {
    setProdInfoList(true);
    setNewProdInfo(false);
  }

  // description: 새로운 품목정보 입력을 위한 클릭 //
  const onNewProductInfoClickHandler = () => {
    setProdInfoList(false);
    setNewProdInfo(true);
  }

  // description: 품목코드 입력 //
  const onProductCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[0-9]*$/;
    const value = event.target.value;

    const isNumber = reg.test(value);
    if (isNumber) setProductCodeInfo(Number(value));
  }

  // description: 품명 입력 이벤트 //
  const onProductNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/ // 알파벳, 숫자, 한글만 허용하는 정규식, 특수문자 제외 
    const value = event.target.value;

    const isValid = reg.test(value);
    if (isValid) setProductNameInfo(value);
  }

  // -------------------------------------------------------------------
  //!       존재하는 품목       //
  // description: 품명 변경 이벤트 처리 //
  const onExistProductNameChangeEvent = (event: ChangeEvent<HTMLInputElement>, productInfo: ProductInfo) => {
    
    if(!productList) return;
    const value = event.target.value;
    const newProductInfo: ProductInfo = { ...productInfo, productName: value };
    const newProductList: ProductInfo[] = productList.map(item => item.productCode === newProductInfo.productCode ? newProductInfo : item);
    setProductList(newProductList);
  }

  // description: 조달구분 변경 이벤트 처리 //
  const onExistProcurementCategoryChangeEvent = (event: ChangeEvent<HTMLSelectElement>, productInfo: ProductInfo) => {
    
    if(!productList) return;
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
    const newProductInfo: ProductInfo = { ...productInfo, procurementCategory: type };
    const newProductList: ProductInfo[] = productList.map(item => item.productCode === newProductInfo.productCode ? newProductInfo : item);
    setProductList(newProductList);
  }

  // description: price 변경 이벤트 처리 //
  const onExistProductPriceChangeEvent = (event: ChangeEvent<HTMLInputElement>, productInfo: ProductInfo) => {

    if(!productList) return;
    const value = parseInt(event.target.value, 10)
    const newProductInfo: ProductInfo = { ...productInfo, productPrice:value };
    const newProductList: ProductInfo[] = productList.map(item => item.productCode === newProductInfo.productCode ? newProductInfo : item);
    setProductList(newProductList);
  }

  // -------------------------------------------------------------------

  //!       신규 품목 변경 이벤트 처리       //
  // description: product name //
  const onProductNameChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  }

  // description: procurementCategory //
  const onProcurementCategoryChangeEvent = (event: ChangeEvent<HTMLSelectElement>) => {
    if(!productList) return;
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

  // description: productPrice //
  const onProductPriceChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setProductPriceInfo(event.target.valueAsNumber);
  }
  
  // -------------------------------------------------------------------



  // -------------------------------------------------------------------

  // description: 수정 및 저장 버튼 클릭 이벤트 //
  const onSaveButtonClickHandler = () => {
    navigator(SYSTEM_PRODUCT_INFO);
  }

  // description: 취소버튼 클릭 이벤트 //
  const onCancelButtonClickHandler = () => {
    navigator(HOME_PATH);
  }

  // -------------------------------------------------------------------



  // // description: 조달구분 선택 이벤트 //
  // const onProcurementCategoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
  //   const value = event.target.value;
  //   let type = 0;
  //   if(value === '전체'){
  //     type = 0;
  //   }
  //   else if(value === '생산'){
  //     type = 1;
  //   }
  //   else if(value === '구매'){
  //     type = 2;
  //   }
  //   setProcurementCategory(type);
  // }

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
        <div className='product-info-view-top'>
          <div className='product-info-view-top-text'>품목 정보 조회</div>
        </div>
        <div className='product-info-search-function'>
          <div className='product-info-search-container'>
            <div className='product-info-search-product-code'>
              <div className='product-info-search-product-code-text'>품목 코드</div>
            </div>
            <input className='product-info-search-product-code-box-name-box-text' type='text' onChange={onProductCodeChangeHandler} />
          </div>
          <div className='product-info-search-container'>
            <div className='product-info-search-product-name'>
              <div className='product-info-search-product-name-text'>품명</div>
            </div>
            <input className='product-info-search-product-name-box-name-box-text' type='text' onChange={onProductNameChangeHandler} />
          </div>
        </div>
        <div className='product-info-view-top'>
          <div className='product-info-view-top-text'>품목 정보 등록</div>
        </div>
        <div className='product-info-view-container'>
          <div className='product-info-view-container-box'>
            <div className='product-info-view-container-table'>
              <div className='product-info-view-container-table-title'>
                <div className='product-info-view-container-table-title-no'>No</div>
                <div className='product-info-view-container-table-title-product-code'>품번</div>
                <div className='product-info-view-container-table-title-product-name'>품명</div>
                <div className='product-info-view-container-table-title-procurement-category'>조달구분</div>
                <div className='product-info-view-container-table-title-product-price'>단가</div>
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='product-info-view-container-table-body-container'>
                { productList !== null &&
                  productList.map((item) => (
                    <div className='product-info-view-container-table-body'>
                      <div className='product-info-view-container-table-body-no'            onClick={onProductInfoListClickHandler}>{item.no}</div>
                      <div className='product-info-view-container-table-body-product-code'  onClick={onProductInfoListClickHandler}>{item.productCode}</div>
                      { productList ? (<input className='product-info-view-container-table-body-product-name' defaultValue={item.productName} type='text' onChange={event => onExistProductNameChangeEvent(event, item)} onFocus={() => setSelectedProductCode(item.productCode)} />) : (<input className='product-info-view-container-table-body-product-name' defaultValue={item.productName} type='text' disabled />) }
                      { productList ? (<select className='product-info-view-container-table-body-procurement-category' defaultValue={item.procurementCategory} onChange={event => onExistProcurementCategoryChangeEvent(event, item)} name='procurement-category' id='procurement-category' onFocus={() => setSelectedProductCode(item.productCode)} ><option value="">전체</option></select>) : (<select  className='product-info-view-container-table-body-procurement-category' defaultValue={item.procurementCategory} name='procurement-category' id='procurement-category' ><option value="">전체</option></select>)}
                      { productList ? (<input className='product-info-view-container-table-body-product-price' defaultValue={(item.productPrice)} onChange={event => onExistProductPriceChangeEvent(event, item)} onFocus={() => setSelectedProductCode(item.productCode)} />) : (<input className='product-info-view-container-table-body-product-price' defaultValue={item.productPrice} disabled />)}
                    </div>
                  ))}

                <div className='product-info-view-container-table-body-new' onClick={onNewProductInfoClickHandler} onFocus={() => setSelectedProductCode(null)} >
                  <div className='product-info-view-container-table-body-new-no'></div>
                  <div className='product-info-view-container-table-body-new-product-code'></div>
                  <input className='product-info-view-container-table-body-new-product-name'          value={productNameInfo} type='text' onChange={onProductNameChangeEvent} />
                  <select className='product-info-view-container-table-body-new-procurement-category'  value={procurementCategoryInfo} onChange={onProcurementCategoryChangeEvent}><option value="">전체</option></select>
                  <input className='product-info-view-container-table-body-new-product-price'         value={productPriceInfo} onChange={onProductPriceChangeEvent}/>
                </div>
              </div>
              {/* 여기까지 */}
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
