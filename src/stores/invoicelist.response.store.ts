import { create } from 'zustand';
export interface InvoiceList {
     invoiceCode : number;
     invoiceDate : string;
     invoiceType : number;
     invoiceDetailPk : number;
     workerName : string;
     workerCode : number;
     workerDepartmentCode : number;
     price : number;
     priceDetail : string;
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