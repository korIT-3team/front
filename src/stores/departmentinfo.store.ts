import { create } from 'zustand';

interface DepartmentInfoStore {
  departmentCode: number,
  companyCode: number,
  departmentName: string,
  departmentStartDate: string,
  departmentEndDate: string,
  departmentTelNumber: string,
  departmentFax: string

  setDepartmentCode: (departmentCode: number) => void;
  setCompanyCode: (departmentCode: number) => void;
  setDepartmentName: (departmentName: string) => void;
  setDepartmentStartDate: (departmentStartDate: string) => void;
  setDepartmentEndDate: (departmentEndDate: string) => void;
  setDepartmentTelNumber: (departmentTelNumber: string) => void;
  setDepartmentFax: (departmentFax: string) => void;
}

const useStore = create<DepartmentInfoStore>((set) => ({
  departmentCode: 1000,
  companyCode: 1,
  departmentName: "",
  departmentStartDate: "",
  departmentEndDate: "",
  departmentTelNumber: "",
  departmentFax:  "",

  setDepartmentCode: (departmentCode) => set((state) => ({ ...state, departmentCode })),
  setCompanyCode: (departmentCode) => set((state) => ({ ...state, departmentCode })),
  setDepartmentName: (departmentName) => set((state) => ({ ...state, departmentName })),
  setDepartmentStartDate: (departmentStartDate) => set((state) => ({ ...state, departmentStartDate })),
  setDepartmentEndDate: (departmentEndDate) => set((state) => ({ ...state, departmentEndDate })),
  setDepartmentTelNumber: (departmentTelNumber) => set((state) => ({ ...state, departmentTelNumber })),
  setDepartmentFax: (departmentFax) => set((state) => ({ ...state, departmentFax }))

}));

export default useStore;