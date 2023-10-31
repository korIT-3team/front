import { create } from "zustand";

export interface HumanEmployeeInfo {
  no: number;
  employeeCode: number;
  employeeName: string;
}

interface HumanEmployeeInfoStore {
  employeeList: HumanEmployeeInfo[] | null;
  setEmployeeList: (employeeList: HumanEmployeeInfo[] | null) => void;

  resetEmployeeList: () => void;

}

const useStore = create<HumanEmployeeInfoStore>((set) => ({
  employeeList: [],
  setEmployeeList: (employeeList) => set((state) => ({...state, employeeList})),

  resetEmployeeList: () => set((state) => ({ ...state, employeeList: []})),

}));

export default useStore;