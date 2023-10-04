import React from 'react'
import './style.css'
import SystemMenu from '../SystemMenu'

export default function Employee() {
  return (
      <div id='department-info-wrapper'>
        <SystemMenu />
        <div className='department-info-right'>
          <div className='department-info-right-top'>
            <div className='department-info-right-top-title'>부서등록</div>
            <div className='department-info-right-top-divider'></div>
          </div>
          <div className='department-info-middle'>
          <div className='department-info-middle-left'>
            <div className='department-info-middle-left-top'>
              <div className='department-info-middle-left-top-text'>부서정보등록</div>
            </div>
            <div className='department-info-middle-left-bottom'>
              <div className='department-info-middle-left-bottom-container'>
                <div className='department-info-middle-left-bottom-table'>
                  <div className='department-info-middle-left-bottom-table-title'>
                    <div className='department-info-middle-left-bottom-table-title-no'>No</div>
                    <div className='department-info-middle-left-bottom-table-title-dept-code'>부서코드</div>
                    <div className='department-info-middle-left-bottom-table-title-dept-name'>부서명</div>
                    <div className='department-info-middle-left-bottom-table-title-start-date'>시작일</div>
                    <div className='department-info-middle-left-bottom-table-title-end-date'>종료일</div>
                    <div className='department-info-middle-left-bottom-table-title-dept-tel'>부서전화번호</div>
                    <div className='department-info-middle-left-bottom-table-title-dept-fax'>부서fax</div>
                  </div>
                  <div className='department-info-middle-left-bottom-table-body'>
                  <div className='department-info-middle-left-bottom-table-body-no'></div>
                    <div className='department-info-middle-left-bottom-table-body-dept-code'> </div>
                    <input className='department-info-middle-left-bottom-table-body-dept-name' type="text"/>
                    <input className='department-info-middle-left-bottom-table-body-start-date' type="text"/>
                    <input className='department-info-middle-left-bottom-table-body-end-date' type="text"/>
                    <input className='department-info-middle-left-bottom-table-body-dept-tel' type="text"/>
                    <input className='department-info-middle-left-bottom-table-body-dept-fax' type="text"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className='department-info-right-bottom'></div>
        </div>
      </div>
  )
}