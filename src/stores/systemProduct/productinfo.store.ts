import { create } from "zustand";

export interface ProductInfoStore {
  productCode: Number;
  productName: string;
  procurementCategory: number;
  productPrice: number;

  setProductCode: (productCode: number) => void;
  setProductName: (productName: string) => void;
  setProcurementCategory: (procurementCategory: number) => void;
  setProductPrice: (productPrice: number) => void;

  resetProductInfo: () => void;

}

const useStore = create<ProductInfoStore>((set) => ({
  productCode: 0,
  productName: "",
  procurementCategory: 0,
  productPrice: 0,

  setProductCode: (productCode) => set((state) => ({ ...state, productCode })),
  setProductName: (productName) => set((state) => ({ ...state, productName })),
  setProcurementCategory: (procurementCategory) => set((state) => ({ ...state, procurementCategory })),
  setProductPrice: (productPrice) => set((state) => ({ ...state, productPrice })),

  resetProductInfo: () => set((state) => ({ ...state, productCode: 0, productName: "", procurementCategory: 0, productPrice:0 }))
}));

export default useStore;