import { create } from "zustand";

export interface SalesPlanListRequestStore {
  salesProjectName: string;

  setSalesProjectName: (salesProjectName: string) => void;

  resetSalesPlanRequest: () => void;
}

const useStore = create<SalesPlanListRequestStore> ((set) => ({

  salesProjectName: "",
  setSalesProjectName: (salesProjectName) => set((state) => ({ ...state, salesProjectName })),

  resetSalesPlanRequest: () => set((state) => ({ ...state, salesProjectName: "" })),
}));

export default useStore;