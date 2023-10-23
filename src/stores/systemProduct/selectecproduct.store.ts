import { create } from "zustand";

interface SelectedCustomerStore {
  selectedProductCode: number | null;

  setSelectedProductCode: (selectedProductCode: number | null) => void;
}

const useStore = create<SelectedCustomerStore>((set) => ({
  selectedProductCode: null,

  setSelectedProductCode: (selectedProductCode) => set((state) => ({ ...state, selectedProductCode })),
}));

export default useStore;