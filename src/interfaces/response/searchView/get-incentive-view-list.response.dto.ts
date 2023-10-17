import ResponseDto from "../response.dto";
import IncentiveViewResponseDto from "./incentive-view.response.dto";

export default interface GetIncentiveViewListResponseDto extends ResponseDto {
     incentiveViewList: IncentiveViewResponseDto[];
}