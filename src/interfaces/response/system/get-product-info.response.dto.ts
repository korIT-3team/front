import ResponseDto from "../response.dto";

export default interface GetProductInfoResponseDto extends ResponseDto {
  companyCode: number;
  productCode: number;
  productName: string;
  procurementCategory: number;
  productPrice: number;
}