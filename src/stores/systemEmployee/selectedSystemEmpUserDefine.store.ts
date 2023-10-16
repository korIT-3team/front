import { create } from "zustand";

interface SelectedSystemEmpUserDefineStore {
  selectedSystemEmpUserDefine: number | null;
  setSelectedSystemEmpUserDefine: (selectedSystemEmpUserDefine: number | null) => void;
}

const useStore = create<SelectedSystemEmpUserDefineStore>((set) => ({
  selectedSystemEmpUserDefine: null,
  setSelectedSystemEmpUserDefine: (selectedSystemEmpUserDefine) => set((state) => ({...state, selectedSystemEmpUserDefine})),

}));

export default useStore;