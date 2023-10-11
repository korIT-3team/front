import ResponseDto from "../response.dto";
import SalesPlanListResponseDto from "./salesplan-list.response.dto";

export default interface GetSalesPlanListResponseDto extends ResponseDto {
  salesPlanList: SalesPlanListResponseDto[];
}