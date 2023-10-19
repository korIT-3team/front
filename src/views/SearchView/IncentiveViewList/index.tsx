import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import SearchViewMenu from '../SearchViewMenu'
import { useLocation, useNavigate } from 'react-router-dom';
import { useIncentiveViewListRequestStore, useIncentiveViewListStore, useUserStore } from 'src/stores';
import IncentiveViewListItem from 'src/components/IncentiveListItem';
import { HOME_PATH, INCENTIVE_CATEGORY } from 'src/constants';
import IncentiveTypeResponseDto from 'src/interfaces/response/searchView/incentive-type.response.dto';
import GetIncentiveTypeListResponseDto from 'src/interfaces/response/searchView/get-incentive-type-list.response.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import { getIncentiveTypeRequest } from 'src/apis';

export default function IncentiveViewList() {

    //!          state          //
    // description : path 상태 //
    const { pathname } = useLocation();
    const { user } = useUserStore();
    // description: 조회조건 정보 store //
    const { setIncentiveViewListEmployeeCode, setIncentiveViewListDateStart, setIncentiveViewListDateEnd, setIncentiveViewListCategory, resetIncentiveViewListRequst} = useIncentiveViewListRequestStore();
    // description: 리스트 store //
    const { incentiveViewList, resetIncentiveViewList} = useIncentiveViewListStore();
    // description: 조회조건 : 전표유형 리스트 정보 store //
    const [ incentiveTypeList, setIncentiveTypeList ] = useState<IncentiveTypeResponseDto[]>([]);


    //!               function              //
    const navigator = useNavigate();
    // description: 급상여구분 조회 응답 함수 //
    const getIncentiveTypeListResponseHandler = (responsebody: GetIncentiveTypeListResponseDto | ResponseDto ) => {

     const {code} = responsebody;
     if( code == 'NE') alert('존재하지않는 회원입니다.');
     if( code == 'DE') alert('데이터베이스 에러');
     if( code == 'NP') alert('권한이 없습니다.');
     if( code != 'SU') return;

     const { incentiveTypeList } = responsebody as GetIncentiveTypeListResponseDto;
     setIncentiveTypeList(incentiveTypeList);
   }   


     //!             event handler              //
     // description : 지급기간 Start 입력 이벤트 //
     const onPaymentDateStartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          setIncentiveViewListDateStart(event.target.value);
     }
     // description : 지급기간 End 입력 이벤트 //
     const onPaymentDateEndChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
          setIncentiveViewListDateEnd(event.target.value);
     }
     // description : 급/상여 구분 선택 이벤트 //
     const onIncentiveCategoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
          setIncentiveViewListCategory(event.target.value);
     }

     //!                    effect                   //
     // description : 뷰에 들어올 때 한번만 실행 //
     let flag = false;
     useEffect(()=>{
          if(flag == false){
          flag = true;
          return;
          }
          // description : 과세유형 콤보박스 리스트 호출
          getIncentiveTypeRequest().then(getIncentiveTypeListResponseHandler);
     }, [])
     // description : path가 바뀔 때마다 실행 //
     useEffect(()=>{
          resetIncentiveViewListRequst();
          resetIncentiveViewList();
          if(!user){
               alert('로그인이 필요합니다.');
               navigator(HOME_PATH);
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
                              <div className='incentive-right-top-search-employment-status-text'>급/상여구분</div>
                              <div className='invoice-right-top-search-employment-status-box'>
                                   <div className='invoice-right-top-search-employment-status-box-combo-box'>
                                        <select className='invoice-right-top-search-employment-status-box-combo-box-text' onChange={onIncentiveCategoryChangeHandler} name="invoice-type" id="invoice-type">
                                             <option value="">전체</option>
                                             { incentiveTypeList.map( ({userDefineDetailName}) => (<option value={userDefineDetailName}>{userDefineDetailName}</option>))  }
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
