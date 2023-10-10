import { create } from "zustand";

interface SelectedDepartmentStore {
  selectedDepartmentCode: number | null;
  setSelectedDepartmentCode: (selectedDepartmentCode: number | null) => void;
}

const useStore = create<SelectedDepartmentStore>((set) => ({
  selectedDepartmentCode: null,
  setSelectedDepartmentCode: (selectedDepartmentCode) => set((state) => ({...state, selectedDepartmentCode})),

}));

export default useStore;