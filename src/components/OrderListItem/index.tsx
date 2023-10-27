import React from 'react';
import './style.css';

interface Props{

}

{/* 주문번호 / 주문일자 / 거래처 / 사원번호 / 판매계획코드 */}
export default function OrderListItem() {
  return (
     <div className='order-info-view-container-first-table-body-container'>
          <div className='order-info-view-container-first-table-body'>
               <div className='order-info-view-container-first-table-body-no'></div>
               <div className='order-info-view-container-first-table-body-order-code'></div>
               <div className='order-info-view-container-first-table-body-order-date'></div>
               <div className='order-info-view-container-first-table-body-dept-code'></div>
               <div className='order-info-view-container-first-table-body-emp-code'></div>
               <div className='order-info-view-container-first-table-body-cust-code'></div>
               <div className='order-info-view-container-first-table-body-manager'></div>
          </div>
     </div>
  )
}
