import { create } from "zustand";

export interface OrderInfoListRequestStore {
  orderInfoDateStart : string;
  orderInfoDateEnd : string;
  orderInfoCustomerCode : number | null;
  orderInfoSalesPlanCode : number | null;

  setOrderInfoDateStart: (orderInfoDateStart: string) => void;
  setOrderInfoDateEnd: (orderInfoDateEnd: string) => void;
  setOrderInfoCustomerCode: (orderInfoCustomerCode: number | null) => void;
  setOrderInfoSalesPlanCode: (orderInfoSalesPlanCode: number | null) => void;

  resetOrderInfoListRequest: () => void;
}

const useStore = create<OrderInfoListRequestStore> ((set) => ({
  orderInfoDateStart : '',
  orderInfoDateEnd : '',
  orderInfoCustomerCode : null,
  orderInfoSalesPlanCode : null,

  setOrderInfoDateStart: (orderInfoDateStart) => set((state) => ({ ...state, orderInfoDateStart })),
  setOrderInfoDateEnd: (orderInfoDateEnd) => set((state) => ({ ...state, orderInfoDateEnd })),
  setOrderInfoCustomerCode: (orderInfoCustomerCode) => set((state) => ({ ...state, orderInfoCustomerCode })),
  setOrderInfoSalesPlanCode: (orderInfoSalesPlanCode) => set((state) => ({ ...state, orderInfoSalesPlanCode })),

  resetOrderInfoListRequest: () => set((state) => ({ ...state, orderInfoDateStart: '',orderInfoDateEnd: '',orderInfoCustomerCode: null,orderInfoSalesPlanCode: null })),

}));

export default useStore;