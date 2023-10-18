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
  const { productName, setProductName } = useProductInfoStore();
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
    setProductName(event.target.value);
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
        <div className='sales-plan-search-container'>
          <div className='sales-plan-search-container-top'>
            <div className='sales-plan-search-container-top-dept'>
              <div className='sales-plan-search-container-top-dept-text'>부서*</div>
              <div className='sales-plan-search-container-top-dept-box'>
                <input className='sales-plan-search-container-top-dept-box-input' type='text' onChange={onDepartmentCodeChangeHandler} />
                <div className='sales-plan-search-dept-search-button'>검색</div>
                <div className='sales-plan-search-dept-search-input-box-display'>
                  <div className='sales-plan-search-dept-search-input-box-display-text'>1000</div>
                </div>
              </div>
            </div>
            <div className='sales-plan-search-container-top-employee'>
              <div className='sales-plan-search-container-top-employee-text'>사원*</div>
              <div className='sales-plan-search-container-top-employee-box'>
                <input className='sales-plan-search-container-top-employee-box-input' type='text' onChange={onEmployeeCodeChangeHandler} />
                <div className='sales-plan-search-employee-search-button'>검색</div>
                <div className='sales-plan-search-employee-search-input-box-display'>
                  <div className='sales-plan-search-employee-search-input-box-display-text'>2000</div>
                </div>
              </div>
            </div>
            {/* 계획일자 */}
            <div className='sales-plan-search-container-top-plan-date'>
              <div className='sales-plan-search-container-top-plan-date-text'>계획 일자*</div>
              <div className='sales-plan-search-container-top-plan-date-container'>
                <div className='sales-plan-search-container-top-plan-date-select-box'>
                  <input className='sales-plan-search-container-top-plan-date-select' />
                </div>
              </div>
            </div>
            {/* 계획일자 */} 
          </div>
          <div className='sales-plan-register-container-top'>
            <div className='sales-plan-register-container-top-product-code'>
              <div className='sales-plan-register-container-top-product-code-text'>품번*</div>
              <div className='sales-plan-register-container-top-product-code-box'>
                <input className='sales-plan-register-product-code-input' type='text' onChange={onProductCodeChangeHandler} />
              </div>
            </div>
            <div className='sales-plan-register-container-top-product-name'>
              <div className='sales-plan-register-container-top-product-name-text'>품명*</div>
              <div className='sales-plan-register-container-top-product-name-box'>
                <input className='sales-plan-register-product-name-input' type='text' onChange={onProductNameInfoChangeHandler} />
              </div>
            </div>
            <div className='sales-plan-register-container-top-unit'>
              <div className='sales-plan-register-container-top-unit-text'>단위*</div>
              <div className='sales-plan-register-container-top-unit-box'>
                <input className='sales-plan-register-unit-input' defaultValue={'EA'} />
              </div>
            </div>
            <div className='sales-plan-register-container-top-quantity'>
              <div className='sales-plan-register-container-top-quantity-text'>계획 수량*</div>
              <div className='sales-plan-register-container-top-quantity-box'>
                <input className='sales-plan-register-quantity-input' type='text' onChange={onPlanQuantityInfoChangeHandler} />
              </div>
            </div>
          </div>
          <div className='sales-plan-register-container-bottom'>
            <div className='sales-plan-register-container-bottom-exchange-type'>
              <div className='sales-plan-register-container-bottom-exchange-type-text'>환종*</div>
              <div className='sales-plan-register-container-bottom-exchange-type-box'>
                <div className='sales-plan-register-container-bottom-exchange-type-combo-box'>
                  <select className='sales-plan-register-container-bottom-exchange-typer-combo-box-text' onChange={onExchangeRateTypeChangeHandler} name="exchange-rate-code" id="exchange-rate-code" >
                    <option value="선택">선택</option>
                    <option value="USD">USD</option>
                    <option value="JPY">JPY</option>
                    <option value="EUR">EUR</option>
                    <option value="THB">THB</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='sales-plan-register-container-bottom-exchange-rate'>
              <div className='sales-plan-register-container-bottom-exchange-rate-text'>환율*</div>
              <div className='sales-plan-register-container-bottom-exchange-rate-box'>
                <div className='sales-plan-register-container-bottom-exchange-rate-container'>
                  <div className='exchange-rate-display'>tempNumber</div>
                </div>
              </div>
            </div>
            <div className='sales-plan-register-container-bottom-price'>
              <div className='sales-plan-register-container-bottom-price-text'>예상 단가*</div>
              <div className='sales-plan-register-container-bottom-price-box'>
                <input className='sales-plan-register-price-input' type='text' onChange={onExpectPriceChangeHandler} />
              </div>
            </div>
            <div className='sales-plan-register-container-bottom-total-price'>
              <div className='sales-plan-register-container-bottom-total-price-text'>예상 금액*</div>
              <div className='sales-plan-register-container-bottom-total-price-box'>
                <div className='sales-plan-register-container-bottom-total-price-container'>
                  <div className='total-price-display'>tempTotalPrice</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sales-plan-register-button-container'>
          <div className='sales-plan-register-button'>
            <div className='sales-plan-register-button-text'>등록</div>
          </div>
        </div>
        <div className='sales-plan-view-top'>
          <div className='sales-plan-view-top-text'>판매 계획</div>
        </div>
        <div className='sales-plan-view-container'>
          <div className='sales-plan-view-container-box'>
            <div className='sales-plan-view-container-table'>
              <div className='sales-plan-view-container-table-title'>
                <div className='sales-plan-view-container-table-title-no'>No</div>
                <div className='sales-plan-view-container-table-title-product-code'>품번</div>
                <div className='sales-plan-view-container-table-title-product-name'>품명</div>
                <div className='sales-plan-view-container-table-title-unit'>단위</div>
                <div className='sales-plan-view-container-table-title-plan-quantity'>계획수량</div>
                <div className='sales-plan-view-container-table-title-exchange-rate-type'>환종</div>
                <div className='sales-plan-view-container-table-title-exchange-rate'>환율</div>
                <div className='sales-plan-view-container-table-title-expect-price'>예상단가</div>
                <div className='sales-plan-view-container-table-title-expect-total-price'>예상금액</div>
                <div className='sales-plan-view-container-table-title-expect-korean-price'>예상원화금액</div>
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='sales-plan-view-container-table-body'>
                <div className='sales-plan-view-container-table-body-no'>1</div>
                <div className='sales-plan-view-container-table-body-product-code'>4000</div>
                <div className='sales-plan-view-container-table-body-product-name'>책1</div>
                <div className='sales-plan-view-container-table-body-unit'>EA</div>
                <div className='sales-plan-view-container-table-body-plan-quantity'>30</div>
                <div className='sales-plan-view-container-table-body-exchange-rate-type'>달러</div>
                <div className='sales-plan-view-container-table-body-exchange-rate'>1330.00</div>
                <div className='sales-plan-view-container-table-body-expect-price'>20.00$</div>
                <div className='sales-plan-view-container-table-body-expect-total-price'>1,000.00$</div>
                <div className='sales-plan-view-container-table-body-expect-korean-price'>1,330,000원</div>
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
