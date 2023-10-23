import { create } from "zustand";

export interface ProductInfoStore {
  productCodeInfo: number;
  productCompanyCode: number;
  productNameInfo: string;
  procurementCategoryInfo: number;
  productPriceInfo: number;

  setProductCodeInfo: (productCodeInfo: number) => void;
  setProductCompanyCode: (productCompanyCode: number) => void;
  setProductNameInfo: (productNameInfo: string) => void;
  setProcurementCategoryInfo: (procurementCategoryInfo: number) => void;
  setProductPriceInfo: (productPriceInfo: number) => void;

  resetProductInfo: () => void;

}

const useStore = create<ProductInfoStore>((set) => ({
  productCodeInfo: 0,
  productCompanyCode: 1,
  productNameInfo: "",
  procurementCategoryInfo: 0,
  productPriceInfo: 0,

  setProductCodeInfo: (productCodeInfo) => set((state) => ({ ...state, productCodeInfo })),
  setProductCompanyCode: (productCompanyCode) => set((state) => ({ ...state, productCompanyCode })),
  setProductNameInfo: (productNameInfo) => set((state) => ({ ...state, productNameInfo })),
  setProcurementCategoryInfo: (procurementCategoryInfo) => set((state) => ({ ...state, procurementCategoryInfo })),
  setProductPriceInfo: (productPriceInfo) => set((state) => ({ ...state, productPriceInfo })),

  resetProductInfo: () => set((state) => ({ ...state, productCodeInfo: 0, productCompanyCode: 0, productNameInfo: "", procurementCategoryInfo: 0, productPriceInfo:0 }))
}));

export default useStore;