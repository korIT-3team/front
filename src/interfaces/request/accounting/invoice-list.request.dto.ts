export default interface InvoiceListRequestDto {
    departmentCode : number | null;
    employeeCode : number | null;
    invoiceDateStart : string;
    invoiceDateEnd : string;
    invoiceTypeName : string | null;
}