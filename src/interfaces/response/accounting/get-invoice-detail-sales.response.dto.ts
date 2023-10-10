import ResponseDto from "../response.dto";

export default interface GetInvoiceDetailSalesResponseDto extends ResponseDto {
     salesCode : number;
     salesPlanCode : number;
     deadlineDate : string;
     salesDetail : string;
     salesPrice : number;
     employeeName : string;
     customerName : string;
}