import { create } from "zustand";

interface SalesPlanInfoStore {
  salesPlanCodeInfo: number;
  employeeCodeInfo: number;
  departmentCodeInfo: number;
  projectName: string;
  salesPlanDate: string;
  salesPlanProductCode: number;
  planQuantity: number;
  exchangeRateCode: number;
  exchangeRate: number;
  expectPrice: number;
  expectTotalPrice: number;
  expectKoreanPrice: number;

  setSalesPlanCodeInfo: (salesPlanCode: number) => void;
  setEmployeeCodeInfo: (employeeCode: number) => void;
  setDepartmentCodeInfo: (departmentCode: number) => void;
  setProjectName: (projectName: string) => void;
  setSalesPlanDate: (salesPlanDate: string) => void;
  setSalesPlanProductCode: (productCode: number) => void;
  setPlanQuantity: (planQuantity: number) => void;
  setExchangeRateCode: (exchangeRateCode: number) => void;
  setExchangeRate: (exchangeRate: number) => void;
  setExpectPrice: (expectPrice: number) => void;
  setExpectTotalPrice: (expectTotalPrice: number) => void;
  setExpectKoreanPrice: (expectKoreanPrice: number) => void;

  resetSalesPlanInfo: () => void;  
}

const useStore = create<SalesPlanInfoStore>((set) => ({
  salesPlanCodeInfo: 0,
  employeeCodeInfo: 0,
  departmentCodeInfo: 0,
  projectName: "",
  salesPlanDate: "",
  salesPlanProductCode: 0,
  planQuantity: 0,
  exchangeRateCode: 0,
  exchangeRate: 0,
  expectPrice: 0,
  expectTotalPrice: 0,
  expectKoreanPrice: 0,

  setSalesPlanCodeInfo: (salesPlanCodeInfo) => set((state) => ({ ...state, salesPlanCodeInfo })),
  setEmployeeCodeInfo: (employeeCodeInfo) => set((state) => ({ ...state, employeeCodeInfo })),
  setDepartmentCodeInfo: (departmentCodeInfo) => set((state) => ({ ...state, departmentCodeInfo })),
  setProjectName: (projectName) => set((state) => ({ ...state, projectName })),  
  setSalesPlanDate: (salesPlanDate) => set((state) => ({ ...state, salesPlanDate })),
  setSalesPlanProductCode: (salesPlanProductCode) => set((state) => ({ ...state, salesPlanProductCode })),
  setPlanQuantity: (planQuantity) => set((state) => ({ ...state, planQuantity })),
  setExchangeRateCode: (exchangeRateCode) => set((state) => ({ ...state, exchangeRateCode })),
  setExchangeRate: (exchangeRate) => set((state) => ({ ...state, exchangeRate })),
  setExpectPrice: (expectPrice) => set((state) => ({ ...state, expectPrice })),
  setExpectTotalPrice: (expectTotalPrice) => set((state) => ({ ...state, expectTotalPrice })),
  setExpectKoreanPrice: (expectKoreanPrice) => set((state) => ({ ...state, expectKoreanPrice })),

  resetSalesPlanInfo: () => set((state) => ({ ...state, salesPlanCodeInfo: 0, employeeCodeInfo: 0, departmentCodeInfo: 0, projectName: "",
                                            salesPlanDate: "", salesPlanProductCode: 0, planQuantity: 0, exchangeRateCode: 0, exchangeRate: 0,
                                            expectPrice: 0, expectTotalPrice: 0, expectKoreanPrice: 0 }))
}));

export default useStore;