export default interface DepartmentListResponseDto {
  no: number;
  companyCode: number;
  departmentCode: number;
  departmentName: string;
  departmentStartDate: string;
  departmentEndDate: string| null;
  departmetTelnumber: string;
  departmentFax: string;
}