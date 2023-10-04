import ResponseDto from "../response.dto";
import ProductListResponseDto from "./product-list.response.dto";

export default interface GetProductInfoResponseDto extends ResponseDto {
  productList: ProductListResponseDto[];
}