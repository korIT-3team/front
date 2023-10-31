import { create } from "zustand";

export interface ProductInfo {
  no: number;
  productCode: number;
  productName: string;
  procurementCategoryName: string;
  procurementCategoryCode: number;
  productPrice: number;
}

interface ProductInfoStore {
  productList: ProductInfo[] | null;
  setProductList: (productList: ProductInfo[] | null) => void;

  resetProductList: () => void;
}

const useStore = create<ProductInfoStore>((set) => ({
  productList: [],
  setProductList: (productList) => set((state) => ({ ...state, productList })),

  resetProductList: () => set((state) => ({ ...state, productList: [] })),
}));

export default useStore;