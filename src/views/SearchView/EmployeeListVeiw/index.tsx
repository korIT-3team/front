import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import SearchViewMenu from '../SearchViewMenu'
import { useLocation } from 'react-router-dom';
import { useEmployeeListViewRequestStore, useEmployeeListViewStore } from 'src/stores';
import EmployeeViewListItem from 'src/components/EmployeeListItem';
import EmploymentTypeResponseDto from 'src/interfaces/response/searchView/employment-type.response.dto';
import GetEmploymentTypeListResponseDto from 'src/interfaces/response/searchView/get-Employment-type-list.response.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import { getEmploymentTypeRequest } from 'src/apis';

//!       사원목록조회 뷰           //
export default function EmplyoeeListVeiw() {
    //!          state          //
    // description : path 상태 //
    const { pathname } = useLocation();
    // description: 조회조건 정보 store //
    const { setEmployeeListViewDepartmentCode, setEmployeeListViewEmployeeCode, setEmployeeListViewEmploymentCode, resetEmployeeViewListRequst} = useEmployeeListViewRequestStore();
    // description: 리스트 store //
    const { employeeListView, resetEmployeeListView} = useEmployeeListViewStore();
    // description: 조회조건 : 전표유형 리스트 정보 store //
    const [ employmentTypeList, setEmploymentTypeList ] = useState<EmploymentTypeResponseDto[]>([]);

    //!               function              //
    // description: 전표유형 조회 응답 함수 //
    const getEmploymentTypeListResponseHandler = (responsebody: GetEmploymentTypeListResponseDto | ResponseDto ) => {

      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { employmentTypeList } = responsebody as GetEmploymentTypeListResponseDto;
      setEmploymentTypeList(employmentTypeList);
    }   

    //!             event handler              //
    // description : 부서코드 입력 이벤트 //
    const onDepartmentCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setEmployeeListViewDepartmentCode(value == '' ? null : Number(value));
    }
    // description : 사원코드 입력 이벤트 //
    const onEmployeeCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setEmployeeListViewEmployeeCode(value == '' ? null : Number(value));
    }
    // description : 재직구분 선택 이벤트 //
    const onEmploymentTypeChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      setEmployeeListViewEmploymentCode(event.target.value);
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
                    <input className='invoice-right-top-search-dept-box-code-box-text' onChange={onDepartmentCodeChangeHandler} type="text" />
                  </div>
                  <div className='invoice-right-top-search-button'>검색</div>
                  <div className='invoice-right-top-search-dept-box-name-box'>
                    <div className='invoice-right-top-search-dept-box-name-box-text'>부서명</div>
                  </div>
                </div>
              </div>
              <div className='invoice-right-top-search-employee'>
                <div className='invoice-right-top-search-employee-text'>사원</div>
                  <div className='invoice-right-top-search-employee-box'>
                    <div className='invoice-right-top-search-employee-box-code-box'>
                      <input className='invoice-right-top-search-employee-box-code-box-text' onChange={onEmployeeCodeChangeHandler} type="text"/>
                    </div>
                    <div className='invoice-right-top-search-button'>검색</div>
                    <div className='invoice-right-top-search-employee-box-name-box'>
                      <div className='invoice-right-top-search-employee-box-name-box-text'>사원명</div>
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
              
              {/* 검색결과 */}
              {/* 사원코드 사원명 성별 부서명 직책 이메일 재직구분 */}
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
                  { employeeListView !== null && employeeListView.map( (item) => (<EmployeeViewListItem item = {item} />) ) }
                  </div>
              </div>
              </div>
              </div>
    </div>
    )
}
