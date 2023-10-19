export default interface PutOrderInfoInfoRequestDto {
  orderCodeInfo: number;
  orderInfoSalesPlanCode: number;
  orderInfoDate: string;
  orderInfoCustomerCode: number;
  orderInfoManager: string;
  orderInfoProductCode: number;
  orderInfoProductName: string;
  orderInfoUnit: string;
  orderInfoOrderQuantity: number;
  orderInfoPrice: number;
  orderInfoTotalPrice: number;
}