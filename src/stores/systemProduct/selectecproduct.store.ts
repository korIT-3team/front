import { create } from "zustand";

interface SelectedProductInfoStore {
  productUserDefineOpen: boolean;

  selectedProcurementCategoryName: string;
  selectedProcurementCategoryCode: number | null;

  selectedProductCode: number | null;
  selectedUserDefineCode: number | null;

  setProductUserDefineOpen: (productUserDefineOpen: boolean) => void;

  setSelectedProcurementCategoryName: (selectedProcurementCategoryName: string) => void;
  setSelectedProcurementCategoryCode: (selectedProcurementCategoryCode: number | null) => void;

  setSelectedProductCode: (selectedProductCode: number | null) => void;
  setSelectedUserDefineCode: (selectedUserDefineCode: number | null) => void;
}

const useStore = create<SelectedProductInfoStore>((set) => ({
  productUserDefineOpen: false,

  selectedProcurementCategoryName: "",
  selectedProcurementCategoryCode: 0,

  selectedProductCode: 0,
  selectedUserDefineCode: 0,

  setProductUserDefineOpen: (productUserDefineOpen) => set((state) => ({ ...state, productUserDefineOpen })),

  setSelectedProcurementCategoryName: (selectedProcurementCategoryName) => set((state) => ({ ...state, selectedProcurementCategoryName })),
  setSelectedProcurementCategoryCode: (selectedProcurementCategoryCode) => set((state) => ({ ...state, selectedProcurementCategoryCode })),

  setSelectedProductCode: (selectedProductCode) => set((state) => ({ ...state, selectedProductCode })),
  setSelectedUserDefineCode: (selectedUserDefineCode) => set((state) => ({...state, selectedUserDefineCode}))
}));

export default useStore;