import { create } from "zustand";

export interface ProductUserDefineRequestStore {
  productUserDefineCode: number;

  setProductUserDefineCode: (productUserDefineCode: number) => void;

  resetProductUserDefineCode: () => void;

}

const useStore = create<ProductUserDefineRequestStore>((set) => ({
  productUserDefineCode: 0,

  setProductUserDefineCode: (productUserDefineCode) => set((state) => ({ ...state, productUserDefineCode })),

  resetProductUserDefineCode: () => set((state) => ({ ...state, productUserDefineCode: 0 }))
}));


export default useStore;