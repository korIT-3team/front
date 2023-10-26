import { create } from "zustand";

interface SelectedIncentiveInfoStore {
  humanEmployeeOpen: boolean;
  humanIncentiveUserDefineOpen: boolean;

  selectedEmployeeName: string;
  selectedEmployeeCode: number | null;

  selectedIncentiveCategoryName: string;
  selectedIncentiveCategory: number | null;

  setHumanEmployeeOpen: (humanEmployeeOpen: boolean) => void;
  setHumanIncentiveUserDefineOpen: (humanIncentiveUserDefineOpen: boolean) => void;

  setSelectedEmployeeName: (selectedEmployeeName: string) => void;
  setSelectedEmployeeCode: (selectedEmployeeCode: number | null) => void;

  setSelectedIncentiveCategoryName: (selectedIncentiveCategoryName: string) => void;
  setSelectedIncentiveCategory: (selectedIncentiveCategory: number | null) => void;  
}

const useStore = create<SelectedIncentiveInfoStore>((set) => ({
  humanEmployeeOpen: false,
  humanIncentiveUserDefineOpen: false,

  selectedEmployeeName: '',
  selectedEmployeeCode: 0,

  selectedIncentiveCategoryName: '',
  selectedIncentiveCategory: 0 ,

  setHumanEmployeeOpen: (humanEmployeeOpen) => set((state) => ({...state, humanEmployeeOpen})),
  setHumanIncentiveUserDefineOpen: (humanIncentiveUserDefineOpen) => set((state) => ({...state, humanIncentiveUserDefineOpen})),

  setSelectedEmployeeName: (selectedEmployeeName) => set((state) => ({...state, selectedEmployeeName})),
  setSelectedEmployeeCode: (selectedEmployeeCode) => set((state) => ({...state, selectedEmployeeCode})),

  setSelectedIncentiveCategoryName: (selectedIncentiveCategoryName) => set((state) => ({...state, selectedIncentiveCategoryName})),
  setSelectedIncentiveCategory: (selectedIncentiveCategory) => set((state) => ({...state, selectedIncentiveCategory})),

}));

export default useStore;