import { create } from "zustand";

export interface ProductInfoStore {
  productCodeInfo: number;
  productNameInfo: string;
  
  procurementCategoryName: string;
  procurementCategoryCode: number;
  
  productPriceInfo: number;

  setProductCodeInfo: (productCodeInfo: number) => void;
  setProductNameInfo: (productNameInfo: string) => void;
  
  setProcurementCategoryName: (procurementCategoryName: string) => void;
  setProcurementCategoryCode: (procurementCategoryCode: number) => void;
  
  setProductPriceInfo: (productPriceInfo: number) => void;

  resetProductInfo: () => void;

}

const useStore = create<ProductInfoStore>((set) => ({
  productCodeInfo: 0,
  productNameInfo: "",
  
  procurementCategoryName: "",
  procurementCategoryCode: 0,
  
  productPriceInfo: 0,

  setProductCodeInfo: (productCodeInfo) => set((state) => ({ ...state, productCodeInfo })),
  setProductNameInfo: (productNameInfo) => set((state) => ({ ...state, productNameInfo })),
  
  setProcurementCategoryName: (procurementCategoryName) => set((state) => ({ ...state, procurementCategoryName })),
  setProcurementCategoryCode: (procurementCategoryCode) => set((state) => ({ ...state, procurementCategoryCode })),
  
  setProductPriceInfo: (productPriceInfo) => set((state) => ({ ...state, productPriceInfo })),

  resetProductInfo: () => set((state) => ({ ...state, productCodeInfo: 0, productNameInfo: "", procurementCategoryName: "", procurementCategoryCode: 0, productPriceInfo:0 }))
}));

export default useStore;