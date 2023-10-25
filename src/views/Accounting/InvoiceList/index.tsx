import { ChangeEvent, useEffect, useState } from 'react'
import AccountingMenu from '../AccountingMenu'
import InvoiceListItem from 'src/components/InvoiceListItem'
import { useInvoiceListStore, useInvoiceRequestStore } from 'src/stores';
import { useLocation } from 'react-router-dom';
import './style.css'
import InvoiceTypeResponseDto from 'src/interfaces/response/accounting/invoice-type.response.dto';
import { getDepartmentCodeListRequest, getEmployeeCodeListRequest, getInvoiceTypeRequest } from 'src/apis';
import { GetInvoiceTypeListResponseDto } from 'src/interfaces/response/accounting';
import ResponseDto from 'src/interfaces/response/response.dto';
import CodeSearchListItem from 'src/components/CodeSearchListItem';
import SearchCodeResponseDto from 'src/interfaces/response/common/search-code.response.dto';
import GetSearchCodeListResponseDto from 'src/interfaces/response/common/get-search-code-list.response.dto';
import { GetDepartmentCodeListRequestDto, GetEmployeeCodeListRequestDto } from 'src/interfaces/request/common';

export default function InvoiceList() {
    //!          state          //
    // description : path 상태 //
    const { pathname } = useLocation();
    // description: 조회조건 정보 store //
    const { employeeCode , departmentCode,  setEmployeeCode, setDepartmentCode, setInvoiceDateStart, setInvoiceDateEnd, setInvoiceTypeName, resetInvoiceRequst } = useInvoiceRequestStore();
    // description: 조회된 전표 리스트 정보 store //
    const { invoiceList, resetInvoiceList } = useInvoiceListStore();
    // description: 조회조건 : 전표유형 리스트 정보 store //
    const [ invoiceTypeList, setInvoiceTypeList ] = useState<InvoiceTypeResponseDto[]>([]);
    // description: 조회조건 : 조건 검색창 오픈상태 //
    const [ open, setOpen ] = useState<boolean>(false);
    // description: 조회조건 : 조건 검색창 상단제목라벨 //
    const [ label, setLabel ] =useState<string>('');
    // description: 조회조건 : 조건 검색창 내부 데이터 상태 //
    const [ searchCodeList, setSearchCodeList ] = useState<SearchCodeResponseDto[]>([]);
    // description: 조회조건 : 조건 작성자 사원명 //
    const [ employeeName, setEmployeeName ] =useState<string>('');
    // description: 조회조건 : 조건 부서명 //
    const [ departmentName, setDepartmentName ] =useState<string>('');


    //!               function              //
    // description: 전표유형 조회 응답 함수 //
    const getInvoiceTypeListResponseHandler = (responsebody: GetInvoiceTypeListResponseDto | ResponseDto ) => {

      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { invoiceTypeList } = responsebody as GetInvoiceTypeListResponseDto;
      setInvoiceTypeList(invoiceTypeList);
    }
    // description: 검색창 사원목록 조회 응답 함수 //
    const getEmployeeCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {

      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
      setSearchCodeList(searchCodeList);
    }   
    // description: 검색창 부서목록 조회 응답 함수 //
    const getDepartmentCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {

      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
      setSearchCodeList(searchCodeList);
    }

    //!             event handler              //
    // description: 검색창 조회목록 아이템 클릭 이벤트 //
    const onDataItemClickHandler = ( item : SearchCodeResponseDto ) => {
      if(label.includes('사원')){
        setEmployeeCode(item.detailCode);
        setEmployeeName(item.name);
      }
      else if(label.includes('부서')){
        setDepartmentCode(item.detailCode);
        setDepartmentName(item.name);
      }
    }
    // description : 작성자 코드 입력 이벤트 //
    const onEmployeeCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setEmployeeCode(value == '' ? null : Number(value));

      if(event.target.value === '') setEmployeeName('');
    }
    // description : 부서 코드 입력 이벤트 //
    const onDepartmentCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setDepartmentCode(value == '' ? null : Number(value));
      
      if(event.target.value === '') setDepartmentName('');
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
      setInvoiceTypeName(event.target.value);
    }
    // description : 검색버튼 사원코드창 열기 이벤트 //
    const onEmployeeSearchOpenButtonClickHandler = () => {
      setOpen(true);
      setLabel('사원코드도움');
      const data: GetEmployeeCodeListRequestDto = {
        employeeCode : employeeCode,
      }
      getEmployeeCodeListRequest(data).then(getEmployeeCodeListResponseHandelr);
    }
    // description : 검색버튼 부서코드창 열기 이벤트 //
    const onDepartmentSearchOpenButtonClickHandler = () => {
      setOpen(true);
      setLabel('부서코드도움');
      const data: GetDepartmentCodeListRequestDto = {
        departmentCode : departmentCode,
      }
      getDepartmentCodeListRequest(data).then(getDepartmentCodeListResponseHandelr);
    }
    // description: 검색창 닫기 //
    const onCloseButtonClickHandler = () => {
      setOpen(false);
    }

    //!                    effect                   //
    // description : 뷰에 들어올 때 한번만 실행 //
    let flag = false;
    useEffect(()=>{
      if(flag == false){
        flag = true;
        return;
      }
      // description : 전표유형 콤보박스 리스트 호출
      getInvoiceTypeRequest().then(getInvoiceTypeListResponseHandler);
    }, [])

    // description : path가 바뀔 때마다 실행 //
    useEffect(()=>{
          resetInvoiceRequst();
          // resetInvoiceList();
          
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
                      <input className='invoice-right-top-search-dept-box-code-box-text' value={departmentCode? departmentCode : ''} type="text" onChange={onDepartmentCodeChangeHandler} />
                    </div>
                    <div className='invoice-right-top-search-button' onClick={onDepartmentSearchOpenButtonClickHandler} >검색</div>
                    <div className='invoice-right-top-search-dept-box-name-box'>
                      <input className='invoice-right-top-search-dept-box-name-box-text' value={departmentName? departmentName : ''} type="text" />
                    </div>
                  </div>
                </div>
                <div className='invoice-right-top-search-employee'>
                  <div className='invoice-right-top-search-employee-text'>작성자</div>
                    <div className='invoice-right-top-search-employee-box'>
                      <div className='invoice-right-top-search-employee-box-code-box'>
                        <input className='invoice-right-top-search-employee-box-code-box-text' value={employeeCode? employeeCode : ''} type="text" onChange={onEmployeeCodeChangeHandler}/>
                      </div>
                      <div className='invoice-right-top-search-button' onClick={onEmployeeSearchOpenButtonClickHandler}>검색</div>
                      <div className='invoice-right-top-search-employee-box-name-box'>
                        <input className='invoice-right-top-search-employee-box-name-box-text' value={employeeName? employeeName : ''} type="text" />
                      </div>
                    </div>              
                  </div>
                  <div className='invoice-right-top-search-employment-status'>
                    <div className='invoice-right-top-search-employment-status-text'>전표유형</div>
                    <div className='invoice-right-top-search-employment-status-box'>
                      <div className='invoice-right-top-search-employment-status-box-combo-box'>
                        <select className='invoice-right-top-search-employment-status-box-combo-box-text' onChange={onInvoiceTypeChangeHandler} name="invoice-type" id="invoice-type">
                          <option value="">전체</option>
                          { invoiceTypeList.map( ({userDefineDetailName}) => (<option value={userDefineDetailName}>{userDefineDetailName}</option>))  }
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
              <div id='bottom-wrapper'>
                <div className="invoicelist-search-result">
                  <div className="invoicelist-search-result-list-text">Total {invoiceList === null ? 0 : invoiceList.length} EA</div>
                  <div className="invoicelist-search-result-list-container">
                    <div className="invoicelist-search-result-list-title">
                      <div className="title-number"> </div>
                      <div className="title-date">결의일</div>
                      <div className="title-invoice-code">전표번호</div>
                      <div className="title-invoice-type">구분</div>
                      <div className="title-price">금액</div>
                      <div className="title-invoice-content">적요</div>
                      <div className="title-worker-code">담당자</div>
                    </div>
                    {
                        !invoiceList || invoiceList.length==0  ? (<div className='nothing-data-form'>조회된 데이터가 없습니다.</div>) : (<div> { invoiceList !== null && invoiceList.map( (item) => (<InvoiceListItem item = {item} />) ) }</div> )
                    }
                  </div>
                </div>

                {open && <CodeSearchListItem label={label} dtoList={searchCodeList} onCloseButtonClick={onCloseButtonClickHandler} onDataItemClickHandler={onDataItemClickHandler}/>}
              </div>
            </div>
          </div>
        </div>
    )
}
