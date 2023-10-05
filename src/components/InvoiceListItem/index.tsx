import React from 'react'
import './style.css'
import InvoiceListResponseDto from 'src/interfaces/response/accounting/invoice-list.response.dto'
import { InvoiceList } from 'src/stores/invoicelist.response.store';
import { useNavigate } from 'react-router-dom';
import { ACCOUNTING_INVOICE_DETAIL_PATH } from 'src/constants';

interface Props {
  item : InvoiceList;
}
export default function InvoiceListItem({item} : Props) {

  //!          state          //
  // description: 속성으로 받아오는 전표 리스트 상태 //
  const { invoiceCode, productCode, customerCode, productDetails, 
    invoiceDate, invoiceType, customerName, price} = item;

  //!           function            //
  const navigator = useNavigate();
  

  //!             event handler              //
  const onInvoiceItemClickHandler = () => {
    navigator(ACCOUNTING_INVOICE_DETAIL_PATH(invoiceCode));
  }

  //!          render          //
  return (
    <div className='invoice-list-item' onClick={onInvoiceItemClickHandler}>
      <div className="invoice-list-checkbox">
        <input type="checkbox" />
      </div>
      <div className="invoice-list-date">{invoiceDate}</div>
      <div className="invoice-list-invoice-code">{invoiceCode}</div>
      <div className="invoice-list-product-code">{productCode}</div>
      <div className="invoice-list-customer-code">{customerCode}</div>
      <div className="invoice-list-customer-name">{customerName}</div>
      <div className="invoice-list-price">{price}</div>
      <div className="invoice-list-invoice-type">{invoiceType}</div>
      <div className="invoice-list-invoice-content">{productDetails}</div>
    </div>
  )
}