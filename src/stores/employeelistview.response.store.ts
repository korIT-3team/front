import { create } from 'zustand';
export interface EmployeeListView {
     no : number;
     employeeCode : number;
     employeeName : string;
     genderName : string;
     departmentName : string;
     position : string;
     email : string;
     employmentType : string;
}
interface EmployeeListViewStore {
     employeeListView: EmployeeListView[] | null;
     setEmployeeListView: (employeeListView : EmployeeListView[] | null) => void;
     resetEmployeeListView: () => void;
}

const useStore = create<EmployeeListViewStore>((set) => ({
     employeeListView : null,
     setEmployeeListView : (employeeListView) => set((state) => ({ ...state, employeeListView })),
     resetEmployeeListView: () => set((state) => ({ ...state, employeeListView : null}))
}));

export default useStore;