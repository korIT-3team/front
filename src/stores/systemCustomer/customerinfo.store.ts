import { create } from "zustand";

interface CustomerInfoStore {
  customerCodeInfo: number;
  customerCompanyCode: number;
  customerNameInfo: string,
  customerBusinessNumber: string,
  customerPostCode: string,
  customerAddress: string,
  customerAddressDetail: string | null;
  customerTelNumber: string;

  setCustomerCodeInfo: (customerCodeInfo: number) => void;
  setCustomerCompanyCode: (customerCompanyCode: number) => void;
  setCustomerNameInfo: (customerNameInfo: string) => void;
  setCustomerBusinessNumber: (customerBusinessNumber: string) => void;
  setCustomerPostCode: (customerPostCode: string) => void;
  setCustomerAddress: (customerAddress: string) => void;
  setCustomerAddressDetail: (customerAddressDetail: string | null) => void;
  setCustomerTelNumber: (customerTelNumber: string) => void;

  resetCustomerInfo: () => void;
}

const useStore = create<CustomerInfoStore>((set) => ({
  customerCodeInfo: 0,
  customerCompanyCode: 1,
  customerNameInfo: "",
  customerBusinessNumber: "",
  customerPostCode: "",
  customerAddress: "",
  customerAddressDetail: "",
  customerTelNumber: "",

  setCustomerCodeInfo:(customerCodeInfo) => set((state) => ({ ...state, customerCodeInfo })),
  setCustomerCompanyCode:(customerCompanyCode) => set((state) => ({ ...state, customerCompanyCode })),
  setCustomerNameInfo: (customerNameInfo) => set((state) => ({ ...state, customerNameInfo})),
  setCustomerBusinessNumber: (customerBusinessNumber) => set((state) => ({ ...state, customerBusinessNumber })),
  setCustomerPostCode: (customerPostCode) => set((state) => ({ ...state, customerPostCode })),
  setCustomerAddress: (customerAddress) => set((state) => ({ ...state, customerAddress })),
  setCustomerAddressDetail: (customerAddressDetail) => set((state) => ({ ...state, customerAddressDetail })),
  setCustomerTelNumber: (customerTelNumber) => set((state) => ({ ...state, customerTelNumber })),

  resetCustomerInfo: () => set((state) => ({ ...state, customerCodeInfo:0, customerCompanyCode: 1, customerNameInfo:"", customerBusinessNumber:"", customerPostCode:"", customerAddress:"", customerAddressDetail:"", customerTelNumber:"" }))

}));

export default useStore;