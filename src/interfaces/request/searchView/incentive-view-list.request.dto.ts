export default interface IncentiveViewListRequestDto {
     employeeCode : number;
     incentiveCategory : number | null;
     paymentDateStart : string;
     paymentDateEnd : string;
 }