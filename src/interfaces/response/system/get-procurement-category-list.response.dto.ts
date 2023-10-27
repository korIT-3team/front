import ResponseDto from "../response.dto";
import ProcurementCategoryResponseDto from "./procurement-category.response.dto";

export default interface GetProcurementCategoryListResponseDto extends ResponseDto {
  procurementCategoryList: ProcurementCategoryResponseDto[];
}