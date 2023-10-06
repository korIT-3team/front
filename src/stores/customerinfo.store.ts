import { create } from "zustand";

export interface CustomerInfoStore {
  customerName: string;
  businessNumber: string;
  postCode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;

  setCustomerName: (customerName: string) => void;
  setBusinessNumber: (businessNumber: string) => void;
  setPostCode: (postCode: string) => void;
  setCustomerAddress: (customerAddress: string) => void;
  setCustomerAddressDetail: (customerAddressDetail: string | null) => void;
  setCustomerTelNumber: (customerTelNumber: string) => void;

  resetCustomer: () => void;
}

const useStore = create<CustomerInfoStore>((set) => ({
  customerName: '',
  businessNumber: '',
  postCode: '',
  customerAddress: '',
  customerAddressDetail: '',
  customerTelNumber: '',

  setCustomerName: (customerName) => set((state) => ({ ...state, customerName})),
  setBusinessNumber: (businessNumber) => set((state) => ({ ...state, businessNumber })),
  setPostCode: (postCode) => set((state) => ({ ...state, postCode })),
  setCustomerAddress: (customerAddress) => set((state) => ({ ...state, customerAddress })),
  setCustomerAddressDetail: (customerAddressDetail) => set((state) => ({ ...state, customerAddressDetail })),
  setCustomerTelNumber: (customerTelNumber) => set((state) => ({ ...state, customerTelNumber })),

  resetCustomer: () => set((state) => ({ ...state, customerName: '', businessNumber: '', postCode: '', customerAddress: '', customerAddressDetail: '', customerTelNumber: '' }))
}));

export default useStore;