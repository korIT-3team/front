import { create } from 'zustand';
export interface HumanListRequestStore {
     departmentCode : number | null;
     employeeCode : number | null;
     employmentType : number | null;
     employmentTypeName : string;

     setDepartmentCode: (departmentCode: number | null) => void;
     setEmployeeCode: (employeeCode: number | null) => void;
     setEmploymentType: (employmentType: number | null) => void;
     setEmploymentTypeName: (employmentTypeName: string) => void;

     resetHumanReqeust: () => void;
}

const useStore = create<HumanListRequestStore>((set) => ({
     departmentCode : null,
     employeeCode : null,
     employmentType : null,
     employmentTypeName : "",

     setDepartmentCode: (departmentCode) => set((state) => ({ ...state, departmentCode })),
     setEmployeeCode: (employeeCode) => set((state) => ({ ...state, employeeCode })),
     setEmploymentType: (employmentType) => set((state) => ({ ...state, employmentType })),
     setEmploymentTypeName: (employmentTypeName) => set((state) => ({...state, employmentTypeName})),

     resetHumanReqeust: () => set((state) => ({ ...state, departmentCode : null, employeeCode : null, employmentType : null, employmentTypeName: ""}))
}));

export default useStore;