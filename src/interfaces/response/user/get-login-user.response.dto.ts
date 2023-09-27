import ResponseDto from '../response.dto';

export default interface GetLoginUserResponseDto extends ResponseDto {
  employeeCode: number;
  employeeName: string;
  departmentCode: number;
  departmentName: string;
}