import { create } from "zustand";

interface CustomerInfoStore {
  customerCodeInfo: number | null;
  customerNameInfo: string,
  customerBusinessNumber: string,
  customerPostCode: string,
  customerAddress: string,
  customerAddressDetail: string | null;
  customerTelNumber: string;

  setCustomerCodeInfo: (customerCodeInfo: number | null) => void;
  setCustomerNameInfo: (customerName: string) => void;
  setCustomerBusinessNumber: (customerBusinessNumber: string) => void;
  setCustomerPostCode: (customerPostCode: string) => void;
  setCustomerAddress: (customerAddress: string) => void;
  setCustomerAddressDetail: (customerAddressDetail: string | null) => void;
  setCustomerTelNumber: (customerTelNumber: string) => void;
}

const useStore = create<CustomerInfoStore>((set) => ({
  customerCodeInfo: null,
  customerNameInfo: "",
  customerBusinessNumber: "",
  customerPostCode: "",
  customerAddress: "",
  customerAddressDetail: "",
  customerTelNumber: "",

  setCustomerCodeInfo:(customerCodeInfo) => set((state) => ({ ...state, customerCodeInfo })),
  setCustomerNameInfo: (customerNameInfo) => set((state) => ({ ...state, customerNameInfo})),
  setCustomerBusinessNumber: (customerBusinessNumber) => set((state) => ({ ...state, customerBusinessNumber })),
  setCustomerPostCode: (customerPostCode) => set((state) => ({ ...state, customerPostCode })),
  setCustomerAddress: (customerAddress) => set((state) => ({ ...state, customerAddress })),
  setCustomerAddressDetail: (customerAddressDetail) => set((state) => ({ ...state, customerAddressDetail })),
  setCustomerTelNumber: (customerTelNumber) => set((state) => ({ ...state, customerTelNumber })),

}));

export default useStore;