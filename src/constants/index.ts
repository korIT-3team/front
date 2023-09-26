// home path
export const HOME_PATH = '/';

// salse path
export const SALES_PATH = '/sales';
export const SALES_PLAN_PATH = '/sales/sales-plan';
export const ORDER_INFO_PATH = '/sales/order-info';
export const RELEASE_INFO_PATH = '/sales/release-info';
export const SALES_INFO_PATH = '/sales/sales-info';

// system path
export const SYSTEM_PATH = '/system';
export const SYSTEM_COMPANY_INFO = '/system/company-info';
export const SYSTEM_DEPT_INFO = '/system/dept-info';
export const SYSTEM_EMPLOYEE_INFO = '/system/employee-info';
export const SYSTEM_CUSTOMER_INFO = '/system/customer-info';
export const SYSTEM_PRODUCT_INFO = '/system/product-info';

// human path
export const HUMAN_PATH = '/human';
export const HUMAN_EMPLOYEE_INFO = '/human/employee-info-detail';
export const HUMAN_EMPLOYEE_INFO_DETAIL = (employee_code: number | string) => `/human/employee-info-detail/${employee_code}`;
export const HUMAN_ANNUAL_PRICE = '/human/annual-price';
export const HUMAN_INCENTIVE = '/human/incentive';
export const HUMAN_INCENTIVE_DELETE = (incentive_code: number | string) => `/human/incentive/${incentive_code}`;
export const HUMAN_MANAGE_DAY_OFF = '/human/manage-day-off';
export const HUMAN_APPLY_DAY_OFF = '/human/apply-day-off';
export const HUMAN_APPLY_DAY_OFF_CANCEL = (apply_day_off_code: number | string) => `/human/apply-day-off/${apply_day_off_code}`;
export const HUMAN_WORK_TIME = '/human/work-time';
export const HUMAN_WORK_TIME_DELETE = (work_date:Date, employee_code:number | string) => `/human/work-time/${work_date}/${employee_code}`;


