import { create } from 'zustand';
export interface InvoiceList {
     invoiceCode : number;
     productCode : number;
     customerCode : number;
     workerCode : number;
     productDetails : string;
     invoiceDate : string;
     invoiceType : number;
     customerName : string;
     price : number;
}

interface InvoiceListStore {
     invoiceList: InvoiceList[] | null;
     setInvoiceList: (invoiceList : InvoiceList[] | null) => void;
}

const useStore = create<InvoiceListStore>((set) => ({
     invoiceList : null,
     setInvoiceList : (invoiceList) => set((state) => ({ ...state, invoiceList }))
}));

export default useStore;