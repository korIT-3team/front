import React, { ChangeEvent, useEffect } from 'react'
import SearchViewMenu from '../SearchViewMenu'
import { useLocation } from 'react-router-dom';
import { useFundsListStore, useFundslistsRequestStore } from 'src/stores';
import './style.css'
import FundsListItem from 'src/components/FundsListItem';

export default function FundsList() {
     //!          state          //
     // description : path 상태 //
     const { pathname } = useLocation();
     // description: 조회조건 정보 store //
     const {setFundslistDateStart, setFundslistDateEnd, resetFundslistsRequst} = useFundslistsRequestStore();
     // description: 리스트 store //
     const {fundsList, resetFundsList} = useFundsListStore();

     //!             event handler              //
     // description : 결의 기간 Start 입력 이벤트 //
     const onFundDateStartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          setFundslistDateStart(event.target.value);
     }
     // description : 결의 기간 End 입력 이벤트 //
     const onFundDateEndChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          setFundslistDateEnd(event.target.value);
     }

     //!                    effect                   //
     // description : path가 바뀔 때마다 실행 //
     useEffect(()=>{
          resetFundslistsRequst();
          resetFundsList();
     }, [pathname])

     return (
     <div id='fundslist-wrapper'>
          <SearchViewMenu />
          <div className='funds-right'>
            <div className='funds-right-top'>
              <div className='funds-right-top-title'>사내자금현황</div>
              <div className='funds-right-top-divider'></div>
              <div className='funds-right-top-search-condition'>
                    <div className='funds-right-top-search-dept'>
                         <div className='funds-right-top-search-dept-text-bottom'>결의 기간*</div>
                         <div className='funds-right-top-search-dept-box-bottom'>
                              <div className='funds-right-top-search-dept-box-code-box-bottom'>
                                   <input className='funds-right-top-search-dept-box-code-box-text-bottom'  onChange={onFundDateStartChangeHandler} type="date" />
                              </div>
                              <div className="middle-text">~</div>
                              <div className='funds-right-top-search-dept-box-code-box-bottom'>
                                   <input className='funds-right-top-search-dept-box-code-box-text-bottom'  onChange={onFundDateEndChangeHandler} type="date" />
                              </div>
                         </div>
                    </div>
               </div>
              
              {/* 검색결과 */}
              {/* 거래일자 코드 거래처 적요 과세유형 수입 지출 잔액 */}
              <div className="fundslist-search-result">
                <div className="fundslist-search-result-list-text">Total {fundsList === null ? 0 : fundsList.length} EA</div>
                <div className="fundslist-search-result-list-container">
                  <div className="fundslist-search-result-list-title">
                    <div className="fundslist-title-number"></div>
                    <div className="fundslist-title-date">결의일자</div>
                    <div className="fundslist-title-funds-customer">거래처</div>
                    <div className="fundslist-title-funds-content">적요</div>
                    <div className="fundslist-title-funds-type">구분</div>
                    <div className="fundslist-title-income">수입</div>
                    <div className="fundslist-title-outcome">지출</div>
                    <div className="fundslist-title-balance">잔액</div>
                  </div>
                    {
                    !fundsList || fundsList.length==0  ? (<div className='nothing-data-form'>조회된 데이터가 없습니다.</div>) : (<div> { fundsList !== null && fundsList.map( (item) => (<FundsListItem item = {item} />) ) }</div> )
                    }
                </div>
              </div>
            </div>
          </div>
     </div>
     )
}
