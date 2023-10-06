import { create } from "zustand";

export interface ProductInfoStore {
  companyCode: number | null;
  productCode: number | null;
  productName: string;
  procurementCategory: number | null;
  productPrice: number | null;

  setCompanyCode: (companyCode: number | null) => void;
  setProductCode: (productCode: number | null) => void;
  setProductName: (productName: string) => void;
  setProcurementCategory: (procurementCategory: number | null) => void;
  setProductPrice: (productPrice: number | null) => void;

}

const useStore = create<ProductInfoStore>((set) => ({
  companyCode: null,
  productCode: null,
  productName: '',
  procurementCategory: null,
  productPrice: null,

  setCompanyCode: (companyCode) => set((state) => ({ ...state, companyCode })),
  setProductCode: (productCode) => set((state) => ({ ...state, productCode })),
  setProductName: (productName) => set((state) => ({ ...state, productName })),
  setProcurementCategory: (procurementCategory) => set((state) => ({ ...state, procurementCategory })),
  setProductPrice: (productPrice) => set((state) => ({ ...state, productPrice }))
}));

export default useStore;