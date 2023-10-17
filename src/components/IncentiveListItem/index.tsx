import React from 'react'
import './style.css'
import { IncentiveViewList } from 'src/stores/incentiveviewlist.response.store';

interface Props {
     item : IncentiveViewList;
}

export default function IncentiveViewListItem({item} : Props) {
     //!          state          //
     // description: 리스트 상태 //
     const { incentiveCode, employeeName, incentiveCategoryName, paymentDate, incentivePrice, content  } = item;

     return (
          <div className='incentive-list-item'>
               <div className="incentive-list-number">{incentiveCode}</div>
               <div className="incentive-list-name">{employeeName}</div>
               <div className="incentive-list-category">{incentiveCategoryName}</div>
               <div className="incentive-list-date">{paymentDate}</div>
               <div className="incentive-list-price">{incentivePrice}</div>
               <div className="incentive-list-content">{content}</div>
          </div>
     )
}
