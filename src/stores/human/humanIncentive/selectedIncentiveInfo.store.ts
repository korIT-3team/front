import { create } from "zustand";

interface SelectedIncentiveInfoStore {
  humanEmployeeOpen: boolean;
  humanIncentiveUserDefineOpen: boolean;

  selectedIncentiveCode: number | null;

  selectedIncentiveEmployeeName: string;
  selectedIncentiveEmployeeCode: number | null;

  selectedIncentiveCategoryName: string;
  selectedIncentiveCategory: number | null;

  
  setHumanEmployeeOpen: (humanEmployeeOpen: boolean) => void;
  setHumanIncentiveUserDefineOpen: (humanIncentiveUserDefineOpen: boolean) => void;
  
  setSelectedIncentiveCode: (selectedIncentiveCode: number | null) => void;

  setSelectedIncentiveEmployeeName: (selectedIncentiveEmployeeName: string) => void;
  setSelectedIncentiveEmployeeCode: (selectedIncentiveEmployeeCode: number | null) => void;

  setSelectedIncentiveCategoryName: (selectedIncentiveCategoryName: string) => void;
  setSelectedIncentiveCategory: (selectedIncentiveCategory: number | null) => void;  

  resetSelectedIncentiveInfo : () => void;
}

const useStore = create<SelectedIncentiveInfoStore>((set) => ({
  humanEmployeeOpen: false,
  humanIncentiveUserDefineOpen: false,

  selectedIncentiveCode: 0,
  
  selectedIncentiveEmployeeName: '',
  selectedIncentiveEmployeeCode: 0,

  selectedIncentiveCategoryName: '',
  selectedIncentiveCategory: 0 ,

  setHumanEmployeeOpen: (humanEmployeeOpen) => set((state) => ({...state, humanEmployeeOpen})),
  setHumanIncentiveUserDefineOpen: (humanIncentiveUserDefineOpen) => set((state) => ({...state, humanIncentiveUserDefineOpen})),

  setSelectedIncentiveCode: (selectedIncentiveCode) => set((state) => ({...state, selectedIncentiveCode})),

  setSelectedIncentiveEmployeeName: (selectedIncentiveEmployeeName) => set((state) => ({...state, selectedIncentiveEmployeeName})),
  setSelectedIncentiveEmployeeCode: (selectedIncentiveEmployeeCode) => set((state) => ({...state, selectedIncentiveEmployeeCode})),

  setSelectedIncentiveCategoryName: (selectedIncentiveCategoryName) => set((state) => ({...state, selectedIncentiveCategoryName})),
  setSelectedIncentiveCategory: (selectedIncentiveCategory) => set((state) => ({...state, selectedIncentiveCategory})),

  resetSelectedIncentiveInfo: () => set((state) => ({ ...state, humanEmployeeOpen: false, humanIncentiveUserDefineOpen: false, selectedIncentiveCode: 0, selectedIncentiveEmployeeName: '', selectedIncentiveEmployeeCode: 0, selectedIncentiveCategoryName: '', selectedIncentiveCategory: 0})),

}));

export default useStore;