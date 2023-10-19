import { create } from "zustand";

export interface ProductListRequestStore {
  productNameInfo: string;
  procurementCategoryInfo: number;

  setProductNameInfo: (productName: string) => void;
  setProcurementCategoryInfo: (procurementCategory: number) => void;
  
  resetProductRequest: () => void;
}

const useStore = create<ProductListRequestStore>((set) => ({
  productNameInfo: "",
  procurementCategoryInfo: 0,
  
  setProductNameInfo: (productNameInfo) => set((state) => ({ ...state, productNameInfo })),
  setProcurementCategoryInfo: (procurementCategoryInfo) => set((state) => ({ ...state, procurementCategoryInfo })),

  resetProductRequest: () => set((state) => ({ ...state, productName:"", procurementCategory:0 }))
}));

export default useStore;