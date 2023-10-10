import React, { useEffect, useState } from 'react'
import './style.css';
import { useCompoanyInfoStore, useDepartmentInfoStore, useDepartmentRequsetStore, useDepartmentResponseStore, useInvoiceListStore, useInvoiceRequestStore, useUserStore } from 'src/stores';
import { useCookies } from 'react-cookie';
import { getDepartmentListRequest, getInvoiceListRequest, putCompanyInfoRequest, putDepartmentInfoRequest, uploadFileRequest } from 'src/apis';
import { InvoiceListRequestDto } from 'src/interfaces/request/accounting';
import { InvoiceListResponseDto } from 'src/interfaces/response/accounting';
import ResponseDto from 'src/interfaces/response/response.dto';
import GetInvoiceListResponseDto from 'src/interfaces/response/accounting/get-invoice-list.response.dto';
import { useLocation, useNavigate } from 'react-router-dom';
import { ACCOUNTING_INVOICE_PATH, HOME_PATH, SYSTEM_COMPANY_INFO, SYSTEM_DEPT_INFO } from 'src/constants';
import { DepartmentListRequestDto, PutCompanyInfoRequestDto, PutDepartmentInfoRequestDto } from 'src/interfaces/request/system';
import { GetDepartmentListResponseDto } from 'src/interfaces/response/system';

export default function Header() {
     //!              state             //
     // description : 로그인 유저 정보 상태 //
     const { user } = useUserStore();
     // description : path 상태 //
     const { pathname } = useLocation();
     // description : Cookie 상태 //
     const [ cookies ] = useCookies();
     // description: 전표조회 조건 정보 store //
     const { employeeCode, departmentCode, invoiceDateStart, invoiceDateEnd, invoiceType, resetInvoiceRequst } = useInvoiceRequestStore();
     // description: 조회된 전표 리스트 정보 store //
     const { setInvoiceList, resetInvoiceList } = useInvoiceListStore();
     // description: 회사 정보 상태
     const { logoImage,  bizNumber, companyName, repName, postCode, companyAddress, 
          companyAddressDetail, telNumber, bizStatus,  bizType, englishName, homepage } = useCompoanyInfoStore();

//! ============================================================================================
     // description: 부서조회 조건 정보 store //
     const { departmentName, resetDepartmentRequest } = useDepartmentRequsetStore();
     // description: 조회된 부서 정보 store //
     const { setDepartmentList, resetDepartmentList } = useDepartmentResponseStore();
     // description: 부서 정보 상태
     const { departmentCodeInfo , departmentCompanyCode, departmentNameInfo, departmentStartDate, departmentEndDate, departmentTelNumber, departmentFax } = useDepartmentInfoStore();
//! ============================================================================================


     //!           function            //
     const navigator = useNavigate();
     const isInvoiceList = pathname.includes(ACCOUNTING_INVOICE_PATH);
     const isCompanyInfo = pathname.includes(SYSTEM_COMPANY_INFO);
     const isDepartmentList = pathname.includes(SYSTEM_DEPT_INFO);
     // description: 전표조회 응답 처리 함수 //
     const getInvoiceListResponseHandler = (responsebody : GetInvoiceListResponseDto | ResponseDto ) => {

          const { code } = responsebody;
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code === 'NI') alert('존재하지않는 전표입니다.');
          if( code !== 'SU') return;
      
          const { invoiceList } = responsebody as GetInvoiceListResponseDto;
          setInvoiceList(invoiceList);
     }
//! ============================================================================================

     // description: 부서정보 조회 응답 함수 //
     const getDepartmentListResponseHandler = (responsebody: GetDepartmentListResponseDto | ResponseDto ) => {

          const {code} = responsebody;
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code !== 'SU') return;

          const { departmentList } = responsebody as GetDepartmentListResponseDto;
          setDepartmentList(departmentList);
     }   
     // description: 부서정보 등록 응답 함수 //
     const putDepartmentInfoResponseHandler = (code: string) => {
               
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code !== 'SU') return;
     
          if(!user) return;
          alert('부서정보등록 완료');
          navigator(SYSTEM_DEPT_INFO);
     }

//! ============================================================================================

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

     //!             event handler              //
     // description: 전표조회 이벤트 핸들러 //
     const onInvoiceListSearchButtonClickHandler = () => {
          const data: InvoiceListRequestDto = {
               departmentCode,
               employeeCode,
               invoiceDateStart,
               invoiceDateEnd,
               invoiceType,
          }
          getInvoiceListRequest(data).then(getInvoiceListResponseHandler)
     }
//! ============================================================================================

     // description: 부서조회 이벤트 핸들러 //
     const onDepartmentListSearchButtonClickHandler = () => {
          getDepartmentListRequest(departmentName).then(getDepartmentListResponseHandler)
     }
     // description: 부서저장 이벤트 핸들러 //
     const onDepartmentListSaveButtonClickHandler = async () => {
          const token = cookies.accessToken;
          const data: PutDepartmentInfoRequestDto = {
               departmentCodeInfo,
               departmentCompanyCode: 0,
               departmentNameInfo,
               departmentStartDate,
               departmentEndDate,
               departmentTelNumber,
               departmentFax
          }
          putDepartmentInfoRequest(data, token).then(putDepartmentInfoResponseHandler);
          
     }
//! ============================================================================================

     // description: 회사정보등록 이벤트 핸들러 //
     const onCompanyInfoSaveButtonClickHandler = async () => {
          const token = cookies.accessToken;
          if(!logoImage) return null;

          const imagedata = new FormData();
          imagedata.append('file', logoImage);
          const imageUrl = await uploadFileRequest(imagedata); // Promise<string> 타입이 반환됨
      
          const data : PutCompanyInfoRequestDto = {
            logoImageUrl : imageUrl,
            bizNumber,
            companyName,
            repName,
            postCode,
            companyAddress,
            companyAddressDetail,
            telNumber,
            bizStatus,
            bizType,
            englishName,
            homepage
          };
          putCompanyInfoRequest(data, token).then(putCompanyInfoResponseHandler);
     }


     //!                    effect                   //
     

     //!             render             //
     return (
     <div id='header'>
          <div className="header-top">
               <div className="header-info">
                    <div className="header-info-user">사용자ㅤ : ㅤ{user?.employeeCode} ㅤ{user?.employeeName}</div>
                    <div className="header-info-company">부서ㅤ : ㅤ{user?.departmentCode} ㅤ{user?.departmentName}</div>
               </div>
          </div>
          <div className="header-bottom">
               {/* <div className="header-logo">
                    <div className="header-logo-icon"></div>
               </div> */}
               <div className="header-function-container">
                    <div className="header-function-home">
                         <div className="header-function-home-icon"></div>
                         <div className="header-function-home-text">HOME</div>
                    </div>
                    {/* 모든 버튼마다 PATH 별 조건을 달아줘야 하는가? */}
                    <div className="header-function-search" onClick={
                              isInvoiceList ? onInvoiceListSearchButtonClickHandler : (
                              isDepartmentList ? onDepartmentListSearchButtonClickHandler : () => {}
                              )}>
                         <div className="header-function-search-icon"></div>
                         <div className="header-function-search-text">조회</div>
                    </div>
                    <div className="header-function-save" onClick={
                              isCompanyInfo ? onCompanyInfoSaveButtonClickHandler : (
                              isDepartmentList ? onDepartmentListSaveButtonClickHandler : () => {} 
                              )}>
                         <div className="header-function-save-icon"></div>
                         <div className="header-function-save-text">저장</div>
                    </div>
                    <div className="header-function-print">
                         <div className="header-function-print-icon"></div>
                         <div className="header-function-print-text">인쇄</div>
                    </div>
                    <div className="header-function-delete">
                         <div className="header-function-delete-icon"></div>
                         <div className="header-function-delete-text">삭제</div>
                    </div>
                    <div className="header-function-info">
                         <div className="header-function-info-icon"></div>
                         <div className="header-function-info-text">정보</div>
                    </div>
               </div>
          </div>
     </div>
  )
}
