import { create } from "zustand";

export interface ProductListRequestStore {
  productName: string;

  setProductName: (productName: string) => void;
  
  resetProductRequest: () => void;
}

const useStore = create<ProductListRequestStore>((set) => ({
  
  productName: "",
  
  setProductName: (productName) => set((state) => ({ ...state, productName })),
  

  resetProductRequest: () => set((state) => ({ ...state, productName:"" }))
}));

export default useStore;