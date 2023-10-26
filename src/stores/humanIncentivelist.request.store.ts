import { create } from 'zustand';
export interface HumanIncentiveListRequestStore {
     humanEmployeeCode : number | null;
     humanIncentiveCategory : number | null;

     setHumanEmployeeCode: (humanEmployeeCode: number | null) => void;
     setHumanIncentiveCategory: (humanIncentiveCategory: number | null) => void;

     resetHumanIncentiveReqeust: () => void;
}

const useStore = create<HumanIncentiveListRequestStore>((set) => ({
     humanEmployeeCode : null,
     humanIncentiveCategory : null,

     setHumanEmployeeCode: (humanEmployeeCode) => set((state) => ({ ...state, humanEmployeeCode })),
     setHumanIncentiveCategory: (humanIncentiveCategory) => set((state) => ({ ...state, humanIncentiveCategory })),

     resetHumanIncentiveReqeust: () => set((state) => ({ ...state, humanEmployeeCode : null, humanIncentiveCategory : null}))
}));

export default useStore;