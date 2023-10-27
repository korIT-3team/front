export default interface IncentiveListResponseDto {
  no: number;
  incentiveCode: number;
  employeeName: string;
  employeeCode: number;
  incentiveCategoryName: string;
  incentiveCategoryCode: number;  
  paymentDate: string;
  incentivePrice: number;
  content: string;
}