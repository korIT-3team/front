import ResponseDto from "../response.dto";

export default interface GetInvoiceDetailOrderResponseDto extends ResponseDto {
     orderCode : number;
     orderDate : string;
     orderPrice : number;
     orderDetail : string;
     salesPlanCode : number;
     projectName : string;
     customerCode : number;
     employeeName : string;
     customerName : string;
}