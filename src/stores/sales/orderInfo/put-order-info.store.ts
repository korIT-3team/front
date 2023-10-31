import { create } from "zustand";

// 아래줄 리스트 아이템 : 주문상세번호PK / 주문번호FK / 품번 / 주문수량 / 단가 / 합계액 / 상세
export interface PutOrderInfoStore {
  putOrderInfoOrderCode: number;
  putOrderInfoOrderDate: string;
  putOrderInfoProjectCode : number;
  putOrderInfoCustomerCode: number;
  putOrderInfoEmployeeCode: number;

  setPutOrderInfoOrderCode: (putOrderInfoOrderCode: number) => void;
  setPutOrderInfoOrderDate: (putOrderInfoOrderDate: string) => void;
  setPutOrderInfoProjectCode: (putOrderInfoProjectCode: number) => void;
  setPutOrderInfoCustomerCode: (putOrderInfoCustomerCode: number) => void;
  setPutOrderInfoEmployeeCode: (putOrderInfoEmployeeCode: number) => void;

  resetOrderInfo: () => void;
}

const useStore = create<PutOrderInfoStore>((set) => ({
  putOrderInfoOrderCode: 0,
  putOrderInfoOrderDate: '',
  putOrderInfoProjectCode: 0,
  putOrderInfoCustomerCode: 0,
  putOrderInfoEmployeeCode: 0,

  setPutOrderInfoOrderCode: (putOrderInfoOrderCode) => set((state) => ({ ...state, putOrderInfoOrderCode })),
  setPutOrderInfoOrderDate: (putOrderInfoOrderDate) => set((state) => ({ ...state, putOrderInfoOrderDate })),
  setPutOrderInfoProjectCode: (putOrderInfoProjectCode) => set((state) => ({ ...state, putOrderInfoProjectCode })),
  setPutOrderInfoCustomerCode: (putOrderInfoCustomerCode) => set((state) => ({ ...state, putOrderInfoCustomerCode })),
  setPutOrderInfoEmployeeCode: (putOrderInfoEmployeeCode) => set((state) => ({ ...state, putOrderInfoEmployeeCode })),

  resetOrderInfo: () => set((state) => ({ ...state, putOrderInfoOrderCode: 0, putOrderInfoOrderDate: '', putOrderInfoProjectCode: 0, putOrderInfoCustomerCode: 0, putOrderInfoEmployeeCode: 0 })),
}));
export default useStore;