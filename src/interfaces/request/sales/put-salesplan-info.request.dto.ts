export default interface PutSalesPlanInfoRequestDto {
  
    salesPlanCodeInfo: number;
    salesPlanProjectName: string;
    salesPlanDepartmentCodeInfo: number;
    salesPlanEmployeeCodeInfo: number;
    salesPlanCompanyCodeInfo: number;
    salesPlanDate: string;
    salesPlanProductCodeInfo: number;
    salesPlanQuantity: number;
    salesPlanExchangeRateCode: number;
    salesPlanExchangeRate: number;
    salesPlanExpectPrice: number;
    salesPlanExpectTotalPrice: number;
    salesPlanExpectKoreanPrice: number;
}