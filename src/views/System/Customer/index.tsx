import React, { ChangeEvent, useState } from 'react'

import SystemMenu from '../SystemMenu'

import { useNavigate } from 'react-router-dom';
import { HOME_PATH, SYSTEM_CUSTOMER_INFO } from 'src/constants';

import './style.css'
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useCustomerInfoStore, useUserStore } from 'src/stores';
import { useCookies } from 'react-cookie';
import PutCustomerInfoRequestDto from 'src/interfaces/request/system/put-customer-info.request.dto';
import { putCustomerInfoRequest } from 'src/apis';
import CustomerListResponseDto from 'src/interfaces/response/system/customer-list.response.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import { GetCustomerInfoRepsonseDto } from 'src/interfaces/response/system';

export default function CustomerInfo() {

  // state //
  // description: 로그인 사용자의 정보 상태
  const { user, setUser } = useUserStore();
  // description: 쿠키 상태 //
  const [cookies, setCookie] = useCookies ();
  // description: 거래처 불러오기 //
  const [customerList, setCustomerList] = useState<CustomerListResponseDto[]>([]);
  // description: 거래처 정보 상태
  const { companyCode, customerCode, customerName, businessNumber, postCode, customerAddress, customerAddressDetail, customerTelNumber, 
    setCompanyCode, setCustomerCode, setCustomerName, setBusinessNumber, setPostCode, setCustomerAddress, setCustomerAddressDetail, setCustomerTelNumber } = useCustomerInfoStore();
  // description: 다음 포스트 (우편번호검색) 팝업 상태 //
  const open = useDaumPostcodePopup();

  // function //
  const navigator = useNavigate();

  // description: 부서 정보 불러오기 
  const getCustomerInfoResponseHandler = (responsebody: GetCustomerInfoRepsonseDto | ResponseDto) => {
    const { code } = responsebody;

    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code !== 'SU') return;

    const { customerList } = responsebody as GetCustomerInfoRepsonseDto;
    setCustomerList(customerList);

  }

  // description : 거래처 정보 등록 응답 함수 //
  const putCustomerInfoResponseHandler = (code : string) => {
    
    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code !== 'SU') return;

    if(!user) return;
    alert('거래처 등록 완료');
    navigator(HOME_PATH);
  }

  // event handler //
  // description: 저장 버튼 클릭 이벤트 //
  const onSaveButtonClickHandler = async () => {
    const token = cookies.accessToken;

    const data : PutCustomerInfoRequestDto = {
      companyCode: 0,
      customerCode: 2001,
      customerName: customerName,
      businessNumber: businessNumber,
      postcode: postCode,
      customerAddress: customerAddress,
      customerAddressDetail: customerAddressDetail,
      customerTelNumber: customerTelNumber
    };
    putCustomerInfoRequest(data, token).then(putCustomerInfoResponseHandler);
  }
  // description: 취소 버튼 클릭 이벤트 //
  const onCancelButtonClickHandler = () => {
    navigator(HOME_PATH);
  }
  // description: 거래처 코드 검색 버튼 클릭 이벤트 //
  const onCustomerCodeSearchButtonClickHandler = () => {

  }
  // description: 거래처 명 검색 버튼 클릭 이벤트 //
  const onCustomerNameSearchButtonClickHandler = () => {

  }

  // description: 우편번호 조회버튼클릭 이벤트 //
  const onPostCodeIconClickHandler = () => {
    open({ onComplete });
  };
  const onComplete = (data: Address) => {
    const address = data.address;
    const zonecode = data.zonecode;
    setCustomerAddress(address);
    setPostCode(zonecode);
  };
  // description: 주소 변경 이벤트 //
  const onCustomerAddressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerAddress(event.target.value);
  };
  // description: 상세주소 변경 이벤트 //
  const onCustomerAddressDetailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerAddressDetail(event.target.value);
  };
  // description: 전화번호 변경 이벤트 //
  const onCustomerTelNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerTelNumber(event.target.value);
  };

  // component //

  // effect //


  // render //
  return (
    <div id='customer-info'>
      <SystemMenu/>
      <div className='customer-info-wrapper'>
        <div className='customer-info-top'>
          <div className='customer-info-top-text'>거래처등록</div>
        </div>
        <div className='divider'></div>
        <div className='customer-info-search'>
          <div className='customer-info-search-container'>
            <div className='customer-info-search-code'>
              <div className='customer-info-search-code-text-container'>
                <div className='customer-info-search-code-text'>거래처 코드 *</div>
              </div>
              <div className='customer-info-search-code-container'>
                <input className='code-search-input-box' placeholder='거래처 코드 입력'/>
                <div className='customer-code-search-button' onClick={onCustomerCodeSearchButtonClickHandler} >검색</div>
                <div className='code-search-input-box-display'>
                  <div className='code-search-input-box-display-text'>검색출력</div>
                </div>
              </div>
            </div>
            <div className='customer-info-search-name'>
              <div className='customer-info-search-name-text-container'>
                <div className='customer-info-search-name-text'>거래처 명 *</div>
              </div>
              <div className='customer-info-search-name-container'>
                <input className='name-search-input-box' placeholder='거래처 명 입력' />
                <div className='customer-name-search-button' onClick={onCustomerNameSearchButtonClickHandler} >검색</div>
                <div className='name-search-input-box-display'>
                  <div className='name-search-input-box-display-text'>검색출력</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='customer-info-middle'>
          <div className='customer-info-middle-left'>
            <div className='customer-info-middle-left-top'>
              <div className='customer-info-middle-left-top-text'>거래처 리스트</div>
            </div>
            <div className='customer-info-middle-left-bottom'>
              <div className='customer-info-middle-left-bottom-container'>
                <div className='customer-info-middle-left-bottom-table'>
                  <div className='customer-info-middle-left-bottom-table-title'>
                    <div className='customer-info-middle-left-bottom-table-title-no'>No</div>
                    <div className='customer-info-middle-left-bottom-table-title-customer-code'>거래처 코드</div>
                    <div className='customer-info-middle-left-bottom-table-title-customer-name'>거래처 명</div>
                  </div>
                  <div className='customer-info-middle-left-bottom-table-body'>
                    <div className='customer-info-middle-left-bottom-table-body-no'>1</div>
                    <div className='customer-info-middle-left-bottom-table-body-customer-code'>2001</div>
                    <div className='customer-info-middle-left-bottom-table-body-customer-name'>거래처 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='customer-info-middle-right'>
            <div className='customer-info-middle-right-top'>
              <div className='customer-info-middle-right-top-text'>거래처 정보 등록</div>
            </div>
            <div className='customer-info-middle-right-bottom'>
              <div className='customer-info-middle-right-bottom-container'>
                <div className='customer-name'>
                  <div className='customer-name-text'>거래처 명</div>
                  <input className='customer-name-input' />
                </div>
                <div className='customer-business-number'>
                  <div className='customer-business-number-text'>사업자 등록번호</div>
                  <input className='customer-business-number-input' />
                </div>
                <div className='customer-postcode'>
                  <div className='customer-postcode-text'>우편번호</div>
                  <div className='customer-postcode-container'>
                    <input className='customer-postcode-input' type="text" defaultValue={postCode} />
                    <div className="customer-postcode-icon" onClick={onPostCodeIconClickHandler}></div>
                  </div>
                </div>
                <div className='customer-address'>
                  <div className='customer-address-text'>거래처 주소</div>
                  <input className='customer-address-input' defaultValue={customerAddress} onChange={onCustomerAddressChangeHandler} type="text" />
                </div>
                <div className='customer-address-detail'>
                  <div className='customer-address-detail-text'>거래처 상세주소</div>
                  <input className='customer-address-detail-input' defaultValue={customerAddressDetail? customerAddressDetail : ''} onChange={onCustomerAddressDetailChangeHandler} type="text" />
                </div>
                <div className='customer-tel-number'>
                  <div className='customer-tel-number-text'>거래처 전화번호</div>
                  <input className='customer-tel-number-input' defaultValue={customerTelNumber} onChange={onCustomerTelNumberChangeHandler} type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='customer-info-bottom'>
          <div className='customer-info-bottom-button-save'>
            <div className='customer-info-bottom-button-save-text' onClick={onSaveButtonClickHandler}>수정 및 저장</div>
          </div>
          <div className='customer-info-bottom-button-cancel'>
            <div className='customer-info-bottom-button-cancel-text' onClick={onCancelButtonClickHandler}>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}

