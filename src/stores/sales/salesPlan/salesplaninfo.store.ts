import { create } from "zustand";

interface SalesPlanInfoStore {
  salesPlanCodeInfo: number,
  salesPlanProjectName: string,
  salesPlanDate: string,
  
  salesPlanProductCodeInfo: number,
  salesPlanProductNameInfo: string,
  
  salesPlanQuantity: number,
  salesPlanExpectPrice: number,
  salesPlanExpectTotalPrice: number,
  
  salesPlanEmployeeCodeInfo: number,
  salesPlanEmployeeNameInfo: string,

  setSalesPlanCodeInfo: (salesPlanCodeInfo: number) => void;
  setSalesPlanProjectName: (salesPlanProjectName: string) => void;
  setSalesPlanDate: (salesPlanDate: string) => void;
  
  setSalesPlanProductCodeInfo: (salesPlanProductCodeInfo: number) => void;
  setSalesPlanProductNameInfo: (salesPlanProductNameInfo: string) => void;

  setSalesPlanQuantity: (salesPlanQuantity: number) => void;
  setSalesPlanExpectPrice: (salesPlanExpectPrice: number) => void;
  setSalesPlanExpectTotalPrice: (salesPlanExpectTotalPrice: number) => void;

  setSalesPlanEmployeeCodeInfo: (salesPlanEmployeeCodeInfo: number) => void;
  setSalesPlanEmployeeNameInfo: (salesPlanEmployeeNameInfo: string) => void;
  
  resetSalesPlanInfo: () => void;
  
}

const useStore = create<SalesPlanInfoStore>((set) => ({
  salesPlanCodeInfo: 0,
  salesPlanProjectName: "",
  salesPlanDate: "",
  
  salesPlanProductCodeInfo: 0,
  salesPlanProductNameInfo: "",
  
  salesPlanQuantity: 0,
  salesPlanExpectPrice: 0,
  salesPlanExpectTotalPrice: 0,
  
  salesPlanEmployeeCodeInfo: 0,
  salesPlanEmployeeNameInfo: "",

  setSalesPlanCodeInfo: (salesPlanCodeInfo) => set((state) => ({ ...state, salesPlanCodeInfo })),
  setSalesPlanProjectName: (salesPlanProjectName) => set((state) => ({ ...state, salesPlanProjectName })),
  setSalesPlanDate: (salesPlanDate) => set((state) => ({ ...state, salesPlanDate })),
  
  setSalesPlanProductCodeInfo: (salesPlanProductCodeInfo) => set((state) => ({ ...state, salesPlanProductCodeInfo })),
  setSalesPlanProductNameInfo: (salesPlanProductNameInfo) => set((state) => ({ ...state, salesPlanProductNameInfo })),

  setSalesPlanQuantity: (salesPlanQuantity) => set((state) => ({ ...state, salesPlanQuantity })),
  setSalesPlanExpectPrice: (salesPlanExpectPrice) => set((state) => ({ ...state, salesPlanExpectPrice })),
  setSalesPlanExpectTotalPrice: (salesPlanExpectTotalPrice) => set((state) => ({ ...state, salesPlanExpectTotalPrice })),

  setSalesPlanEmployeeCodeInfo: (salesPlanEmployeeCodeInfo) => set((state) => ({ ...state, salesPlanEmployeeCodeInfo })),
  setSalesPlanEmployeeNameInfo: (salesPlanEmployeeNameInfo) => set((state) => ({ ...state, salesPlanEmployeeNameInfo })),
  
  resetSalesPlanInfo: () => set((state) => ({ ...state, salesPlanCodeInfo: 0, salesPlanProjectName: "", salesPlanDate: "",
                                                        salesPlanProductCodeInfo: 0, salesPlanProductNameInfo: "",
                                                        salesPlanQuantity: 0, salesPlanExpectPrice: 0, salesPlanExpectTotalPrice: 0,
                                                        salesPlanEmployeeCodeInfo: 0, salesPlanEmployeeNameInfo: "" })),

}));

export default useStore;