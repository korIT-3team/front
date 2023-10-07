export default interface PutDepartmentInfoRequestDto {
  departmentCodeInfo: number;
  departmentCompanyCode: number;
  departmentNameInfo: string;
  departmentStartDate: string;
  departmentEndDate: string | null;
  departmentTelNumber: string;
  departmentFax: string;
}