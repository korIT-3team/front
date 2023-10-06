import { create } from "zustand";

export interface CustomerListRequestStore {
  companyCode: number | null;
  customerCode: number | null;
  customerName: string;
  businessNumber: string;
  postCode: string;
  customerAddress: string;
  customerAddressDetail: string | null;
  customerTelNumber: string;

  setCompanyCode: (departmentCode: number | null) => void;
  setCustomerCode: (customerCode: number | null) => void;
  setCustomerName: (customerName: string) => void;
  setBusinessNumber: (businessNumber: string) => void;
  setPostCode: (postCode: string) => void;
  setCustomerAddress: (customerAddress: string) => void;
  setCustomerAddressDetail: (customerAddressDetail: string | null) => void;
  setCustomerTelNumber: (customerTelNumber: string) => void;

  resetCustomerRequest: () => void;

}

const useStore = create<CustomerListRequestStore>((set) => ({
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
  setCustomerName: (customerName) => set((state) => ({ ...state, customerName })),
  setBusinessNumber: (businessNumber) => set((state) => ({ ...state, businessNumber })),
  setPostCode: (postCode) => set((state) => ({ ...state, postCode })),
  setCustomerAddress: (customerAddress) => set((state) => ({ ...state, customerAddress })),
  setCustomerAddressDetail: (customerAddressDetail) => set((state) => ({ ...state, customerAddressDetail })),
  setCustomerTelNumber: (customerTelNumber) => set((state) => ({ ...state, customerTelNumber })),

  resetCustomerRequest: () => set((state) => ({ ...state, companyCode:null, customerCode:null, customerName:'', businessNumber:'', postCode:'', customerAddress:'', customerAddressDetail:'', customerTelNumber:'' }))
}));

export default useStore;