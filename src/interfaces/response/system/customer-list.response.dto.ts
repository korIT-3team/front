export default interface CustomerListResponseDto {
  no: number;
  companyCode: number;
  customerCode: number;
  customerName: string;
  businessNumber: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;
}