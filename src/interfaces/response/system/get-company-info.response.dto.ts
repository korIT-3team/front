import ResponseDto from '../response.dto';

export default interface GetompanyInfoResponseDto extends ResponseDto {
    logoImageUrl : string;
    bizNumber : string;
    companyName : string;
    repName : string;
    postCode : string;
    companyAddress : string;
    companyAddressDetail : string;
    telNumber : string;
    bizStatus : string;
    bizType : string;
    englishName : string;
    homepage : string;
}