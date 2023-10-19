import { create } from "zustand";

interface SelectedCustomerStore {
  selectedCustomerCode: number | null;
  selectedCustomerName: string | null;

  setSelectedCustomerCode: (selectedCustomerCode: number | null) => void;
  setSelectedCustomerName: (selectedCustomerName: string | null) => void;
}

const useStore = create<SelectedCustomerStore>((set) => ({
  selectedCustomerCode: null,
  selectedCustomerName: null,

  setSelectedCustomerCode: (selectedCustomerCode) => set((state) => ({ ...state, selectedCustomerCode })),
  setSelectedCustomerName: (selectedCustomerName) => set((state) => ({ ...state, selectedCustomerName })),
}));

export default useStore;