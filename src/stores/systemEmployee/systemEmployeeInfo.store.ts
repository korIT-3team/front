import { create } from 'zustand';

interface SystemEmployeeInfoStore {
  employeeName: string,
  gender: string,
  genderCode: number,
  departmentName: string,
  departmentCode: number,
  joinDate: string,
  resignationDate: string,
  password: string,
  registrationNumber: string,
  employmentType: string,
  employmentTypeCode: number


  setEmployeeName: (employeeName: string) => void;
  setGender: (gender: string) => void;
  setGenderCode: (genderCode: number) => void;
  setDepartmentName: (departmentName: string) => void;
  setDepartmentCode: (departmentCode: number) => void;
  setJoinDate: (joinDate: string) => void;
  setResignationDate: (resignationDate: string) => void;
  setPassword: (password: string) => void;
  setRegistrationNumber: (registrationNumber: string) => void;
  setEmploymentType: (employmentType: string) => void;
  setEmploymentTypeCode: (employmentTypeCode: number) => void;

  resetSystemEmployeeInfo: () => void;
}

const useStore = create<SystemEmployeeInfoStore>((set) => ({
  employeeName: "",
  gender: "",
  genderCode: 0,
  departmentName: "",
  departmentCode: 0,
  joinDate: "",
  resignationDate: "",
  password:  "",
  registrationNumber: "",
  employmentType: "",
  employmentTypeCode: 0,

  setEmployeeName: (employeeName) => set((state) => ({ ...state, employeeName })),
  setGender: (gender) => set((state) => ({ ...state, gender })),
  setGenderCode: (genderCode) => set((state) => ({ ...state, genderCode })),
  setDepartmentName: (departmentName) => set((state) => ({ ...state, departmentName })),
  setDepartmentCode: (departmentCode) => set((state) => ({ ...state, departmentCode })),
  setJoinDate: (joinDate) => set((state) => ({ ...state, joinDate })),
  setResignationDate: (resignationDate) => set((state) => ({ ...state, resignationDate })),
  setPassword: (password) => set((state) => ({ ...state, password })),
  setRegistrationNumber: (registrationNumber) => set((state) => ({ ...state, registrationNumber })),
  setEmploymentType: (employmentType) => set((state) => ({ ...state, employmentType })),
  setEmploymentTypeCode: (employmentTypeCode) => set((state) => ({ ...state, employmentTypeCode })),

  resetSystemEmployeeInfo: () => set((state) => ({ ...state, employeeCode: 0, employeeName: "", gender: "", genderCode: 0, departmentName: "", departmentCode: 0,
                                                              joinDate: "", resignationDate:"", password: "", registrationNumber: "", employmentType: "", employmentTypeCode:0}))
}));
export default useStore;