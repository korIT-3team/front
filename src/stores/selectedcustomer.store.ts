import { create } from "zustand";

interface SelectedCustomerStore {
  selectedCustomerCode: number | null;

  setSelectedCustomerCode: (selectedCustomerCode: number | null) => void;
}

const useStore = create<SelectedCustomerStore>((set) => ({
  selectedCustomerCode: null,

  setSelectedCustomerCode: (selectedCustomerCode) => set((state) => ({ ...state, selectedCustomerCode })),
}));

export default useStore;