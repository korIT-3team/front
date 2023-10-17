import ResponseDto from "../response.dto";

export default interface IncentiveViewResponseDto extends ResponseDto{
     incentiveCode : number;
     employeeName : string;
     incentiveCategoryName : string;
     paymentDate : string;
     incentivePrice : number;
     content : string;
}