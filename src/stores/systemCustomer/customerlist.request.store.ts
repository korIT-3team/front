import { create } from "zustand";

export interface CustomerListRequestStore {
  customerCode: number;
  customerName: string

  setCustomerCode: (customerCode: number) => void;
  setCustomerName: (customerName: string) => void;

  resetCustomerRequest: () => void;
}

const useStore = create<CustomerListRequestStore>((set) => ({
  customerCode: 0,
  customerName: "",
  setCustomerCode: (customerCode) => set((state) => ({ ...state, customerCode })),
  setCustomerName: (customerName) => set((state) => ({ ...state, customerName })),

  resetCustomerRequest: () => set((state) => ({ ...state, customerCode: 0, customerName: "" }))
}));

export default useStore;