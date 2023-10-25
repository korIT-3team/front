import { create } from "zustand";

interface SelectedEmployeeInfoStore {
  systemEmpDepartmentOpen: boolean;
  systemEmpUserDefineOpen: boolean;

  selectedGenderName: string;
  selectedGenderCode: number | null;

  selectedEmpDepartmentName: string;
  selectedEmpDepartmentCode: number | null;

  selectedEmploymentType: string;
  selectedEmploymentTypeCode: number | null;

  selectedEmployeeCode: number | null;
  selectedUserDefineCode: number | null;

  setSystemEmpDepartmentOpen: (systemEmpDepartmentOpen: boolean) => void;
  setSystemEmpUserDefineOpen: (systemEmpUserDefineOpen: boolean) => void;

  setSelectedGenderName: (selectedGenderName: string) => void;
  setSelectedGenderCode: (selectedGenderCode: number | null) => void;  

  setSelectedEmpDepartmentName: (selectedEmpDepartmentName: string) => void;
  setSelectedEmpDepartmentCode: (selectedEmpDepartmentCode: number | null) => void;

  setSelectedEmploymentTypeName: (selectedEmploymentType: string) => void;
  setSelectedEmploymentTypeCode: (selectedEmploymentTypeCode: number | null) => void;    

  setSelectedEmployeeCode: (selectedEmployeeCode: number | null) => void;
  setSelectedUserDefineCode: (selectedUserDefineCode: number | null) => void;
}

const useStore = create<SelectedEmployeeInfoStore>((set) => ({
  systemEmpDepartmentOpen: false,
  systemEmpUserDefineOpen: false,

  selectedGenderName: "",
  selectedGenderCode: 0,   

  selectedEmpDepartmentName: "",
  selectedEmpDepartmentCode: 0,

  selectedEmploymentType: "",
  selectedEmploymentTypeCode: 0, 
  
  selectedEmployeeCode: 0,
  selectedUserDefineCode: 0,

  setSystemEmpDepartmentOpen: (systemEmpDepartmentOpen) => set((state) => ({...state, systemEmpDepartmentOpen})),
  setSystemEmpUserDefineOpen: (systemEmpUserDefineOpen) => set((state) => ({...state, systemEmpUserDefineOpen})),

  setSelectedGenderName: (selectedGenderName) => set((state) => ({...state, selectedGenderName})),
  setSelectedGenderCode: (selectedGenderCode) => set((state) => ({...state, selectedGenderCode})),

  setSelectedEmpDepartmentCode: (selectedEmpDepartmentCode) => set((state) => ({...state, selectedEmpDepartmentCode})),
  setSelectedEmpDepartmentName: (selectedEmpDepartmentName) => set((state) => ({...state, selectedEmpDepartmentName})),

  setSelectedEmploymentTypeName: (selectedEmploymentType) => set((state) => ({...state, selectedEmploymentType})),
  setSelectedEmploymentTypeCode: (selectedEmploymentTypeCode) => set((state) => ({...state, selectedEmploymentTypeCode})),

  setSelectedEmployeeCode: (selectedEmployeeCode) => set((state) => ({...state, selectedEmployeeCode})),
  setSelectedUserDefineCode: (selectedUserDefineCode) => set((state) => ({...state, selectedUserDefineCode}))

}));

export default useStore;