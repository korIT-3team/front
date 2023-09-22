import React from 'react'
import './style.css'

export default function SideMenu() {
  return (
    <div id='side-menu'>
      <div className="side-menu-top">
        <div className="side-menu-home">
          <div className="side-menu-home-icon"></div>
          <div className="side-menu-home-text">HOME</div>
        </div>
        <div className="side-menu-system-manage">
          <div className="side-menu-system-manage-icon"></div>
          <div className="side-menu-system-manage-text">시스템관리</div>
        </div>
        <div className="side-menu-human-resource">
          <div className="side-menu-human-resource-icon"></div>
          <div className="side-menu-human-resource-text">인사관리</div>
        </div>
        <div className="side-menu-sales">
          <div className="side-menu-sales-icon"></div>
          <div className="side-menu-sales-text">영업관리</div>
        </div>
        <div className="side-menu-funds">
          <div className="side-menu-funds-icon"></div>
          <div className="side-menu-funds-text">회계관리</div>
        </div>
        <div className="side-menu-search">
          <div className="side-menu-search-icon"></div>
          <div className="side-menu-search-text">조회</div>
        </div>
      </div>
      <div className="side-menu-bottom">
        <div className="side-menu-logout">
          <div className="side-menu-logout-icon"></div>
          <div className="side-menu-logout-text">로그아웃</div>
        </div>
      </div>
    </div>
  )
}
