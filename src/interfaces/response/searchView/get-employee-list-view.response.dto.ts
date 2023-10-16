import ResponseDto from "../response.dto";
import EmployeeViewResponseDto from "./employee-view.response.dto";

export default interface GetEmployeeListViewResponseDto extends ResponseDto {
     employeeViewList: EmployeeViewResponseDto[];
}