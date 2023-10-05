import ResponseDto from "../response.dto";
import InvoiceListResponseDto from "./invoice-list.response.dto";

export default interface GetInvoiceListResponseDto extends ResponseDto {
     invoiceList: InvoiceListResponseDto[];
}