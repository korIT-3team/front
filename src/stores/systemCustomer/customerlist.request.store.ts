import { create } from "zustand";

export interface CustomerListRequestStore {
  customerName: string

  setCustomerName: (customerName: string) => void;

  resetCustomerRequest: () => void;
}

const useStore = create<CustomerListRequestStore>((set) => ({
  customerName: "",
  setCustomerName: (customerName) => set((state) => ({ ...state, customerName })),

  resetCustomerRequest: () => set((state) => ({ ...state, customerCode: 0, customerName: "" }))
}));

export default useStore;