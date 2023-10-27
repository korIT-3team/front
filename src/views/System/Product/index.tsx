import React, { ChangeEvent, useEffect, useState } from 'react'

import SystemMenu from '../SystemMenu'

import { useLocation, useNavigate } from 'react-router-dom';

import { useProductInfoStore, useProductRequestStore, useProductResponseStore, useSelectedProductInfoStore } from 'src/stores';

import './style.css'
import { ProductInfo } from 'src/stores/systemProduct/productlist.response.store';
import { GetProcurementCategoryListResponseDto, ProcurementCategoryResponseDto } from 'src/interfaces/response/system';
import { getProcurementCategoryRequest } from 'src/apis';
import ResponseDto from 'src/interfaces/response/response.dto';

export default function Product() {

  // state //
  // description: path 상태 //
  const { pathname } = useLocation();

  // description: product 신규 등록시 사용자정의코드 정보 //
  const [ selectedNewUserDefineCode, setSelectedNewUserDefineCode ] = useState<number>(0);

  // description: 조회 조건 정보 store //
  const { productName, setProductName, resetProductRequest } = useProductRequestStore();
  
  // description: Product 정보 상태 //
  const { productCodeInfo, productCompanyCode, productNameInfo, procurementCategoryInfo, productPriceInfo } = useProductInfoStore();
  const { setProductCodeInfo, setProductCompanyCode, setProductNameInfo, setProcurementCategoryInfo, setProductPriceInfo } = useProductInfoStore();

  // description: Product List 정보 불러오기
  const { productList, setProductList, resetProductList } = useProductResponseStore();
  
  // description: 선택 품목 코드 //
  const {selectedProductCode, setSelectedProductCode} = useSelectedProductInfoStore();

  //! 조달구분 //
  // description: 조달구분 창 상태 //
  const { productProcurementCategoryOpen, setProductProcurementCategoryOpen } = useSelectedProductInfoStore();
  // description: product - 선택된 조달구분 //
  const { selectedProcurementCategory, setSelectedProcurementCategory } = useSelectedProductInfoStore();
  // description: product - 선택된 조달구분코드 //
  const { selectedProcurementCategoryCode, setSelectedProcurementCategoryCode } = useSelectedProductInfoStore();

  //! 사용자정의
  // description: product - 조회된 사용자정의코드 정보 store //

  // description: 기존 품목 선택 상태 //
  const [prodInfoList, setProdInfoList] = useState<boolean>(false);

  // description: 새로 품목 선택 상태 //
  const [newProdInfo, setNewProdInfo] = useState<boolean>(true);
  
  // description: 조달구분 리스트 store //
  const [ procurementCategoryList, setProcurementCategoryList ] = useState<ProcurementCategoryResponseDto[]>([]);
  
  // function //
  const navigator = useNavigate();

  // event handler //
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

  // -------------------------------------------------------------------

  //! 품명 조회 //
  // description: 품명 입력 이벤트 //
  const onProductNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
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


  // description: price 변경 이벤트 처리 //
  const onExistProductPriceChangeEvent = (event: ChangeEvent<HTMLInputElement>, productInfo: ProductInfo) => {

    if(!productList) return;
    const value = parseFloat(event.target.value);
    const newProductInfo: ProductInfo = { ...productInfo, productPrice:value };
    const newProductList: ProductInfo[] = productList.map(item => item.productCode === newProductInfo.productCode ? newProductInfo : item);
    setProductList(newProductList);
  }

  // -------------------------------------------------------------------

  //!       신규 품목       //
  // description: 품명 변경 이벤트 처리 //
  const onProductNameChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setProductNameInfo(event.target.value);
  }

  // description: 단가 변경 이벤트 처리 //
  const onProductPriceChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setProductPriceInfo(value);
    }
  }
  

  
  
  // -------------------------------------------------------------------




  // -------------------------------------------------------------------

 


  // component //

  // effect //
  // description : path가 바뀔 때마다 실행 //
  useEffect(()=> {
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
                { productList !== null && productList.map((item) => (
                  <div className='product-info-view-container-table-body'>
                    <div className='product-info-view-container-table-body-no' onClick={onProductInfoListClickHandler} >{item.no}</div>
                    <div className='product-info-view-container-table-body-product-code' onClick={onProductInfoListClickHandler} >{item.productCode}</div>
                    { productList ? (<input className='product-info-view-container-table-body-product-name' defaultValue={item.productName} type='text' onChange={event => onExistProductNameChangeEvent(event, item)} onFocus={() => setSelectedProductCode(item.productCode)} />) : (<input className='product-info-view-container-table-body-product-name' defaultValue={item.productName} type='text' disabled />) }
                    <div className='product-info-view-container-table-body-procurement-category'></div>                   
                    { productList ? (<input className='product-info-view-container-table-body-product-price' defaultValue={item.productPrice} onChange={event => onExistProductPriceChangeEvent(event, item)} onFocus={() => setSelectedProductCode(item.productCode)} />) : (<input className='product-info-view-container-table-body-product-price'/>) }
                  </div>
                ))}
                <div className='product-info-view-container-table-body-new' onClick={onNewProductInfoClickHandler} onFocus={() => setSelectedProductCode(null)}>
                  <div className='product-info-view-container-table-body-new-no'></div>
                  <div className='product-info-view-container-table-body-new-product-code'></div>
                  <input className='product-info-view-container-table-body-new-product-name' value={productNameInfo} type='text' onChange={onProductNameChangeEvent}/>
                  <div className='product-info-view-container-table-body-new-procurement-category'></div>
                  <input className='product-info-view-container-table-body-new-product-price' value={productPriceInfo} onChange={onProductPriceChangeEvent}/>
                </div>
              </div>
              {/* 여기까지 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
