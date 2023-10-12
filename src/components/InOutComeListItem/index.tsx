import React from 'react'
import './style.css'
import { InOutComeList } from 'src/stores/inoutcomelist.response.store';

interface Props {
     item : InOutComeList;
}

export default function InOutComeListItem({item} : Props) {
     //!          state          //
     // description: 리스트 상태 //
     const { fundingCode, fundDate, salesPlanCode, customerName, price, priceDetail, taxType, fundBalance } = item;

     //!           function            //
     var type = taxType === 1 ? '매입세액' : taxType === 2 ? '매출과세' : '';

     //!          render          //
     return (
          <div className='inoutcome-list-item'>
               <div className="inoutcome-list-number">{fundingCode}</div>
               <div className="inoutcome-list-date">{fundDate}</div>
               <div className="inoutcome-list-code">{salesPlanCode}</div>
               <div className="inoutcome-list-customer">{customerName}</div>
               <div className="inoutcome-list-content">{priceDetail}</div>
               <div className="inoutcome-list-type">{type}</div>
               <div className="inoutcome-list-income">{taxType === 2 && price}</div>
               <div className="inoutcome-list-outcome">{taxType === 1 && price}</div>
               <div className="inoutcome-list-balance">{fundBalance}</div>
          </div>
     )
}
