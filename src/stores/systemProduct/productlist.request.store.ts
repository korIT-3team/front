import { create } from "zustand";

export interface ProductListRequestStore {
  productName: string;
  procurementCategory: number;

  setProductName: (productName: string) => void;
  setProcurementCategory: (procurementCategory: number) => void;
  
  resetProductRequest: () => void;
}

const useStore = create<ProductListRequestStore>((set) => ({
  productName: "",
  procurementCategory: 0,
  
  setProductName: (productName) => set((state) => ({ ...state, productName })),
  setProcurementCategory: (procurementCategory) => set((state) => ({ ...state, procurementCategory })),

  resetProductRequest: () => set((state) => ({ ...state, productName:"", procurementCategory:0 }))
}));

export default useStore;