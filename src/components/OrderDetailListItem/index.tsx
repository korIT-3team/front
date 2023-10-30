import React from 'react'
import { OrderDetailList } from 'src/stores/sales/orderInfo/order-detail-list.response.store';
interface Props{
     item : OrderDetailList;
}
export default function OrderDetailListItem({item} : Props) {
     //!          state          //
     // description: 리스트 상태 //
     const { no, orderCode, orderDetailCode, productCode,  productName , orderQuantity, price, totalPrice, content } = item;
     return (
          <div className='order-info-view-container-second-table-body-container'>
               <div className='order-info-view-container-second-table-body'>
                    <div className='order-info-view-container-second-table-body-no'>{no}</div>
                    <div className='order-info-view-container-second-table-body-orderCode'>{orderCode}</div>
                    <div className='order-info-view-container-second-table-body-orderDetailCode'>{orderDetailCode}</div>
                    <div className='order-info-view-container-second-table-body-product-code'>{productCode}</div>
                    <div className='order-info-view-container-second-table-body-productName'>{productName}</div>
                    <div className='order-info-view-container-second-table-body-order-quantity'>{orderQuantity}</div>
                    <div className='order-info-view-container-second-table-body-price'>{price}</div>
                    <div className='order-info-view-container-second-table-body-total-price'>{totalPrice}</div>
                    <div className='order-info-view-container-second-table-body-content'>{content}</div>
               </div>
          </div>
     )
}
