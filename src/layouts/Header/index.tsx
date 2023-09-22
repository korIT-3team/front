import React from 'react'
import './style.css';

export default function Header() {
     
  return (
    <div id='header'>
     <div className="header-top">
          <div className="header-info">
               <div className="header-info-user">사용자ㅤ : ㅤ1000 ㅤ아무개</div>
               <div className="header-info-company">회사ㅤ : ㅤ1000 ㅤ회사1</div>
          </div>
     </div>
     <div className="header-bottom">
          <div className="header-menu">
               <div className="header-menu-icon"></div>
          </div>
          <div className="header-function-container">
               <div className="header-function-home">
                    <div className="header-function-home-icon"></div>
                    <div className="header-function-home-text">HOME</div>
               </div>
               <div className="header-function-search">
                    <div className="header-function-search-icon"></div>
                    <div className="header-function-search-text">조회</div>
               </div>
               <div className="header-function-save">
                    <div className="header-function-save-icon"></div>
                    <div className="header-function-save-text">저장</div>
               </div>
               <div className="header-function-print">
                    <div className="header-function-print-icon"></div>
                    <div className="header-function-print-text">인쇄</div>
               </div>
               <div className="header-function-delete">
                    <div className="header-function-delete-icon"></div>
                    <div className="header-function-delete-text">삭제</div>
               </div>
               <div className="header-function-info">
                    <div className="header-function-info-icon"></div>
                    <div className="header-function-info-text">정보</div>
               </div>
          </div>
     </div>
    </div>
  )
}
