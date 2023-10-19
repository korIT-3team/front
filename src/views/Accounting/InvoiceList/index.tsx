import { ChangeEvent, useEffect, useState } from 'react'
import AccountingMenu from '../AccountingMenu'
import InvoiceListItem from 'src/components/InvoiceListItem'
import { useInvoiceListStore, useInvoiceRequestStore } from 'src/stores';
import { useLocation } from 'react-router-dom';
import './style.css'
import InvoiceTypeResponseDto from 'src/interfaces/response/accounting/invoice-type.response.dto';
import { getEmployeeCodeListRequest, getInvoiceTypeRequest } from 'src/apis';
import { GetInvoiceTypeListResponseDto } from 'src/interfaces/response/accounting';
import ResponseDto from 'src/interfaces/response/response.dto';
import CodeSearchListItem from 'src/components/CodeSearchListItem';
import SearchCodeResponseDto from 'src/interfaces/response/common/search-code.response.dto';
import GetEmployeeCodeListRequestDto from 'src/interfaces/request/common/get-employee-code-list.request.dto';
import GetSearchCodeListResponseDto from 'src/interfaces/response/common/get-search-code-list.response.dto';

export default function InvoiceList() {
    //!          state          //
    // description : path 상태 //
    const { pathname } = useLocation();
    // description: 조회조건 정보 store //
    const { employeeCode ,setEmployeeCode, setDepartmentCode, setInvoiceDateStart, setInvoiceDateEnd, setInvoiceTypeName, resetInvoiceRequst } = useInvoiceRequestStore();
    // description: 조회된 전표 리스트 정보 store //
    const { invoiceList, resetInvoiceList } = useInvoiceListStore();
    // description: 조회조건 : 전표유형 리스트 정보 store //
    const [ invoiceTypeList, setInvoiceTypeList ] = useState<InvoiceTypeResponseDto[]>([]);
    const [ open, setOpen ] = useState<boolean>(false);
    const [ label, setLabel ] =useState<string>('');
    const [ searchCodeList, setSearchCodeList ] = useState<SearchCodeResponseDto[]>([]);


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
    const getEmployeeCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {

      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
      setSearchCodeList(searchCodeList);
    }   

    //!             event handler              //
    // description : 작성자 코드 입력 이벤트 //
    const onEmployeeCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setEmployeeCode(value == '' ? null : Number(value));
    }
    // description : 부서 코드 입력 이벤트 //
    const onDepartmentCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const reg = /^[0-9]*$/;
      const value = event.target.value;
      const isNumber = reg.test(value);
      if (isNumber) setDepartmentCode(value == '' ? null : Number(value));
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
    const onEmployeeSearchOpenButtonClickHandler = () => {
      setOpen(true);
      setLabel('사원조회결과');
      // todo! : 각 클릭핸들러는 만들고 리퀘스트랑 리스폰스핸들러도 각자 만들어지지만, 그 데이터리스트를 받는 dto는 하나만 있고 그걸 넘겨주면된다.
      //! 각 검색마다 연결해주기.
      const data: GetEmployeeCodeListRequestDto = {
        employeeCode : employeeCode,
   }
      getEmployeeCodeListRequest(data).then(getEmployeeCodeListResponseHandelr);
    }
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
                      <input className='invoice-right-top-search-dept-box-code-box-text' type="text" onChange={onDepartmentCodeChangeHandler} />
                    </div>
                    <div className='invoice-right-top-search-button' >검색</div>
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
                      <div className='invoice-right-top-search-button' onClick={onEmployeeSearchOpenButtonClickHandler}>검색</div>
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
                    { invoiceList !== null && invoiceList.map( (item) => (<InvoiceListItem item = {item} />) ) }
                  </div>
                </div>

                {open && <CodeSearchListItem label={label} dtoList={searchCodeList} onCloseButtonClick={onCloseButtonClickHandler} />}
              </div>
            </div>
          </div>
        </div>
    )
}
