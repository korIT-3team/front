import { create } from "zustand";

interface User {
     employeeCode: number;
     employeeName: string;
     departmentCode: number;
     departmentName: string;
}

interface UserStore {
     user: User | null;
     setUser: (user: User | null) => void;
}

const useStore = create<UserStore>((set) => ({
     user: null,
     setUser: (user) => set((state) => ({ ...state, user }))
}));

export default useStore;