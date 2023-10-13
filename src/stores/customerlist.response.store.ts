import { create } from "zustand";

export interface CustomerInfo {
  no: number;
  companyCode: number;
  customerCode: number;
  customerName: string;
  customerBusinessNumber: string;
  customerPostCode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;
}

interface CustomerInfoStore {
  customerList: CustomerInfo[] | null;
  setCustomerList: (customerList: CustomerInfo[] | null) => void;
  
  resetCustomerList: () => void;
}

const useStore = create<CustomerInfoStore>((set) => ({
  customerList: [],
  setCustomerList: (customerList) => set((state) => ({ ...state, customerList })),
  
  resetCustomerList: () => set((state) => ({ ...state, customerList: [] })),

}));

export default useStore;