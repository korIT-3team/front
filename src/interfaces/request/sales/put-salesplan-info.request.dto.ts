export default interface PutSalesPlanInfoRequestDto {
  
    salesPlanCodeInfo: number;
    projectNameInfo: string;
    salesPlanProductCode: number;
    salesPlanProductName: string;
    salesPlanUnit: string;
    planQuantity: number;
    exchangeRateCode: number;
    exchangeRate: number;
    expectPrice: number;
    expectTotalPrice: number;
    expectKoreanPrice: number;
}