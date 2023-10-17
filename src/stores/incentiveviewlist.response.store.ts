import { create } from 'zustand';
export interface IncentiveViewList {
     incentiveCode : number;
     employeeName : string;
     incentiveCategoryName : string;
     paymentDate : string;
     incentivePrice : number;
     content : string;
}

interface IncentiveViewListStore {
     incentiveViewList: IncentiveViewList[] | null;
     setIncentiveViewList: (incentiveViewList : IncentiveViewList[] | null) => void;
     resetIncentiveViewList: () => void;
}

const useStore = create<IncentiveViewListStore>((set) => ({
     incentiveViewList : null,
     setIncentiveViewList : (incentiveViewList) => set((state) => ({ ...state, incentiveViewList })),
     resetIncentiveViewList: () => set((state) => ({ ...state, incentiveViewList : null}))
}));

export default useStore;