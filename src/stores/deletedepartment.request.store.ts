import { create } from "zustand";

export interface DeleteDepartmentRequestStore {
  deleteDepartmentCode : number;

  setDeleteDepartmentCode: (deleteDepartmentCode: number) => void;

  resetDeleteDepartmentRequest: () => void;
}

const useStore = create<DeleteDepartmentRequestStore>((set) => ({
  deleteDepartmentCode : 0,
  setDeleteDepartmentCode: (deleteDepartmentCode) => set((state) => ({ ...state, deleteDepartmentCode })),

  resetDeleteDepartmentRequest: () => set((state) => ({ ...state, deleteDepartmentCode: 0 }))
}));

export default useStore;