import React, { ChangeEvent, useEffect } from 'react'
import './style.css'
import SearchViewMenu from '../SearchViewMenu'
import { useLocation } from 'react-router-dom';
import { useEmployeeListViewRequestStore, useEmployeeListViewStore } from 'src/stores';
import EmployeeViewListItem from 'src/components/EmployeeListItem';
import { EMPLOYEMENT_NAME } from 'src/constants';

export default function EmplyoeeListVeiw() {

    //!          state          //
    // description : path 상태 //
    const { pathname } = useLocation();
    // description: 조회조건 정보 store //
    const { setEmployeeListViewDepartmentCode, setEmployeeListViewEmployeeCode, setEmployeeListViewEmploymentCode, resetEmployeeViewListRequst} = useEmployeeListViewRequestStore();
    // description: 리스트 store //
    const { employeeListView, resetEmployeeListView} = useEmployeeListViewStore();

    //!             event handler              //
    // description : 부서코드 입력 이벤트 //
    const onDepartmentCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setEmployeeListViewDepartmentCode(Number(value));
    }
    // description : 사원코드 입력 이벤트 //
    const onEmployeeCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setEmployeeListViewEmployeeCode(Number(value)); // todo : 왜 썼다지우면 0이 들어갈까?
    }
    // description : 재직구분 선택 이벤트 //
    const onEmploymentTypeChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      let type = null;
      if(value === '전체'){
        type = null;
      }
      else if(value === EMPLOYEMENT_NAME.CURRENT){
        type = 1;
      }
      else if(value === EMPLOYEMENT_NAME.OUT){
        type = 2;
      }
      else if(value === EMPLOYEMENT_NAME.REST){
        type = 3;
      }
      setEmployeeListViewEmploymentCode(type);
    }

    //!                    effect                   //
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
              <div className='funds-right-top-title'>사내자금현황</div>
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
                        <option value="전체">전체</option>
                        <option value={EMPLOYEMENT_NAME.CURRENT}>{EMPLOYEMENT_NAME.CURRENT}</option>
                        <option value={EMPLOYEMENT_NAME.OUT}>{EMPLOYEMENT_NAME.OUT}</option>
                        <option value={EMPLOYEMENT_NAME.REST}>{EMPLOYEMENT_NAME.REST}</option>
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
