import ResponseDto from "../response.dto";
import FundsListResponseDto from "./funds.response.dto";

export default interface GetFundsListResponseDto extends ResponseDto {
     fundsList: FundsListResponseDto[];
}