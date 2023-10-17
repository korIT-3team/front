import ResponseDto from "../../response.dto";
import SystemEmpUserDefineListResponseDto from "./system-emp-user-define-detail-list.response.dto";

export default interface GetSystemEmpUserDefineListResponseDto extends ResponseDto {
    systemEmpUserDefineList: SystemEmpUserDefineListResponseDto[];
}