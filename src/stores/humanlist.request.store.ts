import { create } from 'zustand';
export interface HumanListRequestStore {
     humanDepartmentCode : number | null;
     humanEmployeeCode : number | null;
     humanEmploymentType : number | null;

     sethumanDepartmentCode: (humanDepartmentCode: number | null) => void;
     sethumanEmployeeCode: (humanEmployeeCode: number | null) => void;
     sethumanEmploymentType: (humanEmploymentType: number | null) => void;

     resetHumanReqeust: () => void;
}

const useStore = create<HumanListRequestStore>((set) => ({
     humanDepartmentCode : null,
     humanEmployeeCode : null,
     humanEmploymentType : null,

     sethumanDepartmentCode: (humanDepartmentCode) => set((state) => ({ ...state, humanDepartmentCode })),
     sethumanEmployeeCode: (humanEmployeeCode) => set((state) => ({ ...state, humanEmployeeCode })),
     sethumanEmploymentType: (humanEmploymentType) => set((state) => ({ ...state, humanEmploymentType })),

     resetHumanReqeust: () => set((state) => ({ ...state, humanDepartmentCode : null, humanEmployeeCode : null, humanEmploymentType : null}))
}));

export default useStore;