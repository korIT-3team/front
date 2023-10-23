import ResponseDto from "../response.dto";
import HumanListResponseDto from './human-list.response.dto';

export default interface GetHumanListResponseDto extends ResponseDto {
  humanList : HumanListResponseDto[];
}