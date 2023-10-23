import ResponseDto from "../response.dto";
import HumanEmploymentTypeResponseDto from "./employment-type.response.dto";

export default interface GetEmploymentTypeListResponseDto extends ResponseDto {
  humanEmploymentTypeList: HumanEmploymentTypeResponseDto[];
}