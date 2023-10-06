import { create } from "zustand";

export interface DepartmentInfo {
  no: number;
  departmentCode: number;
  companyCode: number;
  departmentName: string;
  departmentStartDate: string;
  departmentEndDate: string;
  departmentTelNumber: string;
  departmentFax: string;
}

interface DepartmentInfoStore {
  departmentList: DepartmentInfo[] | null;
  setDepartmentList: (departmentList: DepartmentInfo[] | null) => void;

  resetDepartmentList: () => void;

}

const useStore = create<DepartmentInfoStore>((set) => ({
  departmentList: [],
  setDepartmentList: (departmentList) => set((state) => ({...state, departmentList})),

  resetDepartmentList: () => set((state) => ({ ...state, departmentList: []})),

}));

export default useStore;