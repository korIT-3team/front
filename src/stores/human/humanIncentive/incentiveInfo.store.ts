import { create } from 'zustand';

interface IncentiveInfoStore {
  incentiveCode: number;
  incentiveEmployeeCode: number;
  incentiveCategory: number;
  paymentDate: string;
  incentivePrice: number;
  content: string;
  
  setIncentiveCode: (incentiveCode: number) => void;
  setIncentiveEmployeeCode: (incentiveEmployeeCode:number) => void;
  setIncentiveCategory: (incentiveCategory: number) => void;
  setPaymentDate: (paymentDate: string) => void;
  setIncentivePrice: (incentivePrice: number) => void;
  setContent: (content: string) => void;

  resetIncentiveInfo: () => void;
}

const useStore = create<IncentiveInfoStore>((set) => ({
  incentiveCode: 0,
  incentiveEmployeeCode: 0,
  incentiveCategory: 0,
  paymentDate: "",
  incentivePrice: 0,
  content: "",

  setIncentiveCode: (incentiveCode) => set((state) => ({...state, incentiveCode})),
  setIncentiveEmployeeCode: (incentiveEmployeeCode) => set((state) => ({...state, incentiveEmployeeCode})),
  setIncentiveCategory: (incentiveCategory) => set((state) => ({...state, incentiveCategory})),
  setPaymentDate: (paymentDate) => set((state) => ({...state, paymentDate})),
  setIncentivePrice: (incentivePrice) => set((state) => ({...state, incentivePrice})),
  setContent: (content) => set((state) => ({...state, content})),

  resetIncentiveInfo: () => set((state) => ({ ...state, incentiveCode : 0, incentiveEmployeeCode: 0, incentiveCategory: 0, paymentDate: "", incentivePrice: 0, content:""}))
}));
export default useStore;