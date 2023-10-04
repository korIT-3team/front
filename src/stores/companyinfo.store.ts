import { create } from 'zustand';

interface CompanyInfoStore {
     logoImageUrl : string | null;
     logoImage : File | null;
     bizNumber : string;
     companyName : string;
     repName : string;
     postCode : string;
     companyAddress : string;
     companyAddressDetail : string | null;
     telNumber : string;
     bizStatus : string;
     bizType : string;
     englishName : string | null;
     homepage : string | null;

     setLogoImageUrl: (logoImageUrl: string | null) => void;
     setLogoImage: (logoImage: File | null) => void;
     setBizNumber: (bizNumber: string) => void;
     setCompanyName: (companyName: string) => void;
     setRepName: (repName: string) => void;
     setPostCode: (postCode: string) => void;
     setCompanyAddress: (companyAddress: string) => void;
     setCompanyAddressDetail: (companyAddressDetail: string | null) => void;
     setTelNumber: (telNumber: string) => void;
     setBizStatus: (bizStatus: string) => void;
     setBizType: (bizType: string) => void;
     setEnglishName: (englishName: string | null) => void;
     setHomepage: (homepage: string | null) => void;
}

const useStore = create<CompanyInfoStore>((set) => ({
     logoImageUrl : null,
     logoImage : null,
     bizNumber : '',
     companyName : '',
     repName : '',
     postCode : '',
     companyAddress : '',
     companyAddressDetail : '',
     telNumber : '',
     bizStatus : '',
     bizType : '',
     englishName : '',
     homepage : '',
     setLogoImageUrl: (logoImageUrl) => set((state) => ({ ...state, logoImageUrl })),
     setLogoImage: (logoImage) => set((state) => ({ ...state, logoImage })),
     setBizNumber: (bizNumber) => set((state) => ({ ...state, bizNumber })),
     setCompanyName: (companyName) => set((state) => ({ ...state, companyName })),
     setRepName: (repName) => set((state) => ({ ...state, repName })),
     setPostCode: (postCode) => set((state) => ({ ...state, postCode })),
     setCompanyAddress: (companyAddress) => set((state) => ({ ...state, companyAddress })),
     setCompanyAddressDetail: (companyAddressDetail) => set((state) => ({ ...state, companyAddressDetail })),
     setTelNumber: (telNumber) => set((state) => ({ ...state, telNumber })),
     setBizStatus: (bizStatus) => set((state) => ({ ...state, bizStatus })),
     setBizType: (bizType) => set((state) => ({ ...state, bizType })),
     setEnglishName: (englishName) => set((state) => ({ ...state, englishName })),
     setHomepage: (homepage) => set((state) => ({ ...state, homepage })),
}));

export default useStore;