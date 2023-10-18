import ResponseDto from "../response.dto";

export default interface InOutComeResponseDto extends ResponseDto{
     fundingCode : number;
     fundDate : string;
     salesPlanCode : number;
     customerName : string;
     price : number;
     priceDetail : string;
     taxType : number;
     taxTypeName : string;
     fundBalance : number;
}