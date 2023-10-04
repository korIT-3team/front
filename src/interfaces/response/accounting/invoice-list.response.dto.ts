export default interface InvoiceListResponseDto {
    invoiceCode : number;
    productCode : number;
    customerCode : number;
    workerCode : number;
    productDetails : string;
    invoiceDate : string;
    invoiceType : number;
    customerName : string;
    price : number;
}