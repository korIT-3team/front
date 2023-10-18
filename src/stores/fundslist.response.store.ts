import { create } from 'zustand';
export interface FundsList {
     fundingCode : number;
     fundDate : string;
     salesPlanCode : number;
     customerName : string | null;
     price : number;
     priceDetail : string;
     taxType : number;
     taxTypeName : string;
     fundBalance : number;
}

interface FundsListStore {
     fundsList: FundsList[] | null;
     setFundsList: (fundsList : FundsList[] | null) => void;
     resetFundsList: () => void;
}

const useStore = create<FundsListStore>((set) => ({
     fundsList : null,
     setFundsList : (fundsList) => set((state) => ({ ...state, fundsList })),
     resetFundsList: () => set((state) => ({ ...state, fundsList : null}))
}));

export default useStore;