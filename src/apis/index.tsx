import axios from 'axios';
import { InvoiceListRequestDto } from 'src/interfaces/request/accounting';
import { SignInRequestDto } from 'src/interfaces/request/auth';
import { DepartmentListRequestDto, PutCompanyInfoRequestDto, PutDepartmentInfoRequestDto } from 'src/interfaces/request/system';
import PutCustomerInfoRequestDto from 'src/interfaces/request/system/put-customer-info.request.dto';
import { InvoiceListResponseDto } from 'src/interfaces/response/accounting';
import GetInvoiceListResponseDto from 'src/interfaces/response/accounting/get-invoice-list.response.dto';
import { SignInResponseDto } from 'src/interfaces/response/auth';
import ResponseDto from 'src/interfaces/response/response.dto';
import { GetCustomerInfoRepsonseDto, GetDepartmentInfoResponseDto, GetDepartmentListResponseDto, GetompanyInfoResponseDto, PutCompanyInfoResponseDto } from 'src/interfaces/response/system';
import PutCustomerInfoResponseDto from 'src/interfaces/response/system/put-customer-info.response.dto';
import PutDepartmentInfoResponseDto from 'src/interfaces/response/system/put-department-info.response.dto';
import GetLoginUserResponseDto from 'src/interfaces/response/user/get-login-user.response.dto';

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

// 부서
const PUT_DEPARTMENT_INFO_URL = () => `${API_DOMAIN}/system/dept-info`;
const GET_DEPARTMENT_LIST_URL = (departmentName: string) => `${API_DOMAIN}/system/dept-info/${departmentName}`;

const UPLOAD_FILE = () => `${API_DOMAIN}/file/upload`;

// 거래처
const PUT_CUSTOMER_INFO_URL = () => `${API_DOMAIN}/system/customer-info`;
const GET_CUSTOMER_INFO_URL = () => `${API_DOMAIN}/system/customer-info`;

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

// ! 부서
// 부서정보등록 메서드
export const putDepartmentInfoRequest = async (data: PutDepartmentInfoRequestDto, token : string) => {
  const result = await axios.put(PUT_DEPARTMENT_INFO_URL(), data, {headers: { 'Authorization' : `Bearer ${token}` }})
  .then((response) => {
    const responsebody : PutDepartmentInfoResponseDto = response.data;
    const { code } = responsebody;
    return code;
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

// ! 거래처
// 거래처정보등록 메서드
export const putCustomerInfoRequest = async (data: PutCustomerInfoRequestDto, token : string) => {
  const result = await axios.put(PUT_COMPANY_INFO_URL(), data, { headers : { 'Authorization' : `Bearer ${token}` } })
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

// 거래처 정보 불러오기 메서드
export const getCustomerInfoRequest = async () => {
  const result = await axios.get(GET_CUSTOMER_INFO_URL())
  .then((response) => {
    const responsebody : GetCustomerInfoRepsonseDto = response.data;
    return responsebody;
  })
  .catch((error) => {
    const responsebody : ResponseDto = error.response.data;
    return responsebody;
  });
  return result;
}