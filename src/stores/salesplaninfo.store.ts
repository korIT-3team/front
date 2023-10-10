import { create } from "zustand";

interface SalesPlanInfoStore {
  salesPlanCodeInfo: number;
  employeeCodeInfo: number;
  departmentCodeInfo: number;
  companyCodeInfo: number;
  salesPlanDate: string;
  salesPlanProductCode: number;
  planQuantity: number;
  exchangeRateCode: number | null;
  exchangeRate: number;
  expectPrice: number;
  expectTotalPrice: number;
  expectKoreanPrice: number;

  setSalesPlanCodeInfo: (salesPlanCode: number) => void;
  setEmployeeCodeInfo: (employeeCode: number) => void;
  setDepartmentCodeInfo: (departmentCode: number) => void;
  setCompanyCodeInfo: (companyCode: number) => void;
  setSalesPlanDate: (salesPlanDate: string) => void;
  setSalesPlanProductCode: (productCode: number) => void;
  setPlanQuantity: (planQuantity: number) => void;
  setExchangeRateCode: (exchangeRateCode: number | null) => void;
  setExchangeRate: (exchangeRate: number) => void;
  setExpectPrice: (expectPrice: number) => void;
  setExpectTotalPrice: (expectTotalPrice: number) => void;
  setExpectKoreanPrice: (expectKoreanPrice: number) => void;

}

const useStore = create<SalesPlanInfoStore>((set) => ({
  salesPlanCodeInfo: 1,
  employeeCodeInfo: 3000,
  departmentCodeInfo: 1000,
  companyCodeInfo: 1,
  salesPlanDate: "",
  salesPlanProductCode: 2000,
  planQuantity: 1,
  exchangeRateCode: null,
  exchangeRate: 1,
  expectPrice: 20000,
  expectTotalPrice: 20000,
  expectKoreanPrice: 20000,

  setSalesPlanCodeInfo: (salesPlanCodeInfo) => set((state) => ({ ...state, salesPlanCodeInfo })),
  setEmployeeCodeInfo: (employeeCodeInfo) => set((state) => ({ ...state, employeeCodeInfo })),
  setDepartmentCodeInfo: (departmentCodeInfo) => set((state) => ({ ...state, departmentCodeInfo })),
  setCompanyCodeInfo: (companyCodeInfo) => set((state) => ({ ...state, companyCodeInfo })),
  setSalesPlanDate: (salesPlanDate) => set((state) => ({ ...state, salesPlanDate })),
  setSalesPlanProductCode: (salesPlanProductCode) => set((state) => ({ ...state, salesPlanProductCode })),
  setPlanQuantity: (planQuantity) => set((state) => ({ ...state, planQuantity })),
  setExchangeRateCode: (exchangeRateCode) => set((state) => ({ ...state, exchangeRateCode })),
  setExchangeRate: (exchangeRate) => set((state) => ({ ...state, exchangeRate })),
  setExpectPrice: (expectPrice) => set((state) => ({ ...state, expectPrice })),
  setExpectTotalPrice: (expectTotalPrice) => set((state) => ({ ...state, expectTotalPrice })),
  setExpectKoreanPrice: (expectKoreanPrice) => set((state) => ({ ...state, expectKoreanPrice })),

}));

export default useStore;