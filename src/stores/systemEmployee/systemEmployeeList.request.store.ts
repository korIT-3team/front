import { create } from "zustand";

export interface SystemEmployeeListRequestStore {
  systemEmployeeName : string;

  setSystemEmployeeName: (systemEmployeeName: string) => void;

  resetSystemEmployeeRequest: () => void;
}

const useStore = create<SystemEmployeeListRequestStore>((set) => ({
  systemEmployeeName : "",
  setSystemEmployeeName: (systemEmployeeName) => set((state) => ({ ...state, systemEmployeeName })),

  resetSystemEmployeeRequest: () => set((state) => ({ ...state, systemEmployeeName: "" }))
}));

export default useStore;