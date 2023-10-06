import { create } from "zustand";

export interface CustomerList {
  companyCode: number | null;
  customerCode: number | null;
  customerName: string;
  businessNumber: string;
  postCode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;
}

interface CustomerListStore {
  customerList: CustomerList[] | null;
  setCustomerList: (customerList: CustomerList[] | null) => void;
  resetCustomerList: () => void;
}

const useStore = create<CustomerListStore>((set) => ({
  customerList: null,
  setCustomerList: (customerList) => set((state) => ({ ...state, customerList })),
  resetCustomerList: () => set((state) => ({ ...state, customerList: null }))
}));

export default useStore;