import React, { ChangeEvent } from 'react'
import './style.css'
import SystemMenu from '../SystemMenu'

export default function SystemEmployee() {

  //          state           //

  //          function            //

  //          event handler           //
  // description : 사원명 입력
  const onEmplyeeNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    
  }
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
                <div className='system-employee-info-right-body-top-search-employee-text'>사원명</div>
              </div>
              <input className='system-employee-info-right-top-search-employee-box-name-box-text' type='text' onChange={onEmplyeeNameChangeHandler} />
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
                      <div className='system-employee-info-middle-left-bottom-table-title-gender'>성별</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-gender-code'></div>
                      <div className='system-employee-info-middle-left-bottom-table-title-department-name'>부서명</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-department-code'></div>
                      <div className='system-employee-info-middle-left-bottom-table-title-join_date'>입사일</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-resignation_date'>퇴사일</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-password'>암호</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-registration_number'>주민번호</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-employment_type'>재직구분</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-employment_type-code'></div>
                    </div>
                    <div className='system-employee-info-middle-left-bottom-table-body'>
                      <div className='system-emplyee-info-middle-left-bottom-table-body-list'>
                        <div className='system-employee-info-middle-left-bottom-table-body-list-no'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-list-employee-code'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-list-employee-name'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-list-gender'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-list-gender-code' hidden></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-list-department-name'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-list-department-code' hidden></div>
                        <input className='system-employee-info-middle-left-bottom-table-body-list-join_date' />
                        <input className='system-employee-info-middle-left-bottom-table-body-list-resignation_date' />
                        <input className='system-employee-info-middle-left-bottom-table-body-list-password' />
                        <input className='system-employee-info-middle-left-bottom-table-body-list-registration_number' />
                        <div className='system-employee-info-middle-left-bottom-table-body-list-employment_type'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-list-employment_type-code' hidden></div>
                      </div>
                      <div className='system-employee-info-middle-left-bottom-table-body-new'>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-no'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-employee-code'></div>
                        <input className='system-employee-info-middle-left-bottom-table-body-new-employee-name' />
                        <div className='system-employee-info-middle-left-bottom-table-body-new-gender'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-gender-code' hidden></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-department-name'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-department-code' hidden></div>
                        <input className='system-employee-info-middle-left-bottom-table-body-new-join_date' />
                        <input className='system-employee-info-middle-left-bottom-table-body-new-resignation_date' />
                        <input className='system-employee-info-middle-left-bottom-table-body-new-password' />
                        <input className='system-employee-info-middle-left-bottom-table-body-new-registration_number' />
                        <div className='system-employee-info-middle-left-bottom-table-body-new-employment_type'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-employment_type-code' hidden></div>                
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='system-employee-info-middle-right'>
              <div className='system-employee-info-middle-right-user-define'>
                <div className='system-employee-info-middle-right-user-define-top'>
                  <div className='system-employee-info-middle-right-user-define-top-right'>
                    <div className='system-employee-info-middle-right-user-define-top-right-text'>사용자정의명</div>
                    <div className='system-employee-info-middle-right-user-define-top-right-code'>사용자정의코드</div>
                  </div>
                  <div className='system-employee-info-middle-right-user-define-top-left'>
                    <div className='system-employee-info-middle-right-user-define-top-left-icon'></div>
                    <div className='system-employee-info-middle-right-user-define-top-left-text'>닫기</div>
                  </div>
                </div>
                <div className='system-employee-info-middle-right-user-define-container'>
                  <div className='system-employee-info-middle-right-user-define-list'>
                    <div className='system-employee-info-middle-right-user-define-list-title'>
                      <div className='system-employee-info-middle-right-user-define-list-title-detail-no'>성별</div>
                      <div className='system-employee-info-middle-right-user-define-list-title-detail-code'>사용자정의-세부코드</div>
                      <div className='system-employee-info-middle-right-user-define-list-title-detail-name'>사용자정의-세부명</div>
                    </div>
                    <div className='system-employee-info-middle-right-user-define-list-body'>
                      <div className='system-employee-info-middle-right-user-define-list-title-detail-no'>여자</div>
                      <div className='system-employee-info-middle-right-user-define-list-title-detail-code'></div>
                      <div className='system-employee-info-middle-right-user-define-list-title-detail-name'>사용자정의-세부명</div>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>
     </div>
  )
}
