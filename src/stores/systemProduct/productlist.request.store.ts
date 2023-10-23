import { create } from "zustand";

export interface ProductListRequestStore {
  productCode: number;
  productName: string;

  setProductCode: (productCode: number) => void;
  setProductName: (productName: string) => void;
  
  resetProductRequest: () => void;
}

const useStore = create<ProductListRequestStore>((set) => ({
  
  productCode: 0,
  productName: "",
  
  setProductCode: (productCode) => set((state) => ({ ...state, productCode })),
  setProductName: (productName) => set((state) => ({ ...state, productName })),
  

  resetProductRequest: () => set((state) => ({ ...state, productName:"", productCode:0 }))
}));

export default useStore;