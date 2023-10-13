import { create } from 'zustand';

export interface FundslistsRequestStore {
     fundslistDateStart : string;
     fundslistDateEnd : string;

     setFundslistDateStart: (fundslistDateStart: string) => void;
     setFundslistDateEnd: (fundslistDateEnd: string) => void;

     resetFundslistsRequst: () => void;
}

const useStore = create<FundslistsRequestStore>((set) => ({
     fundslistDateStart : '',
     fundslistDateEnd : '',
     
     setFundslistDateStart: (fundslistDateStart) => set((state) => ({ ...state, fundslistDateStart })),
     setFundslistDateEnd: (fundslistDateEnd) => set((state) => ({ ...state, fundslistDateEnd })),

     resetFundslistsRequst: () => set((state) => ({ ...state, fundslistDateStart : '', fundslistDateEnd : ''}))
}));

export default useStore;