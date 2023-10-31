import React, { ChangeEvent, useEffect, useState } from 'react'

import SalesMenu from '../SalesMenu'

import './style.css'
import { useLocation } from 'react-router-dom';
import { useProductInfoStore, useProductResponseStore, useSalesPlanInfoStore, useSalesPlanRequestStore, useSalesPlanResponseStore, useSelectedSalesPlanStore, useSystemEmployeeInfoStore, useSystemEmployeeResponseStore } from 'src/stores';
import { GetProductListResponseDto } from 'src/interfaces/response/system';
import ResponseDto from 'src/interfaces/response/response.dto';
import { getProductListRequest, getSystemEmployeeListRequest } from 'src/apis';
import GetSystemEmployeeListResponseDto from 'src/interfaces/response/system/systemEmployee/get-system-employee-list.response.dto';
import { SalesPlanInfo } from 'src/stores/sales/salesPlan/salesplanlist.response.store';

export default function SalesPlan() {

  // state  //
  // description: path 상태 //
  const { pathname } = useLocation();

  // description: 신규 등록 시 사용자정의코드 정보 //
  const [ selectedNewUserDefineCode, setSelectedNewUserDefineCode ] = useState<number>(0);

  // description: 신규 등록 정보 //
  const { salesPlanCodeInfo, salesPlanProjectName, salesPlanDate, salesPlanProductCodeInfo, salesPlanProductNameInfo,
          salesPlanQuantity, salesPlanExpectPrice, salesPlanExpectTotalPrice, salesPlanEmployeeCodeInfo, salesPlanEmployeeNameInfo} = useSalesPlanInfoStore();
  const { setSalesPlanCodeInfo, setSalesPlanProjectName, setSalesPlanDate, setSalesPlanProductCodeInfo, setSalesPlanProductNameInfo,
          setSalesPlanQuantity, setSalesPlanExpectPrice, setSalesPlanExpectTotalPrice, setSalesPlanEmployeeCodeInfo, setSalesPlanEmployeeNameInfo, resetSalesPlanInfo } = useSalesPlanInfoStore();
  
  // description: 조회 조건 //
  const { salesProjectName, setSalesProjectName, resetSalesPlanRequest } = useSalesPlanRequestStore();
  
  // description: sales plan List 정보 불러오기 //
  const { salesPlanList, setSalesPlanList, resetSalesPlanList } = useSalesPlanResponseStore();
  
  // description: 선택된 sales plan 정보 //
  const { selectedSalesPlanCode, setSelectedSalesPlanCode } = useSelectedSalesPlanStore();

  //! 품목
  // description: 품목 창 상태 //
  const { salesPlanProductOpen, setSalesPlanProductOpen } = useSelectedSalesPlanStore();
  // description: 선택된 품명 //
  const { selectedSalesPlanProductName, setSelectedSalesPlanProductName } = useSelectedSalesPlanStore();
  // description: 선택된 품목코드 //
  const { selectedSalesPlanProductCode, setSelectedSalesPlanProductCode } = useSelectedSalesPlanStore();
  

  //! 사원
  // description: 사원 창 상태 //
  const { salesPlanEmployeeOpen, setSalesPlanEmployeeOpen } = useSelectedSalesPlanStore();
  // description: 선택된 사원명 //
  const { selectedSalesPlanEmployeeName, setSelectedSalesPlanEmployeeName } = useSelectedSalesPlanStore();
  // description: 선택된 사원코드 //
  const { selectedSalesPlanEmployeeCode, setSelectedSalesPlanEmployeeCode } = useSelectedSalesPlanStore();


  // function //

  // event handler //
  // description: 프로젝트 명 입력 (조회)//
  const onSalesPlanProjectNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSalesProjectName(event.target.value);
  }

  // description: 닫기 클릭 //
  const onCloseButtonClickHandler = () => {
    setSalesPlanProductOpen(false);
    setSalesPlanEmployeeOpen(false);

    setSelectedSalesPlanProductCode(0);
    setSelectedSalesPlanProductName("");

    setSelectedSalesPlanEmployeeCode(0);
    setSelectedSalesPlanEmployeeName("");

    setSelectedSalesPlanCode(0);
  }

  //!------------------------------------------------------------//

  //! product 창 //
  // description: 조회된 품목 정보 store //
  const { productList, setProductList, resetProductList } = useProductResponseStore();
  // description: 품목 정보 초기화 //
  const { resetProductInfo } = useProductInfoStore();
  // description: 품목 정보(창) 조회 응답 함수 //
  const getProductListResponseHandler = (responsebody: GetProductListResponseDto | ResponseDto) => {
    const {code} = responsebody;
    if(code === 'NE') alert('존재하지않는 회원입니다.');
    if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
    if(code === 'DE') alert('데이터베이스 에러');
    if(code === 'NP') alert('권한이 없습니다.');
    if(code !== 'SU') return;
    setSalesPlanProductOpen(true);
    setSalesPlanEmployeeOpen(false);

    const { productList } = responsebody as GetProductListResponseDto;
    setProductList(productList);
  }
  
  // description: product 조회 event handler //
  const onProductListSearchButtonClickHandler = (SalesPlanCode: number) => {
    setSelectedSalesPlanCode(SalesPlanCode);

    setSelectedSalesPlanProductCode(0);
    setSelectedSalesPlanProductName("");
    setSalesPlanProductCodeInfo(0);
    setSalesPlanProductNameInfo("");

    resetProductInfo();
    resetProductList();

    getProductListRequest("").then(getProductListResponseHandler);
  }

  // description: saleplan - productCode Detail 선택 //
  const onProductDetailDoubleClickHandler = (ProductCode: number, ProductName: string) => {
    if (selectedSalesPlanCode != 0) {
      setSelectedSalesPlanProductCode(ProductCode);
      setSelectedSalesPlanProductName(ProductName);
    } else {
      setSalesPlanProductCodeInfo(ProductCode);
      setSalesPlanProductNameInfo(ProductName);
    }

    setSalesPlanProductOpen(false);
  }

  //!------------------------------------------------------------//

  //! employee 창 //
  // description: 조회된 사원 정보 store //
  const { systemEmployeeList, setSystemEmployeeList, resetSystemEmployeeList } = useSystemEmployeeResponseStore()
  // description: 사원 정보 초기화 //
  const { resetSystemEmployeeInfo } = useSystemEmployeeInfoStore();
  // description: 사원 정보(창) 조회 응답 함수 //
  const getSystmeEmployeeListResponseHandler = (responsebody: GetSystemEmployeeListResponseDto | ResponseDto) => {
    const {code} = responsebody;
      if(code === 'NE') alert('존재하지않는 회원입니다.');
      if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
      if(code === 'DE') alert('데이터베이스 에러');
      if(code === 'NP') alert('권한이 없습니다.');
      if(code !== 'SU') return
      setSalesPlanEmployeeOpen(true);
      setSalesPlanProductOpen(false);

      const { systemEmployeeList } = responsebody as GetSystemEmployeeListResponseDto;
      setSystemEmployeeList(systemEmployeeList);
  }
  
  // description: 사원 조회 이벤트 핸들러 //
  const onSystemEmployeeListSearchButtonClickHandler = (SalesPlanCode: number) => {
    setSelectedSalesPlanCode(SalesPlanCode);

    setSelectedSalesPlanEmployeeCode(0);
    setSelectedSalesPlanEmployeeName("");
    setSalesPlanEmployeeCodeInfo(0);
    setSalesPlanEmployeeNameInfo("");

    resetSystemEmployeeInfo();
    resetSystemEmployeeList();

    getSystemEmployeeListRequest("").then(getSystmeEmployeeListResponseHandler);
  }

  // description: saleplan - 사원코드 Detail 선택 //
  const onSystemEmployeeDetailDoubleClickHandler = (EmployeeCode: number, EmployeeName: string) => {
    if (selectedSalesPlanCode != 0) {
      setSelectedSalesPlanEmployeeCode(EmployeeCode);
      setSelectedSalesPlanEmployeeName(EmployeeName);
    } else {
      setSalesPlanEmployeeCodeInfo(EmployeeCode);
      setSalesPlanEmployeeNameInfo(EmployeeName);
    }

    setSalesPlanEmployeeOpen(false);
  }

  //!------------------------------------------------------------//

  //! 기존 //
  // description: 기존 salsePlan - 프로젝트명 변경 이벤트 //
  const onExistProjectNameChangeEvent = (event: ChangeEvent<HTMLInputElement>, salesPlanInfo: SalesPlanInfo) => {
    if (!salesPlanList) return;
    const value = event.target.value;
    const newSalesPlanInfo: SalesPlanInfo = { ...salesPlanInfo, projectName: value };
    const newSalesPlanList: SalesPlanInfo[] = salesPlanList.map(item => item.salesPlanCode === newSalesPlanInfo.salesPlanCode ? newSalesPlanInfo : item);
    setSalesPlanList(newSalesPlanList);
  }

  // description: 기존 salsePlan - 판매계획일자 변경 이벤트 //
  const onExistPlanDateChangeEvent = (event: ChangeEvent<HTMLInputElement>, salesPlanInfo: SalesPlanInfo) => {
    if (!salesPlanList) return;
    const value = event.target.value;
    const newSalesPlanInfo: SalesPlanInfo = { ...salesPlanInfo, planDate: value };
    const newSalesPlanList: SalesPlanInfo[] = salesPlanList.map(item => item.salesPlanCode === newSalesPlanInfo.salesPlanCode ? newSalesPlanInfo : item);
    setSalesPlanList(newSalesPlanList);
  }

  // description: 기존 salsePlan - 계획수량 변경 이벤트 //
  const onExistPlanQuantityChangeEvent = (event: ChangeEvent<HTMLInputElement>, salesPlanInfo: SalesPlanInfo) => {
    if (!salesPlanList) return;
    const value = parseInt(event.target.value);
    const newSalesPlanInfo: SalesPlanInfo = { ...salesPlanInfo, planQuantity: value };
    const newSalesPlanList: SalesPlanInfo[] = salesPlanList.map(item => item.salesPlanCode === newSalesPlanInfo.salesPlanCode ? newSalesPlanInfo : item);
    setSalesPlanList(newSalesPlanList);
  }

  // description: 기존 salsePlan - 단가 변경 이벤트 //
  const onExistExpectPriceChangeEvent = (event: ChangeEvent<HTMLInputElement>, salesPlanInfo: SalesPlanInfo) => {
    if (!salesPlanList) return;
    const value = parseFloat(event.target.value);
    const newSalesPlanInfo: SalesPlanInfo = { ...salesPlanInfo, expectPrice: value };
    const newSalesPlanList: SalesPlanInfo[] = salesPlanList.map(item => item.salesPlanCode === newSalesPlanInfo.salesPlanCode ? newSalesPlanInfo : item);
    setSalesPlanList(newSalesPlanList);
  }


  //!------------------------------------------------------------//

  //! 신규 //
  // description: 신규 salsePlan - 프로젝트명 변경 이벤트 //
  const onProjectNameChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setSalesPlanProjectName(event.target.value);
  }

  // description: 신규 salsePlan - 판매계획일자 변경 이벤트 //
  const onPlanDateChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setSalesPlanDate(event.target.value);
  }

  // description: 신규 salsePlan - 계획수량 변경 이벤트 //
  const onPlanQuantityChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSalesPlanQuantity(value);
  }

  // description: 신규 salsePlan - 단가 변경 이벤트 //
  const onExpectPriceChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    setSalesPlanExpectPrice(value);
  }

  //!------------------------------------------------------------//
  


  //component //

  // effect //
  useEffect(() => {
    resetSalesPlanList();
    resetSalesPlanRequest();
  }, [pathname]);

  // render //
  return (
    <div id='sales-plan-wrapper'>
      <SalesMenu/>
      <div className='sales-plan-right'>
        <div className='sales-plan-top-container'>
          <div className='sales-plan-top-text'>판매 계획 등록</div>
        </div>
        <div className='sales-plan-divider'></div>
        <div className='sales-plan-view-top'>
          <div className='sales-plan-view-top-text'>판매 계획 정보 조회</div>
        </div>
        <div className='sales-plan-search-function'>
          <div className='sales-plan-search-container'>
            <div className='sales-plan-search-project-name'>
              <div className='sales-plan-search-project-name-text'>프로젝트 명</div>
            </div>
            <input className='sales-plan-search-project-name-box-name-box-text' type='text' onChange={onSalesPlanProjectNameChangeHandler} />
          </div>
        </div>
        <div>
          <div>
            <div className='sales-plan-view-top'>
              <div className='sales-plan-view-top-text'>판매 계획 정보 등록</div>
            </div>
            <div className='sales-plan-view-container'>
              <div className='sales-plan-view-container-box'>
                <div className='sales-plan-view-container-table'>
                  <div className='sales-plan-view-container-table-title'>
                    <div className='sales-plan-view-container-table-title-no'>No</div>
                    <div className='sales-plan-view-container-table-title-plan-code'>판매계획코드</div>
                    <div className='sales-plan-view-container-table-title-project-name'>프로젝트명</div>
                    <div className='sales-plan-view-container-table-title-plan-date'>판매계획일자</div>
                    <div className='sales-plan-view-container-table-title-product-code'>품번</div>
                    <div className='sales-plan-view-container-table-title-product-name'>품명</div>
                    <div className='sales-plan-view-container-table-title-plan-quantity'>계획수량</div>
                    <div className='sales-plan-view-container-table-title-expect-price'>단가</div>
                    <div className='sales-plan-view-container-table-title-expect-total-price'>합계액</div>
                    <div className='sales-plan-view-container-table-title-employee-name'>사원명</div>
                    <div className='sales-plan-view-container-table-title-employee-code'></div>
                  </div>
                  {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
                  <div className='sales-plan-view-container-table-body-container'>
                    {salesPlanList !== null &&
                      salesPlanList.map((item) => (
                        <div className='sales-plan-view-container-table-body' >
                          <div className='sales-plan-view-container-table-body-no'>{item.no}</div>
                          <div className='sales-plan-view-container-table-body-plan-code'>{item.salesPlanCode}</div>
                          <input className='sales-plan-view-container-table-body-project-name'      defaultValue={item.projectName}  onChange={event => onExistProjectNameChangeEvent(event, item)}  onFocus={() => setSelectedSalesPlanCode(item.salesPlanCode)}/>
                          <input className='sales-plan-view-container-table-body-plan-date'         defaultValue={item.planDate}     onChange={event => onExistPlanDateChangeEvent(event, item)}     onFocus={() => setSelectedSalesPlanCode(item.salesPlanCode)}/>
                          <div className='sales-plan-view-container-table-body-product-code'        onDoubleClick={() => onProductListSearchButtonClickHandler(item.salesPlanCode)}>{(selectedSalesPlanCode == item.salesPlanCode && selectedSalesPlanProductCode != 0) ? selectedSalesPlanEmployeeCode : item.productCode}</div>
                          <div className='sales-plan-view-container-table-body-product-name'        >{(selectedSalesPlanCode == item.salesPlanCode && selectedSalesPlanProductName != "") ? selectedSalesPlanEmployeeName : item.productName}</div>
                          <input className='sales-plan-view-container-table-body-plan-quantity'     defaultValue={item.planQuantity} onChange={event => onExistPlanQuantityChangeEvent(event, item)} onFocus={() => setSelectedSalesPlanCode(item.salesPlanCode)}/>
                          <input className='sales-plan-view-container-table-body-expect-price'      defaultValue={item.expectPrice}  onChange={event => onExistExpectPriceChangeEvent(event, item)}  onFocus={() => setSelectedSalesPlanCode(item.salesPlanCode)}/>
                          <div className='sales-plan-view-container-table-body-expect-total-price'  >defaultValue{(item.planQuantity) * (item.expectPrice)}</div>
                          <div className='sales-plan-view-container-table-body-employee-name'       onDoubleClick={() => onSystemEmployeeListSearchButtonClickHandler(item.salesPlanCode)} >{(selectedSalesPlanCode == item.salesPlanCode && selectedSalesPlanEmployeeName != "") ? selectedSalesPlanEmployeeName : item.employeeName}</div>
                          <div className='sales-plan-view-container-table-body-employee-code'       hidden>{(selectedSalesPlanCode == item.salesPlanCode && selectedSalesPlanEmployeeCode != 0) ? selectedSalesPlanEmployeeCode : item.employeeCode}</div>
                        </div>
                      ))}
                    <div className='sales-plan-view-container-table-body-new'>
                      <div className='sales-plan-view-container-table-body-new-no'></div>
                      <div className='sales-plan-view-container-table-body-new-plan-code'></div>
                      <input className='sales-plan-view-container-table-body-new-project-name'  value={salesPlanProjectName} type='text' onChange={onProjectNameChangeEvent}/>
                      <input className='sales-plan-view-container-table-body-new-plan-date'     value={salesPlanDate} type='text' onChange={onPlanDateChangeEvent}/>
                      <div className='sales-plan-view-container-table-body-new-product-code'  onDoubleClick={() => onProductListSearchButtonClickHandler(0)}>{salesPlanProductCodeInfo}</div>
                      <div className='sales-plan-view-container-table-body-new-product-name'>{salesPlanProductNameInfo}</div>
                      <input className='sales-plan-view-container-table-body-new-plan-quantity' value={salesPlanQuantity} type='text' onChange={onPlanQuantityChangeEvent}/>
                      <input className='sales-plan-view-container-table-body-new-expect-price'  value={salesPlanExpectPrice} type='text' onChange={onExpectPriceChangeEvent}/>
                      <div className='sales-plan-view-container-table-body-new-expect-total-price'>{salesPlanQuantity * salesPlanExpectPrice}</div>
                      <div className='sales-plan-view-container-table-body-new-employee-name' onDoubleClick={() => onSystemEmployeeListSearchButtonClickHandler(0)}>{salesPlanEmployeeNameInfo}</div>
                      <div className='sales-plan-view-container-table-body-new-employee-code' hidden>{salesPlanEmployeeCodeInfo}</div>
                    </div>
                  </div>
                  {/* 여기까지 */}
                </div>
              </div>
            </div>
          </div>
          {
            salesPlanProductOpen &&
              <div className='system-employee-info-middle-right'>
                <div className='system-employee-info-middle-right-user-define'>
                  <div className='system-employee-info-middle-right-user-define-top'>
                    <div className='system-employee-info-middle-right-user-define-top-right'>
                      <div className='system-employee-info-middle-right-user-define-top-right-text'>품목 정보</div>
                    </div>
                    <div className='system-employee-info-middle-right-user-define-top-left'>
                      <div className='system-employee-info-middle-right-user-define-top-left-text' onClick={onCloseButtonClickHandler}>닫기</div>
                      <div className='system-employee-info-middle-right-user-define-top-left-icon'></div>
                    </div>
                  </div>
                  <div className='system-employee-info-middle-right-user-define-container'>
                    <div className='system-employee-info-middle-right-user-define-list'>
                      <div className='system-employee-info-middle-right-user-define-list-title'>
                        <div className='system-employee-info-middle-right-user-define-list-title-detail-no'>No</div>
                        <div className='system-employee-info-middle-right-user-define-list-title-detail-code'>품목코드</div>
                        <div className='system-employee-info-middle-right-user-define-list-title-detail-name'>품명</div>
                      </div>
                      {
                        productList !== null &&
                        productList.map((item) => (
                          <div className='system-employee-info-middle-right-user-define-list-body'>
                            <div className='system-employee-info-middle-right-user-define-list-body-detail-no'>{item.no}</div>
                            <div className='system-employee-info-middle-right-user-define-list-body-detail-code'>{item.productCode}</div>
                            <div className='system-employee-info-middle-right-user-define-list-body-detail-name' onDoubleClick={() => { onProductDetailDoubleClickHandler(item.productCode, item.productName);} } >{item.productCode}</div>                      
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
            {
            salesPlanEmployeeOpen &&
              <div className='system-employee-info-middle-right'>
                <div className='system-employee-info-middle-right-user-define'>
                  <div className='system-employee-info-middle-right-user-define-top'>
                    <div className='system-employee-info-middle-right-user-define-top-right'>
                      <div className='system-employee-info-middle-right-user-define-top-right-text'>사원 정보</div>
                    </div>
                    <div className='system-employee-info-middle-right-user-define-top-left'>
                      <div className='system-employee-info-middle-right-user-define-top-left-text' onClick={onCloseButtonClickHandler}>닫기</div>
                      <div className='system-employee-info-middle-right-user-define-top-left-icon'></div>
                    </div>
                  </div>
                  <div className='system-employee-info-middle-right-user-define-container'>
                    <div className='system-employee-info-middle-right-user-define-list'>
                      <div className='system-employee-info-middle-right-user-define-list-title'>
                        <div className='system-employee-info-middle-right-user-define-list-title-detail-no'>No</div>
                        <div className='system-employee-info-middle-right-user-define-list-title-detail-code'>사원코드</div>
                        <div className='system-employee-info-middle-right-user-define-list-title-detail-name'>사원명</div>
                      </div>
                      {
                        systemEmployeeList !== null &&
                        systemEmployeeList.map((item) => (
                          <div className='system-employee-info-middle-right-user-define-list-body'>
                            <div className='system-employee-info-middle-right-user-define-list-body-detail-no'>{item.no}</div>
                            <div className='system-employee-info-middle-right-user-define-list-body-detail-code'>{item.employeeCode}</div>
                            <div className='system-employee-info-middle-right-user-define-list-body-detail-name' onDoubleClick={() => { onSystemEmployeeDetailDoubleClickHandler(item.employeeCode, item.employeeName);} } >{item.employeeName}</div>                      
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
        </div>
      </div>
    </div>
  )
}
