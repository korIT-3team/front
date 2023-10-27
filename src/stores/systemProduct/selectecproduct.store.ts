import { create } from "zustand";

interface SelectedProductInfoStore {
  productProcurementCategoryOpen: boolean;
  productUserDefineOpen: boolean;

  selectedProcurementCategory: string;
  selectedProcurementCategoryCode: number | null;

  selectedProductCode: number | null;

  setProductProcurementCategoryOpen: (productProcurementCategoryOpen: boolean) => void;
  setProductUserDefineOpen: (productUserDefineOpen: boolean) => void;

  setSelectedProcurementCategory: (selectedProcurementCategory: string) => void;
  setSelectedProcurementCategoryCode: (selectedProcurementCategoryCode: number | null) => void;

  setSelectedProductCode: (selectedProductCode: number | null) => void;
}

const useStore = create<SelectedProductInfoStore>((set) => ({
  productProcurementCategoryOpen: false,
  productUserDefineOpen: false,

  selectedProcurementCategory: "",
  selectedProcurementCategoryCode: 0,

  selectedProductCode: 0,

  setProductProcurementCategoryOpen: (productProcurementCategoryOpen) => set((state) => ({ ...state, productProcurementCategoryOpen })),
  setProductUserDefineOpen: (productUserDefineOpen) => set((state) => ({ ...state, productUserDefineOpen })),

  setSelectedProcurementCategory: (selectedProcurementCategory) => set((state) => ({ ...state, selectedProcurementCategory })),
  setSelectedProcurementCategoryCode: (selectedProcurementCategoryCode) => set((state) => ({ ...state, selectedProcurementCategoryCode })),

  setSelectedProductCode: (selectedProductCode) => set((state) => ({ ...state, selectedProductCode })),
}));

export default useStore;