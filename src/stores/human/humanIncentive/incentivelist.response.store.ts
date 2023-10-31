import { create } from "zustand";

export interface IncentiveInfo {
  no: number;
  incentiveCode: number;
  employeeName: string;
  employeeCode: number;
  incentiveCategoryName: string;
  incentiveCategoryCode: number;  
  paymentDate: string;
  incentivePrice: number;
  content: string;
}

interface IncentiveInfoStore {
  incentiveList: IncentiveInfo[] | null;
  setIncentiveList: (incentiveList: IncentiveInfo[] | null) => void;

  resetIncentiveList: () => void;

}

const useStore = create<IncentiveInfoStore>((set) => ({
  incentiveList: [],
  setIncentiveList: (incentiveList) => set((state) => ({...state, incentiveList})),

  resetIncentiveList: () => set((state) => ({ ...state, incentiveList: []})),

}));

export default useStore;