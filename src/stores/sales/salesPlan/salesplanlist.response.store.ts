import { create } from "zustand";

export interface SalesPlanInfo {
  no: number;
  productCode: number;
  porductName: string;
  unit: string;
  planQuantity: number;
  exchangeRateType: number;
  exchangeRate: number;
  expectPrice: number;
  expectTotalPrice: number;
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