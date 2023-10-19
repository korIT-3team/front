import { create } from 'zustand';
export interface InvoiceListRequestStore {
     departmentCode : number | null;
     employeeCode : number | null;
     invoiceDateStart : string;
     invoiceDateEnd : string;
     invoiceTypeName : string | null;

     setDepartmentCode: (departmentCode: number | null) => void;
     setEmployeeCode: (employeeCode: number | null) => void;
     setInvoiceDateStart: (invoiceDateStart: string) => void;
     setInvoiceDateEnd: (invoiceDateEnd: string) => void;
     setInvoiceTypeName: (invoiceTypeName: string | null) => void;

     resetInvoiceRequst: () => void;
}

const useStore = create<InvoiceListRequestStore>((set) => ({
     departmentCode : null,
     employeeCode : null,
     invoiceDateStart : '',
     invoiceDateEnd : '',
     invoiceTypeName : null,
     setDepartmentCode: (departmentCode) => set((state) => ({ ...state, departmentCode })),
     setEmployeeCode: (employeeCode) => set((state) => ({ ...state, employeeCode })),
     setInvoiceDateStart: (invoiceDateStart) => set((state) => ({ ...state, invoiceDateStart })),
     setInvoiceDateEnd: (invoiceDateEnd) => set((state) => ({ ...state, invoiceDateEnd })),
     setInvoiceTypeName: (invoiceTypeName) => set((state) => ({ ...state, invoiceTypeName })),

     resetInvoiceRequst: () => set((state) => ({ ...state, departmentCode : null, employeeCode : null, invoiceDateStart : '', invoiceDateEnd : '', invoiceTypeName : null}))
}));

export default useStore;