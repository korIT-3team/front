export default interface SalesPlanListRequestDto {
  departmentCode: number | null;
  employeeCode: number | null;
  planDate: string;
  productCode: number | null;
  productName: string;
  planQuantity: number | null;
  exchangeType: number | null;
  exchangeRate: number | null;
  expectPrice: number | null;
  expectTotalPrice: number | null;
}