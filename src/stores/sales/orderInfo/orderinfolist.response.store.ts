import { create } from "zustand";

export interface OrderInfoInfo {
  no: number;
  orderCode: number;
  orderDate: string;
  customerName: string;
  manager: string;
  productCode: number;
  productName: string;
  unit: string;
  orderQuantity: number;
  price: number;
  totalprice: number;
}

interface OrderInfoInfoStore {
  orderInfoList: OrderInfoInfo[] | null;
  setOrderInfoList: (orderInfoList: OrderInfoInfo[] | null ) => void;

  resetOrderInfoList: () => void;
}

const useStore = create<OrderInfoInfoStore>((set) => ({
  orderInfoList: [],
  setOrderInfoList: (orderInfoList) => set((state) => ({ ...state, orderInfoList })),

  resetOrderInfoList: () => set((state) => ({ ...state, orderInfoList: [] })),
}));

export default useStore;