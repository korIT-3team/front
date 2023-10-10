export default interface SalesPlanListResponseDto {
  no: number;
  salesPlanCode: number;
  employeeCode: number;
  departmentCode: number;
  companyCode: number;
  planDate: string;
  productCode: number;
  productName: string;
  planQuantity: number;
  exchangeRateCode: number;
  exchangeRate: number;
  expectPrice: number;
  expectTotalPrice: number;
  expectKoreanPrice: number;
}