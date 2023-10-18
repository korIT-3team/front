import { create } from "zustand";

interface SelectedEmployeeInfoStore {
  systemEmpDepartmentOpen: boolean;
  systemEmpUserDefineOpen: boolean;

  selectedDepartmentName: string;
  selectedDepartmentCode: number | null;

  selectedEmployeeCode: number | null;
  selectedUserDefineCode: number | null;
  selectedUserDefineDetailName: string;
  selectedUserDefineDetailCode: number | null;

  setSystemEmpDepartmentOpen: (systemEmpDepartmentOpen: boolean) => void;
  setSystemEmpUserDefineOpen: (systemEmpUserDefineOpen: boolean) => void;

  setSelectedDepartmentName: (selectedDepartmentName: string) => void;
  setSelectedDepartmentCode: (selectedDepartmentCode: number | null) => void;

  setSelectedEmployeeCode: (selectedEmployeeCode: number | null) => void;
  setSelectedUserDefineCode: (selectedUserDefineCode: number | null) => void;
  setSelectedUserDefineDetailName: (selectedUserDefineDetailName: string) => void;
  setSelectedUserDefineDetailCode: (selectedUserDefineDetailCode: number | null) => void;
}

const useStore = create<SelectedEmployeeInfoStore>((set) => ({
  systemEmpDepartmentOpen: false,
  systemEmpUserDefineOpen: false,

  selectedDepartmentName: "",
  selectedDepartmentCode: 0,
  
  selectedEmployeeCode: 0,
  selectedUserDefineCode: 0,
  selectedUserDefineDetailName: "",
  selectedUserDefineDetailCode: 0,

  setSystemEmpDepartmentOpen: (systemEmpDepartmentOpen) => set((state) => ({...state, systemEmpDepartmentOpen})),
  setSystemEmpUserDefineOpen: (systemEmpUserDefineOpen) => set((state) => ({...state, systemEmpUserDefineOpen})),

  setSelectedDepartmentName: (selectedDepartmentName) => set((state) => ({...state, selectedDepartmentName})),
  setSelectedDepartmentCode: (selectedDepartmentCode) => set((state) => ({...state, selectedDepartmentCode})),

  setSelectedEmployeeCode: (selectedEmployeeCode) => set((state) => ({...state, selectedEmployeeCode})),
  setSelectedUserDefineCode: (selectedUserDefineCode) => set((state) => ({...state, selectedUserDefineCode})),
  setSelectedUserDefineDetailName: (selectedUserDefineDetailName) => set((state) => ({...state, selectedUserDefineDetailName})),
  setSelectedUserDefineDetailCode: (selectedUserDefineDetailCode) => set((state) => ({...state, selectedUserDefineDetailCode})),

}));

export default useStore;