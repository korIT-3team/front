import ResponseDto from "../response.dto";
import EmployeeListResponseDto from "./employee-list.response.dto";

export default interface GetEmployeeListResponseDto extends ResponseDto {
    humanList: EmployeeListResponseDto[];
}