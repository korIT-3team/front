export default interface PutCustomerInfoRequestDto {
  customerName: string;
  businessNumber: string;
  postcode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;
}