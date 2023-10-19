import ResponseDto from "../response.dto";

export default interface SearchCodeResponseDto extends ResponseDto{
     no : number;
     detailCode : number;
     name : string;
}