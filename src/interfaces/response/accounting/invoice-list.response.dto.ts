import ResponseDto from "../response.dto";

export default interface InvoiceListResponseDto extends ResponseDto{
    invoiceCode : number;
    productCode : number;
    customerCode : number;
    workerCode : number;
    workerDepartmentCode : number;
    productDetails : string;
    invoiceDate : string;
    invoiceType : number;
    customerName : string;
    price : number;
}