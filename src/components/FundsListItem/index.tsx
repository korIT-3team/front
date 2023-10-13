import React from 'react'
import './style.css'
import { FundsList } from 'src/stores/fundslist.response.store';

interface Props {
     item : FundsList;
}

export default function FundsListItem({item} : Props) {
     //!          state          //
     // description: 리스트 상태 //
     const { fundingCode, fundDate, customerName, price, priceDetail, taxType, fundBalance } = item;

     //!           function            //
     var type = taxType === 0 ? '급/상여' : taxType === 1 ? '매입' : taxType === 2 ? '매출' : '';

     //!          render          //
     return (
          <div className='funds-list-item'>
               <div className="funds-list-number">{fundingCode}</div>
               <div className="funds-list-date">{fundDate}</div>
               <div className="funds-list-customer">{customerName}</div>
               <div className="funds-list-content">{priceDetail}</div>
               <div className="funds-list-type">{type}</div>
               <div className="funds-list-income">{taxType === 2 && price}</div>
               <div className="funds-list-outcome">{taxType === 1 || taxType === 0 ? price : ''}</div>
               <div className="funds-list-balance">{fundBalance}</div>
          </div>
     )
}
