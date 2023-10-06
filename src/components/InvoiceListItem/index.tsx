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
  // description: 전표 리스트 상태 //
  const { invoiceCode, invoiceDate, invoiceType, workerName, price, priceDetail} = item;

  //!           function            //
  const navigator = useNavigate();
  var type = invoiceType === 1 ? '매입' : invoiceType === 2 ? '매출' : invoiceType === 3 ? '급/상여' : '';

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
      <div className="invoice-list-invoice-type">{type}</div>
      <div className="invoice-list-price">{price}</div>
      <div className="invoice-list-invoice-content">{priceDetail}</div>
      <div className="invoice-list-worker-code">{workerName}</div>
    </div>
  )
}