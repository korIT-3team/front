import React, { ChangeEvent, useEffect } from 'react'

import SalesMenu from '../SalesMenu'

import './style.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useProductInfoStore, useSalesPlanInfoStore, useSalesPlanRequestStore, useSalesPlanResponseStore } from 'src/stores';
import { GetSalesPlanListResponseDto } from 'src/interfaces/response/sales';
import ResponseDto from 'src/interfaces/response/response.dto';

export default function SalesPlan() {

  // state  //
  // description: path 상태 //
  const { pathname } = useLocation();
  // description: SalesPlan 정보 상태 //
  const { salesPlanCodeInfo, employeeCodeInfo, departmentCodeInfo,
    salesPlanDate, salesPlanProductCode,
    planQuantity ,exchangeRateCode, exchangeRate,
    expectPrice, expectTotalPrice, expectKoreanPrice, 
    setSalesPlanCodeInfo ,setEmployeeCodeInfo, setDepartmentCodeInfo,
    setSalesPlanDate, setSalesPlanProductCode,
    setPlanQuantity, setExchangeRateCode, setExchangeRate,
    setExpectPrice, setExpectTotalPrice, setExpectKoreanPrice } = useSalesPlanInfoStore();
  // description: 품명 정보 상태 //
  const { productNameInfo, setProductNameInfo } = useProductInfoStore();
  // description: 조회조건 정보 store //
  const { setSalesPlanCode, setProjectName, resetSalesPlanRequest } = useSalesPlanRequestStore();
  // description: SalesPlan 정보 불러오기 //
  const { salesPlanList, setSalesPlanList, resetSalesPlanList } = useSalesPlanResponseStore();

  // function //
  const navigator = useNavigate();

  // event handler //
  // description: 부서코드 입력 이벤트 //
  const onDepartmentCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[0-9]*$/;
    const value = event.target.value;
    const isNumber = reg.test(value);
    if (isNumber) setDepartmentCodeInfo(Number(value));
  }

  // description: 사원코드 입력 이벤트 //
  const onEmployeeCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[0-9]*$/;
    const value = event.target.value;
    const isNumber = reg.test(value);
    if (isNumber) setEmployeeCodeInfo(Number(value));
  }

  // description: 품번 입력력 이벤트 //
  const onProductCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[0-9]*$/;
    const value = event.target.value;

    const isNumber = reg.test(value);
    if (isNumber) setSalesPlanProductCode(Number(value));
  }
  // description: 품명 입력 이벤트 //
  const onProductNameInfoChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProductNameInfo(event.target.value);
  }

  // description: 계획수량 입력 이벤트 //
  const onPlanQuantityInfoChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[0-9]*$/;
    const value = event.target.value;
    const isNumber = reg.test(value);
    if (isNumber) setPlanQuantity(Number(value));
  }

  // description: 환종 선택 이벤트 //
  const onExchangeRateTypeChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    let type = 0;

    if (value === '선택') type = 0;
    if (value === 'USD') type = 1;
    if (value === 'JPY') type = 2;
    if (value === 'EUR') type = 3;
    if (value === 'THB') type = 4;

    setExchangeRateCode(type);
  }

  // description: 환율 표시 이벤트 //
  const onExchangeRateDisplayChangeHandler = (event: ChangeEvent<HTMLDivElement>) => {

  }

  // description: 예상 단가 입력 이벤트 //
  const onExpectPriceChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[+-]?([0-9]*[.])?[0-9]+$/;
    const value = event.target.value;
    const isNumber = reg.test(value);
    if (isNumber) setExpectPrice(Number(value));
  }

  // description: 예상 금액 표기 이벤트 //
  const onExpectTotalPriceDisplayChangeHandler = (event: ChangeEvent<HTMLDivElement>) => {
    
  }

  //component //

  // effect //
  useEffect(() => {
    resetSalesPlanList();
    resetSalesPlanRequest();
  }, [pathname])

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
            <div className='sales-plan-search-plan-code'>
              <div className='sales-plan-search-plan-code-text'>판매계획코드</div>
            </div>
            <input className='sales-plan-search-plan-code-box-name-box-text' />
          </div>
          <div className='sales-plan-search-container'>
            <div className='sales-plan-search-project-name'>
              <div className='sales-plan-search-project-name-text'>프로젝트 명</div>
            </div>
            <input className='sales-plan-search-project-name-box-name-box-text' />
          </div>
          <div className='sales-plan-search-container'>
            <div className='sales-plan-search-plan-date'>
              <div className='sales-plan-search-plan-date-text'>판매계획일자</div>
            </div>
            <input className='sales-plan-search-plan-date-box-name-box-text' />
          </div>
        </div>
        <div className='sales-plan-view-top'>
          <div className='sales-plan-view-top-text'>판매 계획 정보 등록</div>
        </div>
        <div className='sales-plan-view-container'>
          <div className='sales-plan-view-container-box'>
            <div className='sales-plan-view-container-first-table'>
              <div className='sales-plan-view-container-first-table-title'>
                <div className='sales-plan-view-container-first-table-title-no'>No</div>
                <div className='sales-plan-view-container-first-table-title-plan-code'>판매계획코드</div>
                <div className='sales-plan-view-container-first-table-title-project-name'>프로젝트명</div>
                <div className='sales-plan-view-container-first-table-title-dept-code'>부서코드</div>
                <div className='sales-plan-view-container-first-table-title-emp-code'>사원코드</div>
                <div className='sales-plan-view-container-first-table-title-plan-date'>판매계획일자</div>
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='sales-plan-view-container-first-table-body-container'>
                <div className='sales-plan-view-container-first-table-body' >
                  <div className='sales-plan-view-container-first-table-body-no'> </div>
                  <input className='sales-plan-view-container-first-table-body-plan-code' />
                  <input className='sales-plan-view-container-first-table-body-project-name' />
                  <input className='sales-plan-view-container-first-table-body-dept-code' />
                  <input className='sales-plan-view-container-first-table-body-emp-code' />
                  <input className='sales-plan-view-container-first-table-body-plan-date' />
                </div>
                <div className='sales-plan-view-container-first-table-body-new'>
                  <div className='sales-plan-view-container-first-table-body-new-no'> </div>
                  <input className='sales-plan-view-container-first-table-body-new-plan-code' />
                  <input className='sales-plan-view-container-first-table-body-new-project-name' />
                  <input className='sales-plan-view-container-first-table-body-new-dept-code' />
                  <input className='sales-plan-view-container-first-table-body-new-emp-code' />
                  <input className='sales-plan-view-container-first-table-body-new-plan-date' />
                </div>
              </div>
              {/* 여기까지 */}
            </div>
          </div>
        </div>
        <div className='sales-plan-view-container'>
          <div className='sales-plan-view-container-box'>
            <div className='sales-plan-view-container-second-table'>
              <div className='sales-plan-view-container-second-table-title'>
                <div className='sales-plan-view-container-second-table-title-no'>No</div>
                <div className='sales-plan-view-container-second-table-title-product-code'>품번</div>
                <div className='sales-plan-view-container-second-table-title-product-name'>품명</div>
                <div className='sales-plan-view-container-second-table-title-unit'>단위</div>
                <div className='sales-plan-view-container-second-table-title-plan-quantity'>계획수량</div>
                <div className='sales-plan-view-container-second-table-title-exchange-type'>환종</div>
                <div className='sales-plan-view-container-second-table-title-exchange-rate'>환율</div>
                <div className='sales-plan-view-container-second-table-title-expect-price'>예상단가</div>
                <div className='sales-plan-view-container-second-table-title-expect-total-price'>예상금액</div>
                <div className='sales-plan-view-container-second-table-title-expect-korean-price'>예상원화금액</div>
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='sales-plan-view-container-second-table-body-container'>
                <div className='sales-plan-view-container-second-table-body' >
                  <div className='sales-plan-view-container-second-table-body-no'></div>
                  <input className='sales-plan-view-container-second-table-body-product-code' />
                  <input className='sales-plan-view-container-second-table-body-product-name' />
                  <input className='sales-plan-view-container-second-table-body-unit' />
                  <input className='sales-plan-view-container-second-table-body-plan-quantity' />
                  <input className='sales-plan-view-container-second-table-body-exchange-type' />
                  <input className='sales-plan-view-container-second-table-body-exchange-rate' />
                  <input className='sales-plan-view-container-second-table-body-expect-price' />
                  <input className='sales-plan-view-container-second-table-body-expect-total-price' />
                  <div className='sales-plan-view-container-second-table-body-expect-korean-price'></div>
                </div>
                <div className='sales-plan-view-container-second-table-body-new'>
                  <div className='sales-plan-view-container-second-table-body-new-no'> </div>
                  <input className='sales-plan-view-container-second-table-body-new-product-code' />
                  <input className='sales-plan-view-container-second-table-body-new-product-name' />
                  <input className='sales-plan-view-container-second-table-body-new-unit' />
                  <input className='sales-plan-view-container-second-table-body-new-plan-quantity' />
                  <input className='sales-plan-view-container-second-table-body-new-exchange-type' />
                  <input className='sales-plan-view-container-second-table-body-new-exchange-rate' />
                  <input className='sales-plan-view-container-second-table-body-new-expect-price' />
                  <input className='sales-plan-view-container-second-table-body-new-expect-total-price' />
                  <div className='sales-plan-view-container-second-table-body-new-expect-korean-price'></div>
                </div>
              </div>
              {/* 여기까지 */}
            </div>
          </div>
        </div>
        <div className='sales-plan-bottom'>
          <div className='sales-plan-bottom-button-save'>
            <div className='sales-plan-bottom-button-save-text'>수정 및 저장</div>
          </div>
          <div className='sales-plan-bottom-button-cancel'>
            <div className='sales-plan-bottom-button-cancel-text'>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}
