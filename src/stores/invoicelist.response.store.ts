import { create } from 'zustand';
export interface InvoiceList {
     invoiceCode : number;
     productCode : number;
     customerCode : number;
     workerCode : number;
     workerDepartmentCode : number;
     productDetails : string;
     invoiceDate : string;
     invoiceType : number;
     customerName : string;
     price : number;
}

interface InvoiceListStore {
     invoiceList: InvoiceList[] | null;
     setInvoiceList: (invoiceList : InvoiceList[] | null) => void;
     resetInvoiceList: () => void;
}

const useStore = create<InvoiceListStore>((set) => ({
     invoiceList : null,
     setInvoiceList : (invoiceList) => set((state) => ({ ...state, invoiceList })),
     resetInvoiceList: () => set((state) => ({ ...state, invoiceList : null}))
}));

export default useStore;