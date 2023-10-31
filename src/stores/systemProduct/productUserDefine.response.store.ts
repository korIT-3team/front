import { create } from "zustand";

export interface ProductUserDefineInfo {
  no: number;
  systemUserDefineCode: number;
  systemUserDefineName: string;
  systemUserDefineDetailCode: number;
  systemUserDefineDetailName: string;
}

interface ProductUserDefineInfoStore {
  productUserDefineList: ProductUserDefineInfo[] | null;

  setProductUserDefineList: (productUserDefineList: ProductUserDefineInfo[] | null) => void;

  resetProductUserDefineList: () => void;
}

const useStore = create<ProductUserDefineInfoStore>((set) => ({
  productUserDefineList: [],

  setProductUserDefineList: (productUserDefineList) => set((state) => ({ ...state, productUserDefineList })),

  resetProductUserDefineList: () => set((state) => ({ ...state, productUserDefineList: [] })),
}));


export default useStore;