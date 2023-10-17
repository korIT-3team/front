import React, { ChangeEvent, useEffect } from 'react'
import './style.css'
import SearchViewMenu from '../SearchViewMenu'
import { useLocation } from 'react-router-dom';
import { useIncentiveViewListRequestStore, useIncentiveViewListStore, useUserStore } from 'src/stores';
import IncentiveViewListItem from 'src/components/IncentiveListItem';
import { INCENTIVE_CATEGORY } from 'src/constants';

export default function IncentiveViewList() {

    //!          state          //
    // description : path 상태 //
    const { pathname } = useLocation();
    const { user } = useUserStore();
    // description: 조회조건 정보 store //
    const { setIncentiveViewListEmployeeCode, setIncentiveViewListDateStart, setIncentiveViewListDateEnd, setIncentiveViewListCategory, resetIncentiveViewListRequst} = useIncentiveViewListRequestStore();
    // description: 리스트 store //
    const { incentiveViewList, resetIncentiveViewList} = useIncentiveViewListStore();

    //!             event handler              //
     // description : 지급기간 Start 입력 이벤트 //
     const onPaymentDateStartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          setIncentiveViewListDateStart(event.target.value);
     }
     // description : 지급기간 End 입력 이벤트 //
     const onPaymentDateEndChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          setIncentiveViewListDateEnd(event.target.value);
     }
     // description : 재직구분 선택 이벤트 //
     const onIncentiveCategoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
          const value = event.target.value;
          let type = null;
          if(value === '전체'){
          type = null;
          }
          else if(value === INCENTIVE_CATEGORY.SALARY){
          type = 1;
          }
          else if(value === INCENTIVE_CATEGORY.BONUS){
          type = 2;
          }
          setIncentiveViewListCategory(type);
     }

     //!                    effect                   //
     // description : path가 바뀔 때마다 실행 //
     useEffect(()=>{
          resetIncentiveViewListRequst();
          resetIncentiveViewList();
          if(!user){
               alert('로그인이 필요합니다.');
               return;
          }
          setIncentiveViewListEmployeeCode(user?.employeeCode);
     }, [pathname])

     //!         render        //
     return (
        <div id='emplyoeeListVeiw-wrapper'>
              <SearchViewMenu />
              <div className='funds-right'>
               <div className='funds-right-top'>
               <div className='funds-right-top-title'>급여정보조회</div>
               <div className='funds-right-top-divider'></div>
               <div className='funds-right-top-search-condition'>
                         <div className='funds-right-top-search-dept'>
                              <div className='funds-right-top-search-dept-text-bottom'>지급 기간*</div>
                              <div className='funds-right-top-search-dept-box-bottom'>
                                   <div className='funds-right-top-search-dept-box-code-box-bottom'>
                                        <input className='funds-right-top-search-dept-box-code-box-text-bottom'  onChange={onPaymentDateStartChangeHandler} type="date" />
                                   </div>
                                   <div className="middle-text">~</div>
                                   <div className='funds-right-top-search-dept-box-code-box-bottom'>
                                        <input className='funds-right-top-search-dept-box-code-box-text-bottom'  onChange={onPaymentDateEndChangeHandler} type="date" />
                                   </div>
                              </div>
                         </div>
                         <div className='invoice-right-top-search-employment-status'>
                              <div className='invoice-right-top-search-employment-status-text'>급/상여구분</div>
                              <div className='invoice-right-top-search-employment-status-box'>
                                   <div className='invoice-right-top-search-employment-status-box-combo-box'>
                                   <select className='invoice-right-top-search-employment-status-box-combo-box-text' onChange={onIncentiveCategoryChangeHandler} name="invoice-type" id="invoice-type">
                                   <option value="전체">전체</option>
                                   <option value={INCENTIVE_CATEGORY.SALARY}>{INCENTIVE_CATEGORY.SALARY}</option>
                                   <option value={INCENTIVE_CATEGORY.BONUS}>{INCENTIVE_CATEGORY.BONUS}</option>
                                   </select>
                                   </div>
                              </div>
                              </div>
                    </div>
               
               {/* 검색결과 */}
               {/* 코드, 사원명, 구분, 지급일, 금액, 내역 */}
               <div className="employeelist-search-result">
                    <div className="employeelist-search-result-list-text">Total {incentiveViewList === null ? 0 : incentiveViewList.length}  EA</div>
                    <div className="employeelist-search-result-list-container">
                    <div className="employeelist-search-result-list-title">
                         <div className="incentivelist-title-number"></div>
                         <div className="incentivelist-title-name">사원명</div>
                         <div className="incentivelist-title-category">구분</div>
                         <div className="incentivelist-title-date">지급일</div>
                         <div className="incentivelist-title-price">금액</div>
                         <div className="incentivelist-title-content">상세</div>
                    </div>
                    { incentiveViewList !== null && incentiveViewList.map( (item) => (<IncentiveViewListItem item = {item} />) ) }
                    </div>
               </div>
               </div>
              </div>
    </div>
    )
}
