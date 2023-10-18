import ResponseDto from "../response.dto";
import OrderInfoListResponseDto from "./orderinfo-list.response.dto";

export default interface GetOrderInfoListResponseDto extends ResponseDto {
  orderInfoList: OrderInfoListResponseDto[];
}