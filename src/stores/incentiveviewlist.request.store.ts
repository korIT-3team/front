import { create } from 'zustand';

// 부서 사원 재직구분, 재직구분 0 이나 널은 all

export interface IncentiveViewListRequestStore {
     incentiveViewListEmployeeCode : number;
     incentiveviewlistDateStart : string;
     incentiveviewlistDateEnd : string;
     incentiveViewListCategory : number | null;

     setIncentiveViewListEmployeeCode: (incentiveViewListEmployeeCode: number) => void;
     setIncentiveViewListDateStart: (incentiveviewlistDateStart: string) => void;
     setIncentiveViewListDateEnd: (incentiveviewlistDateEnd: string) => void;
     setIncentiveViewListCategory: (incentiveViewListEmployeeCode: number | null) => void;

     resetIncentiveViewListRequst: () => void;
}

const useStore = create<IncentiveViewListRequestStore>((set) => ({
     incentiveViewListEmployeeCode : 0,
     incentiveviewlistDateStart : '',
     incentiveviewlistDateEnd : '',
     incentiveViewListCategory : null,
     
     setIncentiveViewListEmployeeCode: (incentiveViewListEmployeeCode) => set((state) => ({ ...state, incentiveViewListEmployeeCode })),
     setIncentiveViewListDateStart: (incentiveviewlistDateStart) => set((state) => ({ ...state, incentiveviewlistDateStart })),
     setIncentiveViewListDateEnd: (incentiveviewlistDateEnd) => set((state) => ({ ...state, incentiveviewlistDateEnd })),
     setIncentiveViewListCategory: (incentiveViewListCategory) => set((state) => ({ ...state, incentiveViewListCategory })),

     resetIncentiveViewListRequst: () => set((state) => ({ ...state,  incentiveViewListEmployeeCode : 0, incentiveviewlistDateStart : '', incentiveviewlistDateEnd : '', incentiveViewListCategory : null}))
}));

export default useStore;