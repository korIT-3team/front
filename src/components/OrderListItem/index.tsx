import React from 'react';
import './style.css';
import { OrderList } from 'src/stores/sales/orderInfo/order.response.store';

interface Props{
     item : OrderList;
}

{/* 주문번호 / 주문일자 / 거래처 / 사원번호 / 판매계획코드 */}
export default function OrderListItem({item} : Props) {
     //!          state          //
     // description: 리스트 상태 //
     const { no, orderCode, orderDate,  projectName , customerName, employeeName } = item;
     return (
          <div className='order-item-view-container-first-table-body-container'>
               <div className='order-item-view-container-first-table-body'>
                    <div className='order-item-view-container-first-table-body-no'>{no}</div>
                    <div className='order-item-view-container-first-table-body-order-code'>{orderCode}</div>
                    <div className='order-item-view-container-first-table-body-order-date'>{orderDate}</div>
                    <div className='order-item-view-container-first-table-body-customer-code'>{customerName}</div>
                    <div className='order-item-view-container-first-table-body-project-code'>{projectName}</div>
                    <div className='order-item-view-container-first-table-body-manager'>{employeeName}</div>
               </div>
          </div>
     )
}
