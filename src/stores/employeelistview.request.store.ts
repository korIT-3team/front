import { create } from 'zustand';

// 부서 사원 재직구분, 재직구분 0 이나 널은 all

export interface EmployeeListViewRequestStore {
     employeeListViewDepartmentCode : number | null;
     employeeListViewEmployeeCode : number | null;
     employeeListViewEmploymentCode : string | null;

     setEmployeeListViewDepartmentCode: (employeeListViewDepartmentCode: number | null) => void;
     setEmployeeListViewEmployeeCode: (employeeListViewEmployeeCode: number | null) => void;
     setEmployeeListViewEmploymentCode: (employeeListViewEmploymentCode: string | null) => void;

     resetEmployeeViewListRequst: () => void;
}

const useStore = create<EmployeeListViewRequestStore>((set) => ({
     employeeListViewDepartmentCode : null,
     employeeListViewEmployeeCode : null,
     employeeListViewEmploymentCode : null,
     setEmployeeListViewDepartmentCode: (employeeListViewDepartmentCode) => set((state) => ({ ...state, employeeListViewDepartmentCode })),
     setEmployeeListViewEmployeeCode: (employeeListViewEmployeeCode) => set((state) => ({ ...state, employeeListViewEmployeeCode })),
     setEmployeeListViewEmploymentCode: (employeeListViewEmploymentCode) => set((state) => ({ ...state, employeeListViewEmploymentCode })),

     resetEmployeeViewListRequst: () => set((state) => ({ ...state, employeeListViewDepartmentCode : null, employeeListViewEmployeeCode : null, employeeListViewEmploymentCode : null}))
}));

export default useStore;