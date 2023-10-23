import { create } from "zustand";

export interface SystemEmployeeInfo {
  no: number;
  employeeCode: number;
  employeeName: string;
  gender: string;
  genderCode: number;
  departmentName: string;
  departmentCode: number;
  joinDate: string;
  resignationDate: string;
  password: string;
  registrationNumber: string;
  employmentType: string;
  employmentTypeCode: number;
}

interface SystemEmployeeInfoStore {
  systemEmployeeList: SystemEmployeeInfo[] | null;
  setSystemEmployeeList: (systemEmployeeList: SystemEmployeeInfo[] | null) => void;

  resetSystemEmployeeList: () => void;

}

const useStore = create<SystemEmployeeInfoStore>((set) => ({
  systemEmployeeList: [],
  setSystemEmployeeList: (systemEmployeeList) => set((state) => ({...state, systemEmployeeList})),

  resetSystemEmployeeList: () => set((state) => ({ ...state, systemEmployeeList: []})),

}));

export default useStore;