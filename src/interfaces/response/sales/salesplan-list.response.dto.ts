export default interface SalesPlanListResponseDto {
  no: number;
  salesPlanCode: number;
  projectName: string;
  planDate: string;
  productCode: number;
  productName: string;
  planQuantity: number;
  expectPrice: number;
  expectTotalPrice: number;
  employeeCode: number;
  employeeName: string;
}