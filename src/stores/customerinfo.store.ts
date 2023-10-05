import { create } from "zustand";

export interface CustomerInfoStore {
  companyCode: number | null;
  customerCode: number | null;
  customerName: string;
  businessNumber: string;
  postCode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;

  setCompanyCode: (companyCode: number | null) => void;
  setCustomerCode: (customerCode: number | null) => void;
  setCustomerName: (customerName: string) => void;
  setBusinessNumber: (businessNumber: string) => void;
  setPostCode: (postCode: string) => void;
  setCustomerAddress: (customerAddress: string) => void;
  setCustomerAddressDetail: (customerAddressDetail: string | null) => void;
  setCustomerTelNumber: (customerTelNumber: string) => void;
}

const useStore = create<CustomerInfoStore>((set) => ({
  companyCode: null,
  customerCode: null,
  customerName: '',
  businessNumber: '',
  postCode: '',
  customerAddress: '',
  customerAddressDetail: '',
  customerTelNumber: '',

  setCompanyCode: (companyCode) => set((state) => ({ ...state, companyCode })),
  setCustomerCode: (customerCode) => set((state) => ({ ...state, customerCode })),
  setCustomerName: (customerName) => set((state) => ({ ...state, customerName})),
  setBusinessNumber: (businessNumber) => set((state) => ({ ...state, businessNumber })),
  setPostCode: (postCode) => set((state) => ({ ...state, postCode })),
  setCustomerAddress: (customerAddress) => set((state) => ({ ...state, customerAddress })),
  setCustomerAddressDetail: (customerAddressDetail) => set((state) => ({ ...state, customerAddressDetail })),
  setCustomerTelNumber: (customerTelNumber) => set((state) => ({ ...state, customerTelNumber })),
}));

export default useStore;