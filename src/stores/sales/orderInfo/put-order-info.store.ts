import { create } from "zustand";

// 아래줄 리스트 아이템 : 주문상세번호PK / 주문번호FK / 품번 / 주문수량 / 단가 / 합계액 / 상세
export interface PutOrderInfoStore {
  putOrderInfoOrderCode: number;
  putOrderInfoOrderDate: string;
  putOrderInfoProjectCode : number | null;
  putOrderInfoCustomerCode: number | null;
  putOrderInfoEmployeeCode: number | null;

  setPutOrderInfoOrderCode: (putOrderInfoOrderCode: number) => void;
  setPutOrderInfoOrderDate: (putOrderInfoOrderDate: string) => void;
  setPutOrderInfoProjectCode: (putOrderInfoProjectCode: number | null) => void;
  setPutOrderInfoCustomerCode: (putOrderInfoCustomerCode: number | null) => void;
  setPutOrderInfoEmployeeCode: (putOrderInfoEmployeeCode: number | null) => void;

  resetOrderInfo: () => void;
}

const useStore = create<PutOrderInfoStore>((set) => ({
  putOrderInfoOrderCode: 0,
  putOrderInfoOrderDate: '',
  putOrderInfoProjectCode: null,
  putOrderInfoCustomerCode: null,
  putOrderInfoEmployeeCode: null,

  setPutOrderInfoOrderCode: (putOrderInfoOrderCode) => set((state) => ({ ...state, putOrderInfoOrderCode })),
  setPutOrderInfoOrderDate: (putOrderInfoOrderDate) => set((state) => ({ ...state, putOrderInfoOrderDate })),
  setPutOrderInfoProjectCode: (putOrderInfoProjectCode) => set((state) => ({ ...state, putOrderInfoProjectCode })),
  setPutOrderInfoCustomerCode: (putOrderInfoCustomerCode) => set((state) => ({ ...state, putOrderInfoCustomerCode })),
  setPutOrderInfoEmployeeCode: (putOrderInfoEmployeeCode) => set((state) => ({ ...state, putOrderInfoEmployeeCode })),

  resetOrderInfo: () => set((state) => ({ ...state, putOrderInfoOrderCode: 0, putOrderInfoOrderDate: '', putOrderInfoProjectCode: null, putOrderInfoCustomerCode: null, putOrderInfoEmployeeCode: null })),
}));
export default useStore;