import { create } from "zustand";

// 아래줄 리스트 아이템 : 주문상세번호PK / 주문번호FK / 품번 / 주문수량 / 단가 / 합계액 / 상세
export interface OrderDetailList {
  no: number;
  orderCode: number;
  orderDetailCode : number;
  productCode : number;
  productName : string;
  orderQuantity : number;
  price : number;
  totalPrice : number;
  content : string;
}

interface OrderDetailListStore {
  orderDetailList: OrderDetailList[] | null;
  setOrderDetailList: (orderDetailList: OrderDetailList[] | null ) => void;
  resetOrderDetailList: () => void;
}

const useStore = create<OrderDetailListStore>((set) => ({
  orderDetailList: null,
  setOrderDetailList: (orderDetailList) => set((state) => ({ ...state, orderDetailList })),
  resetOrderDetailList: () => set((state) => ({ ...state, orderDetailList: null })),
}));

export default useStore;