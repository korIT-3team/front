import ResponseDto from "../../response.dto";
import SystemEmployeeListResponseDto from "./system-employee-list.response.dto";

export default interface GetSystemEmployeeListResponseDto extends ResponseDto {
    systemEmployeeList: SystemEmployeeListResponseDto[];
}