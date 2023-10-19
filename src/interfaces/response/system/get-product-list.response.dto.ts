import ResponseDto from "../response.dto";
import ProductListResponseDto from "./product-list.response.dto";

export default interface GetProductListResponseDto extends ResponseDto {
  productList: ProductListResponseDto[];
}