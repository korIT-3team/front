import { create } from "zustand";

export interface SalesPlanListRequestStore {
  departmentCode: number | null;
  employeeCode: number | null;
  planDateStart: string;
  planDateEnd: string;

  setDepartmentCode: (departmentCode: number | null) => void;
  setEmployeeCode: (employeeCode: number | null) => void;
  setPlanDateStart: (planDateStart: string) => void;
  setPlanDateEnd: (planDateEnd: string) => void;

  resetSalesPlanListRequest: () => void
}

const useStore = create<SalesPlanListRequestStore> ((set) => ({

  departmentCode: null,
  employeeCode: null,
  planDateStart: '',
  planDateEnd: '',

  setDepartmentCode: (departmentCode) => set((state) => ({ ...state, departmentCode })),
  setEmployeeCode: (employeeCode) => set((state) => ({ ...state, employeeCode })),
  setPlanDateStart: (planDateStart) => set((state) => ({ ...state, planDateStart })),
  setPlanDateEnd: (planDateEnd) => set((state) => ({ ...state, planDateEnd })),

  resetSalesPlanListRequest: () => set((state) => ({ ...state, departmentCode: null, employeeCode: null, planDateStart: '', planDateEnd: ''}))

}));

export default useStore;