import ResponseDto from "../response.dto";
import IncentiveTypeResponseDto from "./incentive-type.response.dto";

export default interface GetIncentiveTypeListResponseDto extends ResponseDto {
     incentiveTypeList: IncentiveTypeResponseDto[];
}