import React, { ChangeEvent, useState } from 'react'

import SalesMenu from '../SalesMenu'

import './style.css'
import { useLocation } from 'react-router-dom';
import {  } from 'src/stores';
import { useOrderDetailListStore, useOrderInfoListRequestStore, useOrderListStore, usePutOrderInfoStore } from 'src/stores/sales/orderInfo';
import SearchCodeResponseDto from 'src/interfaces/response/common/search-code.response.dto';
import { GetCustomerCodeListRequestDto, GetEmployeeCodeListRequestDto, GetProjectCodeListRequestDto } from 'src/interfaces/request/common';
import { getCustomerCodeListRequest, getEmployeeCodeListRequest, getProjectCodeListRequest } from 'src/apis';
import GetSearchCodeListResponseDto from 'src/interfaces/response/common/get-search-code-list.response.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import CodeSearchListItem from 'src/components/CodeSearchListItem';
import OrderListItem from 'src/components/OrderListItem';
import OrderDetailListItem from 'src/components/OrderDetailListItem';

export default function OrderInfo() {
    //!          state          //
    // description : path 상태 //
    const { pathname } = useLocation();
    // description: 조회조건 정보 store //
    const { resetOrderInfoListRequest, setOrderInfoDateStart, setOrderInfoDateEnd, setOrderInfoCustomerCode, setOrderInfoSalesPlanCode, 
      orderInfoCustomerCode, orderInfoSalesPlanCode} = useOrderInfoListRequestStore();
    // description: 윗줄 데이터 입력 store //
    const { setPutOrderInfoOrderDate,setPutOrderInfoCustomerCode,setPutOrderInfoEmployeeCode,setPutOrderInfoProjectCode,
      putOrderInfoCustomerCode,putOrderInfoEmployeeCode,putOrderInfoProjectCode } = usePutOrderInfoStore();
    // description: 윗줄 조회 리스트 store //
    const { orderList, resetOrderList } = useOrderListStore();
    // description: 아랫줄 리스트 store //
    const { orderDetailList, resetOrderDetailList } = useOrderDetailListStore();
    // description: 조회조건 : 조건 검색창 오픈상태 //
    const [ open, setOpen ] = useState<boolean>(false);
    // description: 조회조건 : 조건 검색창 상단제목라벨 //
    const [ label, setLabel ] =useState<string>('');
    // description: 조회조건 : 조건 검색창 내부 데이터 상태 //
    const [ searchCodeList, setSearchCodeList ] = useState<SearchCodeResponseDto[]>([]);
    // description: 조회조건 : 조건 거래처명 //
    const [ customerName, setCustomerName ] =useState<string>('');
    // description: 조회조건 : 조건 프로젝트명 //
    const [ projectName, setProjectName ] =useState<string>('');
    // description: 입력창 선택 구분 //
    const [ clickState, setClickState ] =useState<string>('');
    // description: 입력창 사원명 //
    const [ inputEmployeeName, setInputEmployeeName ] =useState<string>('');
    // description: 입력창 거래처명 //
    const [ inputCustomerName, setInputCustomerName ] =useState<string>('');
    // description: 입력창 프로젝트명 //
    const [ inputProjectName, setInputProjectName ] =useState<string>('');

    //!               function              //
    // description: 거래처목록 조회 응답 함수 //
    const getCustomerCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {
      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
      setSearchCodeList(searchCodeList);
    }   
    // description: 판매계획 조회 응답 함수 //
    const getProjectCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {
      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
      setSearchCodeList(searchCodeList);
    }
    // description: 사원목록 조회 응답 함수 //
    const getEmployeeCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {

      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
      setSearchCodeList(searchCodeList);
    }   

    //!             event handler              //
    //!             Change Handler            //
    // description : 조회 : 주문 기간 Start 입력 이벤트 //
    const onOrderDateStartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setOrderInfoDateStart(event.target.value);
    }
    // description : 조회 : 주문 기간 End 입력 이벤트 //
    const onOrderDateEndChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setOrderInfoDateEnd(event.target.value);
    }
    // description : 조회 : 거래처코드 입력 이벤트 //
    const onCustomerCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setOrderInfoCustomerCode(value == '' ? null : Number(value));
      
      if(event.target.value === '') setCustomerName('');
    }
    // description : 조회 : 판매계획코드 입력 이벤트 //
    const onSalesPlanCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setOrderInfoSalesPlanCode(value == '' ? null : Number(value));

      if(event.target.value === '') setProjectName('');
    }
    // description: 주문날짜 입력 이벤트 처리 //
    const onOrderDateInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setPutOrderInfoOrderDate(event.target.value);
    }
    //!             Click Handler            //
    // description: 검색창 조회목록 아이템 클릭 이벤트 //
    const onDataItemClickHandler = ( item : SearchCodeResponseDto ) => {
      if(clickState.includes('사원')){
        setPutOrderInfoEmployeeCode(item.detailCode);
        setInputEmployeeName(item.name);
        return;
      }
      else if(clickState.includes('거래처')){
        setPutOrderInfoCustomerCode(item.detailCode);
        setInputCustomerName(item.name);
        return;
      }
      else if(clickState.includes('프로젝트')){
        setPutOrderInfoProjectCode(item.detailCode);
        setInputProjectName(item.name);
        console.log('vvvv');
        return;
      }
      if(label.includes('거래처')){
        setOrderInfoCustomerCode(item.detailCode);
        setCustomerName(item.name);
      }
      else if(label.includes('프로젝트')){
        setOrderInfoSalesPlanCode(item.detailCode);
        setProjectName(item.name);
      }
    }
    // description: 윗줄 입력 : 판매계획코드 코드도움 클릭 이벤트 처리 //
    const onSalesPlanCodeInputClickHandler = () => {
      setInputProjectName('');
      setPutOrderInfoProjectCode(null);
      setOpen(true);
      setLabel('프로젝트코드도움');
      setClickState('프로젝트코드');
      const data: GetProjectCodeListRequestDto = {
        salesPlanCode : putOrderInfoProjectCode,
      }
      getProjectCodeListRequest(data).then(getProjectCodeListResponseHandelr);
    }
    // description: 윗줄 입력 : 사원번호 코드도움 클릭 이벤트 처리 //
    const onEmployeeCodeInputClickHandler = () => {
      setInputEmployeeName('');
      
      setOpen(true);
      setLabel('사원코드도움');
      setClickState('사원코드');
      const data: GetEmployeeCodeListRequestDto = {
        employeeCode : putOrderInfoEmployeeCode,
      }
      getEmployeeCodeListRequest(data).then(getEmployeeCodeListResponseHandelr);
    }
    // description: 윗줄 입력 : 거래처 코드도움 클릭 이벤트 처리 //
    const onCustomerCodeInputClickHandler = () => {
      setInputCustomerName('');
      setPutOrderInfoCustomerCode(null);
      setOpen(true);
      setLabel('거래처코드도움');
      setClickState('거래처코드');
      const data: GetCustomerCodeListRequestDto = {
        customerCode : putOrderInfoCustomerCode,
      }
      getCustomerCodeListRequest(data).then(getCustomerCodeListResponseHandelr);
    }
    // description : 검색버튼 사원코드창 열기 이벤트 //
    const onCustomerSearchOpenButtonClickHandler = () => {
      setOpen(true);
      setLabel('거래처코드도움');
      const data: GetCustomerCodeListRequestDto = {
          customerCode : orderInfoCustomerCode,
      }
      getCustomerCodeListRequest(data).then(getCustomerCodeListResponseHandelr);
    }
    // description : 검색버튼 부서코드창 열기 이벤트 //
    const onProjectSearchOpenButtonClickHandler = () => {
      setOpen(true);
      setLabel('프로젝트코드도움');
      const data: GetProjectCodeListRequestDto = {
          salesPlanCode : orderInfoSalesPlanCode,
      }
      getProjectCodeListRequest(data).then(getProjectCodeListResponseHandelr);
    }
    // description: 검색창 닫기 //
    const onCloseButtonClickHandler = () => {
      setOpen(false);
    }

    //!         render : 윗줄 입력 아이템        //
    const OrderInputItem = () => {
      return (
        <div className='order-info-view-container-first-table-body-container'>
          <div className='order-info-view-container-first-table-body'>
               <div className='order-info-view-container-first-table-body-no'></div>
               <div className='order-info-view-container-first-table-body-order-code'></div> 
               <input className='order-info-view-container-first-table-body-order-date' onChange={onOrderDateInputChangeHandler}/>
               <input className='order-info-view-container-first-table-body-customer-code' value={inputCustomerName} onClick={onCustomerCodeInputClickHandler}/>
               <input className='order-info-view-container-first-table-body-project-code' value={inputProjectName} onClick={onSalesPlanCodeInputClickHandler}/>
               <input className='order-info-view-container-first-table-body-manager' value={inputEmployeeName} onClick={onEmployeeCodeInputClickHandler}/>
          </div>
        </div>
      )
    }
    //!         render : 아래줄 입력 아이템        //
    const OrderDetailInputItem = () => {
      return (
        <div className='order-info-view-container-first-table-body-container'>
          <div className='order-info-view-container-first-table-body'>
               <div className='order-info-view-container-first-table-body-no'></div>
               <input className='order-info-view-container-first-table-body-order-code'/>
               <input className='order-info-view-container-first-table-body-orderDetailCode'/>
               <input className='order-info-view-container-first-table-body-product-code'/>
               <input className='order-info-view-container-first-table-body-productName'/>
               <input className='order-info-view-container-first-table-body-order-quantity'/>
               <input className='order-info-view-container-first-table-body-price'/>
               <input className='order-info-view-container-first-table-body-total-price'/>
               <input className='order-info-view-container-first-table-body-content'/>
          </div>
        </div>
      )
    }

    //!          render          //
    return (
      <div id='order-info-wrapper'>
        <SalesMenu/>
        <div className='order-info-right'>
          <div className='order-info-top-container'>
            <div className='order-info-top-text'>수주 정보 등록</div>
          </div>
          <div className='order-info-divider'></div>
          <div className='order-info-view-top'>
            <div className='order-info-view-top-text'>수주 정보 조회</div>
          </div>
          <div className="order-big-wrapper">
            {/* 왼쪽 - 조건식, 리절트 두줄 */}
            <div className="order-left-container">
              <div className='invoice-right-top-search-condition'>
                <div className='invoice-right-top-search-dept'>
                    <div className='invoice-right-top-search-dept-text-bottom'>주문기간*</div>
                    <div className='invoice-right-top-search-dept-box-bottom'>
                        <div className='invoice-right-top-search-dept-box-code-box-bottom'>
                          <input className='invoice-right-top-search-dept-box-code-box-text-bottom'  onChange={onOrderDateStartChangeHandler} type="date" />
                        </div>
                        <div className="middle-text">~</div>
                        <div className='invoice-right-top-search-dept-box-code-box-bottom'>
                            <input className='invoice-right-top-search-dept-box-code-box-text-bottom'  onChange={onOrderDateEndChangeHandler} type="date" />
                        </div>
                    </div>
                </div>
                <div className='invoice-right-top-search-employee'>
                  <div className='invoice-right-top-search-employee-text'>거래처</div>
                  <div className='invoice-right-top-search-employee-box'>
                    <div className='invoice-right-top-search-employee-box-code-box'>
                      <input className='invoice-right-top-search-employee-box-code-box-text' value={orderInfoCustomerCode? orderInfoCustomerCode : ''} onChange={onCustomerCodeChangeHandler} type="text"/>
                    </div>
                    <div className='invoice-right-top-search-button' onClick={onCustomerSearchOpenButtonClickHandler}>검색</div>
                    <div className='invoice-right-top-search-employee-box-name-box'>
                          <input className='invoice-right-top-search-employee-box-name-box-text' value={customerName? customerName : ''} type="text" />
                    </div>
                  </div>              
                </div>
                <div className='invoice-right-top-search-employment-status'>
                <div className='invoice-right-top-search-employment-status-text'>프로젝트</div>
                    <div className='invoice-right-top-search-employee-box'>
                    <div className='invoice-right-top-search-employee-box-code-box'>
                    <input className='invoice-right-top-search-employee-box-code-box-text' value={orderInfoSalesPlanCode? orderInfoSalesPlanCode : ''} onChange={onSalesPlanCodeChangeHandler} type="text"/>
                    </div>
                    <div className='invoice-right-top-search-button' onClick={onProjectSearchOpenButtonClickHandler}>검색</div>
                    <div className='invoice-right-top-search-employee-box-name-box'>
                          <input className='invoice-right-top-search-employee-box-name-box-text' value={projectName? projectName : ''} type="text" />
                    </div>
                    </div>              
                </div>
              </div>
              {/* 윗줄 */}
              <div className='order-info-view-top'>
                <div className='order-info-view-top-result-text'>수주 등록( 1 SAVE PER 1 LINE )</div>
              </div>
              <div className='order-info-view-container'>
                <div className='order-info-view-container-box'>
                  <div className='order-info-view-container-first-table'>
                    <div className='order-info-view-container-first-table-title'>
                      <div className='order-info-view-container-first-table-title-no'>No</div>
                      <div className='order-info-view-container-first-table-title-order-code'>주문번호</div>
                      <div className='order-info-view-container-first-table-title-order-date'>주문일자</div>
                      <div className='order-info-view-container-first-table-title-cust-code'>거래처</div>
                      <div className='order-info-view-container-first-table-title-project-code'>프로젝트</div>
                      <div className='order-info-view-container-first-table-title-manager'>담당자</div>
                    </div>
                    { orderList != null && orderList.map( (item) => (<OrderListItem item = {item} />) ) }
                    <OrderInputItem />
                  </div>
                </div>
              </div>
              {/* 아래줄 */}
              <div className='order-info-view-container'>
                <div className='order-info-view-container-box'>
                  <div className='order-info-view-container-second-table'>
                    <div className='order-info-view-container-second-table-title'>
                      <div className='order-info-view-container-second-table-title-no'>No</div>
                      <div className='order-info-view-container-second-table-title-product-code'>품번</div>
                      <div className='order-info-view-container-second-table-title-product-name'>품명</div>
                      <div className='order-info-view-container-second-table-title-unit'>단위</div>
                      <div className='order-info-view-container-second-table-title-order-quantity'>주문수량</div>
                      <div className='order-info-view-container-second-table-title-price'>단가</div>
                      <div className='order-info-view-container-second-table-title-total-price'>합계금액</div>
                    </div>
                    { orderDetailList != null && orderDetailList.map( (item) => (<OrderDetailListItem item = {item} />) ) }
                    <OrderDetailInputItem />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-right-container">
              {open && <CodeSearchListItem label={label} dtoList={searchCodeList} onCloseButtonClick={onCloseButtonClickHandler} onDataItemClickHandler={onDataItemClickHandler}/>}
            </div>
          </div>
        </div>
      </div>
    )
}
