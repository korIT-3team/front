import React from 'react'
import SystemMenu from '../SystemMenu'
import './style.css'

export default function Company() {
  return (
    <div id='company-info'>
      <SystemMenu/>
      <div className='customer-info-wrapper'>
        <div className='customer-info-top'>
          <div className='customer-info-top-text'>회사등록</div>
        </div>
        <div className='divider'></div>
        <div className="company-info-middle-text">기업정보등록</div>
        <div className="company-info-middle-box">
          <div className="company-info-logo-image-box"></div>
          <div className="company-info-text-box">
            <div className="company-info-box">
              <div className="company-info-label">사업자등록번호</div>
              <input className='company-info-business-number' type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">회사명</div>
              <input className='company-info-company-name' type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">대표자명</div>
              <input className='company-info-representative-name' type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">우편번호</div>
              <input className='company-info-company-post-code' type="number" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">주소</div>
              <input className='company-info-company-address' type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">상세주소</div>
              <input className='company-info-company-address-detail' type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">전화번호</div>
              <input className='company-info-business-tel-number' type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">업태</div>
              <input className='company-info-business_status' type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">종목</div>
              <input className='company-info-business-type' type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">기업영문명</div>
              <input className='company-info-english-company-name' type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">홈페이지주소</div>
              <input className='company-info-company-homepage' type="text" />
            </div>
          </div>
        </div>
        <div className='company-info-bottom'>
          <div className='company-info-bottom-button-save'>
            <div className='company-info-bottom-button-save-text'>저장</div>
          </div>
          <div className='company-info-bottom-button-cancel'>
            <div className='company-info-bottom-button-cancel-text'>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}
