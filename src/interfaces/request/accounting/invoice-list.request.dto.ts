export default interface InvoiceListRequestDto {
    workerDepartmentCode : number | null;
    workerCode : number | null;
    invoiceDateStart : string;
    invoiceDateEnd : string;
    invoiceTypeName : string | null;
}