import ResponseDto from "../response.dto";
import ProductUserDefineListResponseDto from "./product-user-define-detail-list.response.dto";

export default interface GetProductUserDefineListResponseDto extends ResponseDto {
  productUserDefineList: ProductUserDefineListResponseDto[];
}