import React, { useState } from 'react'
import './style.css'
import AccountingMenu from '../AccountingMenu'
import InvoiceListItem from 'src/components/InvoiceListItem'
import InvoiceListResponseDto from 'src/interfaces/response/accounting/invoice-list.response.dto';

export default function InvoiceList() {
    //!          state          //
    // description: 조회조건 : 부서코드 //
    const [departmentCode, setDepartmentCode] = useState<number>(0);
    // description: 조회조건 : 사원코드 //
    const [employeeCode, setEmployeeCode] = useState<number>(0);
    // description: 조회조건 : 전표유형 //
    const [invoiceType, setInvoiceType] = useState<number>(0);
    // description: 조회조건 : 전표일자 //
    const [invoiceDate, setInvoiceDate] = useState<string>('');
    // description: 현재 페이지에서 보여줄 전표 리스트 상태 //
    const [invoiceList, setInvoiceList] = useState<InvoiceListResponseDto[]>([]);
    // description: 조회된 전표 리스트 개수 상태 //
    const [invoiceCount, setInvoiceCount] = useState<number>(0);

    // 필요한거 : 전표데이터 get

    //!          render          //
    return (
        <div id='invoice-wrapper'>
          <AccountingMenu />
          <div className='invoice-right'>
            <div className='invoice-right-top'>
              <div className='invoice-right-top-title'>전표 조회</div>
              <div className='invoice-right-top-divider'></div>
              <div className='invoice-right-top-search-condition'>
                <div className='invoice-right-top-search-dept'>
                  <div className='invoice-right-top-search-dept-text'>결의 부서*</div>
                  <div className='invoice-right-top-search-dept-box'>
                    <div className='invoice-right-top-search-dept-box-code-box'>
                      <input className='invoice-right-top-search-dept-box-code-box-text' type="text" />
                    </div>
                    <div className='invoice-right-top-search-button'>검색</div>
                    <div className='invoice-right-top-search-dept-box-name-box'>
                      <div className='invoice-right-top-search-dept-box-name-box-text'>부서명</div>
                    </div>
                  </div>
                </div>
                <div className='invoice-right-top-search-employee'>
                <div className='invoice-right-top-search-employee-text'>작성자*</div>
                  <div className='invoice-right-top-search-employee-box'>
                    <div className='invoice-right-top-search-employee-box-code-box'>
                      <input className='invoice-right-top-search-employee-box-code-box-text' type="text" />
                    </div>
                    <div className='invoice-right-top-search-button'>검색</div>
                    <div className='invoice-right-top-search-employee-box-name-box'>
                      <div className='invoice-right-top-search-employee-box-name-box-text'>사원명</div>
                    </div>
                  </div>              
                </div>
                <div className='invoice-right-top-search-employment-status'>
                  <div className='invoice-right-top-search-employment-status-text'>전표유형*</div>
                  <div className='invoice-right-top-search-employment-status-box'>
                    <div className='invoice-right-top-search-employment-status-box-combo-box'>
                      <select className='invoice-right-top-search-employment-status-box-combo-box-text' name="invoice-type" id="invoice-type">
                        <option value="전체">전체</option>
                        <option value="매입">매입</option>
                        <option value="매출">매출</option>
                        <option value="급/상여">급/상여</option>
                    </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='invoice-right-top-search-condition-bottom'>
                <div className='invoice-right-top-search-dept'>
                  <div className='invoice-right-top-search-dept-text-bottom'>결의 기간*</div>
                  <div className='invoice-right-top-search-dept-box-bottom'>
                    <div className='invoice-right-top-search-dept-box-code-box-bottom'>
                      <div className='invoice-right-top-search-dept-box-code-box-text-bottom'>2023-10-01</div>
                    </div>
                    <div className="middle-text">~</div>
                    <div className='invoice-right-top-search-dept-box-code-box-bottom'>
                      <div className='invoice-right-top-search-dept-box-code-box-text-bottom'>2023-10-31</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 검색결과 */}
              <div className="invoicelist-search-result">
                <div className="invoicelist-search-result-list-text">Total {invoiceCount} EA</div>
                <div className="invoicelist-search-result-list-container">
                  <div className="invoicelist-search-result-list-title">
                    <div className="title-checkbox">
                      <input type="checkbox" />선택
                    </div>
                    <div className="title-date">결의일</div>
                    <div className="title-invoice-code">전표번호</div>
                    <div className="title-product-code">품의번호</div>
                    <div className="title-customer-code">거래처코드</div>
                    <div className="title-customer-name">거래처명</div>
                    <div className="title-price">금액</div>
                    <div className="title-invoice-type">구분</div>
                    <div className="title-invoice-content">적요</div>
                  </div>
                  { invoiceList.map( (item) => (<InvoiceListItem item = {item} />) ) }
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
