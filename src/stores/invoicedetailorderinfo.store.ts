import { create } from 'zustand';

// select o.order_code as orderCode, o.order_date as orderDate, o.order_price as orderPrice,
// o.order_detail as orderDetail, o.sales_plan_code as salesPlanCode, o.customer_code as customerCode,
// e.employee_name as employeeName, c.customer_name customerName
interface InvoiceDetailOrderInfoStore {
     orderCode : number;
     orderDate : string;
     orderPrice : number;
     orderDetail : string;
     salesPlanCode : number;
     customerCode : number;
     employeeName : string;
     customerName : string;

     setOrderCode: (orderCode: number) => void;
     setOrderDate: (orderDate: string) => void;
     setOrderPrice: (orderPrice: number) => void;
     setOrderDetail: (orderDetail: string) => void;
     setSalesPlanCode: (salesPlanCode: number) => void;
     setCustomerCode: (customerCode: number) => void;
     setEmployeeName: (employeeName: string) => void;
     setCustomerName: (customerName: string) => void;
     
}

const useStore = create<InvoiceDetailOrderInfoStore>((set) => ({
     orderCode : 0,
     orderDate : '',
     orderPrice : 0,
     orderDetail : '',
     salesPlanCode : 0,
     customerCode : 0,
     employeeName : '',
     customerName : '',

     setOrderCode: (orderCode) => set((state) => ({ ...state, orderCode })),
     setOrderDate: (orderDate) => set((state) => ({ ...state, orderDate })),
     setOrderPrice: (orderPrice) => set((state) => ({ ...state, orderPrice })),
     setOrderDetail: (orderDetail) => set((state) => ({ ...state, orderDetail })),
     setSalesPlanCode: (salesPlanCode) => set((state) => ({ ...state, salesPlanCode })),
     setCustomerCode: (customerCode) => set((state) => ({ ...state, customerCode })),
     setEmployeeName: (employeeName) => set((state) => ({ ...state, employeeName })),
     setCustomerName: (customerName) => set((state) => ({ ...state, customerName }))
}));

export default useStore;