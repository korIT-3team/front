import { create } from 'zustand';
export interface InOutComeList {
     fundingCode : number;
     fundDate : string;
     salesPlanCode : number;
     customerName : string;
     price : number;
     priceDetail : string;
     taxType : number;
     fundBalance : number;
}

interface InOutComeListStore {
     inOutComeList: InOutComeList[] | null;
     setInOutComeList: (inOutComeList : InOutComeList[] | null) => void;
     resetInOutComeList: () => void;
}

const useStore = create<InOutComeListStore>((set) => ({
     inOutComeList : null,
     setInOutComeList : (inOutComeList) => set((state) => ({ ...state, inOutComeList })),
     resetInOutComeList: () => set((state) => ({ ...state, inOutComeList : null}))
}));

export default useStore;