import React from 'react'

import './style.css'
import SalesMenu from '../SalesMenu'

export default function SalesPlan() {
  return (
    <div id='sales-plan-wrapper'>
      <SalesMenu/>
      <div className='sales-plan-right'></div>
    </div>
  )
}
