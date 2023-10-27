import React, { ChangeEvent, useEffect, useState } from 'react'

import SalesMenu from '../SalesMenu'

import './style.css'
import { useLocation } from 'react-router-dom';
import { useSalesPlanInfoStore, useSalesPlanRequestStore, useSalesPlanResponseStore, useSelectedSalesPlanStore } from 'src/stores';

export default function SalesPlan() {

  // state  //
  // description: path 상태 //
  const { pathname } = useLocation();

  // description: 신규 등록 시 사용자정의코드 정보 //
  const [ selectedNewUserDefineCode, setSelectedNewUserDefineCode ] = useState<number>(0);

  // description: 신규 등록 정보 //
  const { salesPlanCodeInfo, salesPlanProjectName, salesPlanDate, salesPlanProductCode, salesPlanProductName,
          salesPlanQuantity, salesPlanExpectPrice, salesPlanExpectTotalPrice, salesPlanEmployeeCode, salesPlanEmployeeName} = useSalesPlanInfoStore();
  const { setSalesPlanCodeInfo, setSalesPlanProjectName, setSalesPlanDate, setSalesPlanProductCode, setSalesPlanProductName,
          setSalesPlanQuantity, setSalesPlanExpectPrice, setSalesPlanExpectTotalPrice, setSalesPlanEmployeeCode, setSalesPlanEmployeeName, resetSalesPlanInfo } = useSalesPlanInfoStore();
  
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



  // function //

  // event handler //
  


  //component //

  // effect //

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
            <input className='sales-plan-search-project-name-box-name-box-text'/>
          </div>
        </div>
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
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='sales-plan-view-container-table-body-container'>
                <div className='sales-plan-view-container-table-body' >
                  <div className='sales-plan-view-container-table-body-no'></div>
                  <div className='sales-plan-view-container-table-body-plan-code'></div>
                  <input className='sales-plan-view-container-table-body-project-name'/>
                  <input className='sales-plan-view-container-table-body-plan-date'/>
                  <div className='sales-plan-view-container-table-body-product-code'></div>
                  <div className='sales-plan-view-container-table-body-product-name'></div>
                  <input className='sales-plan-view-container-table-body-plan-quantity'/>
                  <input className='sales-plan-view-container-table-body-expect-price'/>
                  <div className='sales-plan-view-container-table-body-expect-total-price'></div>
                  <div className='sales-plan-view-container-table-body-employee-name'></div>
                </div>
                <div className='sales-plan-view-container-table-body-new'>
                  <div className='sales-plan-view-container-table-body-new-no'></div>
                  <div className='sales-plan-view-container-table-body-new-plan-code'></div>
                  <input className='sales-plan-view-container-table-body-new-project-name'/>
                  <input className='sales-plan-view-container-table-body-new-plan-date'/>
                  <div className='sales-plan-view-container-table-body-new-product-code'></div>
                  <div className='sales-plan-view-container-table-body-new-product-name'></div>
                  <input className='sales-plan-view-container-table-body-new-plan-quantity'/>
                  <input className='sales-plan-view-container-table-body-new-expect-price'/>
                  <div className='sales-plan-view-container-table-body-new-expect-total-price'></div>
                  <div className='sales-plan-view-container-table-body-new-employee-name'></div>
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
