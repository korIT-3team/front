import ResponseDto from "../response.dto";
import SearchCodeResponseDto from "./search-code.response.dto";

export default interface GetSearchCodeListResponseDto extends ResponseDto {
     searchCodeList: SearchCodeResponseDto[];
}