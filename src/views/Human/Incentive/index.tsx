import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import HumanMenu from '../HumanMenu'
import { GetEmployeeCodeListRequestDto } from 'src/interfaces/request/common';
import { getEmployeeCodeListRequest, getIncentiveEmployeeListRequest, getIncentiveListRequest, getIncentiveTypeRequest } from 'src/apis';
import { useHumanEmployeeInfo, useHumanResponseStore, useIncentiveListRequestStore, useIncentiveListResponseStore, useSelectedIncentiveInfoStore } from 'src/stores';
import GetSearchCodeListResponseDto from 'src/interfaces/response/common/get-search-code-list.response.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import SearchCodeResponseDto from 'src/interfaces/response/common/search-code.response.dto';
import CodeSearchListItem from 'src/components/CodeSearchListItem';
import { useLocation } from 'react-router-dom';
import GetEmployeeListResponseDto from 'src/interfaces/response/human/get-employee-list.response.dto';
import IncentiveTypeResponseDto from 'src/interfaces/response/searchView/incentive-type.response.dto';
import { GetIncentiveTypeListResponseDto } from 'src/interfaces/response/searchView';
import { useCookies } from 'react-cookie';
import { IncentiveInfo } from 'src/stores/human/humanIncentive/incentivelist.response.store';

export default function Incentive() {

  //          state           //
  // description : path 상태 //
  const { pathname } = useLocation();    
  // description : Cookie 상태 //
  const [ cookies ] = useCookies();
  // description: 조회조건 : 조건 검색창 오픈상태 //
  const [ open, setOpen ] = useState<boolean>(false);  
  // description: 조회조건 : 조건 검색창 상단제목라벨 //
  const [ label, setLabel ] =useState<string>('');    
  // description: 조회조건 : 조건 작성자 사원명 //
  const [ employeeName, setEmployeeName ] =useState<string>('');    
  // description: 조회조건 : 조건 검색창 내부 데이터 상태 //
  const [ searchCodeList, setSearchCodeList ] = useState<SearchCodeResponseDto[]>([]);    
  // description: 코드도움 - 사원List //
  const { humanList, setHumanList } = useHumanResponseStore();
  // description: 조회조건 정보 store //
  const {incentiveEmployeeCodeSearch, incentiveCategorySearch, setIncentiveEmployeeCodeSearch, setIncentiveCategorySearch, resetIncentiveRequest } = useIncentiveListRequestStore();
  // description: 급/상여 리스트 조회 store //
  const { incentiveList, setIncentiveList, resetIncentiveList } = useIncentiveListResponseStore();
  // description: 급/상여조회 - 코드도움 store //
  const { humanEmployeeOpen, humanIncentiveUserDefineOpen, selectedIncentiveCode, selectedIncentiveEmployeeCode, selectedIncentiveEmployeeName, selectedIncentiveCategory, selectedIncentiveCategoryName,
          setHumanEmployeeOpen, setHumanIncentiveUserDefineOpen, setSelectedIncentiveCode, setSelectedIncentiveEmployeeCode, setSelectedIncentiveEmployeeName, setSelectedIncentiveCategory, setSelectedIncentiveCategoryName,
          resetSelectedIncentiveInfo } = useSelectedIncentiveInfoStore();
  // description: 급/상여 리스트 store //
  const { employeeList, setEmployeeList, resetEmployeeList } = useHumanEmployeeInfo();
  // description: 조회조건 : 전표유형 리스트 정보 store //
  const [ incentiveTypeList, setIncentiveTypeList ] = useState<IncentiveTypeResponseDto[]>([]);  
  //          event handler           //
  // description: 검색창 사원목록 조회 응답 함수 //
  const getEmployeeCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {
    const {code} = responsebody;
    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code !== 'SU') return;
    const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
    setSearchCodeList(searchCodeList);
  }       
  // description: 검색창 조회목록 아이템 클릭 이벤트 //
  const onDataItemClickHandler = ( item : SearchCodeResponseDto ) => {
    setOpen(false);
    // setHumanEmployeeCode(item.detailCode);
    setIncentiveEmployeeCodeSearch(item.detailCode);
    setEmployeeName(item.name);
  }  
  // description: 사원 정보(창) 조회 응답 함수 //
  const getEmployeeListResponseHandler = (responsebody: GetEmployeeListResponseDto | ResponseDto ) => {
    const {code} = responsebody;
    if(code === 'NE') alert('존재하지않는 회원입니다.');
    if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
    if(code === 'DE') alert('데이터베이스 에러');
    if(code === 'NP') alert('권한이 없습니다.');
    if(code !== 'SU') return
    setHumanEmployeeOpen(true);
    setHumanIncentiveUserDefineOpen(false);

    const { humanList } = responsebody as GetEmployeeListResponseDto;
    setEmployeeList(humanList);
}     

// description: 급/상여구분 조회 응답 함수 //
const getHumanIncentiveTypeListResponseHandler = (responsebody:GetIncentiveTypeListResponseDto | ResponseDto) => {
 
  const {code} = responsebody;
  if( code === 'NE') alert('존재하지않는 회원입니다.');
  if( code === 'DE') alert('데이터베이스 에러');
  if( code === 'NP') alert('권한이 없습니다.');
  if( code !== 'SU') return
  const { incentiveTypeList } = responsebody as GetIncentiveTypeListResponseDto;
  setIncentiveTypeList(incentiveTypeList)
}

  //          function            //
  // description : 재직구분 선택 이벤트 //
  const onIncentiveCategoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setIncentiveCategorySearch(parseInt(event.target.value));
  }         
  // description : 검색버튼 사원코드창 열기 이벤트 //
  const onEmployeeSearchOpenButtonClickHandler = () => {
    // setHumanEmployeeCode(0);
    setIncentiveEmployeeCodeSearch(0);
    setOpen(true);
    setLabel('사원코드도움');
    const data: GetEmployeeCodeListRequestDto = {
      employeeCode : incentiveEmployeeCodeSearch,
    }
    getEmployeeCodeListRequest(data).then(getEmployeeCodeListResponseHandelr);
  }    
  // description: 검색창 닫기 //
  const onCloseButtonClickHandler = () => {
    setOpen(false);
    setHumanEmployeeOpen(false);
  }    
  // description: 급/상여 신규등록 - 코드도움 : 사원조회 이벤트 핸들러 //
  const onEmployeeListSearchButtonClickHandler = () => {
    const accessToken = cookies.accessToken;

    setSelectedIncentiveEmployeeCode(0);
    setSelectedIncentiveEmployeeName("");  
    getIncentiveEmployeeListRequest(accessToken).then(getEmployeeListResponseHandler);
  }       
  // description : 코드도움(사원) 클릭 이벤트 핸들러 //
  const onCodeHelpEmpClickHandler = (employeeCode: number, employeeName: string) => {
    setSelectedIncentiveEmployeeCode(employeeCode);
    setSelectedIncentiveEmployeeName(employeeName);
  }

  //! 기존 데이터 변경
  // description: 지급일자 변경 //
  const onExistPaymentDateChangeEvent = (event: ChangeEvent<HTMLInputElement>, incentiveInfo : IncentiveInfo) => {
    if(!incentiveList) return;
    const value = event.target.value;
    const newIncentiveInfo: IncentiveInfo = { ...incentiveInfo, paymentDate: value};
    const newIncentiveList: IncentiveInfo[] = incentiveList.map(item => item.employeeCode === newIncentiveInfo.employeeCode ? newIncentiveInfo : item);
    setIncentiveList(newIncentiveList);
  }
  // description: 금액 변경 //
  const onExistIncentivePriceChangeEvent = (event: ChangeEvent<HTMLInputElement>, incentiveInfo : IncentiveInfo) => {
    if(!incentiveList) return;
    const value = event.target.value;
    const newIncentiveInfo: IncentiveInfo = { ...incentiveInfo, incentivePrice: parseInt(value)};
    const newIncentiveList: IncentiveInfo[] = incentiveList.map(item => item.employeeCode === newIncentiveInfo.employeeCode ? newIncentiveInfo : item);
    setIncentiveList(newIncentiveList);
  }  
  // description: 내역 변경 //
  const onExistContentChangeEvent = (event: ChangeEvent<HTMLInputElement>, incentiveInfo : IncentiveInfo) => {
    if(!incentiveList) return;
    const value = event.target.value;
    const newIncentiveInfo: IncentiveInfo = { ...incentiveInfo, content: value};
    const newIncentiveList: IncentiveInfo[] = incentiveList.map(item => item.employeeCode === newIncentiveInfo.employeeCode ? newIncentiveInfo : item);
    setIncentiveList(newIncentiveList);
  }    

  //! 신규 데이터 변경
  

  // description : 뷰에 들어올 때 한번만 실행 //
  let flag = false;
  useEffect(()=>{
    if(flag == false){
      flag = true;
      return;
    }
    // description : 전표유형 콤보박스 리스트 호출
    getIncentiveTypeRequest().then(getHumanIncentiveTypeListResponseHandler);
  }, [])   
  // description : path가 바뀔 때마다 실행 //
  useEffect(()=>{
    resetIncentiveRequest();
    resetSelectedIncentiveInfo();
    resetIncentiveList();
 }, [pathname])      


//          render          // 
return (
  <div id='incentive-info-wrapper'>
    <HumanMenu />
    <div className='incentive-info-right'>
      <div className='incentive-info-right-top'>
        <div className='incentive-info-right-top-title'>급/상여정보등록</div>
        <div className='incentive-info-right-top-divider'></div>
      </div>
      <div className='incentive-info-right-top-search-condition'>
        <div className='incentive-info-right-top-search-employee'>
        <div className='incentive-info-right-top-search-employee-text'>사원</div>
          <div className='incentive-info-right-top-search-employee-box'>
            <div className='incentive-info-right-top-search-employee-box-code-box'>
              <div className='incentive-info-right-top-search-employee-box-code-box-text'>{incentiveEmployeeCodeSearch ? incentiveEmployeeCodeSearch : ''}</div>
            </div>
            <div className='incentive-info-right-top-search-button' onClick={ onEmployeeSearchOpenButtonClickHandler } >검색</div>
            <div className='incentive-info-right-top-search-employee-box-name-box'>
              <div className='incentive-info-right-top-search-employee-box-name-box-text'>{incentiveEmployeeCodeSearch ? employeeName : ''}</div>
            </div>
          </div>              
        </div>
        <div className='incentive-info-right-top-search-incentive-category'>
          <div className='incentive-info-right-top-search-incentive-category-text'>급/상여구분</div>
          <div className='incentive-info-right-top-search-incentive-category-box'>
            <div className='incentive-info-right-top-search-incentive-category-box-combo-box'>
              <select className='incentive-info-right-top-search-incentive-category-box-combo-box-text' onChange={onIncentiveCategoryChangeHandler} name="incentive-category" id="incentive-category">
                <option value="0">전체</option>
                { incentiveTypeList.map( ({userDefineDetailName, userDefineDetailCode}) => (<option value={userDefineDetailCode}>{userDefineDetailName}</option>))  }
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='incentive-info-middle'>
        <div className='incentive-info-middle-left'>
          <div className='incentive-info-middle-left-top'>
            <div className='incentive-info-middle-left-top-text'>급/상여정보등록</div>
          </div>
          <div className='incentive-info-middle-left-bottom'>
            <div className='incentive-info-middle-left-bottom-container'>
              <div className='incentive-info-middle-left-bottom-table'>
                <div className='incentive-info-middle-left-bottom-table-title'>
                  <div className='incentive-info-middle-left-bottom-table-title-no'>No</div>
                  <div className='incentive-info-middle-left-bottom-table-title-incentive-code'>급/상여코드</div>
                  <div className='incentive-info-middle-left-bottom-table-title-employee-code'>사원번호</div>
                  <div className='incentive-info-middle-left-bottom-table-title-employee-name'>사원명</div>
                  <div className='incentive-info-middle-left-bottom-table-title-incentive-category'>급/상여 구분</div>
                  <div className='incentive-info-middle-left-bottom-table-title-payment-date'>지급일자</div>
                  <div className='incentive-info-middle-left-bottom-table-title-incentive-price'>금액</div>
                  <div className='incentive-info-middle-left-bottom-table-title-content'>내역</div>
                </div>
                <div className='incentive-info-middle-left-bottom-table-container'>
                {
                  (incentiveList) && (
                    incentiveList.map((item) => (
                        <div className='incentive-info-middle-left-bottom-table-body' >
                          <div className='incentive-info-middle-left-bottom-table-body-no' >{item.no}</div>
                          <div className='incentive-info-middle-left-bottom-table-body-incentive-code'>{item.incentiveCode}</div>
                          <div className='incentive-info-middle-left-bottom-table-body-employee-code'>{item.employeeCode}</div>
                          <div className='incentive-info-middle-left-bottom-table-body-employee-name'>{item.employeeName}</div>
                          <div className='incentive-info-middle-left-bottom-table-body-incentive-category'>{item.incentiveCategoryName}</div>
                          <input className='incentive-info-middle-left-bottom-table-body-payment-date' type='text' defaultValue={item.paymentDate} onChange={event => onExistPaymentDateChangeEvent(event, item)} onFocus={() => setSelectedIncentiveCode(item.incentiveCode)} />
                          <input className='incentive-info-middle-left-bottom-table-body-incentive-price' type='text' defaultValue={item.incentivePrice} onChange={event => onExistIncentivePriceChangeEvent(event, item)} onFocus={() => setSelectedIncentiveCode(item.incentiveCode)}  />
                          <input className='incentive-info-middle-left-bottom-table-body-content' type='text' defaultValue={item.content} onChange={event => onExistContentChangeEvent(event, item)} onFocus={() => setSelectedIncentiveCode(item.incentiveCode)}  />
                        </div>
                    ))
                  )
                }
                <div className='incentive-info-middle-left-bottom-table-body-new' >
                          <div className='incentive-info-middle-left-bottom-table-body-new-no' ></div>
                          <div className='incentive-info-middle-left-bottom-table-body-new-incentive-code'></div>
                          <div className='incentive-info-middle-left-bottom-table-body-new-employee-code' hidden>{(selectedIncentiveEmployeeCode!= 0) && selectedIncentiveEmployeeCode}</div>
                          <div className='incentive-info-middle-left-bottom-table-body-new-employee-name' onDoubleClick={() => onEmployeeListSearchButtonClickHandler()} >{selectedIncentiveEmployeeName}</div>
                          <div className='incentive-info-middle-left-bottom-table-body-new-incentive-category'></div>
                          <input className='incentive-info-middle-left-bottom-table-body-new-payment-date' type='text' />
                          <input className='incentive-info-middle-left-bottom-table-body-new-incentive-price' type='text' />
                          <input className='incentive-info-middle-left-bottom-table-body-new-content' type='text' />
                        </div>                
                </div>
              </div>
            </div>
          </div>
        </div>
        {open && <CodeSearchListItem label={label} dtoList={searchCodeList} onCloseButtonClick={onCloseButtonClickHandler} onDataItemClickHandler={onDataItemClickHandler}/>}
        {
          humanEmployeeOpen &&
          <div className='system-employee-info-middle-right'>
            <div className='system-employee-info-middle-right-user-define'>
              <div className='system-employee-info-middle-right-user-define-top'>
                <div className='system-employee-info-middle-right-user-define-top-right'>
                  <div className='system-employee-info-middle-right-user-define-top-right-text'>사원 정보</div>
                </div>
                <div className='system-employee-info-middle-right-user-define-top-left'>
                  <div className='system-employee-info-middle-right-user-define-top-left-text' onClick={onCloseButtonClickHandler}>X</div>
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
                    employeeList !== null &&
                    employeeList.map((item) => (
                      <div className='system-employee-info-middle-right-user-define-list-body'>
                        <div className='system-employee-info-middle-right-user-define-list-body-detail-no'>{item.no}</div>
                        <div className='system-employee-info-middle-right-user-define-list-body-detail-code'>{item.employeeCode}</div>
                        <div className='system-employee-info-middle-right-user-define-list-body-detail-name' onClick={() => onCodeHelpEmpClickHandler(item.employeeCode, item.employeeName)}>{item.employeeName}</div>                      
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