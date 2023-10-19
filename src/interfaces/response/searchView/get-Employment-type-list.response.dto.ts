import ResponseDto from "../response.dto";
import EmploymentTypeResponseDto from "./employment-type.response.dto";

export default interface GetEmploymentTypeListResponseDto extends ResponseDto {
     employmentTypeList: EmploymentTypeResponseDto[];
}