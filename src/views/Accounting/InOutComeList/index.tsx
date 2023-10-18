import React, { ChangeEvent, useEffect } from 'react'
import './style.css'
import AccountingMenu from '../AccountingMenu'
import { useInOutComeListStore, useInOutComeRequestStore } from 'src/stores'
import InOutComeListItem from 'src/components/InOutComeListItem';
import { useLocation } from 'react-router-dom';

export default function InOutComeList() {
     //!          state          //
     // description : path 상태 //
     const { pathname } = useLocation();
     // description: 조회조건 정보 store //
     const {setFundDateStart, setFundDateEnd, setInOutComeCustomerCode, setInOutComeSalesPlanCode, resetInOutComeRequst} = useInOutComeRequestStore();
     // description: 리스트 store //
     const {inOutComeList, resetInOutComeList} = useInOutComeListStore();


     //!             event handler              //
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
     }
     // description : 판매계획코드 입력 이벤트 //
     const onSalesPlanCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          const reg = /^[0-9]*$/;
          const value = event.target.value;
          const isNumber = reg.test(value);
          if (isNumber) setInOutComeSalesPlanCode(value == '' ? null : Number(value));
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
                         <input className='invoice-right-top-search-employee-box-code-box-text' onChange={onCustomerCodeChangeHandler} type="text"/>
                         </div>
                         <div className='invoice-right-top-search-button'>검색</div>
                         <div className='invoice-right-top-search-employee-box-name-box'>
                         <div className='invoice-right-top-search-employee-box-name-box-text'>거래처명</div>
                         </div>
                         </div>              
                    </div>
                    <div className='invoice-right-top-search-employment-status'>
                    <div className='invoice-right-top-search-employment-status-text'>프로젝트</div>
                         <div className='invoice-right-top-search-employee-box'>
                         <div className='invoice-right-top-search-employee-box-code-box'>
                         <input className='invoice-right-top-search-employee-box-code-box-text' onChange={onSalesPlanCodeChangeHandler} type="text"/>
                         </div>
                         <div className='invoice-right-top-search-button'>검색</div>
                         <div className='invoice-right-top-search-employee-box-name-box'>
                         <div className='invoice-right-top-search-employee-box-name-box-text'>프로젝트명</div>
                         </div>
                         </div>              
                    </div>
               </div>
              
              {/* 검색결과 */}
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
                  { inOutComeList !== null && inOutComeList.map( (item) => (<InOutComeListItem item = {item} />) ) }
                </div>
              </div>
            </div>
          </div>
     </div>
  )
}
