import { create } from "zustand";

export interface DepartmentListRequestStore {
  departmentName : string;

  setDepartmentName: (departmentName: string) => void;

  resetDepartmentRequest: () => void;
}

const useStore = create<DepartmentListRequestStore>((set) => ({
  departmentName : "",
  setDepartmentName: (departmentName) => set((state) => ({ ...state, departmentName })),

  resetDepartmentRequest: () => set((state) => ({ ...state, departmentName: "" }))
}));

export default useStore;