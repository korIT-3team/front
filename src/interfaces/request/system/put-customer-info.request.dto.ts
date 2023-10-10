export default interface PutCustomerInfoRequestDto {
  customerNameInfo: string;
  customerBusinessNumber: string;
  customerPostCode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;
}