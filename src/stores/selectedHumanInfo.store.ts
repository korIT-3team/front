import { create } from "zustand";

interface SelectedHumanInfoStore {
  selectedHumanCode: number | null;
  setSelectedHumanCode: (selectedHumanCode: number | null) => void;
}

const useStore = create<SelectedHumanInfoStore>((set) => ({
  selectedHumanCode: null,
  setSelectedHumanCode: (selectedHumanCode) => set((state) => ({...state, selectedHumanCode})),

}));

export default useStore;