import { create } from "zustand";

interface SelectedSalesPlanStore {
  
  salesPlanProductOpen: boolean;
  salesPlanEmployeeOpen: boolean;
  salesPlanUserDefineOpen: boolean;

  selectedSalesPlanCode: number | null;

  selectedSalesPlanProductCode: number | null;
  selectedSalesPlanProductName: string;

  selectedSalesPlanEmployeeCode: number | null;
  selectedSalesPlanEmployeeName: string;

  selectedSalesPlanUserDefineCode: number | null;
  
  setSalesPlanProductOpen: (salesPlanProductOpen: boolean) => void;
  setSalesPlanEmployeeOpen: (salesPlanEmployeeOpen: boolean) => void;
  setSalesPlanUserDefineOpen: (salesPlanUserDefineOpen: boolean) => void;

  setSelectedSalesPlanCode: ( selectedSalesPlanCode: number | null) => void;

  setSelectedSalesPlanProductCode: (selectedSalesPlanProductCode: number | null) => void;
  setSelectedSalesPlanProductName: (selectedSalesPlanProductName: string) => void;

  setSelectedSalesPlanEmployeeCode: (selectedSalesPlanEmployeeCode: number | null) => void;
  setSelectedSalesPlanEmployeeName: (selectedSalesPlanEmployeeName: string) => void;

  setSelectedSalesPlanUserDefineCode: (selectedSalesPlanUserDefineCode: number | null) => void;
}

const useStore = create<SelectedSalesPlanStore>((set) => ({

  salesPlanProductOpen: false,
  salesPlanEmployeeOpen: false,
  salesPlanUserDefineOpen: false,

  selectedSalesPlanCode: 0,

  selectedSalesPlanProductCode: 0,
  selectedSalesPlanProductName: "",

  selectedSalesPlanEmployeeCode: 0,
  selectedSalesPlanEmployeeName: "",

  selectedSalesPlanUserDefineCode: 0,

  setSalesPlanProductOpen: (salesPlanProductOpen) => set((state) => ({ ...state, salesPlanProductOpen })),
  setSalesPlanEmployeeOpen: (salesPlanEmployeeOpen) => set((state) => ({ ...state, salesPlanEmployeeOpen })),
  setSalesPlanUserDefineOpen: (salesPlanUserDefineOpen) => set((state) => ({ ...state, salesPlanUserDefineOpen })),

  setSelectedSalesPlanCode: ( selectedSalesPlanCode) => set((state) => ({ ...state, selectedSalesPlanCode })),

  setSelectedSalesPlanProductCode: (selectedSalesPlanProductCode) => set((state) => ({ ...state, selectedSalesPlanProductCode })),
  setSelectedSalesPlanProductName: (selectedSalesPlanProductName) => set((state) => ({ ...state, selectedSalesPlanProductName })),

  setSelectedSalesPlanEmployeeCode: (selectedSalesPlanEmployeeCode) => set((state) => ({ ...state, selectedSalesPlanEmployeeCode })),
  setSelectedSalesPlanEmployeeName: (selectedSalesPlanEmployeeName) => set((state) => ({ ...state, selectedSalesPlanEmployeeName })),

  setSelectedSalesPlanUserDefineCode: (selectedSalesPlanUserDefineCode) => set((state) => ({ ...state, selectedSalesPlanUserDefineCode })),
}));

export default useStore;