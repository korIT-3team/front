import { create } from "zustand";

export interface HumanInfo {
  no: number;
  employeeCode: number;
  employeeName: string;
  departmentName: string;
}

interface HumanInfoStore {
  humanList: HumanInfo[] | null;
  setHumanList: (humanList: HumanInfo[] | null) => void;

  resetHumanList: () => void;

}

const useStore = create<HumanInfoStore>((set) => ({
  humanList: [],
  setHumanList: (humanList) => set((state) => ({...state, humanList})),

  resetHumanList: () => set((state) => ({ ...state, humanList: []})),

}));

export default useStore;