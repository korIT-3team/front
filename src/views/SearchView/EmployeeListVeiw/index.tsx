import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import SearchViewMenu from '../SearchViewMenu'
import { useLocation } from 'react-router-dom';
import { useEmployeeListViewRequestStore, useEmployeeListViewStore } from 'src/stores';
import EmployeeViewListItem from 'src/components/EmployeeListItem';
import EmploymentTypeResponseDto from 'src/interfaces/response/searchView/employment-type.response.dto';
import GetEmploymentTypeListResponseDto from 'src/interfaces/response/searchView/get-Employment-type-list.response.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import { getDepartmentCodeListRequest, getEmployeeCodeListRequest, getEmploymentTypeRequest } from 'src/apis';
import SearchCodeResponseDto from 'src/interfaces/response/common/search-code.response.dto';
import GetSearchCodeListResponseDto from 'src/interfaces/response/common/get-search-code-list.response.dto';
import { GetDepartmentCodeListRequestDto, GetEmployeeCodeListRequestDto } from 'src/interfaces/request/common';
import CodeSearchListItem from 'src/components/CodeSearchListItem';

//!       사원목록조회 뷰           //
export default function EmplyoeeListVeiw() {
    //!          state          //
    // description : path 상태 //
    const { pathname } = useLocation();
    // description: 조회조건 정보 store //
    const { employeeListViewEmployeeCode, employeeListViewDepartmentCode,setEmployeeListViewDepartmentCode, setEmployeeListViewEmployeeCode, setEmployeeListViewEmploymentCode, resetEmployeeViewListRequst} = useEmployeeListViewRequestStore();
    // description: 리스트 store //
    const { employeeListView, resetEmployeeListView} = useEmployeeListViewStore();
    // description: 조회조건 : 전표유형 리스트 정보 store //
    const [ employmentTypeList, setEmploymentTypeList ] = useState<EmploymentTypeResponseDto[]>([]);
    // description: 조회조건 : 조건 검색창 오픈상태 //
    const [ open, setOpen ] = useState<boolean>(false);
    // description: 조회조건 : 조건 검색창 상단제목라벨 //
    const [ label, setLabel ] =useState<string>('');
    // description: 조회조건 : 조건 검색창 내부 데이터 상태 //
    const [ searchCodeList, setSearchCodeList ] = useState<SearchCodeResponseDto[]>([]);
    // description: 조회조건 : 조건 작성자 사원명 //
    const [ employeeName, setEmployeeName ] =useState<string>('');
    // description: 조회조건 : 조건 부서명 //
    const [ departmentName, setDepartmentName ] =useState<string>('');

    //!               function              //
    // description: 재직구분 조회 응답 함수 //
    const getEmploymentTypeListResponseHandler = (responsebody: GetEmploymentTypeListResponseDto | ResponseDto ) => {

      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { employmentTypeList } = responsebody as GetEmploymentTypeListResponseDto;
      setEmploymentTypeList(employmentTypeList);
    }
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
    // description: 검색창 부서목록 조회 응답 함수 //
    const getDepartmentCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {

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
      if(label.includes('사원')){
        setEmployeeListViewEmployeeCode(item.detailCode);
        setEmployeeName(item.name);
      }
      else if(label.includes('부서')){
        setEmployeeListViewDepartmentCode(item.detailCode);
        setDepartmentName(item.name);
      }
    }
    // description : 부서코드 입력 이벤트 //
    const onDepartmentCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setEmployeeListViewDepartmentCode(value == '' ? null : Number(value));

      if(event.target.value === '') setDepartmentName('');
    }
    // description : 사원코드 입력 이벤트 //
    const onEmployeeCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setEmployeeListViewEmployeeCode(value == '' ? null : Number(value));

      if(event.target.value === '') setEmployeeName('');
    }
    // description : 재직구분 선택 이벤트 //
    const onEmploymentTypeChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      setEmployeeListViewEmploymentCode(event.target.value);
    }
    // description : 검색버튼 사원코드창 열기 이벤트 //
    const onEmployeeSearchOpenButtonClickHandler = () => {
      setOpen(true);
      setLabel('사원코드도움');
      const data: GetEmployeeCodeListRequestDto = {
        employeeCode : employeeListViewEmployeeCode,
      }
      getEmployeeCodeListRequest(data).then(getEmployeeCodeListResponseHandelr);
    }
    // description : 검색버튼 부서코드창 열기 이벤트 //
    const onDepartmentSearchOpenButtonClickHandler = () => {
      setOpen(true);
      setLabel('부서코드도움');
      const data: GetDepartmentCodeListRequestDto = {
        departmentCode : employeeListViewDepartmentCode,
      }
      getDepartmentCodeListRequest(data).then(getDepartmentCodeListResponseHandelr);
    }
    // description: 검색창 닫기 //
    const onCloseButtonClickHandler = () => {
      setOpen(false);
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
      getEmploymentTypeRequest().then(getEmploymentTypeListResponseHandler);
    }, [])
    // description : path가 바뀔 때마다 실행 //
    useEffect(()=>{
      resetEmployeeViewListRequst();
      resetEmployeeListView();
    }, [pathname])
    
    //!         render        //
    return (
        <div id='emplyoeeListVeiw-wrapper'>
              <SearchViewMenu />
              <div className='funds-right'>
              <div className='funds-right-top'>
                <div className='funds-right-top-title'>사원목록</div>
                <div className='funds-right-top-divider'></div>
                <div className='invoice-right-top-search-condition'>
                  <div className='invoice-right-top-search-dept'>
                    <div className='invoice-right-top-search-dept-text'>부서</div>
                    <div className='invoice-right-top-search-dept-box'>
                      <div className='invoice-right-top-search-dept-box-code-box'>
                        <input className='invoice-right-top-search-dept-box-code-box-text' value={employeeListViewDepartmentCode? employeeListViewDepartmentCode : ''} onChange={onDepartmentCodeChangeHandler} type="text" />
                      </div>
                      <div className='invoice-right-top-search-button' onClick={onDepartmentSearchOpenButtonClickHandler}>검색</div>
                      <div className='invoice-right-top-search-dept-box-name-box'>
                        <input className='invoice-right-top-search-dept-box-name-box-text' value={departmentName? departmentName : ''} type="text" />
                      </div>
                    </div>
                  </div>
                  <div className='invoice-right-top-search-employee'>
                    <div className='invoice-right-top-search-employee-text'>사원</div>
                      <div className='invoice-right-top-search-employee-box'>
                        <div className='invoice-right-top-search-employee-box-code-box'>
                          <input className='invoice-right-top-search-employee-box-code-box-text' value={employeeListViewEmployeeCode? employeeListViewEmployeeCode : ''} onChange={onEmployeeCodeChangeHandler} type="text"/>
                        </div>
                        <div className='invoice-right-top-search-button' onClick={onEmployeeSearchOpenButtonClickHandler}>검색</div>
                        <div className='invoice-right-top-search-employee-box-name-box'>
                          <input className='invoice-right-top-search-employee-box-name-box-text' value={employeeName? employeeName : ''} type="text" />
                        </div>
                      </div>              
                    </div>
                    <div className='invoice-right-top-search-employment-status'>
                      <div className='invoice-right-top-search-employment-status-text'>재직구분</div>
                      <div className='invoice-right-top-search-employment-status-box'>
                        <div className='invoice-right-top-search-employment-status-box-combo-box'>
                          <select className='invoice-right-top-search-employment-status-box-combo-box-text' onChange={onEmploymentTypeChangeHandler} name="invoice-type" id="invoice-type">
                            <option value="">전체</option>
                            { employmentTypeList.map( ({userDefineDetailName}) => (<option value={userDefineDetailName}>{userDefineDetailName}</option>))  }
                          </select>
                        </div>
                      </div>
                    </div>
                </div>
                
              
              <div id="bottom-wrapper">
                <div className="employeelist-search-result">
                    <div className="employeelist-search-result-list-text">Total {employeeListView === null ? 0 : employeeListView.length}  EA</div>
                    <div className="employeelist-search-result-list-container">
                    <div className="employeelist-search-result-list-title">
                          <div className="employee-title-number"></div>
                          <div className="employee-title-code">사원코드</div>
                          <div className="employee-title-name">사원명</div>
                          <div className="employee-title-gender">성별</div>
                          <div className="employee-title-department">부서명</div>
                          <div className="employee-title-position">직위</div>
                          <div className="employee-title-email">이메일</div>
                          <div className="employee-title-employement">재직구분</div>
                    </div>
                    {
                        !employeeListView || employeeListView.length==0  ? (<div className='nothing-data-form'>조회된 데이터가 없습니다.</div>) : (<div> { employeeListView !== null && employeeListView.map( (item) => (<EmployeeViewListItem item = {item} />) ) }</div> )
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
