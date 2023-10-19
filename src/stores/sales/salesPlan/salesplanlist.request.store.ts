import { create } from "zustand";

export interface SalesPlanListRequestStore {
  salesPlanCode: number;
  projectName: string;

  setSalesPlanCode: (salesPlanCode: number) => void;
  setProjectName: (projectName: string) => void;

  resetSalesPlanRequest: () => void;
}

const useStore = create<SalesPlanListRequestStore> ((set) => ({

  salesPlanCode: 0,
  projectName: "",

  setSalesPlanCode: (salesPlanCode) => set((state) => ({ ...state, salesPlanCode })),
  setProjectName: (projectName) => set((state) => ({ ...state, projectName })),

  resetSalesPlanRequest: () => set((state) => ({ ...state, salesPlanCode: 0, projectName: "" })),

}));

export default useStore;