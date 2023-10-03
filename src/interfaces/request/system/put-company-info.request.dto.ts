export default interface PutCompanyInfoRequestDto {
    logoImageUrl : string | null;
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
}