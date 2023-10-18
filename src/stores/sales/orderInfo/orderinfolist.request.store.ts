import { create } from "zustand";

export interface OrderInfoListRequestStore {
  orderCode: number;

  setOrderCode: (orderCode: number) => void;

  resetOrderCodeRequest: () => void;
}

const useStore = create<OrderInfoListRequestStore> ((set) => ({

  orderCode: 0,

  setOrderCode: (orderCode) => set((state) => ({ ...state, orderCode })),

  resetOrderCodeRequest: () => set((state) => ({ ...state, orderCode: 0 })),

}));

export default useStore;