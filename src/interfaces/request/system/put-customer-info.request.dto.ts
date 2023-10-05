export default interface PutCustomerInfoRequestDto {
  companyCode: number;
  customerCode: number;
  customerName: string;
  businessNumber: string;
  postcode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;
}