import { create } from "zustand";

export interface DepartmentInfo {
  no: number;
  departmentCode: number;
  companyCode: number;
  departmentName: string;
  departmentStartDate: string;
  departmentEndDate: string;
  departmentTelnumber: string;
  departmentFax: string;
}

interface DepartmentInfoStore {
  departmentList: DepartmentInfo[];

  setDepartmentList: (departmentList: DepartmentInfo[]) => void;

  resetDepartmentList: () => void;

}

const useStore = create<DepartmentInfoStore>((set) => ({
  departmentList: [],

  setDepartmentList: (departmentList) => set((state) => ({...state, departmentList})),

  resetDepartmentList: () => set((state) => ({ ...state, departmentList: []})),

}));

export default useStore;