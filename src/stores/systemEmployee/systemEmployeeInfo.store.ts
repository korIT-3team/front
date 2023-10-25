import { create } from 'zustand';

interface SystemEmployeeInfoStore {
  sysEmployeeCode: number,
  employeeName: string,
  gender: string,
  genderCode: number,
  empDepartmentName: string,
  empDepartmentCode: number,
  joinDate: string,
  resignationDate: string,
  registrationNumber: string,
  employmentType: string,
  employmentTypeCode: number


  setSystemEmployeeCode : (sysEmployeeCode: number) => void;
  setEmployeeName: (employeeName: string) => void;
  setGender: (gender: string) => void;
  setGenderCode: (genderCode: number) => void;
  setDepartmentName: (empDepartmentName: string) => void;
  setDepartmentCode: (departmentCode: number) => void;
  setJoinDate: (joinDate: string) => void;
  setResignationDate: (resignationDate: string) => void;
  setRegistrationNumber: (registrationNumber: string) => void;
  setEmploymentType: (employmentType: string) => void;
  setEmploymentTypeCode: (employmentTypeCode: number) => void;

  resetSystemEmployeeInfo: () => void;
}

const useStore = create<SystemEmployeeInfoStore>((set) => ({
  sysEmployeeCode: 0,
  employeeName: "",
  gender: "",
  genderCode: 0,
  empDepartmentName: "",
  empDepartmentCode: 0,
  joinDate: "",
  resignationDate: "",
  registrationNumber: "",
  employmentType: "",
  employmentTypeCode: 0,

  setSystemEmployeeCode: (sysEmployeeCode) => set((state) => ({ ...state, sysEmployeeCode })),
  setEmployeeName: (employeeName) => set((state) => ({ ...state, employeeName })),
  setGender: (gender) => set((state) => ({ ...state, gender })),
  setGenderCode: (genderCode) => set((state) => ({ ...state, genderCode })),
  setDepartmentName: (empDepartmentName) => set((state) => ({ ...state, empDepartmentName })),
  setDepartmentCode: (empDepartmentCode) => set((state) => ({ ...state, empDepartmentCode })),
  setJoinDate: (joinDate) => set((state) => ({ ...state, joinDate })),
  setResignationDate: (resignationDate) => set((state) => ({ ...state, resignationDate })),
  setRegistrationNumber: (registrationNumber) => set((state) => ({ ...state, registrationNumber })),
  setEmploymentType: (employmentType) => set((state) => ({ ...state, employmentType })),
  setEmploymentTypeCode: (employmentTypeCode) => set((state) => ({ ...state, employmentTypeCode })),

  resetSystemEmployeeInfo: () => set((state) => ({ ...state, sysEmployeeCode : 0, employeeName: "", gender: "", genderCode: 0, empDepartmentName: "", empDepartmentCode: 0,
                                                              joinDate: "", resignationDate:"",registrationNumber : "", employmentType: "", employmentTypeCode:0}))
}));
export default useStore;