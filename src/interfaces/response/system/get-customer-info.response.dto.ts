import ResponseDto from '../response.dto';

export default interface GetCustomerInfoRepsonseDto extends ResponseDto {
  customerName: string;
  businessNumber: string;
  postCode: string;
  customerAddress: string;
  customerAddressDetail: string;
  customerTelNumber: string;
}