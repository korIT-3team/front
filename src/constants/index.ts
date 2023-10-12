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
export const ACCOUNTING_INVOICE_PATH = "/accounting/invoice";
export const ACCOUNTING_INVOICE_DETAIL_PATH = (invoiceCode: number | string) => `/accounting/invoice/${invoiceCode}`;
export const ACCOUNTING_IN_OUT_COME_PATH = "/accounting/in_outcome";

// Navigator
export const INVOICE_CODE_PATH_VARIABLE = ':invoiceCode';

// department code
export enum CODE {
  SYSTEM = 999,
  HUMAN = 1000,
  SALES = 1001,
  FUNDS = 1002,
}