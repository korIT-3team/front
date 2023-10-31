import { create } from 'zustand';

interface HumanDetailInfoStore {
    employeeImage : string | null;
    email : string | null;
    nationality : string | null;
    address : string | null;
    addressDetail : string | null;
    postCode : string | null;
    telNumber : string | null;
    education : number;
    militaryService : number;
    career : string | null;
    position : number;
    job : number;

     setEmployeeImage: (employeeImage: string | null) => void;
     setEmail: (email: string | null) => void;
     setNationality: (nationality: string | null) => void;
     setAddress: (address: string | null) => void;
     setAddressDetail: (addressDetail: string | null) => void;
     setPostCode : (postCode: string | null) => void;
     setTelNumber: (telNumber: string | null) => void;
     setEducation: (education: number) => void;
     setMilitaryService: (militaryService: number) => void;
     setCareer: (career: string | null) => void;
     setPosition: (position: number) => void;
     setJob: (job: number) => void;
}

const useStore = create<HumanDetailInfoStore>((set) => ({
  employeeImage : null,
  email : null,
  nationality : null,
  address : null,
  addressDetail : null,
  postCode : null,
  telNumber : null,
  education: 0,
  militaryService: 0,
  career : null,
  position : 0,
  job: 0,

  setEmployeeImage:  (employeeImage) => set((state) => ({ ...state, employeeImage })),
  setEmail: (email) => set((state) => ({ ...state, email })),
  setNationality: (nationality) => set((state) => ({ ...state, nationality })),
  setAddress:  (address) => set((state) => ({ ...state, address })),
  setAddressDetail: (addressDetail) => set((state) => ({ ...state, addressDetail })),
  setPostCode: (postCode) => set((state) => ({...state, postCode})),
  setTelNumber: (telNumber) => set((state) => ({ ...state, telNumber })),
  setEducation: (education) => set((state) => ({ ...state, education })),
  setMilitaryService: (militaryService) => set((state) => ({ ...state, militaryService })),
  setCareer: (career) => set((state) => ({ ...state, career })),
  setPosition: (position) => set((state) => ({ ...state, position })),
  setJob: (job) => set((state) => ({ ...state, job })),
}));

export default useStore;