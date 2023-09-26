import React from 'react'

import SystemMenu from '../SystemMenu'

import './style.css'

export default function ProductInfo() {
  return (
    <div id='product-info'>
      <SystemMenu/>
      <div className='product-info-wrapper'>
        <div className='product-info-top'>
          <div className='product-info-top-text'>품목 등록</div>
        </div>
        <div className='divider'></div>

        <div className='product-info-search'>
          <div className='product-info-search-container'></div>
        </div>

        <div className='product-info-middle'>

        </div>
        <div className='product-info-bottom'></div>
      </div>
    </div>
  )
}
