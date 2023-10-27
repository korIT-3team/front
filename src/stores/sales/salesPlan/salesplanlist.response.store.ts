import { create } from "zustand";

export interface SalesPlanInfo {
  no: number;
  salesPlanCode: number;
  projectName: string;
  planDate: string;
  productCode: number;
  productName: string;
  planQuantity: number;
  expectPrice: number;
  expectTotalPrice: number;
  employeeCode: number;
  employeeName: string;
}

interface SalesPlanInfoStore {
  salesPlanList: SalesPlanInfo[] | null;
  setSalesPlanList: (salesPlanList: SalesPlanInfo[] | null) => void;

  resetSalesPlanList: () => void;

}

const useStore = create<SalesPlanInfoStore>((set) => ({
  salesPlanList: [],
  setSalesPlanList: (salesPlanList) => set((state) => ({ ...state, salesPlanList })),

  resetSalesPlanList: () => set ((state) => ({ ...state, salesPlanList: [] }))
}));

export default useStore;