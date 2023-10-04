import ResponseDto from "../response.dto";
import DepartmentListResponseDto from "./department-list.response.dto";

export default interface GetDepartmentInfoResponseDto extends ResponseDto {
  departmentList: DepartmentListResponseDto[];
}