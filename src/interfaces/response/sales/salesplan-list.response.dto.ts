export default interface SalesPlanListResponseDto {
  no: number;
  salesPlanCode: number;
  projectName: string;
  departmentCode: number;
  employeeCode: number;
  companyCode: number;
  planDate: string;
  productCode: number;
  productName: string;
  unit: string;
  planQuantity: number;
  exchangeRateCode: number;
  exchangeRate: number;
  expectPrice: number;
  expectTotalPrice: number;
  expectKoreanPrice: number;
}