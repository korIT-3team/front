import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import SystemMenu from '../SystemMenu'
import { useLocation } from 'react-router-dom';
import { useSystemEmployeeRequestStore, useSystemEmployeeResponseStore } from 'src/stores';

export default function SystemEmployee() {

  //          state           //
  // description: path 상태
  const {pathname} = useLocation();
  // description: 사용자정의 창 상태
  const [userDefineOpen, setUserDefineOpen] = useState<boolean>(false);
  // description: 사원조회 조건
  const { setSystemEmployeeName, resetSystemEmployeeRequest } = useSystemEmployeeRequestStore();
  // description: 사원List 정보 불러오기
  const { systemEmployeeList, setSystemEmployeeList, resetSystemEmployeeList } = useSystemEmployeeResponseStore();
  // description: 암호화 상태 //
  const [ password, setPassword ] = useState<boolean>(true);
  
  //          function            //

  //          event handler           //
  // description : 사원명 입력
  const onSystemEmplyeeNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSystemEmployeeName(event.target.value);
  }
  // description: 사용자정의코드 더블클릭
  const onUserDefineDoubleClickHandler = () => {
    setUserDefineOpen(true);
  }
  // description: 닫기 클릭
  const onCloseButtonClickHandler = () => {
    setUserDefineOpen(false);
  }
  // description: 암호 type => text
  const onPasswordToTextOnClickHandler = () => {
    setPassword(false);
  }
  // description: 암호 type => password
  const onPasswordToPasswordOnClickHandler = () => {
    setPassword(true);
  }

  //          effect            //
  useEffect(() => {
    resetSystemEmployeeList();
    resetSystemEmployeeRequest();
  },[pathname])

  //          render            //
  return (
     <div id='system-employee-info-wrapper'>
      <SystemMenu />
      <div className='system-employee-info-right'>
        <div className='system-employee-info-right-body'>
          <div className='system-employee-info-right-body-top'>
            <div className='system-employee-info-right-body-top-title'>
              <div className='system-employee-info-right-body-top-title-text'>사원등록</div>
              <div className='system-employee-info-right-body-top-title-divider'></div>
            </div>
            <div className='system-employee-info-right-body-top-search-container'>
              <div className='system-employee-info-right-body-top-search-employee'>
                <div className='system-employee-info-right-body-top-search-employee-text' >사원명</div>
              </div>
              <input className='system-employee-info-right-top-search-employee-box-name-box-text' type='text' onChange={onSystemEmplyeeNameChangeHandler} />
            </div>
          </div>
          <div className='system-employee-info-middle'>
            <div className='system-employee-info-middle-left'>
              <div className='system-employee-info-middle-left-top'>
                <div className='system-employee-info-middle-left-top-text'>사원정보등록</div>
              </div>
              <div className='system-employee-info-middle-left-bottom'>
                <div className='system-employee-info-middle-left-bottom-container'>
                  <div className='system-employee-info-middle-left-bottom-table'>
                    <div className='system-employee-info-middle-left-bottom-table-title'>
                      <div className='system-employee-info-middle-left-bottom-table-title-no'>No</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-employee-code'>사원번호</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-employee-name'>사원명</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-gender' onDoubleClick={onUserDefineDoubleClickHandler} >성별</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-gender-code'></div>
                      <div className='system-employee-info-middle-left-bottom-table-title-department-name' onDoubleClick={onUserDefineDoubleClickHandler} >부서명</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-department-code'></div>
                      <div className='system-employee-info-middle-left-bottom-table-title-join-date'>입사일</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-resignation-date'>퇴사일</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-password'>암호</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-registration-number'>주민번호</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-employment-type' onDoubleClick={onUserDefineDoubleClickHandler} >재직구분</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-employment-type-code'></div>
                    </div>
                    <div className='system-employee-info-middle-left-bottom-table-body'>
                      { systemEmployeeList !== null &&
                          systemEmployeeList.map((item) => (
                            <div className='system-emplyee-info-middle-left-bottom-table-body-list'>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-no'>{item.no}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-employee-code'>{item.employeeCode}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-employee-name'>{item.employeeName}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-gender' onDoubleClick={onUserDefineDoubleClickHandler} >{item.gender}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-gender-code' hidden>{item.genderCode}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-department-name' onDoubleClick={onUserDefineDoubleClickHandler} >{item.departmentName}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-department-code' hidden>{item.departmentCode}</div>
                              <input className='system-employee-info-middle-left-bottom-table-body-list-join-date' defaultValue={item.joinDate} />
                              <input className='system-employee-info-middle-left-bottom-table-body-list-resignation-date' defaultValue={item.resignationDate} />
                              <input className='system-employee-info-middle-left-bottom-table-body-list-password' defaultValue={item.password}  type='password' />
                              <input className='system-employee-info-middle-left-bottom-table-body-list-registration-number' defaultValue={item.registrationNumber} />
                              <div className='system-employee-info-middle-left-bottom-table-body-list-employment-type' onDoubleClick={onUserDefineDoubleClickHandler}>{item.employmentType}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-employment-type-code' hidden>{item.employmentTypeCode}</div>
                            </div>
                      ))}
                      <div className='system-employee-info-middle-left-bottom-table-body-new'>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-no'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-employee-code'></div>
                        <input className='system-employee-info-middle-left-bottom-table-body-new-employee-name' />
                        <div className='system-employee-info-middle-left-bottom-table-body-new-gender'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-gender-code' hidden></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-department-name'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-department-code' hidden></div>
                        <input className='system-employee-info-middle-left-bottom-table-body-new-join-date' />
                        <input className='system-employee-info-middle-left-bottom-table-body-new-resignation-date' />
                        <input className='system-employee-info-middle-left-bottom-table-body-new-password' type='password' />
                        <input className='system-employee-info-middle-left-bottom-table-body-new-registration-number' />
                        <div className='system-employee-info-middle-left-bottom-table-body-new-employment-type'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-employment-type-code' hidden></div>                
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {
              userDefineOpen && 
                <div className='system-employee-info-middle-right'>
                  <div className='system-employee-info-middle-right-user-define'>
                    <div className='system-employee-info-middle-right-user-define-top'>
                      <div className='system-employee-info-middle-right-user-define-top-right'>
                        <div className='system-employee-info-middle-right-user-define-top-right-text'>사용자정의명 : 성별</div>
                        <div className='system-employee-info-middle-right-user-define-top-right-code'>(9010)</div>
                      </div>
                      <div className='system-employee-info-middle-right-user-define-top-left'>
                        <div className='system-employee-info-middle-right-user-define-top-left-text' onClick={onCloseButtonClickHandler}>닫기</div>
                        <div className='system-employee-info-middle-right-user-define-top-left-icon'></div>
                      </div>
                    </div>
                    <div className='system-employee-info-middle-right-user-define-container'>
                      <div className='system-employee-info-middle-right-user-define-list'>
                        <div className='system-employee-info-middle-right-user-define-list-title'>
                          <div className='system-employee-info-middle-right-user-define-list-title-detail-no'>No</div>
                          <div className='system-employee-info-middle-right-user-define-list-title-detail-code'>세부코드</div>
                          <div className='system-employee-info-middle-right-user-define-list-title-detail-name'>세부명</div>
                        </div>
                        <div className='system-employee-info-middle-right-user-define-list-body'>
                          <div className='system-employee-info-middle-right-user-define-list-body-detail-no'>1</div>
                          <div className='system-employee-info-middle-right-user-define-list-body-detail-code'>1</div>
                          <div className='system-employee-info-middle-right-user-define-list-body-detail-name'>여자</div>                      
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            }
          </div>
        </div>        
      </div>
     </div>
  )
}
