import { create } from "zustand";

export interface CustomerListRequestStore {
  customerCode: number | null;
  customerName: string

  setCustomerCode: (customerCode: number | null) => void;
  setCustomerName: (customerName: string) => void;

  resetCustomerRequest: () => void;
}

const useStore = create<CustomerListRequestStore>((set) => ({
  customerCode: null,
  customerName: "",
  setCustomerCode: (customerCode) => set((state) => ({ ...state, customerCode })),
  setCustomerName: (customerName) => set((state) => ({ ...state, customerName })),

  resetCustomerRequest: () => set((state) => ({ ...state, customerCode: null, customerName: "" }))
}));

export default useStore;