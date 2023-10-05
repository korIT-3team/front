import { create } from "zustand";

export interface ProductList {
  companyCode: number;
  productCode: number;
  productName: string;
  procurementCategory: number;
  productPrice: number;
}

interface ProductListStore {
  productList: ProductList[] | null;
  setProductList: (productList: ProductList[] | null) => void;
}

const useStore = create<ProductListStore>((set) => ({
  productList: null,
  setProductList: (productList) => set((state) => ({ ...state, productList }))
}));

export default useStore;