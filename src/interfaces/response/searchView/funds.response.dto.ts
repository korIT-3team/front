import ResponseDto from "../response.dto";

export default interface FundsResponseDto extends ResponseDto{
     fundingCode : number;
     fundDate : string;
     salesPlanCode : number;
     customerName : string | null;
     price : number;
     priceDetail : string;
     taxType : number;
     taxTypeName : string;
     fundBalance : number;
}