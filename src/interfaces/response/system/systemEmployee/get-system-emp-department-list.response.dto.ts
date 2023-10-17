import ResponseDto from "../../response.dto";
import SystemEmpDepartmentListResponseDto from "./system-emp-department-list.response.dto";

export default interface GetSystemEmpDepartmentListResponseDto extends ResponseDto {
    systemEmpDepartmentList: SystemEmpDepartmentListResponseDto[];
}