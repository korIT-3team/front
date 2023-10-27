import { create } from "zustand";

interface SalesPlanInfoStore {
  salesPlanCodeInfo: number,
  salesPlanProjectName: string,
  salesPlanDate: string,
  
  salesPlanProductCode: number,
  salesPlanProductName: string,
  
  salesPlanQuantity: number,
  salesPlanExpectPrice: number,
  salesPlanExpectTotalPrice: number,
  
  salesPlanEmployeeCode: number,
  salesPlanEmployeeName: string,

  setSalesPlanCodeInfo: (salesPlanCodeInfo: number) => void;
  setSalesPlanProjectName: (salesPlanProjectName: string) => void;
  setSalesPlanDate: (salesPlanDate: string) => void;
  
  setSalesPlanProductCode: (salesPlanProductCode: number) => void;
  setSalesPlanProductName: (salesPlanProductName: string) => void;

  setSalesPlanQuantity: (salesPlanQuantity: number) => void;
  setSalesPlanExpectPrice: (salesPlanExpectPrice: number) => void;
  setSalesPlanExpectTotalPrice: (salesPlanExpectTotalPrice: number) => void;

  setSalesPlanEmployeeCode: (salesPlanEmployeeCode: number) => void;
  setSalesPlanEmployeeName: (salesPlanEmployeeName: string) => void;
  
  resetSalesPlanInfo: () => void;
  
}

const useStore = create<SalesPlanInfoStore>((set) => ({
  salesPlanCodeInfo: 0,
  salesPlanProjectName: "",
  salesPlanDate: "",
  
  salesPlanProductCode: 0,
  salesPlanProductName: "",
  
  salesPlanQuantity: 0,
  salesPlanExpectPrice: 0,
  salesPlanExpectTotalPrice: 0,
  
  salesPlanEmployeeCode: 0,
  salesPlanEmployeeName: "",

  setSalesPlanCodeInfo: (salesPlanCodeInfo) => set((state) => ({ ...state, salesPlanCodeInfo })),
  setSalesPlanProjectName: (salesPlanProjectName) => set((state) => ({ ...state, salesPlanProjectName })),
  setSalesPlanDate: (salesPlanDate) => set((state) => ({ ...state, salesPlanDate })),
  
  setSalesPlanProductCode: (salesPlanProductCode) => set((state) => ({ ...state, salesPlanProductCode })),
  setSalesPlanProductName: (salesPlanProductName) => set((state) => ({ ...state, salesPlanProductName })),

  setSalesPlanQuantity: (salesPlanQuantity) => set((state) => ({ ...state, salesPlanQuantity })),
  setSalesPlanExpectPrice: (salesPlanExpectPrice) => set((state) => ({ ...state, salesPlanExpectPrice })),
  setSalesPlanExpectTotalPrice: (salesPlanExpectTotalPrice) => set((state) => ({ ...state, salesPlanExpectTotalPrice })),

  setSalesPlanEmployeeCode: (salesPlanEmployeeCode) => set((state) => ({ ...state, salesPlanEmployeeCode })),
  setSalesPlanEmployeeName: (salesPlanEmployeeName) => set((state) => ({ ...state, salesPlanEmployeeName })),
  
  resetSalesPlanInfo: () => set((state) => ({ ...state, salesPlanCodeInfo: 0, salesPlanProjectName: "", salesPlanDate: "",
                                                        salesPlanProductCode: 0, salesPlanProductName: "",
                                                        salesPlanQuantity: 0, salesPlanExpectPrice: 0, salesPlanExpectTotalPrice: 0,
                                                        salesPlanEmployeeCode: 0, salesPlanEmployeeName: "" })),

}));

export default useStore;