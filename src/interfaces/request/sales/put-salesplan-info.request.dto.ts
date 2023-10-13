export default interface PutSalesPlanInfoRequestDto {
  
    salesPlanCodeInfo: number;
    projectNameInfo: string;
    employeeCodeInfo: number;
    departmentCodeInfo: number;
    salesPlanCompanyCode: number;
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