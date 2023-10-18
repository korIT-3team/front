import React from 'react'
import './style.css'
import { InvoiceList } from 'src/stores/invoicelist.response.store';
import { useNavigate } from 'react-router-dom';
import { ACCOUNTING_INVOICE_DETAIL_PATH } from 'src/constants';

interface Props {
  item : InvoiceList;
}
export default function InvoiceListItem({item} : Props) {

  //!          state          //
  // description: 전표 리스트 상태 //
  const { invoiceCode, invoiceDate, invoiceTypeName, workerName, price, priceDetail} = item;

  //!           function            //
  const navigator = useNavigate();

  //!             event handler              //
  const onInvoiceItemClickHandler = () => {
    navigator(ACCOUNTING_INVOICE_DETAIL_PATH(invoiceCode));
  }

  //!          render          //
  return (
    <div className='invoice-list-item' onClick={onInvoiceItemClickHandler}>
      <div className="invoice-list-number">{invoiceCode}</div>
      <div className="invoice-list-date">{invoiceDate}</div>
      <div className="invoice-list-invoice-code">{invoiceCode}</div>
      <div className="invoice-list-invoice-type">{invoiceTypeName}</div>
      <div className="invoice-list-price">{price}</div>
      <div className="invoice-list-invoice-content">{priceDetail}</div>
      <div className="invoice-list-worker-code">{workerName}</div>
    </div>
  )
}