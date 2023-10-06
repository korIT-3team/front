import { ChangeEvent, useEffect } from 'react'
import AccountingMenu from '../AccountingMenu'
import InvoiceListItem from 'src/components/InvoiceListItem'
import { useInvoiceListStore, useInvoiceRequestStore } from 'src/stores';
import { useLocation } from 'react-router-dom';
import './style.css'

export default function InvoiceList() {
    //!          state          //
    // description : path 상태 //
    const { pathname } = useLocation();
    // description: 조회조건 정보 store //
    const { setEmployeeCode, setDepartmentCode, setInvoiceDateStart, setInvoiceDateEnd, setInvoiceType, resetInvoiceRequst } = useInvoiceRequestStore();
    // description: 조회된 전표 리스트 정보 store //
    const { invoiceList, resetInvoiceList } = useInvoiceListStore();

    //!             event handler              //
    // description : 작성자 코드 입력 이벤트 //
    const onEmployeeCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setEmployeeCode(Number(value));
    }
    // description : 부서 코드 입력 이벤트 //
    const onDepartmentCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setDepartmentCode(Number(value));
    }
    // description : 결의 기간 Start 입력 이벤트 //
    const onInvoiceDateStartChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setInvoiceDateStart(event.target.value);
    }
    // description : 결의 기간 End 입력 이벤트 //
    const onInvoiceDateEndChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setInvoiceDateEnd(event.target.value);
    }
    // description : 전표 유형 선택 이벤트 //
    const onInvoiceTypeChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      let type = null;
      if(value === '전체'){
        type = null;
      }
      else if(value === '매입'){
        type = 1;
      }
      else if(value === '매출'){
        type = 2;
      }
      else if(value === '급/상여'){
        type = 3;
      }
      setInvoiceType(type);
    }

    //!                    effect                   //
    // description : path가 바뀔 때마다 실행 //
    useEffect(()=>{
          resetInvoiceRequst();
          resetInvoiceList();
     }, [pathname])


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
                  <div className='invoice-right-top-search-dept-text'>결의 부서</div>
                  <div className='invoice-right-top-search-dept-box'>
                    <div className='invoice-right-top-search-dept-box-code-box'>
                      <input className='invoice-right-top-search-dept-box-code-box-text' type="text" onChange={onDepartmentCodeChangeHandler} />
                    </div>
                    <div className='invoice-right-top-search-button'>검색</div>
                    <div className='invoice-right-top-search-dept-box-name-box'>
                      <div className='invoice-right-top-search-dept-box-name-box-text'>부서명</div>
                    </div>
                  </div>
                </div>
                <div className='invoice-right-top-search-employee'>
                <div className='invoice-right-top-search-employee-text'>작성자</div>
                  <div className='invoice-right-top-search-employee-box'>
                    <div className='invoice-right-top-search-employee-box-code-box'>
                      <input className='invoice-right-top-search-employee-box-code-box-text' type="text" onChange={onEmployeeCodeChangeHandler}/>
                    </div>
                    <div className='invoice-right-top-search-button'>검색</div>
                    <div className='invoice-right-top-search-employee-box-name-box'>
                      <div className='invoice-right-top-search-employee-box-name-box-text'>사원명</div>
                    </div>
                  </div>              
                </div>
                <div className='invoice-right-top-search-employment-status'>
                  <div className='invoice-right-top-search-employment-status-text'>전표유형</div>
                  <div className='invoice-right-top-search-employment-status-box'>
                    <div className='invoice-right-top-search-employment-status-box-combo-box'>
                      <select className='invoice-right-top-search-employment-status-box-combo-box-text' onChange={onInvoiceTypeChangeHandler} name="invoice-type" id="invoice-type">
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
                      <input className='invoice-right-top-search-dept-box-code-box-text-bottom' onChange={onInvoiceDateStartChangeHandler} type="date" />
                    </div>
                    <div className="middle-text">~</div>
                    <div className='invoice-right-top-search-dept-box-code-box-bottom'>
                      <input className='invoice-right-top-search-dept-box-code-box-text-bottom' onChange={onInvoiceDateEndChangeHandler} type="date" />
                    </div>
                  </div>
                </div>
              </div>
              {/* 검색결과 */}
              <div className="invoicelist-search-result">
                <div className="invoicelist-search-result-list-text">Total {invoiceList === null ? 0 : invoiceList.length} EA</div>
                <div className="invoicelist-search-result-list-container">
                  <div className="invoicelist-search-result-list-title">
                    <div className="title-checkbox">
                      <input type="checkbox" />선택
                    </div>
                    <div className="title-date">결의일</div>
                    <div className="title-invoice-code">전표번호</div>
                    <div className="title-invoice-type">구분</div>
                    <div className="title-price">금액</div>
                    <div className="title-invoice-content">적요</div>
                    <div className="title-worker-code">담당자</div>
                  </div>
                  { invoiceList !== null && invoiceList.map( (item) => (<InvoiceListItem item = {item} />) ) }
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
