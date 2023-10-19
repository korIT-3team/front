import { create } from "zustand";

interface SelectedCustomerStore {
  selectedProcurementCategory: number | null;
  selectedProductName: string | null;

  setSelectedProcurementCategory: (selectedProcurementCategory: number | null) => void;
  setSelectedProductName: (selectedProductName: string | null) => void;
}

const useStore = create<SelectedCustomerStore>((set) => ({
  selectedProcurementCategory: null,
  selectedProductName: null,

  setSelectedProcurementCategory: (selectedProcurementCategory) => set((state) => ({ ...state, selectedProcurementCategory })),
  setSelectedProductName: (selectedProductName) => set((state) => ({ ...state, selectedProductName })),
}));

export default useStore;