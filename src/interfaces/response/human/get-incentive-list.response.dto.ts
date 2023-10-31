import ResponseDto from "../response.dto";
import IncentiveListResponseDto from "./incentive-list.response.dto";

export default interface GetIncentiveListResponseDto extends ResponseDto {
  incentiveList : IncentiveListResponseDto[];
}