import axios from 'axios';
import { InOutComeListRequestDto, InvoiceListRequestDto, InvoiceDetailRequestDto } from 'src/interfaces/request/accounting';
import { SignInRequestDto } from 'src/interfaces/request/auth';
import { SignInResponseDto } from 'src/interfaces/response/auth';
import GetLoginUserResponseDto from 'src/interfaces/response/user/get-login-user.response.dto';
import { PutSalesPlanInfoRequestDto, SalesPlanListRequestDto } from 'src/interfaces/request/sales';
import { EmployeeListViewRequestDto, FundsListRequestDto, IncentiveViewListRequestDto } from 'src/interfaces/request/searchView';
import PutCustomerInfoRequestDto from 'src/interfaces/request/system/put-customer-info.request.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import DeleteDepartmentInfoResponseDto from 'src/interfaces/response/system/delete-department-info.response.dto';
import PutCustomerInfoResponseDto from 'src/interfaces/response/system/put-customer-info.response.dto';
import PutDepartmentInfoResponseDto from 'src/interfaces/response/system/put-department-info.response.dto';
import { PutCompanyInfoRequestDto, PutDepartmentInfoRequestDto, PutProductInfoRequestDto } from 'src/interfaces/request/system';
import { GetSalesPlanListResponseDto, PutSalesPlanInfoResponseDto, SalesPlanListResponseDto } from 'src/interfaces/response/sales';
import { GetEmployeeListViewResponseDto, GetFundsListResponseDto, GetIncentiveViewListResponseDto } from 'src/interfaces/response/searchView';
import { DeleteProductInfoResponseDto, DeleteCustomerInfoResponseDto, GetCustomerListResponseDto, GetDepartmentListResponseDto, GetProductListResponseDto, GetompanyInfoResponseDto, PutCompanyInfoResponseDto, PutProductInfoResponseDto } from 'src/interfaces/response/system';
//! todo : index.ts 추가 필요 ----
import PutSystemEmployeeInfoResponseDto from 'src/interfaces/response/system/systemEmployee/put-system-employee-info.response.dto';
import GetSystemEmpDepartmentListResponseDto from 'src/interfaces/response/system/systemEmployee/get-system-emp-department-list.response.dto';
import GetSystemEmpUserDefineListResponseDto from 'src/interfaces/response/system/systemEmployee/get-system-emp-user-define-detail-list.response.dto';
import GetSystemEmployeeListResponseDto from 'src/interfaces/response/system/systemEmployee/get-system-employee-list.response.dto';
import GetIncentiveTypeListResponseDto from 'src/interfaces/response/searchView/get-incentive-type-list.response.dto';
import GetEmployeeCodeListRequestDto from 'src/interfaces/request/common/get-employee-code-list.request.dto';
import GetSearchCodeListResponseDto from 'src/interfaces/response/common/get-search-code-list.response.dto';
import PutSystemEmployeeInfoRequestDto from 'src/interfaces/request/system/put-system-employee-info.request.dto';
import DeleteSystemEmployeeInfoResponseDto from 'src/interfaces/response/system/systemEmployee/delete-system-employee-info.response.dto';
import { GetCustomerCodeListRequestDto, GetDepartmentCodeListRequestDto, GetProjectCodeListRequestDto } from 'src/interfaces/request/common';
//! ----
import { GetInOutComeListResponseDto, GetInvoiceDetailIncentiveResponseDto, GetInvoiceDetailOrderResponseDto, GetInvoiceDetailSalesResponseDto, GetInvoiceListResponseDto, GetInvoiceTypeListResponseDto, InvoiceListResponseDto } from 'src/interfaces/response/accounting';
//! ----
import {GetEmploymentTypeListResponseDto} from 'src/interfaces/response/human'
import { HumanListRequestDto } from 'src/interfaces/request/human';
import GetHumanListResponseDto from 'src/interfaces/response/human/get-human-list.response.dto';

const API_DOMAIN = 'http://localhost:4040';

// 로그인
const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/auth/user`;

// 회사등록
const PUT_COMPANY_INFO_URL = () => `${API_DOMAIN}/system/company-info`;
const GET_COMPANY_INFO_URL = () => `${API_DOMAIN}/system/company-info`;

// 회계관리
const GET_INVOICE_LIST_URL = () => `${API_DOMAIN}/accounting/invoice`;
const GET_INVOICE_DETAIL_URL = (invoiceCode: number) => `${API_DOMAIN}/accounting/invoice/${invoiceCode}`;
const GET_INVOICE_DETAIL_ORDER_URL = (invoiceCode: number) => `${API_DOMAIN}/accounting/invoice/${invoiceCode}/order-info`;
const GET_INVOICE_DETAIL_SALES_URL = (invoiceCode: number) => `${API_DOMAIN}/accounting/invoice/${invoiceCode}/sales-info`;
const GET_INVOICE_DETAIL_INCENTIVE_URL = (invoiceCode: number) => `${API_DOMAIN}/accounting/invoice/${invoiceCode}/incentive`;
const GET_INOUTCOME_LIST_URL = () => `${API_DOMAIN}/accounting/inout-come`;

// 조회
const GET_FUNDS_LIST_URL = () => `${API_DOMAIN}/searchView/check-funds`;
const GET_EMPLOYEE_LIST_VIEW_URL = () => `${API_DOMAIN}/searchView/employee-list`;
const GET_INCENTIVE_VIEW_LIST_URL = () => `${API_DOMAIN}/searchView/incentive-list`;

// 검색
const GET_EMPLOYEE_CODE_LIST_URL = () => `${API_DOMAIN}/detail-code/employee`;
const GET_DEPARTMENT_CODE_LIST_URL = () => `${API_DOMAIN}/detail-code/department`;
const GET_CUSTOMER_CODE_LIST_URL = () => `${API_DOMAIN}/detail-code/customer`;
const GET_SALES_PLAN_CODE_LIST_URL = () => `${API_DOMAIN}/detail-code/sales-plan`;

// 부서
const PUT_DEPARTMENT_INFO_URL = () => `${API_DOMAIN}/system/dept-info`;
const DELETE_DEPARTMENT_INFO_URL = (deleteDepartmentCode: number) => `${API_DOMAIN}/system/dept-info/${deleteDepartmentCode}`;
const GET_DEPARTMENT_LIST_URL = (departmentName: string) => `${API_DOMAIN}/system/dept-info/${departmentName}`;

// 사원
const PUT_SYSTEM_EMPLOYEE_INFO_URL = () => `${API_DOMAIN}/system/employee-info`;
const DELETE_SYSTEM_EMPLOYEE_INFO_URL = (deleteSystemEmployeeCode: number) => `${API_DOMAIN}/system/employee-info/${deleteSystemEmployeeCode}`;
const GET_SYSTEM_EMPLOYEE_LIST_URL = (systemEmployeeName: string) => `${API_DOMAIN}/system/employee-info/${systemEmployeeName}`;
const GET_SYSTEM_EMP_USER_DEFINE_LIST_URL = (userDefineCode: number | null) => `${API_DOMAIN}/system/employee-info/user-define/${userDefineCode}`;
const GET_SYSTEM_EMP_DEPARTMENT_LIST_URL = () =>  `${API_DOMAIN}/system/employee-info/department`;

const UPLOAD_FILE = () => `${API_DOMAIN}/file/upload`;

// 사원Detail(HUMAN)
const GET_HUMAN_EMPLOYEE_LIST_URL = () => `${API_DOMAIN}/human/employee-info-detail`;

// 거래처
const GET_CUSTOMER_LIST_URL = (customerCode: number, customerName: string) => `${API_DOMAIN}/system/customer-info/${customerCode}/${customerName}`;
const PUT_CUSTOMER_INFO_URL = () => `${API_DOMAIN}/system/customer-info`;
const DELETE_CUSTOMER_INFO_URL = (deleteCustomerCode: number) => `${API_DOMAIN}/system/customer-info/${deleteCustomerCode}`; 

// 판매계획
const GET_SALES_PLAN_LIST_URL = () => `${API_DOMAIN}/sales/sales-plan`;
const GET_SALES_PLAN_DETAIL_RUL = (salesPlanCode: number) => `${API_DOMAIN}/sales/sales-plan/${salesPlanCode}`
const PUT_SALES_PLAN_INFO_RUL = () => `${API_DOMAIN}/sales/sales-plan`;

// 품목
const GET_PRODUCT_LIST_URL = (productCode: number, productName: string) => `${API_DOMAIN}/system/product-info/${productCode}/${productName}`;
const PUT_PRODUCT_INFO_URL = () => `${API_DOMAIN}/system/product-info`;
const DELETE_PRODUCT_INFO_URL = (deleteProductCode: number) => `${API_DOMAIN}/system/product-info/${deleteProductCode}`;

// 로그인 메서드
export const signInRequest = async (data: SignInRequestDto) => {
     const result = 
     await axios.post(SIGN_IN_URL(), data)
     .then((response) => {
       const responseBody: SignInResponseDto = response.data;
       return responseBody;
     })
     .catch((error) => {
       const responseBody: ResponseDto = error.response.data;
       return responseBody;
     });

     return result;
}

// 로그인유저 정보 불러오기 메서드
export const getSignInUserRequest = async (token: string) => {
  const headers = { headers: { 'Authorization': `Bearer ${token}` } };
  const result = await axios.get(GET_SIGN_IN_USER_URL(), headers)
  .then((response) => {
       const responseBody: GetLoginUserResponseDto = response.data;
       return responseBody;
  }).catch((error) => {
       const responseBody: ResponseDto = error.response.data;
       return responseBody;
  });

  return result;
}

// 회사정보등록 메서드
export const putCompanyInfoRequest = async (data: PutCompanyInfoRequestDto, token : string) => {
  const result = await axios.put(PUT_COMPANY_INFO_URL(), data, { headers : { 'Authorization' : `Bearer ${token}` } })
  .then((response) => {
    const responsebody : PutCompanyInfoResponseDto = response.data;
    const { code } = responsebody;
    return code;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    const { code } = responsebody;
    return code;
  });
  return result;
}

// 회사정보 불러오기 메서드
export const getCompanyInfoRequest = async () => {
  const result = await axios.get(GET_COMPANY_INFO_URL())
  .then((response) => {
    const responsebody : GetompanyInfoResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 이미지 업로드 url 세팅 메서드
export const uploadFileRequest = async (data : FormData) => {
  const result = await axios.post(UPLOAD_FILE(), data, { headers : { 'Content-Type' : 'multipart/form-data' } })
  .then((response) => {
    const imageUrl : string = response.data;
    return imageUrl;
  })
  .catch((error) => null);
  return result;
}

// 전표리스트 불러오기 메서드 ** request dto가 필요해서 get 대신 post를 사용
export const getInvoiceListRequest = async (data : InvoiceListRequestDto) => {
  const result = await axios.post(GET_INVOICE_LIST_URL(), data)
  .then((response) => {
    const responsebody : GetInvoiceListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 전표 유형 리스트 불러오기
export const getInvoiceTypeRequest = async () => {
  const result = await axios.get(GET_INVOICE_LIST_URL())
  .then((response) => {
    const responsebody : GetInvoiceTypeListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 재직 구분 리스트 불러오기
export const getEmploymentTypeRequest = async () => {
  const result = await axios.get(GET_EMPLOYEE_LIST_VIEW_URL())
  .then((response) => {
    const responsebody : GetEmploymentTypeListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 급상여 구분 리스트 불러오기
export const getIncentiveTypeRequest = async () => {
  const result = await axios.get(GET_INCENTIVE_VIEW_LIST_URL())
  .then((response) => {
    const responsebody : GetIncentiveTypeListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 전표 상세 데이터 불러오기 메서드
export const getInvoiceDetailRequest = async (invoiceCode : number) => {
  const result = await axios.get(GET_INVOICE_DETAIL_URL(invoiceCode))
  .then((response) => {
    const responsebody : InvoiceListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 전표(수주) 상세 데이터 불러오기 메서드
export const getInvoiceDetailOrderRequest = async (invoiceCode : number, data : InvoiceDetailRequestDto) => {
  const result = await axios.post(GET_INVOICE_DETAIL_ORDER_URL(invoiceCode), data)
  .then((response) => {
    const responsebody : GetInvoiceDetailOrderResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 전표(매출) 상세 데이터 불러오기 메서드
export const getInvoiceDetailSalesRequest = async (invoiceCode : number, data : InvoiceDetailRequestDto) => {
  const result = await axios.post(GET_INVOICE_DETAIL_SALES_URL(invoiceCode), data)
  .then((response) => {
    const responsebody : GetInvoiceDetailSalesResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 전표(급/상여) 상세 데이터 불러오기 메서드
export const getInvoiceDetailIncentiveRequest = async (invoiceCode : number, data : InvoiceDetailRequestDto) => {
  const result = await axios.post(GET_INVOICE_DETAIL_INCENTIVE_URL(invoiceCode), data)
  .then((response) => {
    const responsebody : GetInvoiceDetailIncentiveResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 매입매출 리스트 조회 메서드
export const getInOutComeListRequest = async (data : InOutComeListRequestDto) => {
  const result = await axios.post(GET_INOUTCOME_LIST_URL(), data)
  .then((response) => {
    const responsebody : GetInOutComeListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 사내자금현황 리스트 조회 메서드
export const getFundsListRequest = async (data : FundsListRequestDto) => {
  const result = await axios.post(GET_FUNDS_LIST_URL(), data)
  .then((response) => {
    const responsebody : GetFundsListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 사원목록 조회 메서드
export const getEmployeeListViewRequest = async (data : EmployeeListViewRequestDto) => {
  const result = await axios.post(GET_EMPLOYEE_LIST_VIEW_URL(), data)
  .then((response) => {
    const responsebody : GetEmployeeListViewResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 급/상여정보조회 메서드
export const getIncentiveViewListRequest = async (data : IncentiveViewListRequestDto) => {
  const result = await axios.post(GET_INCENTIVE_VIEW_LIST_URL(), data)
  .then((response) => {
    const responsebody : GetIncentiveViewListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 검색 : 사원코드도움 메서드
export const getEmployeeCodeListRequest = async (data : GetEmployeeCodeListRequestDto) => {
  const result = await axios.post(GET_EMPLOYEE_CODE_LIST_URL(), data)
  .then((response) => {
    const responsebody : GetSearchCodeListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 검색 : 부서코드도움 메서드
export const getDepartmentCodeListRequest = async (data : GetDepartmentCodeListRequestDto) => {
  const result = await axios.post(GET_DEPARTMENT_CODE_LIST_URL(), data)
  .then((response) => {
    const responsebody : GetSearchCodeListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 검색 : 거래처코드도움 메서드
export const getCustomerCodeListRequest = async (data : GetCustomerCodeListRequestDto) => {
  const result = await axios.post(GET_CUSTOMER_CODE_LIST_URL(), data)
  .then((response) => {
    const responsebody : GetSearchCodeListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 검색 : 판매계획코드도움 메서드
export const getProjectCodeListRequest = async (data : GetProjectCodeListRequestDto) => {
  const result = await axios.post(GET_SALES_PLAN_CODE_LIST_URL(), data)
  .then((response) => {
    const responsebody : GetSearchCodeListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}


// ! 부서
// 부서정보등록 메서드
export const putDepartmentInfoRequest = async (data: PutDepartmentInfoRequestDto, token : string) => {
  const result = await axios.put(PUT_DEPARTMENT_INFO_URL(), data, {headers: { 'Authorization' : `Bearer ${token}` }})
  .then((response) => {
    const responsebody : PutDepartmentInfoResponseDto = response.data;
    const { code } = responsebody;
    return code;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    const { code } = responsebody;
    return code;
  });
  return result;
}

// 부서정보삭제 메서드
export const deleteDepartmentInfoRequest = async (deleteDepartmentCode: number, token : string) => {
  const result = await axios.delete(DELETE_DEPARTMENT_INFO_URL(deleteDepartmentCode), {headers: { 'Authorization' : `Bearer ${token}`}})
  .then((response) => {
    const responsebody : DeleteDepartmentInfoResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 부서정보 불러오기 메서드
export const getDepartmentListRequest = async (departmentName: string) => {
  const result = await axios.get(GET_DEPARTMENT_LIST_URL(departmentName))
  .then((response) => {
    const responsebody : GetDepartmentListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

//! 사원
// 사원정보등록 메서드
export const putSystemEmployeeInfoRequest = async (data: PutSystemEmployeeInfoRequestDto, token : string) => {

  const result = await axios.put(PUT_SYSTEM_EMPLOYEE_INFO_URL(), data, {headers: { 'Authorization' : `Bearer ${token}` }})
  .then((response) => {
    const responsebody : PutSystemEmployeeInfoResponseDto = response.data;
    const { code } = responsebody;
    return code;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    const { code } = responsebody;
    return code;
  });
  return result;
}

// 사원정보삭제 메서드
export const deleteSystemEmployeeInfoRequest = async (deleteSystemEmployeeCode: number, token : string) => {
  const result = await axios.delete(DELETE_SYSTEM_EMPLOYEE_INFO_URL(deleteSystemEmployeeCode), {headers: { 'Authorization' : `Bearer ${token}`}})
  .then((response) => {
    const responsebody : DeleteSystemEmployeeInfoResponseDto = response.data;
    
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 사원정보 불러오기 메서드
export const getSystemEmployeeListRequest = async (systemEmployeeName: string) => {
  const result = await axios.get(GET_SYSTEM_EMPLOYEE_LIST_URL(systemEmployeeName))
  .then((response) => {
    const responsebody : GetSystemEmployeeListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 사원 - 사용자정의코드 불러오기 메서드
export const getSystemEmpUserDefineListRequest = async(userDefineCode: number | null) => {
  const result = await axios.get(GET_SYSTEM_EMP_USER_DEFINE_LIST_URL(userDefineCode))
  .then((response) => {
    const responsebody : GetSystemEmpUserDefineListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 사원 - 부서 불러오기 메서드
export const getSystemEmpDepartmentListRequest = async() => {
  const result = await axios.get(GET_SYSTEM_EMP_DEPARTMENT_LIST_URL())
  .then((response) => {
    const responsebody : GetSystemEmpDepartmentListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

//! Human
// 재직구분 리스트 불러오기
export const getHumanEmploymentTypeRequest = async () => {
  const result = await axios.get(GET_HUMAN_EMPLOYEE_LIST_URL())
  .then((response) => {
    const responsebody : GetInvoiceTypeListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}
// 사원List 불러오기
export const getHumanListRequest = async (data : HumanListRequestDto) => {
  const result = await axios.post(GET_HUMAN_EMPLOYEE_LIST_URL(), data)
  .then((response) => {
    const responsebody : GetHumanListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}


// ! CUSTOMER

// 거래처정보등록 메서드
export const putCustomerInfoRequest = async (data: PutCustomerInfoRequestDto, token : string) => {
  const result = await axios.put(PUT_CUSTOMER_INFO_URL(), data, { headers : { 'Authorization' : `Bear=er ${token}` } })
  .then((response) => {
    const responsebody : PutCustomerInfoResponseDto = response.data;
    const { code } = responsebody;
    return code;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    const { code } = responsebody;
    return code;
  });
  return result;
}

// 거래처 정보 삭제 메서드
export const deleteCustomerInfoRequest = async (deleteCustomerCode: number, token: string) => {
  const result = await axios.delete(DELETE_CUSTOMER_INFO_URL(deleteCustomerCode), {headers: { 'Authorization' : `Bearer ${token}` }})
  .then((response) => {
    const responsebody: DeleteCustomerInfoResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody: ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 거래처 리스트 불러오기 메서드
export const getCustomerListRequest = async (customerCode: number, customerName: string) => {
  const result = await axios.get(GET_CUSTOMER_LIST_URL(customerCode, customerName))
  .then((response) => {
    const responsebody : GetCustomerListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// ! PRODUCT

// 제품 정보 불러오기
export const getProductListRequest = async (productCode: number, productName: string) => {
  const result = await axios.get(GET_PRODUCT_LIST_URL(productCode, productName))
  .then((response) => {
    const responsebody: GetProductListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody: ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 제품 정보 등록 메서드
export const putProductInfoRequest = async (data: PutProductInfoRequestDto, token: string) => {
  const result = await axios.put(PUT_PRODUCT_INFO_URL(), data, {headers: { 'Authorization' : `Bearer ${token}` }})
  .then((response) => {
    const responsebody: PutProductInfoResponseDto = response.data;
    const { code } = responsebody;
    return code;
  })
  .catch((error) => {
    const responsebody: ResponseDto = error.response.data;
    const { code } = responsebody;
    return code;
  });
  return result;
}

// 제품 정보 삭제 메서드
export const deleteProductInfoRequest = async (deleteProductCode: number, token: string) => {
  const result = await axios.delete(DELETE_PRODUCT_INFO_URL(deleteProductCode), {headers: { 'Authorization' : `Bearer ${token}`}})
  .then((response) => {
    const responsebody: DeleteProductInfoResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody: ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}


// ! SALES_PLAN

// 판매계획 리스트 불러오기 메서드
export const getSalesPlanListRequest = async (data: SalesPlanListRequestDto) => {
  const result = await axios.post(GET_SALES_PLAN_LIST_URL(), data)
  .then((response) => {
    const responsebody: GetSalesPlanListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody: ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 판매계획 상세 리스트 불러오기 메서드
export const getSalesPlanDetailRequest = async (salesPlanCode: number) => {
  const result = await axios.get(GET_SALES_PLAN_DETAIL_RUL(salesPlanCode))
  .then((response) => {
    const responsebody: SalesPlanListResponseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody: ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}

// 판매계획 등록 메서드
export const putSalesPlanInfoRequest = async (data: PutSalesPlanInfoRequestDto, token: string) => {
  const result = await axios.put(PUT_SALES_PLAN_INFO_RUL(), data, {headers: { 'Authorization' : `Bearer ${token}` }})
  .then((response) => {
    const responsebody: PutSalesPlanInfoResponseDto = response.data;
    const { code } = responsebody;
    return code;
  })
  .catch((error) => {
    const responsebody: ResponseDto = error.response.data;
    const { code } = responsebody;
    return code;
  })
  return result;
}