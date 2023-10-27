import { create } from "zustand";

// 윗줄 리스트 아이템 : 주문번호 / 주문일자 / 거래처 / 사원번호 / 판매계획코드
export interface OrderList {
  no: number;
  orderCode: number;
  orderDate: string;
  projectName : string;
  customerName: string;
  employeeName: string;
}

interface OrderListStore {
  orderList: OrderList[] | null;
  setOrderList: (orderList: OrderList[] | null ) => void;
  resetOrderList: () => void;
}

const useStore = create<OrderListStore>((set) => ({
  orderList: null,
  setOrderList: (orderList) => set((state) => ({ ...state, orderList })),
  resetOrderList: () => set((state) => ({ ...state, orderList: null })),
}));

export default useStore;