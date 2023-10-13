import { create } from 'zustand';

export interface InOutComeRequestStore {
     inOutComeCustomerCode : number | null;
     inOutComeSalesPlanCode : number | null;
     fundDateStart : string;
     fundDateEnd : string;

     setInOutComeCustomerCode: (inOutComeCustomerCode: number | null) => void;
     setInOutComeSalesPlanCode: (inOutComeSalesPlanCode: number | null) => void;
     setFundDateStart: (fundDateStart: string) => void;
     setFundDateEnd: (fundDateEnd: string) => void;

     resetInOutComeRequst: () => void;
}

const useStore = create<InOutComeRequestStore>((set) => ({
     inOutComeCustomerCode : null,
     inOutComeSalesPlanCode : null,
     fundDateStart : '',
     fundDateEnd : '',
     
     setInOutComeCustomerCode: (inOutComeCustomerCode) => set((state) => ({ ...state, inOutComeCustomerCode })),
     setInOutComeSalesPlanCode: (inOutComeSalesPlanCode) => set((state) => ({ ...state, inOutComeSalesPlanCode })),
     setFundDateStart: (fundDateStart) => set((state) => ({ ...state, fundDateStart })),
     setFundDateEnd: (fundDateEnd) => set((state) => ({ ...state, fundDateEnd })),

     resetInOutComeRequst: () => set((state) => ({ ...state, inOutComeCustomerCode : null, inOutComeSalesPlanCode : null, fundDateStart : '', fundDateEnd : ''}))
}));

export default useStore;