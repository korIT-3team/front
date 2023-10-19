import ResponseDto from "../response.dto";
import InvoiceTypeResponseDto from "./invoice-type.response.dto";

export default interface GetInvoiceTypeListResponseDto extends ResponseDto {
     invoiceTypeList: InvoiceTypeResponseDto[];
}