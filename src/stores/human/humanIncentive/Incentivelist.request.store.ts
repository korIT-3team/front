import { create } from "zustand";

export interface IncentiveListRequestStore {
  incentiveEmployeeCodeSearch : number | null;
  incentiveCategorySearch : number | null;

  setIncentiveEmployeeCodeSearch: (incentiveEmployeeCodeSearch: number | null) => void;
  setIncentiveCategorySearch: (incentiveCategorySearch: number | null) => void;

  resetIncentiveRequest: () => void;
}

const useStore = create<IncentiveListRequestStore>((set) => ({

  incentiveEmployeeCodeSearch : 0,
  incentiveCategorySearch : 0,

  setIncentiveEmployeeCodeSearch: (incentiveEmployeeCodeSearch: number | null) => set((state) => ({ ...state, incentiveEmployeeCodeSearch})),
  setIncentiveCategorySearch:  (incentiveCategorySearch: number | null) => set((state) => ({ ...state, incentiveCategorySearch})),

  resetIncentiveRequest: () => set((state) => ({ ...state, incentiveEmployeeCode: 0, incentiveCategory: 0 }))
}));

export default useStore;