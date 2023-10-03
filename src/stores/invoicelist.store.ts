import { create } from 'zustand';
// todo : 조회를 헤더에서 눌러야하는데 그럼 조회조건도 store로 따로 뽑고
// 헤더에서 request를하면 response도 헤더에 받을텐데 그럼
// response 스토어도 만들어서 받아야하는거네?
interface InvoiceListStore {
  
}

const useStore = create<InvoiceListStore>((set) => ({
    
}));

export default useStore;