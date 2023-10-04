import ResponseDto from "../response.dto";
import CustomerListResponseDto from "./customer-list.response.dto";

export default interface GetCustomerInfoRepsonseDto extends ResponseDto {
  customerList: CustomerListResponseDto[];
}