import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import SystemMenu from '../SystemMenu'
import { useLocation } from 'react-router-dom';
import { useDepartmentInfoStore, useDepartmentResponseStore, useSelectedDepartmentStore, useSelectedEmployeeInfoStore, useSystemEmpUserDefineRequestStore, useSystemEmpUserDefineResponseStore, useSystemEmployeeInfoStore, useSystemEmployeeRequestStore, useSystemEmployeeResponseStore } from 'src/stores';
import GetSystemEmpUserDefineListResponseDto from 'src/interfaces/response/system/systemEmployee/get-system-emp-user-define-detail-list.response.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import { getDepartmentListRequest, getSystemEmpDepartmentListRequest, getSystemEmpUserDefineListRequest } from 'src/apis';
import GetSystemEmpDepartmentListResponseDto from 'src/interfaces/response/system/systemEmployee/get-system-emp-department-list.response.dto';
import { GetDepartmentListResponseDto } from 'src/interfaces/response/system';
import { SystemEmployeeInfo } from 'src/stores/systemEmployee/systemEmployeeList.response.store';

export default function SystemEmployee() {

  //          state           //
  // description: path 상태
  const {pathname} = useLocation();
  // description: 사원 - 신규등록 시 사용자정의코드 정보 //
  const [ selectedNewUserDefineCode, setSelectedNewUserDefineCode ] = useState<number>(0);
  // description: 사원 - 신규등록 정보 //
  const { employeeName, gender, genderCode, empDepartmentName, empDepartmentCode, joinDate, resignationDate, 
          registrationNumber,  employmentType, employmentTypeCode} = useSystemEmployeeInfoStore();
  const { setEmployeeName, setGender, setGenderCode, setDepartmentName, setDepartmentCode, setJoinDate, setResignationDate, 
          setRegistrationNumber, setEmploymentType, setEmploymentTypeCode, resetSystemEmployeeInfo } = useSystemEmployeeInfoStore();
  // description: 사원조회 조건
  const { setSystemEmployeeName, resetSystemEmployeeRequest } = useSystemEmployeeRequestStore();
  // description: 사원List 정보 불러오기
  const { systemEmployeeList, setSystemEmployeeList, resetSystemEmployeeList } = useSystemEmployeeResponseStore();
  // description: 사원 - 선택된 사용자 정보 //
  const { selectedEmployeeCode, setSelectedEmployeeCode } = useSelectedEmployeeInfoStore();

  //! 부서
  // description: 부서 창 상태
  const { systemEmpDepartmentOpen, setSystemEmpDepartmentOpen } = useSelectedEmployeeInfoStore();
  // description: 사원 - 선택된 부서명 //
  const { selectedEmpDepartmentName, setSelectedEmpDepartmentName } = useSelectedEmployeeInfoStore();
  // description: 사원 - 선택된 부서코드 //
  const { selectedEmpDepartmentCode, setSelectedEmpDepartmentCode } = useSelectedEmployeeInfoStore();


  //! 사용자정의
  // description: 사원 -  조회된  사용자정의코드 정보 store //
  const { systemEmpUserDefineList, setsystemEmpUserDefineList, resetsystemEmpUserDefineList } = useSystemEmpUserDefineResponseStore();  
  // description: 사용자정의 창 상태
  const { systemEmpUserDefineOpen, setSystemEmpUserDefineOpen } = useSelectedEmployeeInfoStore();

  // description: 사원 - 선택된 사용자정의코드 //
  const { selectedUserDefineCode, setSelectedUserDefineCode }  = useSelectedEmployeeInfoStore();
  // description: 사원 - 선택된 사용자정의코드 detailName //
  const { selectedEmploymentType, setSelectedEmploymentTypeName } = useSelectedEmployeeInfoStore();
  const { selectedEmploymentTypeCode, setSelectedEmploymentTypeCode } = useSelectedEmployeeInfoStore();
  const { selectedGenderName, setSelectedGenderName } = useSelectedEmployeeInfoStore();
  const { selectedGenderCode, setSelectedGenderCode } = useSelectedEmployeeInfoStore();
  
  //          function            //

  //          event handler           //
  // description : 사원명 입력
  const onSystemEmplyeeNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSystemEmployeeName(event.target.value);
  }

  // description: 닫기 클릭
  const onCloseButtonClickHandler = () => {
    setSystemEmpDepartmentOpen(false);
    setSystemEmpUserDefineOpen(false);

    setSelectedEmpDepartmentCode(0);
    setSelectedEmpDepartmentName("");

    setSelectedEmployeeCode(0);
    setSelectedUserDefineCode(0);

    setSelectedGenderCode(0);
    setSelectedGenderName("");
    setSelectedEmploymentTypeCode(0);
    setSelectedEmploymentTypeName("");
  }

  //! 부서 창
    // description: 조회된 부서 정보 store //
  const { departmentList, setDepartmentList, resetDepartmentList } = useDepartmentResponseStore();
  // description: 부서 정보 초기화
  const { resetDepartmentInfo } = useDepartmentInfoStore();
  // description: 부서 정보(창) 조회 응답 함수 //
  const getDepartmentListResponseHandler = (responsebody: GetDepartmentListResponseDto | ResponseDto ) => {
      const {code} = responsebody;
      if(code === 'NE') alert('존재하지않는 회원입니다.');
      if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
      if(code === 'DE') alert('데이터베이스 에러');
      if(code === 'NP') alert('권한이 없습니다.');
      if(code !== 'SU') return
      setSystemEmpDepartmentOpen(true);
      setSystemEmpUserDefineOpen(false);
    
      const { departmentList } = responsebody as GetDepartmentListResponseDto;
      setDepartmentList(departmentList);
  }   
  // description: 부서조회 이벤트 핸들러 //
  const onDepartmentListSearchButtonClickHandler = ( EmployeeCode: number) => {
    setSelectedEmployeeCode(EmployeeCode);
    
    setSelectedEmpDepartmentCode(0);
    setSelectedEmpDepartmentName("");
    setDepartmentCode(0);
    setDepartmentName("");

    resetDepartmentInfo();
    resetDepartmentList();

    getDepartmentListRequest("").then(getDepartmentListResponseHandler);
 }   

  // description: 사원 - 부서코드 Detail 선택 //
  const onDepartmentDetailDoubleClickHandler = (DepartmentCode: number, DepartmentName: string ) => {
    if (selectedEmployeeCode != 0){
      setSelectedEmpDepartmentCode(DepartmentCode);
      setSelectedEmpDepartmentName(DepartmentName);

    } else {
      setDepartmentCode(DepartmentCode);
      setDepartmentName(DepartmentName);
    }    

    setSystemEmpDepartmentOpen(false);
  }

  //! 코드도움
  // description: 사원 -  코드도움 조회 응답 함수 //
  const getSystemEmpUserDefineDetialResponseHandler = (responsebody: GetSystemEmpUserDefineListResponseDto | ResponseDto) => {
    const {code} = responsebody;
    if(code === 'NE') alert('존재하지않는 회원입니다.');
    if(code === 'VF') alert('필수 데이터를 입력하지 않았습니다.');
    if(code === 'DE') alert('데이터베이스 에러');
    if(code === 'NP') alert('권한이 없습니다.');
    if(code !== 'SU') return;

    const { systemEmpUserDefineList } = responsebody as GetSystemEmpUserDefineListResponseDto;

    setSystemEmpUserDefineOpen(true);
    setSystemEmpDepartmentOpen(false);
    resetsystemEmpUserDefineList();    
    setsystemEmpUserDefineList(systemEmpUserDefineList);
  }

  //# 조회된 사원List - 사용자정의코드 선택 //
  // description: 사용자정의코드 더블클릭
  const onUserDefineDoubleClickHandler = (UserDefineNumber: number, EmployeeCode: number) => {
    setSelectedEmployeeCode(EmployeeCode);
    setSelectedUserDefineCode(UserDefineNumber);
    setSelectedGenderCode(0);
    setSelectedGenderName("");
    setSelectedEmploymentTypeCode(0);
    setSelectedEmploymentTypeName("");
    getSystemEmpUserDefineListRequest(UserDefineNumber).then(getSystemEmpUserDefineDetialResponseHandler)    
  } 

  //# 신규사원 - 사용자정의코드 선택 //
  // description: 사용자정의코드 더블클릭
  const onNewUserDefineDoubleClickHandler = (UserDefineNumber: number) => {
    setSelectedEmpDepartmentCode(0);
    setSelectedEmpDepartmentName("");

    setSelectedEmployeeCode(0);
    setSelectedUserDefineCode(0);
    setSelectedEmployeeCode(0);
    setSelectedUserDefineCode(0);
    setSelectedEmploymentTypeCode(0);
    setSelectedEmploymentTypeName(""); 
    setSelectedNewUserDefineCode(UserDefineNumber);
    getSystemEmpUserDefineListRequest(UserDefineNumber).then(getSystemEmpUserDefineDetialResponseHandler)    
  }

  // description: 사원 - 코드도움 detail 선택 //
  const onUserDefineDetailDoubleClickHandler = (UserDefineDetailCode: number, UserDefineDetailName: string ) => {
    console.log("selectedUserDefineCode" + selectedUserDefineCode)
    if (selectedEmployeeCode != 0){
      if (selectedUserDefineCode == 9011) {
        setSelectedGenderName(UserDefineDetailName);
        setSelectedGenderCode(UserDefineDetailCode);
      } else if (selectedUserDefineCode == 9003) {
        setSelectedEmploymentTypeName(UserDefineDetailName);
        setSelectedEmploymentTypeCode(UserDefineDetailCode);
      }
    } else {
      if (selectedNewUserDefineCode == 9011) {
        setGender(UserDefineDetailName);
        setGenderCode(UserDefineDetailCode);
      } else if (selectedNewUserDefineCode == 9003) {
        setEmploymentType(UserDefineDetailName);
        setEmploymentTypeCode(UserDefineDetailCode);
      }
    }
    setSystemEmpUserDefineOpen(false);

  }

  //! 기존
  // 기존사원 - 입사일 변경 이벤트 //
  const onExistJoinDateChangeEvent = (event: ChangeEvent<HTMLInputElement>, systemEmployeeInfo: SystemEmployeeInfo) => {
    if (!systemEmployeeList) return;
    const value = event.target.value;
    const newSystemEmployeeInfo: SystemEmployeeInfo = { ...systemEmployeeInfo, joinDate: value };
    const newSystemEmployeeList: SystemEmployeeInfo[] = systemEmployeeList.map(item => item.employeeCode === newSystemEmployeeInfo.employeeCode ? newSystemEmployeeInfo : item);
    setSystemEmployeeList(newSystemEmployeeList);
  }  

  // 기존사원 - 퇴사일 변경 이벤트 //
  const onExistResignationDateChangeEvent = (event: ChangeEvent<HTMLInputElement>, systemEmployeeInfo: SystemEmployeeInfo) => {
    if (!systemEmployeeList) return;
    const value = event.target.value;
    const newSystemEmployeeInfo: SystemEmployeeInfo = { ...systemEmployeeInfo, resignationDate: value };
    const newSystemEmployeeList: SystemEmployeeInfo[] = systemEmployeeList.map(item => item.employeeCode === newSystemEmployeeInfo.employeeCode ? newSystemEmployeeInfo : item);
    setSystemEmployeeList(newSystemEmployeeList);
  }    

  // 기존사원 - 주민번호 변경 이벤트 //
  const onExistRegistrationNumberChangeEvent = (event: ChangeEvent<HTMLInputElement>, systemEmployeeInfo: SystemEmployeeInfo) => {
    if (!systemEmployeeList) return;
    const value = event.target.value;
    const newSystemEmployeeInfo: SystemEmployeeInfo = { ...systemEmployeeInfo, registrationNumber: value };
    const newSystemEmployeeList: SystemEmployeeInfo[] = systemEmployeeList.map(item => item.employeeCode === newSystemEmployeeInfo.employeeCode ? newSystemEmployeeInfo : item);
    setSystemEmployeeList(newSystemEmployeeList);
  }    

  //! 신규
  // 신규사원 - 사원명 변경 이벤트 //
  const onEmployeeNameChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setEmployeeName(event.target.value);
  }
  // 신규사원 - 입사일 변경 이벤트 //
  const onJoinDateChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setJoinDate(event.target.value);
  }

  // 신규사원 - 퇴사일 변경 이벤트 //
  const onResignationDateChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setResignationDate(event.target.value);
  }  

  // 신규사원 - 주민번호 변경 이벤트 //
  const onRegistrationNumberChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setRegistrationNumber(event.target.value);
  }

  //          effect            //
  useEffect(() => {
    resetSystemEmployeeList();
    resetSystemEmployeeRequest();
  },[pathname]) 

  //          render            //
  return (
     <div id='system-employee-info-wrapper'>
      <SystemMenu />
      <div className='system-employee-info-right'>
        <div className='system-employee-info-right-body'>
          <div className='system-employee-info-right-body-top'>
            <div className='system-employee-info-right-body-top-title'>
              <div className='system-employee-info-right-body-top-title-text'>사원등록</div>
              <div className='system-employee-info-right-body-top-title-divider'></div>
            </div>
            <div className='system-employee-info-right-body-top-search-container'>
              <div className='system-employee-info-right-body-top-search-employee'>
                <div className='system-employee-info-right-body-top-search-employee-text' >사원명</div>
              </div>
              <input className='system-employee-info-right-top-search-employee-box-name-box-text' type='text' onChange={onSystemEmplyeeNameChangeHandler} />
            </div>
          </div>
          <div className='system-employee-info-middle'>
            <div className='system-employee-info-middle-left'>
              <div className='system-employee-info-middle-left-top'>
                <div className='system-employee-info-middle-left-top-text'>사원정보등록</div>
              </div>
              <div className='system-employee-info-middle-left-bottom'>
                <div className='system-employee-info-middle-left-bottom-container'>
                  <div className='system-employee-info-middle-left-bottom-table'>
                    <div className='system-employee-info-middle-left-bottom-table-title'>
                      <div className='system-employee-info-middle-left-bottom-table-title-no'>No</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-employee-code'>사원번호</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-employee-name'>사원명</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-gender' onDoubleClick={() => onUserDefineDoubleClickHandler} >성별</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-gender-code'></div>
                      <div className='system-employee-info-middle-left-bottom-table-title-department-name'>부서명</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-department-code'></div>
                      <div className='system-employee-info-middle-left-bottom-table-title-join-date'>입사일</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-resignation-date'>퇴사일</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-registration-number'>주민번호</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-employment-type' onDoubleClick={() => onUserDefineDoubleClickHandler} >재직구분</div>
                      <div className='system-employee-info-middle-left-bottom-table-title-employment-type-code'></div>
                    </div>
                    <div className='system-employee-info-middle-left-bottom-table-body'>
                      { systemEmployeeList !== null &&
                          systemEmployeeList.map((item) => (
                            <div className='system-emplyee-info-middle-left-bottom-table-body-list'>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-no'>{item.no}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-employee-code'>{item.employeeCode}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-employee-name'>{item.employeeName}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-gender'                 onDoubleClick={() => onUserDefineDoubleClickHandler(9011, item.employeeCode)} >{ (selectedEmployeeCode == item.employeeCode && selectedGenderName != "")  ? selectedGenderName : item.gender }</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-gender-code'            hidden >{ (selectedEmployeeCode == item.employeeCode && selectedGenderCode != 0) ? selectedGenderCode : item.genderCode }</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-department-name'        onDoubleClick={() => onDepartmentListSearchButtonClickHandler(item.employeeCode)} >{(selectedEmployeeCode == item.employeeCode && selectedEmpDepartmentName != "") ? selectedEmpDepartmentName : item.departmentName}</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-department-code'        hidden>{(selectedEmployeeCode == item.employeeCode && selectedEmpDepartmentCode != 0) ? selectedEmpDepartmentCode : item.departmentCode}</div>
                              <input className='system-employee-info-middle-left-bottom-table-body-list-join-date'            defaultValue={item.joinDate}            onChange={event => onExistJoinDateChangeEvent(event, item)}           onFocus={() => setSelectedEmployeeCode(item.employeeCode)}/>
                              <input className='system-employee-info-middle-left-bottom-table-body-list-resignation-date'     defaultValue={item.resignationDate}     onChange={event => onExistResignationDateChangeEvent(event, item)}    onFocus={() => setSelectedEmployeeCode(item.employeeCode)} />
                              <input className='system-employee-info-middle-left-bottom-table-body-list-registration-number'  defaultValue={item.registrationNumber}  onChange={event => onExistRegistrationNumberChangeEvent(event, item)} onFocus={() => setSelectedEmployeeCode(item.employeeCode)} />
                              <div className='system-employee-info-middle-left-bottom-table-body-list-employment-type'        onDoubleClick={() => onUserDefineDoubleClickHandler(9003, item.employeeCode)} >{ (selectedEmployeeCode == item.employeeCode && selectedEmploymentType != "") ? selectedEmploymentType : item.employmentType }</div>
                              <div className='system-employee-info-middle-left-bottom-table-body-list-employment-type-code'   hidden>{ (selectedEmployeeCode == item.employeeCode && selectedEmploymentTypeCode != 0) ? selectedEmploymentTypeCode : item.employmentTypeCode }</div>                              
                            </div>
                      ))}
                      <div className='system-employee-info-middle-left-bottom-table-body-new'>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-no'></div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-employee-code'></div>
                        <input className='system-employee-info-middle-left-bottom-table-body-new-employee-name' value={employeeName} type="text" onChange={onEmployeeNameChangeEvent} />
                        <div className='system-employee-info-middle-left-bottom-table-body-new-gender' onDoubleClick={() => onNewUserDefineDoubleClickHandler(9011)}>{gender}</div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-gender-code' hidden>{genderCode}</div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-department-name' onDoubleClick={() => onDepartmentListSearchButtonClickHandler(0)}>{empDepartmentName}</div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-department-code' hidden>{empDepartmentCode}</div>
                        <input className='system-employee-info-middle-left-bottom-table-body-new-join-date' value={joinDate} type="text" onChange={onJoinDateChangeEvent} />
                        <input className='system-employee-info-middle-left-bottom-table-body-new-resignation-date' value={resignationDate} type="text" onChange={onResignationDateChangeEvent} />
                        <input className='system-employee-info-middle-left-bottom-table-body-new-registration-number' value={registrationNumber} type="text" onChange={onRegistrationNumberChangeEvent} />
                        <div className='system-employee-info-middle-left-bottom-table-body-new-employment-type' onDoubleClick={() => onNewUserDefineDoubleClickHandler(9003)}>{employmentType}</div>
                        <div className='system-employee-info-middle-left-bottom-table-body-new-employment-type-code' hidden>{employmentTypeCode}</div>                
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {
              systemEmpUserDefineOpen &&
                  <div className='system-employee-info-middle-right'>
                    <div className='system-employee-info-middle-right-user-define'>
                      <div className='system-employee-info-middle-right-user-define-top'>
                        <div className='system-employee-info-middle-right-user-define-top-right'>
                          <div className='system-employee-info-middle-right-user-define-top-right-text'>{systemEmpUserDefineList !== null && systemEmpUserDefineList[0].systemUserDefineName}</div>
                          <div className='system-employee-info-middle-right-user-define-top-right-code'>( {systemEmpUserDefineList !== null && systemEmpUserDefineList[0].systemUserDefineCode} )</div>
                        </div>
                        <div className='system-employee-info-middle-right-user-define-top-left'>
                          <div className='system-employee-info-middle-right-user-define-top-left-text' onClick={onCloseButtonClickHandler}>닫기</div>
                          <div className='system-employee-info-middle-right-user-define-top-left-icon'></div>
                        </div>
                      </div>
                      <div className='system-employee-info-middle-right-user-define-container'>
                        <div className='system-employee-info-middle-right-user-define-list'>
                          <div className='system-employee-info-middle-right-user-define-list-title'>
                            <div className='system-employee-info-middle-right-user-define-list-title-detail-no'>No</div>
                            <div className='system-employee-info-middle-right-user-define-list-title-detail-code'>세부코드</div>
                            <div className='system-employee-info-middle-right-user-define-list-title-detail-name'>세부명</div>
                          </div>
                          {
                            systemEmpUserDefineList !== null &&
                            systemEmpUserDefineList.map((item) => (
                              <div className='system-employee-info-middle-right-user-define-list-body'>
                                <div className='system-employee-info-middle-right-user-define-list-body-detail-no'>{item.no}</div>
                                <div className='system-employee-info-middle-right-user-define-list-body-detail-code'>{item.systemUserDefineDetailCode}</div>
                                <div className='system-employee-info-middle-right-user-define-list-body-detail-name' onDoubleClick={() => { onUserDefineDetailDoubleClickHandler(item.systemUserDefineDetailCode, item.systemUserDefineDetailName);} } >{item.systemUserDefineDetailName}</div>                      
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
            }       
            {
              systemEmpDepartmentOpen &&
                  <div className='system-employee-info-middle-right'>
                    <div className='system-employee-info-middle-right-user-define'>
                      <div className='system-employee-info-middle-right-user-define-top'>
                        <div className='system-employee-info-middle-right-user-define-top-right'>
                          <div className='system-employee-info-middle-right-user-define-top-right-text'>부서 정보</div>
                        </div>
                        <div className='system-employee-info-middle-right-user-define-top-left'>
                          <div className='system-employee-info-middle-right-user-define-top-left-text' onClick={onCloseButtonClickHandler}>닫기</div>
                          <div className='system-employee-info-middle-right-user-define-top-left-icon'></div>
                        </div>
                      </div>
                      <div className='system-employee-info-middle-right-user-define-container'>
                        <div className='system-employee-info-middle-right-user-define-list'>
                          <div className='system-employee-info-middle-right-user-define-list-title'>
                            <div className='system-employee-info-middle-right-user-define-list-title-detail-no'>No</div>
                            <div className='system-employee-info-middle-right-user-define-list-title-detail-code'>부서코드</div>
                            <div className='system-employee-info-middle-right-user-define-list-title-detail-name'>부서명</div>
                          </div>
                          {
                            departmentList !== null &&
                            departmentList.map((item) => (
                              <div className='system-employee-info-middle-right-user-define-list-body'>
                                <div className='system-employee-info-middle-right-user-define-list-body-detail-no'>{item.no}</div>
                                <div className='system-employee-info-middle-right-user-define-list-body-detail-code'>{item.departmentCode}</div>
                                <div className='system-employee-info-middle-right-user-define-list-body-detail-name' onDoubleClick={() => { onDepartmentDetailDoubleClickHandler(item.departmentCode, item.departmentName);} } >{item.departmentName}</div>                      
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
            }         
          </div>
        </div>        
      </div>
     </div>
  )
}
