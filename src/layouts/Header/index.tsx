import React, { useEffect, useState } from 'react'
import './style.css';
import { useCompoanyInfoStore, useCustomerInfoStore, useCustomerRequestStore, useCustomerResponseStore, useDepartmentInfoStore, useDepartmentRequestStore, useDepartmentResponseStore, useEmployeeListViewRequestStore, useEmployeeListViewStore, useFundsListStore, useFundslistsRequestStore, useHumanRequestStore, useHumanResponseStore, useInOutComeListStore, useInOutComeRequestStore, useIncentiveViewListRequestStore, useIncentiveViewListStore, useInvoiceListStore, useInvoiceRequestStore, useProductInfoStore, useProductRequestStore, useProductResponseStore, useSalesPlanInfoStore, useSalesPlanRequestStore, useSalesPlanResponseStore, useSelectedCustomerStore, useSelectedDepartmentStore, useSelectedEmployeeInfoStore, useSelectedProductInfoStore, useSelectedSalesPlanStore, useSystemEmpUserDefineResponseStore, useSystemEmployeeInfoStore, useSystemEmployeeRequestStore, useSystemEmployeeResponseStore, useUserStore } from 'src/stores';
import { useCookies } from 'react-cookie';
import { deleteDepartmentInfoRequest, getCustomerListRequest, getDepartmentListRequest, getProductListRequest, getEmployeeListViewRequest, getFundsListRequest, getInOutComeListRequest, getIncentiveViewListRequest, getInvoiceListRequest, getSystemEmployeeListRequest, putCompanyInfoRequest, putCustomerInfoRequest, putDepartmentInfoRequest, putSystemEmployeeInfoRequest, uploadFileRequest, putProductInfoRequest, deleteProductInfoRequest, deleteCustomerInfoRequest, deleteSystemEmployeeInfoRequest, getHumanListRequest, getSalesPlanListRequest, putSalesPlanInfoRequest, deleteSalesPlanInfoRequest } from 'src/apis';
import { InOutComeListRequestDto, InvoiceListRequestDto } from 'src/interfaces/request/accounting';
import { GetInOutComeListResponseDto, InvoiceListResponseDto } from 'src/interfaces/response/accounting';
import ResponseDto from 'src/interfaces/response/response.dto';
import GetInvoiceListResponseDto from 'src/interfaces/response/accounting/get-invoice-list.response.dto';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ACCOUNTING_INVOICE_PATH, ACCOUNTING_IN_OUT_COME_PATH, HOME_PATH, HUMAN_EMPLOYEE_INFO, ORDER_INFO_PATH, RELEASE_INFO_PATH, SALES_INFO_PATH, SALES_PLAN_PATH, SEARCHVIEW_EMPLOYEE_LIST_PATH, SEARCHVIEW_FUNDS_LIST_PATH, SEARCHVIEW_INCENTIVE_LIST_PATH, SYSTEM_COMPANY_INFO, SYSTEM_CUSTOMER_INFO, SYSTEM_DEPT_INFO, SYSTEM_EMPLOYEE_INFO, SYSTEM_PRODUCT_INFO, faxPattern, registrationNumberPattern, telNumberPattern } from 'src/constants';
import { DepartmentListRequestDto, PutCompanyInfoRequestDto, PutCustomerInfoRequestDto, PutDepartmentInfoRequestDto, PutProductInfoRequestDto } from 'src/interfaces/request/system';
import { DeleteCustomerInfoResponseDto, DeleteDepartmentInfoResponseDto, DeleteProductInfoResponseDto, GetCustomerListResponseDto, GetDepartmentListResponseDto, GetProductListResponseDto } from 'src/interfaces/response/system';
import { EmployeeListViewRequestDto, FundsListRequestDto, IncentiveViewListRequestDto } from 'src/interfaces/request/searchView';
import { GetEmployeeListViewResponseDto, GetFundsListResponseDto, GetIncentiveViewListResponseDto } from 'src/interfaces/response/searchView';
import GetSystemEmployeeListResponseDto from 'src/interfaces/response/system/systemEmployee/get-system-employee-list.response.dto';
import PutSystemEmployeeInfoRequestDto from 'src/interfaces/request/system/put-system-employee-info.request.dto';
import DeleteSystemEmployeeInfoResponseDto from 'src/interfaces/response/system/systemEmployee/delete-system-employee-info.response.dto';
import GetHumanListResponseDto from 'src/interfaces/response/human/get-human-list.response.dto';
import { HumanListRequestDto } from 'src/interfaces/request/human';
import { DeleteSalesPlanInfoResponseDto, GetSalesPlanListResponseDto } from 'src/interfaces/response/sales';
import { PutSalesPlanInfoRequestDto } from 'src/interfaces/request/sales';

export default function Header() {
     //!              state             //
     // description : 로그인 유저 정보 상태 //
     const { user } = useUserStore();
     // description : path 상태 //
     const { pathname } = useLocation();
     // description : Cookie 상태 //
     const [ cookies ] = useCookies();
     // description: 전표 조회조건 store //
     const { employeeCode, departmentCode, invoiceDateStart, invoiceDateEnd, invoiceTypeName, resetInvoiceRequst } = useInvoiceRequestStore();
     // description: 전표 리스트 store //
     const { setInvoiceList, resetInvoiceList } = useInvoiceListStore();
     // description: 회사 정보 상태
     const { logoImage,  bizNumber, companyName, repName, postCode, companyAddress, 
          companyAddressDetail, telNumber, bizStatus,  bizType, englishName, homepage } = useCompoanyInfoStore();
     // description: 매입매출장 조회조건 store //
     const { fundDateStart, fundDateEnd, inOutComeCustomerCode, inOutComeSalesPlanCode } = useInOutComeRequestStore();
     // description: 매입매출장 리스트 store //
     const { setInOutComeList } = useInOutComeListStore();
     // description: 사내자금현황 조회조건 store //
     const { fundslistDateStart, fundslistDateEnd } = useFundslistsRequestStore();
     // description: 사내자금현황 리스트 store //
     const { setFundsList } = useFundsListStore();
     // description: 사원목록 조회조건 store //
     const { employeeListViewDepartmentCode, employeeListViewEmployeeCode, employeeListViewEmploymentCode } = useEmployeeListViewRequestStore();
     // description: 사원목록 리스트 store //
     const { setEmployeeListView } = useEmployeeListViewStore();
     // description: 사원목록 조회조건 store //
     const { incentiveViewListEmployeeCode, incentiveViewListCategory, incentiveviewlistDateStart, incentiveviewlistDateEnd } = useIncentiveViewListRequestStore();
     // description: 사원목록 리스트 store //
     const { setIncentiveViewList } = useIncentiveViewListStore();
     
//! ============================================================================================
     
     //                       component                          //

     //! PRODUCT
     //   state     //
     // description: product 조회 조건 정보 store //
     const { productName, resetProductRequest } = useProductRequestStore()
     // description: 조회된 product 정보 store //
     const { setProductList, resetProductList } = useProductResponseStore();
     // description: product 정보 상태
     const { productCodeInfo, productNameInfo, procurementCategoryInfo, productCompanyCode, productPriceInfo, 
               resetProductInfo } = useProductInfoStore();
     // description: 선택 product //
     const { selectedProductCode, setSelectedProductCode  } = useSelectedProductInfoStore();

     //   event handler  //
     // description: product 정보 등록 응답 함수 //
     const putProductInfoResponseHandler = (code: string) => {
          
          // description: BACK 오류
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code === 'EPN') alert('중복되는 품명입니다.');

          if(code !== 'SU') return;
          
          if(!user) return;
          alert('품목 등록 완료');

          // 전체 조회
          setSelectedProductCode(null);
          resetProductInfo();
          resetProductList();
          getProductListRequest(productName).then(getProductListResponseHandler);

          navigator(SYSTEM_PRODUCT_INFO);
     
     }

     // description: product 정보삭제 응답 함수 //
     const deleteProductInfoResponseHandler = (responsebody: DeleteProductInfoResponseDto | ResponseDto) => {

          const {code} = responsebody;
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'NEP') alert('존재하지않는 품목입니다.');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code !== 'SU') return;

          // 전체 조회
          setSelectedProductCode(null);
          resetProductInfo();
          resetProductList();
          getProductListRequest(productName).then(getProductListResponseHandler);
     
          alert('품목 삭제에 성공했습니다.');
     }

     // description: product 정보 조회 응답 함수 //
     const getProductListResponseHandler = (responsebody: GetProductListResponseDto | ResponseDto) => {

          const {code} = responsebody;
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code !== 'SU') return;

          const { productList } = responsebody as GetProductListResponseDto;
          setProductList(productList);

     }

     // description: product 정보 불러오기 //
     const { productList } = useProductResponseStore();

     // description: product 저장 이벤트 핸들러 //
     const onProductListSaveButtonClickHandler = async () => {

          const token = cookies.accessToken;
          if (selectedProductCode) {
               if (!productList) return;
               const selectedProduct = productList.find((item) => item.productCode === selectedProductCode);
               const data: PutProductInfoRequestDto = {
                    productCodeInfo: selectedProduct?.productCode as number,
                    productNameInfo: selectedProduct?.productName as string,
                    procurementCategoryInfo: selectedProduct?.procurementCategory as number,
                    productPriceInfo: selectedProduct?.productPrice as number,
                    productCompanyCode: 1
               }

               // description: 필수값 검사
               if (!data.productNameInfo || !data.procurementCategoryInfo || !data.productPriceInfo) {
                    alert("필수값을 입력하세요.");
                    return;
               }

               putProductInfoRequest(data, token).then(putProductInfoResponseHandler);
          
          } else {
               const data: PutProductInfoRequestDto = {
                    productCodeInfo,
                    productNameInfo,
                    procurementCategoryInfo,
                    productPriceInfo,
                    productCompanyCode: 1
               }
               
               if (!data.productNameInfo || !data.procurementCategoryInfo || !data.productPriceInfo) {
                    alert("필수값을 입력하세요.");
                    return;
               }
               putProductInfoRequest(data, token).then(putProductInfoResponseHandler);
          };

     }

     // description: product정보삭제 이벤트 핸들러 //
     const onDeleteProductInfoButtonClickHandler = () => {
          if (!selectedProductCode) return;
          const token = cookies.accessToken;
          deleteProductInfoRequest(selectedProductCode, token).then(deleteProductInfoResponseHandler)
     }
     
     // description: product 조회 이벤트 핸들러 //
     const onProductListSearchButtonClickHandler = () => {
          setSelectedProductCode(null);
          resetProductInfo();
          resetProductList();
          getProductListRequest(productName).then(getProductListResponseHandler);
     }

     


//! ============================================================================================


     //!           function            //
     const navigator = useNavigate();
     const isInvoiceList = pathname.includes(ACCOUNTING_INVOICE_PATH);
     const isInOutComeList = pathname.includes(ACCOUNTING_IN_OUT_COME_PATH);
     const isCompanyInfo = pathname.includes(SYSTEM_COMPANY_INFO);
     const isDepartmentList = pathname.includes(SYSTEM_DEPT_INFO);
     const isSystemEmployeeList = pathname.includes(SYSTEM_EMPLOYEE_INFO);
     const isHumanList = pathname.includes(HUMAN_EMPLOYEE_INFO);
     const isCustomerList = pathname.includes(SYSTEM_CUSTOMER_INFO);
     const isProductList = pathname.includes(SYSTEM_PRODUCT_INFO);
     const isSalesPlanList = pathname.includes(SALES_PLAN_PATH);
     const isOrderInfoList = pathname.includes(ORDER_INFO_PATH);
     const isReleaseInfoList = pathname.includes(RELEASE_INFO_PATH);
     const isSalesInfoList = pathname.includes(SALES_INFO_PATH);
     const isFundsList = pathname.includes(SEARCHVIEW_FUNDS_LIST_PATH);
     const isEmployeeViewList = pathname.includes(SEARCHVIEW_EMPLOYEE_LIST_PATH);
     const isIncentiveViewList = pathname.includes(SEARCHVIEW_INCENTIVE_LIST_PATH);
     
     //                       event handler                           //
     // description: 전표 리스트 조회 응답 처리 함수 //
     const getInvoiceListResponseHandler = (responsebody : GetInvoiceListResponseDto | ResponseDto ) => {

          const { code } = responsebody;
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'NRC') alert('필수 데이터를 입력하지 않았습니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code === 'NI') alert('존재하지않는 전표입니다.');
          if( code !== 'SU') return;
      
          const { invoiceList } = responsebody as GetInvoiceListResponseDto;
          setInvoiceList(invoiceList);
     }
     // description: 매입매출장 리스트 조회 응답 처리 함수 //
     const getInOutComeListResponseHandler = (responsebody : GetInOutComeListResponseDto | ResponseDto) => {
          const { code } = responsebody;
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'NRC') alert('필수 데이터를 입력하지 않았습니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code !== 'SU') return;
      
          const { inOutComeList } = responsebody as GetInOutComeListResponseDto;
          setInOutComeList(inOutComeList);
     }
     // description: 사내자금현황 리스트 조회 응답 처리 함수 //
     const getFundsListResponseHandler = (responsebody : GetFundsListResponseDto | ResponseDto) => {
          const { code } = responsebody;
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'NRC') alert('필수 데이터를 입력하지 않았습니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code !== 'SU') return;
      
          const { fundsList } = responsebody as GetFundsListResponseDto;
          setFundsList(fundsList);
     }
     // description: 사원목록 조회 응답 처리 함수 //
     const getEmployeeViewListResponseHandler = (responsebody : GetEmployeeListViewResponseDto | ResponseDto) => {
          const { code } = responsebody;
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code !== 'SU') return;
      
          const { employeeViewList } = responsebody as GetEmployeeListViewResponseDto;
          setEmployeeListView(employeeViewList);
     }
     // description: 급/상여정보조회 응답 처리 함수 //
     const getIncentiveViewListResponseHandler = (responsebody : GetIncentiveViewListResponseDto | ResponseDto) => {
          const { code } = responsebody;
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'NRC') alert('필수 데이터를 입력하지 않았습니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code !== 'SU') return;
      
          const { incentiveViewList } = responsebody as GetIncentiveViewListResponseDto;
          setIncentiveViewList(incentiveViewList);
     }

//! ============================================================================================
     //                       component                          //
     // description: 부서정보
     
     //   state     //
     // description: 부서조회 조건 정보 store //
     const { departmentName, resetDepartmentRequest } = useDepartmentRequestStore();
     // description: 조회된 부서 정보 store //
     const { setDepartmentList, resetDepartmentList } = useDepartmentResponseStore();
     // description: 부서 정보 상태
     const { departmentCodeInfo , departmentCompanyCode, departmentNameInfo, departmentStartDate, departmentEndDate,
           departmentTelNumber, departmentFax, resetDepartmentInfo } = useDepartmentInfoStore();
     // description: 선택 부서 코드 //
     const {selectedDepartmentCode, setSelectedDepartmentCode} = useSelectedDepartmentStore();

     //   event handler  //
     // description: 부서정보 등록 응답 함수 //
     const putDepartmentInfoResponseHandler = (code: string) => {
          
          // description: BACK 오류
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code === 'ED') alert('중복되는 부서명입니다.');
          if(code === 'EDT') alert('중복되는 전화번호입니다.');
          if(code === 'EDF') alert('중복되는 팩스번호입니다.');

          if(code !== 'SU') return;
          
          if(!user) return;
          alert('부서정보등록 완료');
          
          // 전체 조회
          setSelectedDepartmentCode(null);
          resetDepartmentInfo();
          resetDepartmentList();          
          getDepartmentListRequest(departmentName).then(getDepartmentListResponseHandler);

          navigator(SYSTEM_DEPT_INFO);
     }
     // description: 부서정보 삭제 응답 함수 //
     const deleteDepartmentInfoResponseHandler = (responsebody: DeleteDepartmentInfoResponseDto | ResponseDto) => {

          const {code} = responsebody;
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'ND') alert('존재하지않는 부서입니다.');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code !== 'SU') return;

          // 전체 조회
          setSelectedDepartmentCode(null);
          resetDepartmentInfo();
          resetDepartmentList();          
          getDepartmentListRequest(departmentName).then(getDepartmentListResponseHandler);          
          
          alert('부서 삭제에 성공했습니다.');
     }
     // description: 부서정보 조회 응답 함수 //
     const getDepartmentListResponseHandler = (responsebody: GetDepartmentListResponseDto | ResponseDto ) => {

          const {code} = responsebody;
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code !== 'SU') return;

          const { departmentList } = responsebody as GetDepartmentListResponseDto;
          setDepartmentList(departmentList);
     }   

     // description: 부서 정보 불러오기 //
     const {departmentList} = useDepartmentResponseStore();
     
     // description: 부서저장 이벤트 핸들러 //
     const onDepartmentListSaveButtonClickHandler = async () => {
          
          const token = cookies.accessToken;
          if (selectedDepartmentCode) {
               if (!departmentList) return;
               const selectedDepartment = departmentList.find((item) => item.departmentCode === selectedDepartmentCode);
               const data: PutDepartmentInfoRequestDto = {
                    departmentCodeInfo: selectedDepartment?.departmentCode as number,
                    departmentCompanyCode: 1,
                    departmentNameInfo: selectedDepartment?.departmentName as string,
                    departmentStartDate: selectedDepartment?.departmentStartDate as string,
                    departmentEndDate: selectedDepartment?.departmentEndDate as string,
                    departmentTelNumber: selectedDepartment?.departmentTelNumber as string,
                    departmentFax: selectedDepartment?.departmentFax as string
               }
               if (!data.departmentEndDate) data.departmentEndDate = null;
               // description: 필수값 검사
               if (!data.departmentNameInfo || !data.departmentStartDate || !data.departmentTelNumber || !data.departmentFax ) {
                    alert("필수값을 입력하세요.");
                    return;
               }
               // description: 전화번호 패턴 검사
               const telNumberFlag = !telNumberPattern.test(data.departmentTelNumber);
               if (telNumberFlag){
                    alert("전화번호 패턴을 확인해주세요.");
                    return;
               }
               // description: Fax 패턴 검사
               const faxFlag = !faxPattern.test(data.departmentFax);
               if (faxFlag){
                    alert("Fax 패턴을 확인해주세요.");
                    return;
               }
               putDepartmentInfoRequest(data, token).then(putDepartmentInfoResponseHandler);
          } else {
               const data: PutDepartmentInfoRequestDto = {
                    departmentCodeInfo,
                    departmentCompanyCode: 1,
                    departmentNameInfo,
                    departmentStartDate,
                    departmentEndDate,
                    departmentTelNumber,
                    departmentFax
               }
               if (!data.departmentEndDate) data.departmentEndDate = null;
               if (!data.departmentNameInfo || !data.departmentStartDate || !data.departmentTelNumber || !data.departmentFax ) {
                    alert("필수값을 입력하세요.");
                    return;
               }
               putDepartmentInfoRequest(data, token).then(putDepartmentInfoResponseHandler);
          };
     }
     // description: 부서정보삭제 이벤트 핸들러 //
     const onDeleteDepartmentInfoButtonClickHandler = () => {
          if (!selectedDepartmentCode) return;
          const token = cookies.accessToken;
          deleteDepartmentInfoRequest(selectedDepartmentCode, token).then(deleteDepartmentInfoResponseHandler);
     }
     // description: 부서조회 이벤트 핸들러 //
     const onDepartmentListSearchButtonClickHandler = () => {
          setSelectedDepartmentCode(null);
          resetDepartmentInfo();
          resetDepartmentList();
          getDepartmentListRequest(departmentName).then(getDepartmentListResponseHandler);
     }          

     //                       component                          //
     // description: 사원 정보 //

     //   state     //
     // description: 사원조회 조건 정보 store //
     const { systemEmployeeName, resetSystemEmployeeRequest } = useSystemEmployeeRequestStore();
     // description: 조회된 사원 정보 store //
     const { setSystemEmployeeList, resetSystemEmployeeList } = useSystemEmployeeResponseStore();
     // description: 사원 - 사용자정의 창 상태 //
     const { systemEmpUserDefineOpen, setSystemEmpUserDefineOpen } = useSelectedEmployeeInfoStore();
     // description: 사원 - 부서 창 상태 //
     const { systemEmpDepartmentOpen, setSystemEmpDepartmentOpen } = useSelectedEmployeeInfoStore();
     // description: 사원 - 선택된 부서 정보 //
     const { selectedEmpDepartmentCode, setSelectedEmpDepartmentCode } = useSelectedEmployeeInfoStore();
     const { selectedEmpDepartmentName, setSelectedEmpDepartmentName } = useSelectedEmployeeInfoStore();
     // description: 사원 - 선택된 사용자 정보 //
     const { selectedEmployeeCode, setSelectedEmployeeCode } = useSelectedEmployeeInfoStore();
     // description: 사원 - 선택된 사용자정의코드 //
     const { selectedUserDefineCode, setSelectedUserDefineCode }  = useSelectedEmployeeInfoStore();
     // description: 성별 상태 //
     const { selectedGenderName, setSelectedGenderName } = useSelectedEmployeeInfoStore();
     const { selectedGenderCode, setSelectedGenderCode } = useSelectedEmployeeInfoStore();     
     // description: 재직구분 상태 //
     const { selectedEmploymentType, setSelectedEmploymentTypeName } = useSelectedEmployeeInfoStore();
     const { selectedEmploymentTypeCode, setSelectedEmploymentTypeCode } = useSelectedEmployeeInfoStore();
     // description: 사원 - 신규입력 초기화 //
     const {resetSystemEmployeeInfo} = useSystemEmployeeInfoStore();  
     // description: 사원 정보 상태
     const { sysEmployeeCode, employeeName, gender, genderCode, empDepartmentName, empDepartmentCode, joinDate, resignationDate,
               registrationNumber, employmentType, employmentTypeCode } = useSystemEmployeeInfoStore();     

     //   event handler  //
     // description: 사원 정보 불러오기 //
     const {systemEmployeeList} = useSystemEmployeeResponseStore();

     // description: 사원정보 등록 응답 함수 //
     const putSystemEmployeeInfoResponseHandler = (code: string) => {
          
          // description: BACK 오류
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code === 'ED') alert('중복되는 부서명입니다.');
          if(code === 'EDT') alert('중복되는 전화번호입니다.');
          if(code === 'EDF') alert('중복되는 팩스번호입니다.');

          if(code !== 'SU') return;
          
          if(!user) return;
          alert('사원정보등록 완료');
          
          // 전체 조회
          setSelectedEmployeeCode(null);
          resetSystemEmployeeInfo();
          resetSystemEmployeeList();
          getSystemEmployeeListRequest(systemEmployeeName).then(getSystemEmployeeListResponseHandler)

          navigator(SYSTEM_EMPLOYEE_INFO);
     }          
     // description: 사원저장 이벤트 핸들러 //
     const onSystemEmployeeListSaveButtonClickHandler = async () => {
          
          const token = cookies.accessToken;
          if (selectedEmployeeCode) {
               if (!systemEmployeeList) return;
               const selectedEmployee = systemEmployeeList.find((item) => item.employeeCode === selectedEmployeeCode);

               const data: PutSystemEmployeeInfoRequestDto = {
                    sysEmployeeCode: selectedEmployee?.employeeCode as number,
                    employeeName: selectedEmployee?.employeeName as string,
                    genderCode: (selectedGenderCode == 0) ? selectedEmployee?.genderCode as number : selectedGenderCode as number,
                    empDepartmentCode: (selectedEmpDepartmentCode == 0)? selectedEmployee?.departmentCode as number : selectedEmpDepartmentCode as number,
                    joinDate: selectedEmployee?.joinDate as string,
                    resignationDate: selectedEmployee?.resignationDate as string,
                    registrationNumber: selectedEmployee?.registrationNumber as string,
                    employmentTypeCode: (selectedEmploymentTypeCode == 0) ? selectedEmployee?.employmentTypeCode as number : selectedEmploymentTypeCode as number
               }

               if (!data.resignationDate) data.resignationDate = null;
               // description: 필수값 검사
               if (!data.employeeName || !data.registrationNumber ) {
                    alert("필수값을 입력하세요.");
                    return;
               }
               // description: 주민번호 패턴 검사
               const registrationNumberFlag = !registrationNumberPattern.test(data.registrationNumber);
               if (registrationNumberFlag){
                    alert("주민번호 패턴을 확인해주세요.");
                    return;
               }
               putSystemEmployeeInfoRequest(data, token).then(putSystemEmployeeInfoResponseHandler);
               
          } else {
               const data: PutSystemEmployeeInfoRequestDto = {
                    sysEmployeeCode,
                    employeeName, 
                    genderCode, 
                    empDepartmentCode, 
                    joinDate, 
                    resignationDate,
                    registrationNumber, 
                    employmentTypeCode
               }
               if (!data.resignationDate) data.resignationDate = null;
               if (!data.employeeName || !data.empDepartmentCode || !data.genderCode || !data.joinDate || !data.registrationNumber || !data.employmentTypeCode ) {
                    alert("필수값을 입력하세요.");
                    return;
               }
               putSystemEmployeeInfoRequest(data, token).then(putSystemEmployeeInfoResponseHandler);
          };
     }

     // description: 사원정보 삭제 응답 함수 //
     const deleteSystemEmployeeInfoResponseHandler = (responsebody: DeleteSystemEmployeeInfoResponseDto | ResponseDto) => {

          const {code} = responsebody;
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code !== 'SU') return;

          // 전체 조회
          setSelectedEmployeeCode(null);
          setSystemEmpUserDefineOpen(false);
          setSystemEmpDepartmentOpen(false);
          resetSystemEmployeeInfo();
          resetSystemEmployeeList();          
          getSystemEmployeeListRequest(employeeName).then(getSystemEmployeeListResponseHandler);          
          
          alert('사원 삭제에 성공했습니다.');
     }     
     // description: 사원정보 삭제 이벤트 핸들러 //
     const onDeleteEmployeeInfoButtonClickHandler = () => {
          if (!selectedEmployeeCode) return;
          const token = cookies.accessToken;
          deleteSystemEmployeeInfoRequest(selectedEmployeeCode, token).then(deleteSystemEmployeeInfoResponseHandler);
     }
     // description: 사원정보 조회 응답 함수 //
     const getSystemEmployeeListResponseHandler = (responsebody: GetSystemEmployeeListResponseDto | ResponseDto ) => {

          const {code} = responsebody;
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code !== 'SU') return;

          const { systemEmployeeList } = responsebody as GetSystemEmployeeListResponseDto;
          setSystemEmployeeList(systemEmployeeList);
     }  

     // description: 사원조회 이벤트 핸들러 //
     const onSystemEmployeeListSearchButtonClickHandler = () => {
          setSystemEmpUserDefineOpen(false);
          setSystemEmpDepartmentOpen(false)
          setSelectedEmployeeCode(0);
          setSelectedUserDefineCode(0);
          setSelectedEmpDepartmentCode(0);
          setSelectedEmpDepartmentName("");
          setSelectedGenderCode(0);
          setSelectedGenderName("");
          setSelectedEmploymentTypeCode(0);
          setSelectedEmploymentTypeName("");
          resetSystemEmployeeInfo();
          resetSystemEmployeeList();
          getSystemEmployeeListRequest(systemEmployeeName).then(getSystemEmployeeListResponseHandler)
     }  

     //                       component                          //
     //! 사원Detail
     // description: 사원Detail조회 조건 정보 store //
     const { humanDepartmentCode, humanEmployeeCode, humanEmploymentType } = useHumanRequestStore();     
     // description: 조회된 사원 정보 store //
     const { setHumanList, resetHumanList } = useHumanResponseStore();     
     // description: 사원Detail정보 조회 응답 함수 //
     const getHumanListResponseHandler = (responsebody: GetHumanListResponseDto | ResponseDto ) => {
          const {code} = responsebody;
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code !== 'SU') return;

          const { humanList } = responsebody as GetHumanListResponseDto;
          // setHumanList(humanList);
     }  

     // description: 사원조회 이벤트 핸들러 //
     const onHumanListSearchButtonClickHandler = () => {
          resetHumanList();
          const data: HumanListRequestDto = {
               humanDepartmentCode: humanDepartmentCode,
               humanEmployeeCode: humanEmployeeCode,
               humanEmploymentType: humanEmploymentType,
          }
          getHumanListRequest(data).then(getHumanListResponseHandler);
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

//! ============================================================================================

     //                       component                          //

     // state //
     // description: 거래처 조회 조건 정보 store //
     const { customerName, setCustomerName, resetCustomerRequest } = useCustomerRequestStore();
     // description: 조회된 거래처 정보 store //
     const { setCustomerList, resetCustomerList } = useCustomerResponseStore();
     // description: 거래처 정보 상태
     const { customerCodeInfo, customerCompanyCode, customerNameInfo, customerBusinessNumber, customerPostCode,
           customerAddress, customerAddressDetail, customerTelNumber, resetCustomerInfo } = useCustomerInfoStore();
     // description: 선택 거래처 코드 //
     const { selectedCustomerCode, setSelectedCustomerCode } = useSelectedCustomerStore();

     // event handler //
     // description: 거래처 정보 조회 응답 함수 //
     const getCustomerListResponseHandler = (responsebody: GetCustomerListResponseDto | ResponseDto ) => {

          const {code} = responsebody;
          if( code === 'NE') alert('존재하지않는 회원입니다.');
          if( code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if( code === 'DE') alert('데이터베이스 에러');
          if( code === 'NP') alert('권한이 없습니다.');
          if( code !== 'SU') return;

          const { customerList } = responsebody as GetCustomerListResponseDto;
          setCustomerList(customerList);
     }

     // description: 거래처 정보 등록 응답 함수 //
     const putCustomerInfoResponseHandler = (code: string) => {
          
          // description: BACK 오류
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code === 'ECN') alert('중복되는 거래처명입니다.');

          if(code !== 'SU') return;
          
          if(!user) return;
          alert('거래처정보등록 완료');

          // 전체 조회
          setSelectedCustomerCode(null);
          resetCustomerInfo();
          resetCustomerList();
          getCustomerListRequest(customerName).then(getCustomerListResponseHandler);

          navigator(SYSTEM_CUSTOMER_INFO);

     }

     // description: 거래처 정보 삭제 응답 함수 //
     const deleteCustomerInfoResponseHandler = (responsebody: DeleteCustomerInfoResponseDto | ResponseDto) => {

          const {code} = responsebody;
          if(code === 'NE') alert('존재하지않는 회원입니다.');
          if(code === 'NEC') alert('존재하지않는 거래처입니다.');
          if(code === 'NP') alert('권한이 없습니다.');
          if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
          if(code === 'DE') alert('데이터베이스 에러');
          if(code !== 'SU') return;

          // 전체 조회
          setSelectedCustomerCode(null);
          resetCustomerInfo();
          resetCustomerList();
          getCustomerListRequest(customerName).then(getCustomerListResponseHandler);

          alert('거래처 삭제에 성공했습니다.');
     }

     // description: 거래처 정보 불러오기 //
     const { customerList } = useCustomerResponseStore();

     // description: 거래처 저장 이벤트 핸들러 //
     const onCustomerListSaveButtonClickHandler = async () => {

          const token = cookies.accessToken;
          if (selectedCustomerCode) {
               if (!customerList) return;
               const selectedCustomer = customerList.find((item) => item.customerCode === selectedCustomerCode);
               const data: PutCustomerInfoRequestDto = {
                    customerCodeInfo: selectedCustomer?.customerCode as number,
                    customerNameInfo: selectedCustomer?.customerName as string,
                    customerBusinessNumber: selectedCustomer?.customerBusinessNumber as string,
                    customerPostCode: selectedCustomer?.customerPostCode as string,
                    customerAddress: selectedCustomer?.customerAddress as string,
                    customerAddressDetail: selectedCustomer?.customerAddressDetail as string,
                    customerTelNumber: selectedCustomer?.customerTelNumber as string,
                    customerCompanyCode: 1
               }
               // description: 필수값 검사
               if (!data.customerNameInfo || !data.customerBusinessNumber || !data.customerPostCode || !data.customerAddress || !data.customerTelNumber) {
                    alert("필수값을 입력하세요.");
                    return;
               }
               // description: 전화번호 패턴 검사
               const telNumberFlag = !telNumberPattern.test(data.customerTelNumber);
               if (telNumberFlag){
                    alert("전화번호 패턴을 확인해주세요.");
                    return;
               }
               // description: 사업자등록번호 패턴 검사
               const registrationNumberFlag = !registrationNumberPattern.test(data.customerBusinessNumber);
               if (registrationNumberFlag){
                    alert("사업자등록번호 패턴을 확인해주세요.");
                    return;
               }
               putCustomerInfoRequest(data, token).then(putCustomerInfoResponseHandler);

          } else {
               const data: PutCustomerInfoRequestDto = {
                    customerCodeInfo,
                    customerNameInfo,
                    customerBusinessNumber,
                    customerPostCode,
                    customerAddress,
                    customerAddressDetail,
                    customerTelNumber,
                    customerCompanyCode: 1
               }
               if (!data.customerNameInfo || !data.customerBusinessNumber || !data.customerPostCode || !data.customerAddress || !data.customerTelNumber) {
                    alert("필수값을 입력하세요.");
                    return;
               }
               putCustomerInfoRequest(data, token).then(putCustomerInfoResponseHandler);

          };
     }
     
     // description: 거래처조회 이벤트 핸들러 //
     const onCustomerListSearchButtonClickHandler = () => {
          setSelectedCustomerCode(null);
          resetCustomerInfo();
          resetCustomerList();
          getCustomerListRequest(customerName).then(getCustomerListResponseHandler);
     }

     // description: 거래처정보삭제 이벤트 핸들러 //
     const onDeleteCustomerInfoButtonClickHandler = () => {
          if (!selectedCustomerCode) return;
          const token = cookies.accessToken;
          deleteCustomerInfoRequest(selectedCustomerCode, token).then(deleteCustomerInfoResponseHandler);
     }


//! ============================================================================================

     //                       component                          //
     // description: salesPlan 정보

     //   state     //
     // description: salesPlan 조회 조건 정보 store //
     const { salesProjectName, setSalesProjectName, resetSalesPlanRequest } = useSalesPlanRequestStore();

     // description: 조회된 salesPlan 정보 store //
     const { setSalesPlanList, resetSalesPlanList } = useSalesPlanResponseStore();

     // description: salesPlan - 사원 창 상태 //
     const { salesPlanEmployeeOpen, setSalesPlanEmployeeOpen } = useSelectedSalesPlanStore();
     // description: salesPlan - 품목 창 상태 //
     const { salesPlanProductOpen, setSalesPlanProductOpen } = useSelectedSalesPlanStore();

     // description: salesPlan - 선택된 salesPlanCode 정보 //
     const { selectedSalesPlanCode, setSelectedSalesPlanCode } = useSelectedSalesPlanStore();
     // description: salesPlan - 선택된 사원 정보 //
     const { selectedSalesPlanEmployeeCode, setSelectedSalesPlanEmployeeCode } = useSelectedSalesPlanStore();
     // description: salesPlan - 선택된 품목 정보 //
     const { selectedSalesPlanProductCode, setSelectedSalesPlanProductCode } = useSelectedSalesPlanStore();

     // description: salesPlan 정보 상태 //
     const { salesPlanCodeInfo, salesPlanProjectName, salesPlanDate, salesPlanProductCode, salesPlanProductName,
          salesPlanQuantity, salesPlanExpectPrice, salesPlanExpectTotalPrice, salesPlanEmployeeCode, salesPlanEmployeeName} = useSalesPlanInfoStore();
     const { setSalesPlanCodeInfo, setSalesPlanProjectName, setSalesPlanDate, setSalesPlanProductCode, setSalesPlanProductName,
          setSalesPlanQuantity, setSalesPlanExpectPrice, setSalesPlanExpectTotalPrice, setSalesPlanEmployeeCode, setSalesPlanEmployeeName, resetSalesPlanInfo } = useSalesPlanInfoStore();


     //   event handler  //

    
     

//! ============================================================================================

     //             event handler              //
     // description: 전표조회 이벤트 핸들러 //
     const onInvoiceListSearchButtonClickHandler = () => {
          const data: InvoiceListRequestDto = {
               workerDepartmentCode : departmentCode,
               workerCode : employeeCode,
               invoiceDateStart,
               invoiceDateEnd,
               invoiceTypeName,
          }
          getInvoiceListRequest(data).then(getInvoiceListResponseHandler)
     }

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
     // description: 매입매출장 조회 클릭 핸들러 //
     const onInOutComeListSearchButtonClickHandler = () => {
          const data: InOutComeListRequestDto = {
               customerCode : inOutComeCustomerCode,
               salesPlanCode : inOutComeSalesPlanCode,
               fundDateStart,
               fundDateEnd,
          }
          getInOutComeListRequest(data).then(getInOutComeListResponseHandler)
     }
     // description: 사내자금현황 조회 클릭 핸들러 //
     const onFundsListSearchButtonClickHandler = () => {
          const data: FundsListRequestDto = {
               fundDateStart : fundslistDateStart,
               fundDateEnd : fundslistDateEnd,
          }
          getFundsListRequest(data).then(getFundsListResponseHandler)
     }
     // description: 사원목록 조회 클릭 핸들러 //
     const onEmployeeViewListSearchButtonClickHandler = () => {
          const data: EmployeeListViewRequestDto = {
               departmentCode : employeeListViewDepartmentCode,
               employeeCode : employeeListViewEmployeeCode,
               employmentType : employeeListViewEmploymentCode,
          }
          getEmployeeListViewRequest(data).then(getEmployeeViewListResponseHandler)
     }
     // description: 급/상여정보조회 클릭 핸들러 //
     const onIncentiveViewListSearchButtonClickHandler = () => {
          const data: IncentiveViewListRequestDto = {
               employeeCode : incentiveViewListEmployeeCode,
               incentiveCategoryName : incentiveViewListCategory,
               paymentDateStart : incentiveviewlistDateStart,
               paymentDateEnd : incentiveviewlistDateEnd,
          }
          getIncentiveViewListRequest(data).then(getIncentiveViewListResponseHandler)
     }
//! ============================================================================================

     

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
                              isInvoiceList ? onInvoiceListSearchButtonClickHandler : 
                              isDepartmentList ? onDepartmentListSearchButtonClickHandler : 
                              isSystemEmployeeList ? onSystemEmployeeListSearchButtonClickHandler :
                              isHumanList ? onHumanListSearchButtonClickHandler :
                              isCustomerList ? onCustomerListSearchButtonClickHandler :
                              isProductList ? onProductListSearchButtonClickHandler :
                              // isSalesPlanList ? onSalesPlanListSearchButtonClickHandler : 
                              isInOutComeList ? onInOutComeListSearchButtonClickHandler : 
                              isFundsList ? onFundsListSearchButtonClickHandler :
                              isEmployeeViewList ? onEmployeeViewListSearchButtonClickHandler :
                              isIncentiveViewList ? onIncentiveViewListSearchButtonClickHandler : () => {}
                              }>
                         <div className="header-function-search-icon"></div>
                         <div className="header-function-search-text">조회</div>
                    </div>
                    <div className="header-function-save" onClick={
                              isCompanyInfo ? onCompanyInfoSaveButtonClickHandler : 
                              isDepartmentList ? onDepartmentListSaveButtonClickHandler :
                              isSystemEmployeeList ? onSystemEmployeeListSaveButtonClickHandler :
                              isCustomerList ? onCustomerListSaveButtonClickHandler :
                              isProductList ? onProductListSaveButtonClickHandler : 
                              // isSalesPlanList ? onSalesPlanListSaveButtonClickHandler :
                               () => {} 
                              }>
                         <div className="header-function-save-icon"></div>
                         <div className="header-function-save-text">저장</div>
                    </div>
                    <div className="header-function-print">
                         <div className="header-function-print-icon"></div>
                         <div className="header-function-print-text">인쇄</div>
                    </div>
                    <div className="header-function-delete" onClick={
                              isDepartmentList ? onDeleteDepartmentInfoButtonClickHandler : 
                              isSystemEmployeeList ? onDeleteEmployeeInfoButtonClickHandler :
                              isCustomerList ? onDeleteCustomerInfoButtonClickHandler : 
                              isProductList ? onDeleteProductInfoButtonClickHandler : 
                              // isSalesPlanList ? onDeleteSalesPlanInfoButtonClickHandler :
                               () => {}
                              }>
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
