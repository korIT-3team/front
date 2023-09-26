import React from 'react'

import SalesMenu from '../SalesMenu'

import './style.css'

export default function SalesPlan() {
  return (
    <div id='sales-plan-wrapper'>
      <SalesMenu/>
      <div className='sales-plan-right'></div>
    </div>
  )
}
