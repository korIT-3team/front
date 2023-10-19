export default interface PutSystemEmployeeInfoRequestDto {
  sysEmployeeCode: number;
  employeeName: string;
  genderCode: number;
  empDepartmentCode: number;
  joinDate: string;
  resignationDate: string | null;
  password: string;
  registrationNumber: string;
  employmentTypeCode: number;
}