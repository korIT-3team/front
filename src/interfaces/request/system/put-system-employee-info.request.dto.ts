export default interface PutSystemEmployeeInfoRequestDto {
  sysEmployeeCode: number;
  employeeName: string;
  genderCode: number;
  empDepartmentCode: number;
  joinDate: string;
  resignationDate: string | null;
  registrationNumber: string;
  employmentTypeCode: number;
}