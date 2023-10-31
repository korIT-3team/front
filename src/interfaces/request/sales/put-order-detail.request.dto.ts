export default interface PutOrderDetailRequestDto {
     orderCode: number;
     salesPlanCode: number;
     orderDate: string;
     customerCode: number;
     managerCode: number;
     orderInfoProductCode: number;
     orderInfoProductName: string;
     orderInfoUnit: string;
     orderInfoOrderQuantity: number;
     orderInfoPrice: number;
     orderInfoTotalPrice: number;
   }