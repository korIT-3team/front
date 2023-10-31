export default interface PutIncentiveRequestDto {
  incentiveCode : number;
  incentiveEmployeeCode : number;
  incentiveCategory : number;
  paymentDate : string;
  incentivePrice : number;
  content : string;
}