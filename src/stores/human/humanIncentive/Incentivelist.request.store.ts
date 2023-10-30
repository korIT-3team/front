import { create } from "zustand";

export interface IncentiveListRequestStore {
  incentiveEmployeeCode : number | null;
  incentiveCategory : number | null;

  setIncentiveEmployeeCode: (incentiveEmployeeCode: number | null) => void;
  setIncentiveCategory: (incentiveCategory: number | null) => void;

  resetIncentiveRequest: () => void;
}

const useStore = create<IncentiveListRequestStore>((set) => ({

  incentiveEmployeeCode : 0,
  incentiveCategory : 0,

  setIncentiveEmployeeCode: (incentiveEmployeeCode: number | null) => set((state) => ({ ...state, incentiveEmployeeCode})),
  setIncentiveCategory:  (incentiveCategory: number | null) => set((state) => ({ ...state, incentiveCategory})),

  resetIncentiveRequest: () => set((state) => ({ ...state, incentiveEmployeeCode: 0, incentiveCategory: 0 }))
}));

export default useStore;