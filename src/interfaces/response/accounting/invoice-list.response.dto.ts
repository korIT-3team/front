import ResponseDto from "../response.dto";

export default interface InvoiceListResponseDto extends ResponseDto{
    invoiceCode : number;
    invoiceDate : string;
    invoiceType : number;
    invoiceDetailPk : number;
    workerName : string;
    workerCode : number;
    workerDepartmentCode : number;
    price : number;
    priceDetail : string;
}