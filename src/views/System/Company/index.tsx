import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import SystemMenu from "../SystemMenu";
import { useDaumPostcodePopup, Address } from "react-daum-postcode";
import "./style.css";
import { useCompoanyInfoStore, useUserStore } from "src/stores";
import { useCookies } from "react-cookie";
import { DEPARTMENT_CODE, HOME_PATH } from "src/constants";
import { useNavigate } from "react-router-dom";
import { PutCompanyInfoRequestDto } from "src/interfaces/request/system";
import { getCompanyInfoRequest, putCompanyInfoRequest, uploadFileRequest } from "src/apis";
import { GetompanyInfoResponseDto } from "src/interfaces/response/system";
import ResponseDto from "src/interfaces/response/response.dto";
import DefaultLogo from 'src/assets/logo_upload_image.PNG';

export default function Company() {
  //!         state          //
  // description: 로그인 사용자의 정보 상태
  const { user } = useUserStore();
  // description: 회사 정보 상태
  const { logoImageUrl, logoImage,  bizNumber, companyName, repName, postCode, companyAddress, 
    companyAddressDetail, telNumber, bizStatus,  bizType, englishName, homepage, 
    setLogoImageUrl, setLogoImage, setBizNumber, setCompanyName, setRepName, setPostCode, setCompanyAddress, 
    setCompanyAddressDetail,  setTelNumber, setBizStatus, setBizType, setEnglishName, setHomepage } = useCompoanyInfoStore();
  // description: 쿠키 상태 //
  const [ cookies ] = useCookies();
  // description: 다음 포스트 (우편번호검색) 팝업 상태 //
  const open = useDaumPostcodePopup();
  // description: useRef를 사용하여 HTML 요소를 JS 객체로 다룰수 있음 //
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  //!           function            //
  const navigator = useNavigate();
  // description : 회사 정보 불러오기 응답 함수 //
  const getCompanyInfoResponseHandler = (responsebody : GetompanyInfoResponseDto | ResponseDto ) => {
    const { code } = responsebody;

    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code !== 'SU') return;
    
    const { logoImageUrl, bizNumber, companyName, repName, postCode, companyAddress, companyAddressDetail
    , telNumber, bizStatus, bizType, englishName, homepage } = responsebody as GetompanyInfoResponseDto;
    setLogoImageUrl(logoImageUrl);
    setBizNumber(bizNumber);
    setCompanyName(companyName);
    setRepName(repName);
    setPostCode(postCode);
    setCompanyAddress(companyAddress);
    setCompanyAddressDetail(companyAddressDetail);
    setTelNumber(telNumber);
    setBizStatus(bizStatus);
    setBizType(bizType);
    setEnglishName(englishName);
    setHomepage(homepage);
  }
  // description : 회사 정보 등록 응답 함수 //
  const putCompanyInfoResponseHandler = (code : string) => {
    
    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code !== 'SU') return;

    if(!user) return;
    alert('회사정보등록 완료');
    navigator(HOME_PATH);
  }
  // description : 파일 업로드 함수
  const fileUpload = async () => {
    if(!logoImage) return null;
    const data = new FormData();
    data.append('file', logoImage);
    const imageUrl = await uploadFileRequest(data); // Promise<string> 타입이 반환됨

    return imageUrl;
  }


  //!         event Handler          //
  // description: 로고업로드 클릭 핸들러 //
  const onLogoClickHandler = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };
  // description: 파일 인풋 변경 시 이미지 미리보기
  const onImageInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // 파일이 없을때, 파일이 있긴하지만 길이가 0일때 종료
    if (!event.target.files || !event.target.files.length) return;

    //입력받은 이미지 파일을 URL 형태로 변경해주는 구문 //
    const imageUrl = URL.createObjectURL(event.target.files[0]);
    setLogoImageUrl(imageUrl);
    setLogoImage(event.target.files[0]);
  };
  // description: 우편번호 조회버튼클릭 이벤트 //
  const onPostCodeIconClickHandler = () => {
    open({ onComplete });
  };
  const onComplete = (data: Address) => {
    const address = data.address;
    const zonecode = data.zonecode;
    setCompanyAddress(address);
    setPostCode(zonecode);
  };
  // description: 저장 버튼 클릭 이벤트 //
  const onSaveButtonClickHandler = async () => {
    const token = cookies.accessToken;
    
    const ImageUrl = await fileUpload();

    const data : PutCompanyInfoRequestDto = {
      logoImageUrl : ImageUrl,
      bizNumber : bizNumber,
      companyName : companyName,
      repName : repName,
      postCode : postCode,
      companyAddress : companyAddress,
      companyAddressDetail : companyAddressDetail,
      telNumber : telNumber,
      bizStatus : bizStatus,
      bizType : bizType,
      englishName : englishName,
      homepage : homepage
    };
    putCompanyInfoRequest(data, token).then(putCompanyInfoResponseHandler);
  }
  // description: 사업자등록번호 변경 이벤트 //
  const onBizNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBizNumber(event.target.value);
  };
  // description: 회사명 변경 이벤트 //
  const onCompanyNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyName(event.target.value);
  };
  // description: 대표자명 변경 이벤트 //
  const onRepNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setRepName(event.target.value);
  };
  // description: 주소 변경 이벤트 //
  const onCompanyAddressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyAddress(event.target.value);
  };
  // description: 상세주소 변경 이벤트 //
  const onCompanyAddressDetailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCompanyAddressDetail(event.target.value);
  };
  // description: 전화번호 변경 이벤트 //
  const onTelNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTelNumber(event.target.value);
  };
  // description: 업태 변경 이벤트 //
  const onBizStatusChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBizStatus(event.target.value);
  };
  // description: 종목 변경 이벤트 //
  const onBizTypeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setBizType(event.target.value);
  };
  // description: 기업영문명 변경 이벤트 //
  const onEnglishNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnglishName(event.target.value);
  };
  // description: 홈페이지주소 변경 이벤트 //
  const onHomepageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setHomepage(event.target.value);
  };


  //!            effect           //
  // description: 유저가 바뀔때 실행 //
  useEffect(() => {
    if (cookies.accessToken && !user) {
      return;
    }
    if(user?.departmentCode !== DEPARTMENT_CODE.SYSTEM){ // 
      alert('권한이 없습니다.');
      navigator(HOME_PATH);
      return;
    }
    getCompanyInfoRequest().then(getCompanyInfoResponseHandler);
  }, [cookies, user]);


  //!             render            //
  return (
    <div id="company-info">
      <SystemMenu />
      <div className="customer-info-wrapper">
        <div className="customer-info-top">
          <div className="customer-info-top-text">회사등록</div>
        </div>
        <div className="divider"></div>
        <div className="company-info-middle-text">기업정보등록</div>
        <div className="company-info-middle-box">
          <div className="company-info-logo-image-box" style={{ backgroundImage: logoImageUrl ? `url(${logoImageUrl})` : `url(${DefaultLogo})` }} onClick={onLogoClickHandler} ></div>
          <input type="file" style={{ display: "none" }} ref={fileInputRef} accept="image/*" onChange={onImageInputChangeHandler} />
          <div className="company-info-text-box">
            <div className="company-info-box">
              <div className="company-info-label">사업자등록번호</div>
              <input className="company-info-business-number" defaultValue={bizNumber} onChange={onBizNumberChangeHandler} type="text"/>
            </div>
            <div className="company-info-box">
              <div className="company-info-label">회사명</div>
              <input className="company-info-company-name"defaultValue={companyName} onChange={onCompanyNameChangeHandler} type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">대표자명</div>
              <input className="company-info-representative-name" defaultValue={repName} onChange={onRepNameChangeHandler} type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">우편번호</div>
              <div className="company-info-company-post-code-container">
                <input className="company-info-company-post-code" type="text" defaultValue={postCode} />
                <div className="company-info-company-post-code-icon" onClick={onPostCodeIconClickHandler}></div>
              </div>
            </div>
            <div className="company-info-box">
              <div className="company-info-label">주소</div>
              <input className="company-info-company-address"defaultValue={companyAddress} onChange={onCompanyAddressChangeHandler} type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">상세주소</div>
              <input className="company-info-company-address-detail" defaultValue={companyAddressDetail? companyAddressDetail : ''} onChange={onCompanyAddressDetailChangeHandler} type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">전화번호</div>
              <input className="company-info-business-tel-number" defaultValue={telNumber} onChange={onTelNumberChangeHandler} type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">업태</div>
              <input className="company-info-business_status" defaultValue={bizStatus} onChange={onBizStatusChangeHandler} type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">종목</div>
              <input className="company-info-business-type" defaultValue={bizType} onChange={onBizTypeChangeHandler} type="text" />
            </div>
            <div className="company-info-box">
              <div className="company-info-label">기업영문명</div>
              <input className="company-info-english-company-name" defaultValue={englishName ? englishName : ''} onChange={onEnglishNameChangeHandler} type="text"/>
            </div>
            <div className="company-info-box">
              <div className="company-info-label">홈페이지주소</div>
              <input className="company-info-company-homepage" defaultValue={homepage ? homepage : ''} onChange={onHomepageChangeHandler} type="text" />
            </div>
          </div>
        </div>
        <div className="company-info-bottom">
          <div className="company-info-bottom-button-save" onClick={onSaveButtonClickHandler}>
            <div className="company-info-bottom-button-save-text">저장</div>
          </div>
        </div>
      </div>
    </div>
  );
}
