import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import AccountingMenu from '../AccountingMenu'
import { useInOutComeListStore, useInOutComeRequestStore } from 'src/stores'
import InOutComeListItem from 'src/components/InOutComeListItem';
import { useLocation } from 'react-router-dom';
import SearchCodeResponseDto from 'src/interfaces/response/common/search-code.response.dto';
import GetSearchCodeListResponseDto from 'src/interfaces/response/common/get-search-code-list.response.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import CodeSearchListItem from 'src/components/CodeSearchListItem';
import { GetCustomerCodeListRequestDto, GetProjectCodeListRequestDto } from 'src/interfaces/request/common';
import { getCustomerCodeListRequest, getProjectCodeListRequest } from 'src/apis';

export default function InOutComeList() {
     //!          state          //
     // description : path 상태 //
     const { pathname } = useLocation();
     // description: 조회조건 정보 store //
     const { inOutComeCustomerCode, inOutComeSalesPlanCode, setFundDateStart, setFundDateEnd, setInOutComeCustomerCode, setInOutComeSalesPlanCode, resetInOutComeRequst} = useInOutComeRequestStore();
     // description: 리스트 store //
     const {inOutComeList, resetInOutComeList} = useInOutComeListStore();
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

     //!               function              //
     // description: 검색창 거래처목록 조회 응답 함수 //
     const getCustomerCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {
          const {code} = responsebody;
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code !== 'SU') return;

          const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
          setSearchCodeList(searchCodeList);
     }   
     // description: 검색창 판매계획 조회 응답 함수 //
     const getProjectCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {

          const {code} = responsebody;
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code !== 'SU') return;

          const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
          setSearchCodeList(searchCodeList);
     }


     //!             event handler              //
     // description: 검색창 조회목록 아이템 클릭 이벤트 //
     const onDataItemClickHandler = ( item : SearchCodeResponseDto ) => {
          if(label.includes('거래처')){
          setInOutComeCustomerCode(item.detailCode);
          setCustomerName(item.name);
          }
          else if(label.includes('프로젝트')){
          setInOutComeSalesPlanCode(item.detailCode);
          setProjectName(item.name);
          }
     }
     // description : 검색버튼 사원코드창 열기 이벤트 //
     const onCustomerSearchOpenButtonClickHandler = () => {
          setOpen(true);
          setLabel('거래처코드도움');
          const data: GetCustomerCodeListRequestDto = {
               customerCode : inOutComeCustomerCode,
          }
          getCustomerCodeListRequest(data).then(getCustomerCodeListResponseHandelr);
     }
     // description : 검색버튼 부서코드창 열기 이벤트 //
     const onProjectSearchOpenButtonClickHandler = () => {
          setOpen(true);
          setLabel('프로젝트코드도움');
          const data: GetProjectCodeListRequestDto = {
               salesPlanCode : inOutComeSalesPlanCode,
          }
          getProjectCodeListRequest(data).then(getProjectCodeListResponseHandelr);
     }
     // description: 검색창 닫기 //
     const onCloseButtonClickHandler = () => {
          setOpen(false);
     }
     // description : 결의 기간 Start 입력 이벤트 //
     const onFundDateStartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          setFundDateStart(event.target.value);
     }
     // description : 결의 기간 End 입력 이벤트 //
     const onFundDateEndChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          setFundDateEnd(event.target.value);
     }
     // description : 거래처코드 입력 이벤트 //
     const onCustomerCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          const reg = /^[0-9]*$/;
          const value = event.target.value;
          const isNumber = reg.test(value);
          if (isNumber) setInOutComeCustomerCode(value == '' ? null : Number(value));
          
          if(event.target.value === '') setCustomerName('');
     }
     // description : 판매계획코드 입력 이벤트 //
     const onSalesPlanCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          const reg = /^[0-9]*$/;
          const value = event.target.value;
          const isNumber = reg.test(value);
          if (isNumber) setInOutComeSalesPlanCode(value == '' ? null : Number(value));

          if(event.target.value === '') setProjectName('');
     }
     
     //!                effect               //
     // description : path가 바뀔 때마다 실행 //
     useEffect(()=>{
          resetInOutComeRequst();
          resetInOutComeList();
     }, [pathname])
     
     
     //!          render          //
     return (
     <div id='inoutcome-wrapper'>
          <AccountingMenu />
          <div className='invoice-right'>
            <div className='invoice-right-top'>
              <div className='invoice-right-top-title'>매입매출장</div>
              <div className='invoice-right-top-divider'></div>
              <div className='invoice-right-top-search-condition'>
                    <div className='invoice-right-top-search-dept'>
                         <div className='invoice-right-top-search-dept-text-bottom'>결의 기간*</div>
                         <div className='invoice-right-top-search-dept-box-bottom'>
                              <div className='invoice-right-top-search-dept-box-code-box-bottom'>
                                   <input className='invoice-right-top-search-dept-box-code-box-text-bottom'  onChange={onFundDateStartChangeHandler} type="date" />
                              </div>
                              <div className="middle-text">~</div>
                              <div className='invoice-right-top-search-dept-box-code-box-bottom'>
                                   <input className='invoice-right-top-search-dept-box-code-box-text-bottom'  onChange={onFundDateEndChangeHandler} type="date" />
                              </div>
                         </div>
                    </div>
                    <div className='invoice-right-top-search-employee'>
                    <div className='invoice-right-top-search-employee-text'>거래처</div>
                         <div className='invoice-right-top-search-employee-box'>
                         <div className='invoice-right-top-search-employee-box-code-box'>
                         <input className='invoice-right-top-search-employee-box-code-box-text' value={inOutComeCustomerCode? inOutComeCustomerCode : ''} onChange={onCustomerCodeChangeHandler} type="text"/>
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
                         <input className='invoice-right-top-search-employee-box-code-box-text' value={inOutComeSalesPlanCode? inOutComeSalesPlanCode : ''} onChange={onSalesPlanCodeChangeHandler} type="text"/>
                         </div>
                         <div className='invoice-right-top-search-button' onClick={onProjectSearchOpenButtonClickHandler}>검색</div>
                         <div className='invoice-right-top-search-employee-box-name-box'>
                              <input className='invoice-right-top-search-employee-box-name-box-text' value={projectName? projectName : ''} type="text" />
                         </div>
                         </div>              
                    </div>
               </div>
              
              {/* 검색결과 */}
              <div id='bottom-wrapper'>
                    {/* 거래일자 코드 거래처 적요 과세유형 수입 지출 잔액 */}
               <div className="inoutcomelist-search-result">
                    <div className="inoutcomelist-search-result-list-text">Total {inOutComeList === null ? 0 : inOutComeList.length} EA</div>
                    <div className="inoutcomelist-search-result-list-container">
                    <div className="inoutcomelist-search-result-list-title">
                         <div className="inoutcome-title-number"></div>
                         <div className="inoutcome-title-date">거래일자</div>
                         <div className="inoutcome-title-invoice-code">코드</div>
                         <div className="inoutcome-title-invoice-customer">거래처</div>
                         <div className="inoutcome-title-invoice-content">적요</div>
                         <div className="inoutcome-title-invoice-type">과세유형</div>
                         <div className="inoutcome-title-inoutcome-income">수입</div>
                         <div className="inoutcome-title-inoutcome-outcome">지출</div>
                         <div className="inoutcome-title-inoutcome-balance">잔액</div>
                    </div>
                    {
                        !inOutComeList || inOutComeList.length==0  ? (<div className='nothing-data-form'>조회된 데이터가 없습니다.</div>) : (<div> { inOutComeList !== null && inOutComeList.map( (item) => (<InOutComeListItem item = {item} />) ) }</div> )
                    }
                    
                    </div>
               </div>
               {open && <CodeSearchListItem label={label} dtoList={searchCodeList} onCloseButtonClick={onCloseButtonClickHandler} onDataItemClickHandler={onDataItemClickHandler}/>}
              </div>
            </div>
          </div>
     </div>
  )
}
