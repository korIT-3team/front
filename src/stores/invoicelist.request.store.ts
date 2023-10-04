import { create } from 'zustand';
export interface InvoiceListRequestStore {
     departmentCode : number | null;
     employeeCode : number | null;
     invoiceDateStart : string;
     invoiceDateEnd : string;
     invoiceType : number;

     setDepartmentCode: (departmentCode: number | null) => void;
     setEmployeeCode: (employeeCode: number | null) => void;
     setInvoiceDateStart: (invoiceDateStart: string) => void;
     setInvoiceDateEnd: (invoiceDateEnd: string) => void;
     setInvoiceType: (invoiceType: number) => void;
}

const useStore = create<InvoiceListRequestStore>((set) => ({
     departmentCode : null,
     employeeCode : null,
     invoiceDateStart : '',
     invoiceDateEnd : '',
     invoiceType : 0,
     setDepartmentCode: (departmentCode) => set((state) => ({ ...state, departmentCode })),
     setEmployeeCode: (employeeCode) => set((state) => ({ ...state, employeeCode })),
     setInvoiceDateStart: (invoiceDateStart) => set((state) => ({ ...state, invoiceDateStart })),
     setInvoiceDateEnd: (invoiceDateEnd) => set((state) => ({ ...state, invoiceDateEnd })),
     setInvoiceType: (invoiceType) => set((state) => ({ ...state, invoiceType })),
}));

export default useStore;