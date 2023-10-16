export const telNumberPattern = /^\d{3}-\d{3,4}-\d{4}$/;
export const faxPattern = /^\d{2,3}-\d{3,4}-\d{4}$/;

// home path
export const HOME_PATH = "/";

// system path
export const SYSTEM_PATH = "/system";
export const SYSTEM_COMPANY_INFO = "/system/company-info";
export const SYSTEM_DEPT_INFO = "/system/dept-info";
export const SYSTEM_EMPLOYEE_INFO = "/system/employee-info";
export const SYSTEM_CUSTOMER_INFO = "/system/customer-info";
export const SYSTEM_PRODUCT_INFO = "/system/product-info";

// human path
export const HUMAN_PATH = "/human";
export const HUMAN_EMPLOYEE_INFO = "/human/employee-info-detail";
export const HUMAN_EMPLOYEE_INFO_DETAIL = (employee_code: number | string) => `/human/employee-info-detail/${employee_code}`;
export const HUMAN_ANNUAL_PRICE = "/human/annual-price";
export const HUMAN_INCENTIVE = "/human/incentive";
export const HUMAN_INCENTIVE_DELETE = (incentive_code: number | string) => `/human/incentive/${incentive_code}`;
export const HUMAN_MANAGE_DAY_OFF = "/human/manage-day-off";
export const HUMAN_APPLY_DAY_OFF = "/human/apply-day-off";
export const HUMAN_APPLY_DAY_OFF_CANCEL = ( apply_day_off_code: number | string) => `/human/apply-day-off/${apply_day_off_code}`;
export const HUMAN_WORK_TIME = "/human/work-time";
export const HUMAN_WORK_TIME_DELETE = ( work_date: Date, employee_code: number | string) => `/human/work-time/${work_date}/${employee_code}`;


// salse path
export const SALES_PATH = "/sales";
export const SALES_PLAN_PATH = "/sales/sales-plan";
export const SALES_PLAN_DETAIL_PATH = (salesPlanCode: number | string) => `/sales/sales-plan/${salesPlanCode}`;
export const ORDER_INFO_PATH = "/sales/order-info";
export const ORDER_INFO_DETAIL_PATH = (orderCode: number | string) => `/sales/order-info/${orderCode}`;
export const RELEASE_INFO_PATH = "/sales/release-info";
export const RELEASE_INFO_DETAIL_PATH = (releaseCode: number | string) => `/sales/release-info/${releaseCode}`;
export const SALES_INFO_PATH = "/sales/sales-info";
export const SALES_INFO_DETAIL_PATH = (salesCode: number | string) => `/sales/sales-info/${salesCode}`;

// aacounting path
export const ACCOUNTING_PATH = "/accounting";
export const INVOICE_PATH = "invoice";
export const INOUT_COME_PATH = "in_outcome";
export const ACCOUNTING_INVOICE_PATH = `${ACCOUNTING_PATH}/${INVOICE_PATH}`;
export const ACCOUNTING_INVOICE_DETAIL_PATH = (invoiceCode: number | string) => `${ACCOUNTING_INVOICE_PATH}/${invoiceCode}`;
export const ACCOUNTING_IN_OUT_COME_PATH = `${ACCOUNTING_PATH}/${INOUT_COME_PATH}`;

// searchView path
export const SEARCHVIEW_PATH = "/searchView";
export const SEARCHVIEW_FUNDS_PATH = "check-funds";
export const SEARCHVIEW_EMPLOYEE_PATH = "employee-list";
export const SEARCHVIEW_FUNDS_LIST_PATH = `${SEARCHVIEW_PATH}/${SEARCHVIEW_FUNDS_PATH}`;
export const SEARCHVIEW_EMPLOYEE_LIST_PATH = `${SEARCHVIEW_PATH}/${SEARCHVIEW_EMPLOYEE_PATH}`;

// Navigator
export const INVOICE_CODE_PATH_VARIABLE = ':invoiceCode';

// department code
export enum DEPARTMENT_CODE {
  SYSTEM = 999,
  HUMAN = 1000,
  SALES = 1001,
  FUNDS = 1002,
}
// 직위코드
export enum POSITION_CODE {
  SAWON = 1,
  DAELEE = 2,
  GWAJANG = 3,
  CHAJANG = 4,
  BOOJANG = 5,
}
// 직위명
export enum POSITION_NAME {
  SAWON = '사원',
  DAELEE = '대리',
  GWAJANG = '과장',
  CHAJANG = '차장',
  BOOJANG = '부장',
}
// 재직코드
export enum EMPLOYEMENT_CODE {
  CURRENT = 1,
  OUT = 2,
  REST = 3,
}
// 재직구분
export enum EMPLOYEMENT_NAME {
  CURRENT = '재직',
  OUT = '퇴사',
  REST = '휴직',
}
// 성별코드
export enum GENDER_CODE {
  MALE = 1,
  FEMALE = 2,
  SYSTEM = 3,
}
// 성별구분
export enum GENDER_NAME {
  MALE = '남자',
  FEMALE = '여자',
  SYSTEM = 'SYSTEM',
}

