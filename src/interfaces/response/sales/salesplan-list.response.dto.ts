export default interface SalesPlanListResponseDto {
  no: number;
  productCode: number;
  porductName: string;
  unit: string;
  planQuantity: number;
  exchangeRateType: number;
  exchangeRate: number;
  expectPrice: number;
  expectTotalPrice: number;
}