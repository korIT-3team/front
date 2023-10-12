import ResponseDto from "../response.dto";
import InOutComeResponseDto from "./inoutcome.response.dto";

export default interface GetInOutComeListResponseDto extends ResponseDto {
     inOutComeList: InOutComeResponseDto[];
}