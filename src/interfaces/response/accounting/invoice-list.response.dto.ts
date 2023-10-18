import ResponseDto from "../response.dto";

export default interface InvoiceListResponseDto extends ResponseDto{
    invoiceCode : number;
    invoiceDate : string;
    invoiceTypeName : string;
    invoiceDetailPk : number;
    workerName : string;
    price : number;
    priceDetail : string;
}