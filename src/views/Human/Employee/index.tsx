import React from 'react'
import './style.css'
import HumanMenu from '../HumanMenu'
import { isVisible } from '@testing-library/user-event/dist/utils'

export default function Employee() {
  return (
    <div>
      <div id='employee-info-wrapper'>
        <HumanMenu />
        <div className='employee-info-right'>
          <div className='employee-info-right-top'>
            <div className='employee-info-right-top-title'>인사정보등록</div>
            <div className='employee-info-right-top-divider'></div>
            <div className='employee-info-right-top-search-condition'>
              <div className='employee-info-right-top-search-dept'>
                <div className='employee-info-right-top-search-dept-text'>부서*</div>
                <div className='employee-info-right-top-search-dept-box'>
                  <div className='employee-info-right-top-search-dept-box-code-box'>
                    <div className='employee-info-right-top-search-dept-box-code-box-text'>1000</div>
                  </div>
                  <div className='employee-info-right-top-search-button'>검색</div>
                  <div className='employee-info-right-top-search-dept-box-name-box'>
                    <div className='employee-info-right-top-search-dept-box-name-box-text'>인사부</div>
                  </div>
                </div>
              </div>
              <div className='employee-info-right-top-search-employee'>
              <div className='employee-info-right-top-search-employee-text'>사원*</div>
                <div className='employee-info-right-top-search-employee-box'>
                  <div className='employee-info-right-top-search-employee-box-code-box'>
                    <div className='employee-info-right-top-search-employee-box-code-box-text'>2000</div>
                  </div>
                  <div className='employee-info-right-top-search-button'>검색</div>
                  <div className='employee-info-right-top-search-employee-box-name-box'>
                    <div className='employee-info-right-top-search-employee-box-name-box-text'>아무개</div>
                  </div>
                </div>              
              </div>
              <div className='employee-info-right-top-search-employment-status'>
                <div className='employee-info-right-top-search-employment-status-text'>재직구분</div>
                <div className='employee-info-right-top-search-employment-status-box'>
                  <div className='employee-info-right-top-search-employment-status-box-combo-box'>
                    <div className='employee-info-right-top-search-employment-status-box-combo-box-text'>재직</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='employee-info-middle'>
          <div className='employee-info-middle-left'>
            <div className='employee-info-middle-left-top'>
              <div className='employee-info-middle-left-top-text'>사원 리스트</div>
            </div>
            <div className='employee-info-middle-left-bottom'>
              <div className='employee-info-middle-left-bottom-container'>
                <div className='employee-info-middle-left-bottom-table'>
                  <div className='employee-info-middle-left-bottom-table-title'>
                    <div className='employee-info-middle-left-bottom-table-title-no'>No</div>
                    <div className='employee-info-middle-left-bottom-table-title-employee-code'>사원번호</div>
                    <div className='employee-info-middle-left-bottom-table-title-employee-name'>사원명</div>
                    <div className='employee-info-middle-left-bottom-table-title-dept-name'>부서명</div>
                  </div>
                  <div className='employee-info-middle-left-bottom-table-body'>
                    <div className='employee-info-middle-left-bottom-table-body-no'>1</div>
                      <div className='employee-info-middle-left-bottom-table-body-employee-code'>3001</div>
                      <div className='employee-info-middle-left-bottom-table-body-employee-name'>인사직원1</div>
                      <div className='employee-info-middle-left-bottom-table-body-dept-name'>인사팀</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className='employee-info-middle-right'>
            <div className='employee-info-middle-right-top'>
              <div className='employee-info-middle-right-top-text'>인적 정보</div>
            </div>
            <div className='employee-info-middle-right-bottom'>
                <div className='employee-info-middle-right-bottom-employee-info-box'>
                  <div className='employee-info-middle-right-bottom-employee-info-box-left'>
                    <div className='employee-info-middle-right-bottom-employee-info-box-left-profile-box'>사진등록</div>
                  </div>
                  <div className='employee-info-middle-right-bottom-employee-info-box-right'>
                    <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1'>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-left'>
                        <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-left-text'>사원번호</div>
                        <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-left-box'></div>
                      </div>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-right'>
                        <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-left-text'>사원명</div>
                        <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-left-box'></div>                        
                      </div>
                    </div>
                    <div className='employee-info-middle-right-bottom-employee-info-box-right-raw2'>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw2-left'></div>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw2-right'></div>                      
                    </div>
                    <div className='employee-info-middle-right-bottom-employee-info-box-right-raw3'></div>
                    <div className='employee-info-middle-right-bottom-employee-info-box-right-raw4'>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw4-left'></div>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw4-right'></div>                       
                    </div>
                    <div className='employee-info-middle-right-bottom-employee-info-box-right-raw5'>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw5-left'></div>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw5-right'></div>                          
                    </div>
                  </div>
                </div>
                <div className='employee-info-middle-right-bottom-employee-info-detail-box'></div>
            </div>
          </div>
        </div>
          <div className='employee-info-right-bottom'></div>
        </div>
      </div>
    </div>
  )
}