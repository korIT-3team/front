import { create } from "zustand";

interface SelectedEmployeeInfoStore {
  userDefineOpen: boolean;
  selectedEmployeeCode: number | null;
  selectedUserDefineCode: number | null;
  selectedUserDefineDetailName: String;
  selectedUserDefineDetailCode: number | null;

  setUserDefineOpen: (userDefineOpen: boolean | false) => void;
  setSelectedEmployeeCode: (selectedDepartmentCode: number | null) => void;
  setSelectedUserDefineCode: (selectedDepartmentCode: number | null) => void;
  setSelectedUserDefineDetailName: (selectedDepartmentCode: String) => void;
  setSelectedUserDefineDetailCode: (selectedDepartmentCode: number | null) => void;
}

const useStore = create<SelectedEmployeeInfoStore>((set) => ({
  userDefineOpen: false,
  selectedEmployeeCode: null,
  selectedUserDefineCode: null,
  selectedUserDefineDetailName: "",
  selectedUserDefineDetailCode: null,

  setUserDefineOpen: (userDefineOpen) => set((state) => ({...state, userDefineOpen})),
  setSelectedEmployeeCode: (selectedEmployeeCode) => set((state) => ({...state, selectedEmployeeCode})),
  setSelectedUserDefineCode: (selectedUserDefineCode) => set((state) => ({...state, selectedUserDefineCode})),
  setSelectedUserDefineDetailName: (selectedUserDefineDetailName) => set((state) => ({...state, selectedUserDefineDetailName})),
  setSelectedUserDefineDetailCode: (selectedUserDefineDetailCode) => set((state) => ({...state, selectedUserDefineDetailCode})),

}));

export default useStore;