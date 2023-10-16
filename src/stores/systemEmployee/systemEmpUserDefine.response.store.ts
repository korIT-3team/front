import { create } from "zustand";

export interface SystemEmpUserDefineInfo {
  systemUserDefineCode: number;
  systemUserDefineName: string;
  systemUserDefineDetailCode: number;
  systemUserDefineDetailName: string;
}

interface SystemEmpUserDefineInfoStore {
  systemEmpUserDefineList: SystemEmpUserDefineInfo[] | null;

  setsystemEmpUserDefineList: (systemEmpUserDefineList: SystemEmpUserDefineInfo[] | null) => void;

  resetsystemEmpUserDefineList: () => void;

}

const useStore = create<SystemEmpUserDefineInfoStore>((set) => ({
  systemEmpUserDefineList: [],

  setsystemEmpUserDefineList: (systemEmpUserDefineList) => set((state) => ({...state, systemEmpUserDefineList})),

  resetsystemEmpUserDefineList: () => set((state) => ({ ...state, systemEmpUserDefineList: []})),

}));

export default useStore;