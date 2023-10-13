export default interface PutCustomerInfoRequestDto {
  customerName: string;
  customerBusinessNumber: string;
  customerPostCode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;
}