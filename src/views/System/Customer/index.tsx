import React, { ChangeEvent, useState, useEffect } from 'react'

import SystemMenu from '../SystemMenu'

import { useLocation, useNavigate } from 'react-router-dom';
import { HOME_PATH, SYSTEM_CUSTOMER_INFO } from 'src/constants';

import './style.css'
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useCustomerInfoStore, useCustomerRequestStore, useCustomerResponseStore, useSelectedCustomerStore, useUserStore } from 'src/stores';
import { useCookies } from 'react-cookie';
import PutCustomerInfoRequestDto from 'src/interfaces/request/system/put-customer-info.request.dto';
import { getCustomerListRequest, putCustomerInfoRequest } from 'src/apis';
import { GetCustomerListResponseDto } from 'src/interfaces/response/system';
import ResponseDto from 'src/interfaces/response/response.dto';

export default function CustomerInfo() {

  // state //
  // description: path 상태 //
  const {pathname} = useLocation();
  // description: 로그인 사용자의 정보 상태
  const { user, setUser } = useUserStore();
  // description: 쿠키 상태 //
  const [cookies, setCookie] = useCookies ();
  // description: 거래처 정보 상태 //
  const {customerCodeInfo, customerNameInfo, customerBusinessNumber, customerPostCode, customerAddress, customerAddressDetail, customerTelNumber, 
    setCustomerCodeInfo, setCustomerNameInfo, setCustomerBusinessNumber, setCustomerPostCode, setCustomerAddress, setCustomerAddressDetail, setCustomerTelNumber} = useCustomerInfoStore();
  // description: 조회 조건 //
  const {setCustomerCode, setCustomerName, resetCustomerRequest} = useCustomerRequestStore();
  // description: 거래처 정보 불러오기 //
  const {customerList, setCustomerList, resetCustomerList} = useCustomerResponseStore();
  // description: 선택 거래처 정보 //
  const { selectedCustomerCode, setSelectedCustomerCode } = useSelectedCustomerStore();
  const { selectedCustomerName, setSelectedCustomerName } = useSelectedCustomerStore();
  // description: 다음 포스트 (우편번호검색) 팝업 상태 //
  const open = useDaumPostcodePopup();

  // function //
  const navigator = useNavigate();

  // description: 거래처 정보 불러오기 응답 함수 //
  const getCustomerInfoResponseHandler = (responsebody: GetCustomerListResponseDto | ResponseDto) => {
    const { code } = responsebody;

    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code !== 'SU') return;

    const { customerList } = responsebody as GetCustomerListResponseDto;
    setCustomerList(customerList);
  }
  // description: 거래처 정보 등록 응답 함수 //
  const putCustomerInfoResponseHandler = (code: string) => {

    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code !== 'SU') return;

    if(!user) return;
    alert("거래처 정보 등록 완료!");
    navigator(HOME_PATH);
  }

  // event handler //
  // description: 취소 버튼 클릭 이벤트 //
  const onCancelButtonClickHandler = () => {
    navigator(HOME_PATH);
  }
  // description: 거래처 코드 입력 이벤트 //
  const onCustomerCodeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[0-9]*$/;
    const value = event.target.value;

    const isNumber = reg.test(value);
    if (isNumber) setCustomerCode(Number(value));
  }

  // description: 거래처 명 입력 이벤트 //
  const onCustomerNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const reg = /^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]*$/ // 알파벳, 숫자, 한글만 허용하는 정규식, 특수문자 제외 
    const value = event.target.value;

    const isValid = reg.test(value);
    if (isValid) setCustomerName(value);
  }

  // description: 우편번호 조회버튼클릭 이벤트 //
  const onPostCodeIconClickHandler = () => {
    open({ onComplete });
  };
  const onComplete = (data: Address) => {
    const address = data.address;
    const zonecode = data.zonecode;
    setCustomerAddress(address);
    setCustomerPostCode(zonecode);
  };
  // description: 거래처 이름 변경 이벤트 //
  const onCustomerNameInfoChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerNameInfo(event.target.value);
  }
  // description: 사업자등록번호 변경 이벤트 //
  const onBusinessNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCustomerBusinessNumber(event.target.value);
  }
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

  // description: 저장 버튼 클릭 이벤트 //
  const onCustomerSaveButtonClickHandler = async () => {
  
    const token = cookies.accessToken;

    const data: PutCustomerInfoRequestDto = {
      customerCodeInfo: 0,
      customerNameInfo: customerNameInfo,
      customerBusinessNumber: customerBusinessNumber,
      customerPostCode: customerPostCode,
      customerAddress: customerAddress,
      customerAddressDetail: customerAddressDetail,
      customerTelNumber: customerTelNumber,
    };

    putCustomerInfoRequest(data, token).then(putCustomerInfoResponseHandler)
  }

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
        <div className='customer-info-search'>
          <div className='customer-info-search-container'>
            <div className='customer-info-search-code'>
              <div className='customer-info-search-code-text-container'>
                <div className='customer-info-search-code-text'>거래처 코드 *</div>
              </div>
              <div className='customer-info-search-code-container'>
                <input className='code-search-input-box' placeholder='거래처 코드 입력' onChange={onCustomerCodeChangeHandler} />
                <div className='customer-code-search-button' >검색</div>
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
                <input className='name-search-input-box' placeholder='거래처 명 입력' type='text' onChange={onCustomerNameChangeHandler} />
                <div className='customer-name-search-button' >검색</div>
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
                  <div className='customer-info-middle-left-bottom-table-body-container'>
                      <div className='customer-info-middle-left-bottom-table-body'>
                        <div className='customer-info-middle-left-bottom-table-body-no'>  </div>
                        <div className='customer-info-middle-left-bottom-table-body-customer-code'>  </div>
                        <div className='customer-info-middle-left-bottom-table-body-customer-name'>  </div>
                      </div>
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
                  <input className='customer-name-input' onChange={onCustomerNameInfoChangeHandler} value={customerNameInfo} />
                </div>
                <div className='customer-business-number'>
                  <div className='customer-business-number-text'>사업자 등록번호</div>
                  <input className='customer-business-number-input' onChange={onBusinessNumberChangeHandler} value={customerBusinessNumber} />
                </div>
                <div className='customer-postcode'>
                  <div className='customer-postcode-text'>우편번호</div>
                  <div className='customer-postcode-container'>
                    <input className='customer-postcode-input' type="text" defaultValue={customerPostCode} />
                    <div className="customer-postcode-icon" onClick={onPostCodeIconClickHandler}></div>
                  </div>
                </div>
                <div className='customer-address'>
                  <div className='customer-address-text'>거래처 주소</div>
                  <input className='customer-address-input' onChange={onCustomerAddressChangeHandler} value={customerAddress} />
                </div>
                <div className='customer-address-detail'>
                  <div className='customer-address-detail-text'>거래처 상세주소</div>
                  <input className='customer-address-detail-input' defaultValue={customerAddressDetail? customerAddressDetail : ''} onChange={onCustomerAddressDetailChangeHandler} type="text" />
                </div>
                <div className='customer-tel-number'>
                  <div className='customer-tel-number-text'>거래처 전화번호</div>
                  <input className='customer-tel-number-input' onChange={onCustomerTelNumberChangeHandler} value={customerTelNumber} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='customer-info-bottom'>
          <div className='customer-info-bottom-button-save' onClick={onCustomerSaveButtonClickHandler}>
            <div className='customer-info-bottom-button-save-text' >수정 및 저장</div>
          </div>
          <div className='customer-info-bottom-button-cancel'>
            <div className='customer-info-bottom-button-cancel-text' onClick={onCancelButtonClickHandler}>취소</div>
          </div>
        </div>
      </div>
    </div>
  )
}

