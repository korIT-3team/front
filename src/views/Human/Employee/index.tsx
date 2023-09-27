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
                    <div className='employee-info-right-top-search-dept-box-name-box-text'>아무개</div>
                  </div>
                </div>
              </div>
              <div className='employee-info-right-top-search-employee'>
              <div className='employee-info-right-top-search-employee-text'>사원*</div>
                <div className='employee-info-right-top-search-employee-box'>
                  <div className='employee-info-right-top-search-employee-box-code-box'>
                    <div className='employee-info-right-top-search-employee-box-code-box-text'></div>
                  </div>
                  <div className='employee-info-right-top-search-button'>검색</div>
                  <div className='employee-info-right-top-search-employee-box-name'></div>
                </div>              
              </div>
              <div className='employee-info-right-top-search-employment-status'>
                <div className='employee-info-right-top-search-employment-status-text'>재직구분</div>
                <div className='employee-info-right-top-search-employment-status-combo-box'></div>
              </div>
            </div>
          </div>
          <div className='employee-info-right-body'>
            <div className='employee-info-right-body-left'></div>
            <div className='employee-info-right-body-right'></div>
          </div>
          <div className='employee-info-right-bottom'></div>
        </div>
      </div>
    </div>
  )
}