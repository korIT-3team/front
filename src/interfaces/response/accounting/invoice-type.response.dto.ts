import ResponseDto from "../response.dto";

export default interface InvoiceTypeResponseDto extends ResponseDto{
     userDefineDetailCode : number;
     userDefineDetailName : string;
}