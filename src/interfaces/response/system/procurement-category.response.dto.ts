import ResponseDto from "../response.dto";

export default interface ProcurementCategoryResponseDto extends ResponseDto {
  userDefineDetailCode : number;
  userDefineDetailName : string;
}