export default interface IncentiveViewListRequestDto {
     employeeCode : number;
     incentiveCategoryName : string | null;
     paymentDateStart : string;
     paymentDateEnd : string;
 }