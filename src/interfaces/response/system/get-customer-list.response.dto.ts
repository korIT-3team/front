import ResponseDto from "../response.dto";
import CustomerListResponseDto from "./customer-list.response.dto";

export default interface GetCustomerListResponseDto extends ResponseDto {
  customerList: CustomerListResponseDto[];
}