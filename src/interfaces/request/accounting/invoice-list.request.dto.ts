export default interface InvoiceListRequestDto {
    departmentCode : number;
    employeeCode : number;
    invoiceDate : string;
    invoiceType : number;
    // todo : 얘도 타입
}