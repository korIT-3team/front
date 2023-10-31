import React, { ChangeEvent, useEffect, useState } from 'react'

import SystemMenu from '../SystemMenu'

import { useLocation } from 'react-router-dom';

import { useProductInfoStore, useProductRequestStore, useProductResponseStore, useProductUserDefineResponseStore, useSelectedProductInfoStore } from 'src/stores';

import './style.css'
import { ProductInfo } from 'src/stores/systemProduct/productlist.response.store';
import { getProductUserDefineListRequest } from 'src/apis';
import ResponseDto from 'src/interfaces/response/response.dto';
import GetProductUserDefineListResponseDto from 'src/interfaces/response/system/get-product-user-define-detail-list.response.dto';

export default function Product() {

  // state //
  // description: path 상태 //
  const { pathname } = useLocation();

  // description: product 신규 등록시 사용자정의코드 정보 //
  const [ selectedNewUserDefineCode, setSelectedNewUserDefineCode ] = useState<number>(0);

  // description: Product 신규등록 정보 상태 //
  const { productCodeInfo, productNameInfo, procurementCategoryCode, procurementCategoryName, productPriceInfo } = useProductInfoStore();
  const { setProductCodeInfo, setProductNameInfo, setProcurementCategoryCode, setProcurementCategoryName, setProductPriceInfo } = useProductInfoStore();

  // description: 조회 조건 정보 store //
  const { productName, setProductName, resetProductRequest } = useProductRequestStore();
  
  // description: Product List 정보 불러오기
  const { productList, setProductList, resetProductList } = useProductResponseStore();
  
  // description: 선택 품목 코드 //
  const {selectedProductCode, setSelectedProductCode} = useSelectedProductInfoStore();


  //! 사용자정의
  // description: product - 조회된 사용자정의코드 정보 store //
  const { productUserDefineList, setProductUserDefineList, resetProductUserDefineList } = useProductUserDefineResponseStore();
  // description: 사용자정의 창 상태 //
  const { productUserDefineOpen, setProductUserDefineOpen } = useSelectedProductInfoStore();

  // description: product - 선택된 사용자정의 코드 //
  const { selectedUserDefineCode, setSelectedUserDefineCode } = useSelectedProductInfoStore();
  // description: product - 선택된 사용자정의 코드 detailName //
  const { selectedProcurementCategoryName, setSelectedProcurementCategoryName } = useSelectedProductInfoStore();
  const { selectedProcurementCategoryCode, setSelectedProcurementCategoryCode } = useSelectedProductInfoStore();


  // function //

  // event handler //

  //! 품명 조회 //
  // description: 품명 입력 이벤트 //
  const onProductNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  }

  // description: 닫기 클릭 //
  const onCloseButtonClickHandler = () => {
    setProductUserDefineOpen(false);

    setSelectedProcurementCategoryName("");
    setSelectedProcurementCategoryCode(0);

    setSelectedProductCode(0);
    setSelectedUserDefineCode(0);
  }

  //! 코드도움
  // description: product - 코드도움 조회 응답 함수 //
  const getProductUserDefineDetailResponseHandler = (responsebody: GetProductUserDefineListResponseDto | ResponseDto) => {
    const {code} = responsebody;
    if(code === 'NE') alert('존재하지않는 회원입니다.');
    if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
    if(code === 'DE') alert('데이터베이스 에러');
    if(code === 'NP') alert('권한이 없습니다.');
    if(code !== 'SU') return;

    const { productUserDefineList } = responsebody as GetProductUserDefineListResponseDto;

    setProductUserDefineOpen(true);
    resetProductUserDefineList();
    setProductUserDefineList(productUserDefineList);
  }

  //# 조회된 productList - 사용자정의코드 선택 //
  // description: 사용자정의코드 더블클릭 //
  const onUserDefineDoubleClickHandler = (UserDefineNumber: number, ProductCode: number) => {
    setSelectedProductCode(ProductCode);
    setSelectedUserDefineCode(UserDefineNumber);
    setSelectedProcurementCategoryCode(0);
    setSelectedProcurementCategoryName("");
    getProductUserDefineListRequest(UserDefineNumber).then(getProductUserDefineDetailResponseHandler);
  }

  //# 신규 PRODUCT - 사용자정의코드 선택 //
  // description: 사용자정의코드 더블클릭
  const onNewUserDefineDoubleClickHandler = (UserDefineNumber: number) => {
    setSelectedProductCode(0);
    setSelectedUserDefineCode(0);
    setSelectedProductCode(0);
    setSelectedUserDefineCode(0);
    setSelectedProcurementCategoryCode(0);
    setSelectedProcurementCategoryName("");
    setSelectedNewUserDefineCode(UserDefineNumber);
    getProductUserDefineListRequest(UserDefineNumber).then(getProductUserDefineDetailResponseHandler);
  }

  // description: product - 코드도움 detail 선택 //
  const onUserDefineDetailDoubleClickHandler = (UserDefineDetailCode: number, UserDefineDetailName: string ) => {
    if (selectedProductCode != 0) {
      if (selectedUserDefineCode == 9004) {
        setSelectedProcurementCategoryName(UserDefineDetailName);
        setSelectedProcurementCategoryCode(UserDefineDetailCode);
      }  
    } else {
      if (selectedUserDefineCode == 9004) {
        setProcurementCategoryName(UserDefineDetailName);
        setProcurementCategoryCode(UserDefineDetailCode);
      }   
    }
    setProductUserDefineOpen(false);
  }
    

  // -------------------------------------------------------------------
  //! 기존 //

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

  //! 신규 //

  // description: 품명 변경 이벤트 처리 //
  const onProductNameChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setProductNameInfo(event.target.value);
  }

  // description: 단가 변경 이벤트 처리 //
  const onProductPriceChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
      setProductPriceInfo(parseFloat(event.target.value));
  }
 


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
        <div className='product-info-container'>
          <div className='product-info-container-detail'>
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
                    <div className='product-info-view-container-table-title-procurement-category' onDoubleClick={() => onUserDefineDoubleClickHandler} >조달구분</div>
                    <div className='product-info-view-container-table-title-procurement-category-code'></div>
                    <div className='product-info-view-container-table-title-product-price'>단가</div>
                  </div>
                  {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
                  <div className='product-info-view-container-table-body-container'>
                    { productList !== null && productList.map((item) => (
                      <div className='product-info-view-container-table-body'>
                        <div className='product-info-view-container-table-body-no'>{item.no}</div>
                        <div className='product-info-view-container-table-body-product-code'>{item.productCode}</div>
                        <input className='product-info-view-container-table-body-product-name' defaultValue={item.productName} type='text' onChange={event => onExistProductNameChangeEvent(event, item)} onFocus={() => setSelectedProductCode(item.productCode)} />
                        <div className='product-info-view-container-table-body-procurement-category'      onDoubleClick={() => onUserDefineDoubleClickHandler(9004, item.productCode)} >{ (selectedProductCode == item.productCode && selectedProcurementCategoryName != "") ? selectedProcurementCategoryName : item.procurementCategoryName }</div>
                        <div className='product-info-view-container-table-body-procurement-category-code' hidden>{ (selectedProductCode == item.productCode && selectedProcurementCategoryCode != 0) ? selectedProcurementCategoryCode : item.procurementCategoryCode }</div>
                        <input className='product-info-view-container-table-body-product-price' defaultValue={item.productPrice} onChange={event => onExistProductPriceChangeEvent(event, item)} onFocus={() => setSelectedProductCode(item.productCode)} />
                      </div>
                    ))}
                    <div className='product-info-view-container-table-body-new'>
                      <div className='product-info-view-container-table-body-new-no'></div>
                      <div className='product-info-view-container-table-body-new-product-code'></div>
                      <input className='product-info-view-container-table-body-new-product-name' value={productNameInfo} type='text' onChange={onProductNameChangeEvent}/>
                      <div className='product-info-view-container-table-body-new-procurement-category'      onDoubleClick={() => onNewUserDefineDoubleClickHandler(9004)}>{procurementCategoryName}</div>
                      <div className='product-info-view-container-table-body-new-procurement-category-code' hidden>{procurementCategoryCode}</div>
                      <input className='product-info-view-container-table-body-new-product-price' value={productPriceInfo} onChange={onProductPriceChangeEvent}/>
                    </div>
                  </div>
                  {/* 여기까지 */}
                </div>
              </div>
            </div>
          </div>
          {
            productUserDefineOpen &&
            <div className='product-info-middle-right'>
              <div className='product-info-middle-right-user-define'>
                <div className='product-info-middle-right-user-define-top'>
                  <div className='product-info-middle-right-user-define-top-right'>
                    <div className='product-info-middle-right-user-define-top-right-text'>{productUserDefineList !== null && productUserDefineList[0].systemUserDefineName}</div>
                    <div className='product-info-middle-right-user-define-top-right-code'>( {productUserDefineList !== null && productUserDefineList[0].systemUserDefineCode} )</div>
                  </div>
                  <div className='product-info-middle-right-user-define-top-left'>
                    <div className='product-info-middle-right-user-define-top-left-text' onClick={onCloseButtonClickHandler}>X</div>
                    <div className='product-info-middle-right-user-define-top-left-icon'></div>
                  </div>
                </div>
                <div className='product-info-middle-right-user-define-container'>
                  <div className='product-info-middle-right-user-define-list'>
                    <div className='product-info-middle-right-user-define-list-title'>
                      <div className='product-info-middle-right-user-define-list-title-detail-no'>No</div>
                      <div className='product-info-middle-right-user-define-list-title-detail-code'>세부코드</div>
                      <div className='product-info-middle-right-user-define-list-title-detail-name'>세부명</div>
                    </div>
                    {
                      productUserDefineList !== null &&
                      productUserDefineList.map((item) => (
                        <div className='product-info-middle-right-user-define-list-body'>
                          <div className='product-info-middle-right-user-define-list-body-detail-no'>{item.no}</div>
                          <div className='product-info-middle-right-user-define-list-body-detail-code'>{item.systemUserDefineDetailCode}</div>
                          <div className='product-info-middle-right-user-define-list-body-detail-name' onDoubleClick={() => { onUserDefineDetailDoubleClickHandler(item.systemUserDefineDetailCode, item.systemUserDefineDetailName);} } >{item.systemUserDefineDetailName}</div>                      
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          }
          {
            
          }
        </div>
      </div>
    </div>
  )
}
