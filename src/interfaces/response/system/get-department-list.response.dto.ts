import ResponseDto from "../response.dto";
import DepartmentListResponseDto from "./department-list.response.dto";

export default interface GetDepartmentListResponseDto extends ResponseDto {
    departmentList: DepartmentListResponseDto[];
}