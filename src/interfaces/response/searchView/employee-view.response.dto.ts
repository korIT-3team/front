import ResponseDto from "../response.dto";

export default interface EmployeeViewResponseDto extends ResponseDto{
     no : number;
     employeeCode : number;
     employeeName : string;
     genderName : string;
     departmentName : string;
     position : string;
     email : string;
     employmentType : string;
}