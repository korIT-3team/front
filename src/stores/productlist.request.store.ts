import { create } from "zustand";

export interface ProductListRequestStore {
  companyCode: number | null;
  productCode: number | null;
  productName: string;
  procurementCategory: number;
  productPrice: number;

  setCompanyCode: (companyCode: number | null) => void;
  setProductCode: (productCode: number | null) => void;
  setProductName: (productName: string) => void;
  setProcurementCategory: (procurementCategory: number) => void;
  setProductPrice: (productPrice: number) => void;
}

const useStore = create<ProductListRequestStore>((set) => ({
  companyCode: null,
  productCode: null,
  productName: '',
  procurementCategory: 0,
  productPrice: 0,
  setCompanyCode: (companyCode) => set((state) => ({ ...state, companyCode })),
  setProductCode: (productCode) => set((state) => ({ ...state, productCode })),
  setProductName: (productName) => set((state) => ({ ...state, productName })),
  setProcurementCategory: (procurementCategory) => set((state) => ({ ...state, procurementCategory })),
  setProductPrice: (productPrice) => set((state) => ({ ...state, productPrice }))
}));

export default useStore;