import React, { ChangeEvent, useState, useEffect } from 'react'

import SystemMenu from '../SystemMenu'

import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_PATH, SYSTEM_CUSTOMER_INFO } from 'src/constants';

import './style.css'
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useCustomerInfoStore, useCustomerRequestStore, useCustomerResponseStore, useSelectedCustomerStore, useUserStore } from 'src/stores';
import { useCookies } from 'react-cookie';
import { PutCustomerInfoRequestDto } from 'src/interfaces/request/system';
import { CustomerInfo } from 'src/stores/systemCustomer/customerlist.response.store';

export default function Customer() {

  // state //
  // description: path 상태 //
  const {pathname} = useLocation();
  // description: 쿠키 상태 //
  const [cookies, setCookie] = useCookies ();
  // description: 조회 조건 //
  const { setCustomerName, resetCustomerRequest } = useCustomerRequestStore();
  // description: 거래처 정보 상태 //
  const {customerCodeInfo, customerNameInfo, customerBusinessNumber, customerPostCode, customerAddress, customerAddressDetail, customerTelNumber, 
    setCustomerCodeInfo, setCustomerNameInfo, setCustomerBusinessNumber, setCustomerPostCode, setCustomerAddress, setCustomerAddressDetail, setCustomerTelNumber} = useCustomerInfoStore();
  // description: 거래처List 정보 불러오기 //
  const {customerList, setCustomerList, resetCustomerList} = useCustomerResponseStore();
  // description: 선택 거래처 코드 //
  const { selectedCustomerCode, setSelectedCustomerCode } = useSelectedCustomerStore();
  // description: 기존 거래처 선택 상태 //
  const [ custInfoList, setCustInfoList ] = useState<boolean>(false);
  // description: 새로 거래처 선책 상태 //
  const [ newCustInfo, setNewCustInfo ] = useState<boolean>(true);
  // description: 다음 포스트 (우편번호검색) 팝업 상태 //
  const open = useDaumPostcodePopup();

  // function //
  const navigator = useNavigate();

  // event handler //
  // description: 거래처 정보 수정을 위한 클릭 //
  const onCustomerInfoListClickHandler = () => {
    setCustInfoList(true);
    setNewCustInfo(false);
  }
  // description: 새로운 부서정보 입력을 위한 클릭 //
  const onNewCustomerInfoClickHandler = () => {
    setCustInfoList(false);
    setNewCustInfo(true);
  }

  // description: 거래처 명 입력 이벤트 //
  const onCustomerNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/ // 알파벳, 숫자, 한글만 허용하는 정규식, 특수문자 제외 
    const value = event.target.value;

    const isValid = reg.test(value);
    if (isValid) setCustomerName(value);
  }

  // ----------------------------------------------------------------------

  //!       존재하는 거래처       //
  // description: 거래처명 변경 이벤트 처리 //
  const onExistCustomerNameChangeEvent = (event: ChangeEvent<HTMLInputElement>, customerInfo: CustomerInfo) => {

    if (!customerList) return;
    const value = event.target.value;
    const newCustomerInfo: CustomerInfo = { ...customerInfo, customerName: value };
    const newCustomerList: CustomerInfo[] = customerList.map(item => item.customerCode === newCustomerInfo.customerCode ? newCustomerInfo : item);
    setCustomerList(newCustomerList);

  }
  // description: 사업자등록번호 변경 이벤트 처리 //
  const onExistCustomerBusinessNumberChangeEvent = (event: ChangeEvent<HTMLInputElement>, customerInfo: CustomerInfo) => {

    if (!customerList) return;
    const value = event.target.value;
    const newCustomerInfo: CustomerInfo = { ...customerInfo, customerBusinessNumber: value };
    const newCustomerList: CustomerInfo[] = customerList.map(item => item.customerCode === newCustomerInfo.customerCode ? newCustomerInfo : item);
    setCustomerList(newCustomerList);

  }
  // description: 우편번호 변경 이벤트 처리 //
  const onExistCustomerPostCodeChangeEvent = (event: ChangeEvent<HTMLInputElement>, customerInfo: CustomerInfo) => {

    if (!customerList) return;
    const value = event.target.value;
    const newCustomerInfo: CustomerInfo = { ...customerInfo, customerPostCode: value };
    const newCustomerList: CustomerInfo[] = customerList.map(item => item.customerCode === newCustomerInfo.customerCode ? newCustomerInfo : item);
    setCustomerList(newCustomerList);

  }
  // description: 주소 변경 이벤트 처리 //
  const onExistCustomerAddressChangeEvent = (event: ChangeEvent<HTMLInputElement>, customerInfo: CustomerInfo) => {

    if (!customerList) return;
    const value = event.target.value;
    const newCustomerInfo: CustomerInfo = { ...customerInfo, customerAddress: value };
    const newCustomerList: CustomerInfo[] = customerList.map(item => item.customerCode === newCustomerInfo.customerCode ? newCustomerInfo : item);
    setCustomerList(newCustomerList);

  }
  // description: 주소 상세 변경 이벤트 처리 //
  const onExistCustomerAddressDetailChangeEvent = (event: ChangeEvent<HTMLInputElement>, customerInfo: CustomerInfo) => {

    if (!customerList) return;
    const value = event.target.value;
    const newCustomerInfo: CustomerInfo = { ...customerInfo, customerAddressDetail: value };
    const newCustomerList: CustomerInfo[] = customerList.map(item => item.customerCode === newCustomerInfo.customerCode ? newCustomerInfo : item);
    setCustomerList(newCustomerList);

  }
  // description: 연락처 변경 이벤트 처리 //
  const onExistCustomerTelNumberChangeEvent = (event: ChangeEvent<HTMLInputElement>, customerInfo: CustomerInfo) => {

    if (!customerList) return;
    const value = event.target.value;
    const newCustomerInfo: CustomerInfo = { ...customerInfo, customerTelNumber: value };
    const newCustomerList: CustomerInfo[] = customerList.map(item => item.customerCode === newCustomerInfo.customerCode ? newCustomerInfo : item);
    setCustomerList(newCustomerList);

  }
  
  //!       신규 거래처       //
  // description: 거래처명 변경 이벤트 처리 //
  const onCustomerNameChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerNameInfo(event.target.value);
  }
  // description: 사업자등록번호 변경 이벤트 처리 //
  const onCustomerBusinessNumberChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerBusinessNumber(event.target.value);
  }
  // description: 우편번호 변경 이벤트 처리 //
  const onCustomerPostCodeChangeEvent = () => {
    open({ onComplete });
  }
  const onComplete = (data: Address) => {
    const address = data.address;
    const zonecode = data.zonecode;
    setCustomerAddress(address);
    setCustomerPostCode(zonecode);
  };
  // description: 주소 변경 이벤트 처리 //
  const onCustomerAddressChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerAddress(event.target.value);
  }
  // description: 상세주소 변경 이벤트 처리 //
  const onCustomerAddressDetailChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerAddressDetail(event.target.value);
  }
  // description: 연락처 변경 이벤트 처리 //
  const onCustomerTelNumberChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerTelNumber(event.target.value);
  }

  // ----------------------------------------------------------------------



  // component //

  // effect //
  useEffect(() => {
    resetCustomerList();
    resetCustomerRequest();
  }, [pathname])


  // render //
  return (
    <div id='customer-info'>
      <SystemMenu/>
      <div className='customer-info-wrapper'>
        <div className='customer-info-top'>
          <div className='customer-info-top-text'>거래처등록</div>
        </div>
        <div className='divider'></div>
        <div className='customer-info-view-top'>
          <div className='customer-info-view-top-text'>거래처 정보 조회</div>
        </div>
        <div className='customer-info-search-function'>
          <div className='customer-info-search-container'>
            <div className='customer-info-search-customer-name'>
              <div className='customer-info-search-customer-name-text'>거래처 명</div>
            </div>
            <input className='customer-info-search-customer-name-box-name-box-text' type="text" onChange={onCustomerNameChangeHandler} />
          </div>
        </div>
        <div className='customer-info-view-top'>
          <div className='customer-info-view-top-text'>거래처 정보 등록</div>
        </div>

        <div className='customer-info-view-container'>
          <div className='customer-info-view-container-box'>
            <div className='customer-info-view-container-table'>
              <div className='customer-info-view-container-table-title'>
                <div className='customer-info-view-container-table-title-no'>No</div>
                <div className='customer-info-view-container-table-title-customer-code'>거래처코드</div>
                <div className='customer-info-view-container-table-title-customer-name'>거래처명</div>
                <div className='customer-info-view-container-table-title-business-number'>사업자등록번호</div>
                <div className='customer-info-view-container-table-title-postcode'>우편번호</div>
                <div className='customer-info-view-container-table-title-address'>주소</div>
                <div className='customer-info-view-container-table-title-address-detail'>상세주소</div>
                <div className='customer-info-view-container-table-title-tel-number'>전화번호</div>
              </div>
              {/* 아래 바디 리스트 뷰를 만들어서 불러오기 */}
              <div className='customer-info-view-container-table-body-container'>
                
                { customerList !== null &&
                  customerList.map((item) => (
                    <div className='customer-info-view-container-table-body'>
                      <div className='customer-info-view-container-table-body-no' onClick={onCustomerInfoListClickHandler}>{item.no}</div>
                      <div className='customer-info-view-container-table-body-customer-code' onClick={onCustomerInfoListClickHandler}>{item.customerCode}</div>
                      { custInfoList ? (<input className='customer-info-view-container-table-body-customer-name' defaultValue={item.customerName}             type='text' onChange={event => onExistCustomerNameChangeEvent(event, item)}           onFocus={() => setSelectedCustomerCode(item.customerCode)} />) : (<input className='customer-info-view-container-table-body-customer-name' defaultValue={item.customerName} type='text' disabled /> ) }
                      { custInfoList ? (<input className='customer-info-view-container-table-body-business-number' defaultValue={item.customerBusinessNumber} type='text' onChange={event => onExistCustomerBusinessNumberChangeEvent(event, item)} onFocus={() => setSelectedCustomerCode(item.customerCode)} />) : (<input className='customer-info-view-container-table-body-business-number' defaultValue={item.customerBusinessNumber} type='text' disabled /> ) }
                      { custInfoList ? (<input className='customer-info-view-container-table-body-postcode' defaultValue={item.customerPostCode}              type='text' onChange={event => onExistCustomerPostCodeChangeEvent(event, item)}       onFocus={() => setSelectedCustomerCode(item.customerCode)} />) : (<input className='customer-info-view-container-table-body-postcode' defaultValue={item.customerPostCode} type='text' disabled /> ) }
                      { custInfoList ? (<input className='customer-info-view-container-table-body-address' defaultValue={item.customerAddress}                type='text' onChange={event => onExistCustomerAddressChangeEvent(event, item)}        onFocus={() => setSelectedCustomerCode(item.customerCode)} />) : (<input className='customer-info-view-container-table-body-address' defaultValue={item.customerAddress} type='text' disabled /> ) }
                      { custInfoList ? (<input className='customer-info-view-container-table-body-address-detail' defaultValue={item.customerAddressDetail || ''}   type='text' onChange={event => onExistCustomerAddressDetailChangeEvent(event, item)}  onFocus={() => setSelectedCustomerCode(item.customerCode)} />) : (<input className='customer-info-view-container-table-body-address-detail' defaultValue={item.customerAddressDetail || ''} type='text' disabled /> ) }
                      { custInfoList ? (<input className='customer-info-view-container-table-body-tel-number' defaultValue={item.customerTelNumber}           type='text' onChange={event => onExistCustomerTelNumberChangeEvent(event, item)}      onFocus={() => setSelectedCustomerCode(item.customerCode)} />) : (<input className='customer-info-view-container-table-body-tel-number' defaultValue={item.customerTelNumber} type='text' disabled /> ) }
                    </div>
                  )) }
                
                <div className='customer-info-view-container-table-body-new' onClick={ onNewCustomerInfoClickHandler } onFocus={() => setSelectedCustomerCode(null)}>
                  <div className='customer-info-view-container-table-body-new-no'></div>
                  <div className='customer-info-view-container-table-body-new-customer-code'></div>
                  <input className='customer-info-view-container-table-body-new-customer-name'   value={customerNameInfo}             type='text' onChange={onCustomerNameChangeEvent} />
                  <input className='customer-info-view-container-table-body-new-business-number' value={customerBusinessNumber}       type='text' onChange={onCustomerBusinessNumberChangeEvent} />
                  <input className='customer-info-view-container-table-body-new-postcode'        value={customerPostCode}             type='text' onChange={onCustomerPostCodeChangeEvent} />
                  <input className='customer-info-view-container-table-body-new-address'         value={customerAddress}              type='text' onChange={onCustomerAddressChangeEvent} />
                  <input className='customer-info-view-container-table-body-new-address-detail'  value={customerAddressDetail || ''}  type='text' onChange={onCustomerAddressDetailChangeEvent} />
                  <input className='customer-info-view-container-table-body-new-tel-number'      value={customerTelNumber}            type='text' onChange={onCustomerTelNumberChangeEvent} />
                </div>
              </div>
              {/* 여기까지 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

