import ResponseDto from "../response.dto";

export default interface GetInvoiceDetailOrderResponseDto extends ResponseDto {
     orderCode : number;
     orderDate : string;
     orderPrice : number;
     orderDetail : string;
     salesPlanCode : number;
     customerCode : number;
     employeeName : string;
     customerName : string;
}