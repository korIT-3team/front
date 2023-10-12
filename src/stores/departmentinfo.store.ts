import { create } from 'zustand';

interface DepartmentInfoStore {
  departmentCodeInfo: number,
  departmentCompanyCode: number,
  departmentNameInfo: string,
  departmentStartDate: string,
  departmentEndDate: string,
  departmentTelNumber: string,
  departmentFax: string

  setDepartmentCodeInfo: (departmentCodeInfo: number) => void;
  setDepartmentCompanyCode: (departmentCompanyCode: number) => void;
  setDepartmentNameInfo: (departmentNameInfo: string) => void;
  setDepartmentStartDate: (departmentStartDate: string) => void;
  setDepartmentEndDate: (departmentEndDate: string) => void;
  setDepartmentTelNumber: (departmentTelNumber: string) => void;
  setDepartmentFax: (departmentFax: string) => void;

  resetDepartmentInfo: () => void;
}

const useStore = create<DepartmentInfoStore>((set) => ({
  departmentCodeInfo: 0,
  departmentCompanyCode: 1,
  departmentNameInfo: "",
  departmentStartDate: "",
  departmentEndDate: "",
  departmentTelNumber: "",
  departmentFax:  "",

  setDepartmentCodeInfo: (departmentCodeInfo) => set((state) => ({ ...state, departmentCodeInfo })),
  setDepartmentCompanyCode: (departmentCompanyCode) => set((state) => ({ ...state, departmentCompanyCode })),
  setDepartmentNameInfo: (departmentNameInfo) => set((state) => ({ ...state, departmentNameInfo })),
  setDepartmentStartDate: (departmentStartDate) => set((state) => ({ ...state, departmentStartDate })),
  setDepartmentEndDate: (departmentEndDate) => set((state) => ({ ...state, departmentEndDate })),
  setDepartmentTelNumber: (departmentTelNumber) => set((state) => ({ ...state, departmentTelNumber })),
  setDepartmentFax: (departmentFax) => set((state) => ({ ...state, departmentFax })),

  resetDepartmentInfo: () => set((state) => ({ ...state, departmentCodeInfo: 0, departmentCompanyCode: 1, departmentNameInfo: '', departmentStartDate: '', departmentEndDate: '', departmentTelNumber: '', departmentFax: '' })),
}));
export default useStore;