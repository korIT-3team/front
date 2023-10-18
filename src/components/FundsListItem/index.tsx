import React from 'react'
import './style.css'
import { FundsList } from 'src/stores/fundslist.response.store';
import { TAX_TYPE } from 'src/constants';

interface Props {
     item : FundsList;
}

export default function FundsListItem({item} : Props) {
     //!          state          //
     // description: 리스트 상태 //
     const { fundingCode, fundDate, customerName, price, priceDetail, taxTypeName, fundBalance } = item;

     //!          render          //
     return (
          <div className='funds-list-item'>
               <div className="funds-list-number">{fundingCode}</div>
               <div className="funds-list-date">{fundDate}</div>
               <div className="funds-list-customer">{customerName}</div>
               <div className="funds-list-content">{priceDetail}</div>
               <div className="funds-list-type">{taxTypeName}</div>
               <div className="funds-list-income">{taxTypeName === TAX_TYPE.SALE && price}</div>
               <div className="funds-list-outcome">{taxTypeName === TAX_TYPE.ORDER || taxTypeName === TAX_TYPE.INCENTIVE ? price : ''}</div>
               <div className="funds-list-balance">{fundBalance}</div>
          </div>
     )
}
