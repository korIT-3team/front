export default interface PutCustomerInfoRequestDto {
  customerCodeInfo: number;
  customerCompanyCode: number;
  customerNameInfo: string;
  customerBusinessNumber: string;
  customerPostCode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;
}