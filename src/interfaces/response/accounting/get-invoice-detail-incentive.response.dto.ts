import ResponseDto from "../response.dto";

export default interface GetInvoiceDetailIncentiveResponseDto extends ResponseDto {
     incentiveCode : number;
     incentiveCategory : number;
     paymentDate : string;
     employeeName : string;
     incentivePrice : number;
     content : string;
}