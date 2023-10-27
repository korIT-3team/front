import React, { useEffect, useState } from 'react'
import './style.css'
import HumanMenu from '../HumanMenu'
import { GetEmployeeCodeListRequestDto } from 'src/interfaces/request/common';
import { getEmployeeCodeListRequest, getIncentiveListRequest, getIncentiveTypeRequest } from 'src/apis';
import { useHumanEmployeeInfo, useHumanIncentiveListRequestStore, useSelectedIncentiveInfoStore } from 'src/stores';
import GetSearchCodeListResponseDto from 'src/interfaces/response/common/get-search-code-list.response.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import SearchCodeResponseDto from 'src/interfaces/response/common/search-code.response.dto';
import CodeSearchListItem from 'src/components/CodeSearchListItem';
import { useLocation } from 'react-router-dom';
import GetEmployeeListResponseDto from 'src/interfaces/response/human/get-employee-list.response.dto';
import IncentiveTypeResponseDto from 'src/interfaces/response/searchView/incentive-type.response.dto';
import { GetIncentiveTypeListResponseDto } from 'src/interfaces/response/searchView';

export default function Incentive() {

  //          state           //
  // description : path 상태 //
  const { pathname } = useLocation();    
  // description: 조회조건 : 조건 검색창 오픈상태 //
  const [ open, setOpen ] = useState<boolean>(false);  
  // description: 조회조건 : 조건 검색창 상단제목라벨 //
  const [ label, setLabel ] =useState<string>('');    
  // description: 조회조건 : 조건 작성자 사원명 //
  const [ employeeName, setEmployeeName ] =useState<string>('');    
  // description: 조회조건 : 조건 검색창 내부 데이터 상태 //
  const [ searchCodeList, setSearchCodeList ] = useState<SearchCodeResponseDto[]>([]);    
  // description: 조회조건 정보 store //
  const { humanEmployeeCode, humanIncentiveCategory, setHumanEmployeeCode, setHumanIncentiveCategory, resetHumanIncentiveReqeust } = useHumanIncentiveListRequestStore();
  // description: 급/상여조회 - 코드도움 store //
  const { humanEmployeeOpen, humanIncentiveUserDefineOpen, selectedEmployeeCode, selectedEmployeeName, selectedIncentiveCategory, selectedIncentiveCategoryName ,
          setHumanEmployeeOpen, setHumanIncentiveUserDefineOpen, setSelectedEmployeeCode, setSelectedEmployeeName, setSelectedIncentiveCategory, setSelectedIncentiveCategoryName
        } = useSelectedIncentiveInfoStore();
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
    setHumanEmployeeCode(item.detailCode);
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
    console.log("Test");
    setHumanEmployeeOpen(true);
    setHumanIncentiveUserDefineOpen(false);
  
    const { employeeList } = responsebody as GetEmployeeListResponseDto;
    setEmployeeList(employeeList);
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
  // description : 검색버튼 사원코드창 열기 이벤트 //
  const onEmployeeSearchOpenButtonClickHandler = () => {
    setHumanEmployeeCode(0);
    setOpen(true);
    setLabel('사원코드도움');
    console.log(humanEmployeeCode);
    const data: GetEmployeeCodeListRequestDto = {
      employeeCode : humanEmployeeCode,
    }
    console.log(data);
    getEmployeeCodeListRequest(data).then(getEmployeeCodeListResponseHandelr);
  }    
  // description: 검색창 닫기 //
  const onCloseButtonClickHandler = () => {
    setOpen(false);
    setHumanEmployeeOpen(false);
  }    
  // description: 사원조회 이벤트 핸들러 //
  const onEmployeeListSearchButtonClickHandler = ( EmployeeCode: number) => {
    setSelectedEmployeeCode(EmployeeCode);
    
    setSelectedEmployeeCode(0);
    setSelectedEmployeeName("");
    setHumanEmployeeOpen(true);

    // getIncentiveListRequest(selectedEmployeeCode, selectedIncentiveCategory).then(getEmployeeListResponseHandler)
  }       
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
    resetHumanIncentiveReqeust();
    
 }, [pathname])      


//          render          // 
return (
  <div id='incentive-info-wrapper'>
    <HumanMenu />
    <>{humanEmployeeOpen}</>
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
              <div className='incentive-info-right-top-search-employee-box-code-box-text'>{humanEmployeeCode ? humanEmployeeCode : ''}</div>
            </div>
            <div className='incentive-info-right-top-search-button' onClick={ onEmployeeSearchOpenButtonClickHandler } >검색</div>
            <div className='incentive-info-right-top-search-employee-box-name-box'>
              <div className='incentive-info-right-top-search-employee-box-name-box-text'>{humanEmployeeCode ? employeeName : ''}</div>
            </div>
          </div>              
        </div>
        <div className='incentive-info-right-top-search-incentive-category'>
          <div className='incentive-info-right-top-search-incentive-category-text'>급/상여구분</div>
          <div className='incentive-info-right-top-search-incentive-category-box'>
            <div className='incentive-info-right-top-search-incentive-category-box-combo-box'>
              <select className='incentive-info-right-top-search-incentive-category-box-combo-box-text' /*onChange={onInvoiceTypeChangeHandler}*/ name="incentive-category" id="incentive-category">
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
                <div className='incentive-info-middle-left-bottom-table-body' /*onClick={onNewDepartmentInfoClickHandler} onFocus={() => setSelectedDepartmentCode(null)}*/>
                    <div className='incentive-info-middle-left-bottom-table-body-no' ></div>
                    <div className='incentive-info-middle-left-bottom-table-body-incentive-code'></div>
                    <div className='incentive-info-middle-left-bottom-table-body-employee-code'></div>
                    <div className='incentive-info-middle-left-bottom-table-body-employee-name' onDoubleClick={() => onEmployeeListSearchButtonClickHandler(0)}></div>
                    <div className='incentive-info-middle-left-bottom-table-body-incentive-category'></div>
                    <input className='incentive-info-middle-left-bottom-table-body-payment-date' type='text' />
                    <input className='incentive-info-middle-left-bottom-table-body-incentive-price' type='text' />
                    <input className='incentive-info-middle-left-bottom-table-body-content' type='text' />
                  </div>
                  <div className='incentive-info-middle-left-bottom-table-body-new' /*onClick={onNewDepartmentInfoClickHandler} onFocus={() => setSelectedDepartmentCode(null)}*/>
                    <div className='incentive-info-middle-left-bottom-table-body-new-no' ></div>
                    <div className='incentive-info-middle-left-bottom-table-body-new-incentive-code'></div>
                    <div className='incentive-info-middle-left-bottom-table-body-new-employee-name' onDoubleClick={() => onEmployeeListSearchButtonClickHandler(0)}></div>
                    <div className='incentive-info-middle-left-bottom-table-body-new-employee-code' hidden></div>
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
                  {/* {
                    employeeList !== null &&
                    employeeList.map((item) => (
                      <div className='system-employee-info-middle-right-user-define-list-body'>
                        <div className='system-employee-info-middle-right-user-define-list-body-detail-no'>{item.no}</div>
                        <div className='system-employee-info-middle-right-user-define-list-body-detail-code'>{item.employeeCode}</div>
                        <div className='system-employee-info-middle-right-user-define-list-body-detail-name'>{item.employeeName}</div>                      
                      </div>
                    ))
                  } */}
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