import React from 'react'
import './style.css'
import { InOutComeList } from 'src/stores/inoutcomelist.response.store';
import { TAX_TYPE } from 'src/constants';

interface Props {
     item : InOutComeList;
}

export default function InOutComeListItem({item} : Props) {
     //!          state          //
     // description: 리스트 상태 //
     const { fundingCode, fundDate, salesPlanCode, customerName, price, priceDetail, taxTypeName, fundBalance } = item;

     //!          render          //
     return (
          <div className='inoutcome-list-item'>
               <div className="inoutcome-list-number">{fundingCode}</div>
               <div className="inoutcome-list-date">{fundDate}</div>
               <div className="inoutcome-list-code">{salesPlanCode}</div>
               <div className="inoutcome-list-customer">{customerName}</div>
               <div className="inoutcome-list-content">{priceDetail}</div>
               <div className="inoutcome-list-type">{taxTypeName}</div>
               <div className="inoutcome-list-income">{taxTypeName == TAX_TYPE.SALE && price}</div>
               <div className="inoutcome-list-outcome">{taxTypeName == TAX_TYPE.ORDER && price}</div>
               <div className="inoutcome-list-balance">{fundBalance}</div>
          </div>
     )
}
