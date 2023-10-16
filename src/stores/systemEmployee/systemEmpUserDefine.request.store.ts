import { create } from "zustand";

export interface SystemEmpUserDefineRequestStore{
  systemEmpUserDefineCode: number;

  setSystemEmpUserDefineCode: (systemEmpUserDefineCode: number) => void;

  resetSystemEmpUserDefineCode: () => void;

}

const useStore = create<SystemEmpUserDefineRequestStore>((set) => ({
  systemEmpUserDefineCode : 0,

  setSystemEmpUserDefineCode: (systemEmpUserDefineCode) => set((state) => ({ ...state, systemEmpUserDefineCode })),

  resetSystemEmpUserDefineCode: () => set((state) => ({ ...state, systemEmpUserDefineCode: 0 }))
}));

export default useStore;