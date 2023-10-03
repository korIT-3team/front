export default interface InvoiceListResponseDto {
    invoiceCode : number;
    productCode : number;
    customerCode : number;
    workerCode : number;
    productDetails : string;
    invoiceDate : string;
    invoiceType : number;
    customerName : string;
    price : any;
    // todo : invoiceDate:date / price:실수  어떻게하는지 질문
}