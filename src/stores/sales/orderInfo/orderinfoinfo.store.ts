import { create } from "zustand";

interface OrderInfoInfoStore {

  salesPlanCode: number;
  orderCode: number;
  departmentCode: number;
  employeeCode: number;
  customerCode: number;
  orderDate: string;
  managerCode: number;
  productCode: number;
  productName: string;
  orderQuantity: number;
  orderPrice: number;
  orderDetail: string;

  setSalesPlanCode: (salesPlanCode: number) => void;
  setOrderCode: (orderCode: number) => void;
  setDepartmentCode: (departmentCode: number) => void;
  setEmployeeCode: (employeeCode: number) => void;
  setCustomerCode: (customerCode: number) => void;
  setOrderDate: (orderDate: string) => void;
  setManagerCode: (managerCode: number) => void;
  setProductCode: (productCode: number) => void;
  setProductName: (productName: string) => void;
  setOrderQuantity: (orderQuantity: number) => void;
  setOrderPrice: (orderPrice: number) => void;
  setOrderDetail: (orderDetail: string) => void;

  resetOrderInfoInfo: () => void;
  
}

const useStore = create<OrderInfoInfoStore>((set) => ({
  salesPlanCode: 0,
  orderCode: 0,
  departmentCode: 0,
  employeeCode: 0,
  customerCode: 0,
  orderDate: "",
  managerCode: 0,
  productCode: 0,
  productName: "",
  orderQuantity: 0,
  orderPrice: 0,
  orderDetail: "",

  setSalesPlanCode: (salesPlanCode) => set((state) => ({ ...state, salesPlanCode })),
  setOrderCode: (orderCode) => set((state) => ({ ...state, orderCode })),
  setDepartmentCode: (departmentCode) => set((state) => ({ ...state, departmentCode })),
  setEmployeeCode: (employeeCode) => set((state) => ({ ...state, employeeCode })),
  setCustomerCode: (customerCode) => set((state) => ({ ...state, customerCode })),
  setOrderDate: (orderDate) => set((state) => ({ ...state, orderDate })),
  setManagerCode: (managerCode) => set((state) => ({ ...state, managerCode })),
  setProductCode: (productCode) => set((state) => ({ ...state, productCode })),
  setProductName: (productName) => set((state) => ({ ...state, productName })),
  setOrderQuantity: (orderQuantity) => set((state) => ({ ...state, orderQuantity })),
  setOrderPrice: (orderPrice) => set((state) => ({ ...state, orderPrice })),
  setOrderDetail: (orderDetail) => set((state) => ({ ...state, orderDetail })),

  resetOrderInfoInfo: () => set((state) => ({ ...state, salesPlanCode:0, orderCode: 0, departmentCode: 0, employeeCode: 0,
                                                        customerCode: 0, orderDate: "", managerCode: 0, productCode: 0, productName: "",
                                                        orderQuantity: 0, orderPrice: 0, orderDetail: "" })),
}));

export default useStore;

