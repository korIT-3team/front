export default interface PutDepartmentInfoRequestDto {
  departmentCode: number;
  companyCode: number;
  departmentName: string;
  departmentStartDate: string;
  departmentEndDate: string | null;
  departmentTelNumber: string;
  departmentFax: string;
}