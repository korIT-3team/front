export default interface PutCustomerInfoRequestDto {
  customerCodeInfo: number;
  customerNameInfo: string;
  customerBusinessNumber: string;
  customerPostCode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;
}