import ResponseDto from "../../response.dto";
import systemEmpUserDefineListResponseDto from "./system-emp-user-define-detail-list.response.dto";

export default interface GetsystemEmpUserDefineListResponseDto extends ResponseDto {
    systemEmpUserDefineList: systemEmpUserDefineListResponseDto[];
}