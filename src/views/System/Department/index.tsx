import React, {ChangeEvent, useEffect, useState} from 'react'
import './style.css'
import SystemMenu from '../SystemMenu'
import { useDepartmentInfoStore, useDepartmentRequestStore, useDepartmentResponseStore, useSelectedDepartmentStore, useUserStore } from 'src/stores'
import { useCookies } from 'react-cookie';
import { useLocation, useNavigate } from 'react-router-dom';
import { GetDepartmentInfoResponseDto } from 'src/interfaces/response/system';
import ResponseDto from 'src/interfaces/response/response.dto';
import { getDepartmentListRequest } from 'src/apis';
import { DepartmentInfo } from 'src/stores/departmentlist.response.store';

export default function Employee() {

  //          state          //
  // description: path 상태 //
  const {pathname} = useLocation();
  // description: 로그인한 사용자의 정보 상태 //
  const { user, setUser } = useUserStore();
  // description: 부서조회 조건 //
  const {setDepartmentName, resetDepartmentRequest} = useDepartmentRequestStore();
  // description: 부서 정보 상태 //
  const {setDepartmentNameInfo, setDepartmentStartDate, setDepartmentEndDate, setDepartmentTelNumber, setDepartmentFax} = useDepartmentInfoStore();
  const {departmentNameInfo, departmentStartDate, departmentEndDate, departmentTelNumber, departmentFax} = useDepartmentInfoStore();
  // description: 부서List 정보 불러오기 //
  const {departmentList, setDepartmentList, resetDepartmentList} = useDepartmentResponseStore();
  // const [departmentList, setDepartmentList] = useState<DepartmentListResponseDto[]>([]);
  // description: 선택 부서 코드 //
  const {selectedDepartmentCode, setSelectedDepartmentCode} = useSelectedDepartmentStore();
  // description: 기존 부서 선택 상태 //
  const [deptInfoList, setDeptInfoList] = useState<boolean>(false);
  // description: 새로 부서 선책 상태 //
  const [newDeptInfo, setNewDeptInfo] = useState<boolean>(true);

 
  //          function            //
  const navigator = useNavigate();

  //          event handler           //
  // description: 부서정보 수정을 위한 클릭 //
  const onDepartmentInfoListClickHandler = () => {
    setDeptInfoList(true);
    setNewDeptInfo(false);
  }
  
  // description: 새로운 부서정보 입력을 위한 클릭 //
  const onNewDepartmentInfoClickHandler = () => {
    setDeptInfoList(false);
    setNewDeptInfo(true);
  }

  // description: 부서명 입력 //
  const onDepartmentNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartmentName(event.target.value);
  }

  //!       존재하는 부서       //
  // description: 부서 시작일 변경 이벤트 처리 //
  const onExistDepartmentStartDateChangeEvent = (event: ChangeEvent<HTMLInputElement>, departmentInfo: DepartmentInfo) => {
    
    if (!departmentList) return;
    const value = event.target.value;
    const newDepartmentInfo: DepartmentInfo = { ...departmentInfo, departmentStartDate: value };
    const newDepartmentList: DepartmentInfo[] = departmentList.map(item => item.departmentCode === newDepartmentInfo.departmentCode ? newDepartmentInfo : item);
    setDepartmentList(newDepartmentList);
  }
  // description: 부서 종료일 변경 이벤트 처리 //
  const onExistDepartmentEndDateChangeEvent = (event: ChangeEvent<HTMLInputElement>, departmentInfo: DepartmentInfo) => {
    
    if (!departmentList) return;
    const value = event.target.value;
    const newDepartmentInfo: DepartmentInfo = { ...departmentInfo, departmentEndDate: value };
    const newDepartmentList: DepartmentInfo[] = departmentList.map(item => item.departmentCode === newDepartmentInfo.departmentCode ? newDepartmentInfo : item);
    setDepartmentList(newDepartmentList);
  }
  // description: 부서 전화번호 변경 이벤트 처리 //
  const onExistDepartmentTelNumberChangeEvent = (event: ChangeEvent<HTMLInputElement>, departmentInfo: DepartmentInfo) => {
    
    if (!departmentList) return;
    const value = event.target.value;
    const newDepartmentInfo: DepartmentInfo = { ...departmentInfo, departmentTelNumber: value };
    const newDepartmentList: DepartmentInfo[] = departmentList.map(item => item.departmentCode === newDepartmentInfo.departmentCode ? newDepartmentInfo : item);
    setDepartmentList(newDepartmentList);
  }
  // description: 부서 Fax 변경 이벤트 처리 //
  const onExistDepartmentFaxChangeEvent = (event: ChangeEvent<HTMLInputElement>, departmentInfo: DepartmentInfo) => {
    
    if (!departmentList) return;
    const value = event.target.value;
    const newDepartmentInfo: DepartmentInfo = { ...departmentInfo, departmentFax: value };
    const newDepartmentList: DepartmentInfo[] = departmentList.map(item => item.departmentCode === newDepartmentInfo.departmentCode ? newDepartmentInfo : item);
    setDepartmentList(newDepartmentList);
  }
  //!       신규 부서       //
  // description: 부서명 변경 이벤트 처리 //
  const onDepartmentNameChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartmentNameInfo(event.target.value);
  }
  // description: 부서 시작일 변경 이벤트 처리 //
  const onDepartmentStartDateChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartmentStartDate(event.target.value);
  }
  // description: 부서 종료일 변경 이벤트 처리 //
  const onDepartmentEndDateChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartmentEndDate(event.target.value);
  }
  // description: 부서 전화번호 변경 이벤트 처리 //
  const onDepartmentTelNumberChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartmentTelNumber(event.target.value);
  }
  // description: 부서 Fax 변경 이벤트 처리 //
  const onDepartmentFaxChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartmentFax(event.target.value);
  }

  //          effect            //
  useEffect(() => {
    resetDepartmentList();
    resetDepartmentRequest();
  }, [pathname])


  //          render          // 
  return (
      <div id='department-info-wrapper'>
        <SystemMenu />
        <div className='department-info-right'>
          <div className='department-info-right-top'>
            <div className='department-info-right-top-title'>부서등록</div>
            <div className='department-info-right-top-divider'></div>
          </div>
          <div className='department-info-right-top-search-container'>
            <div className='department-info-right-top-search-dept'>
              <div className='department-info-right-top-search-dept-text'>부서명</div>
            </div>
            <input className='department-info-right-top-search-dept-box-name-box-text' type="text" onChange={onDepartmentNameChangeHandler} />
          </div>
          <div className='department-info-middle'>
          <div className='department-info-middle-left'>
            <div className='department-info-middle-left-top'>
              <div className='department-info-middle-left-top-text'>부서정보등록</div>
            </div>
            <div className='department-info-middle-left-bottom'>
              <div className='department-info-middle-left-bottom-container'>
                <div className='department-info-middle-left-bottom-table'>
                  <div className='department-info-middle-left-bottom-table-title'>
                    <div className='department-info-middle-left-bottom-table-title-no'>No</div>
                    <div className='department-info-middle-left-bottom-table-title-dept-code'>부서코드</div>
                    <div className='department-info-middle-left-bottom-table-title-dept-name'>부서명</div>
                    <div className='department-info-middle-left-bottom-table-title-start-date'>시작일</div>
                    <div className='department-info-middle-left-bottom-table-title-end-date'>종료일</div>
                    <div className='department-info-middle-left-bottom-table-title-dept-tel'>부서전화번호</div>
                    <div className='department-info-middle-left-bottom-table-title-dept-fax'>부서fax</div>
                  </div>
                  <div className='department-info-middle-left-bottom-table-container'>
                    { departmentList !== null &&
                      departmentList.map((item) => (
                        <div className='department-info-middle-left-bottom-table-body' >
                          <div className='department-info-middle-left-bottom-table-body-no'         onClick={onDepartmentInfoListClickHandler}>{item.no}</div>
                          <div className='department-info-middle-left-bottom-table-body-dept-code'  onClick={onDepartmentInfoListClickHandler}>{item.departmentCode}</div>
                          <div className='department-info-middle-left-bottom-table-body-dept-name'  onClick={onDepartmentInfoListClickHandler}>{item.departmentName}</div>
                          { deptInfoList ? (<input className='department-info-middle-left-bottom-table-body-start-date' defaultValue={item.departmentStartDate} type="text" onChange={event => onExistDepartmentStartDateChangeEvent(event, item)}  onFocus={() => setSelectedDepartmentCode(item.departmentCode)} />) : (<input className='department-info-middle-left-bottom-table-body-start-date' defaultValue={item.departmentStartDate} type="text" disabled />) }
                          { deptInfoList ? (<input className='department-info-middle-left-bottom-table-body-end-date'   defaultValue={item.departmentEndDate}   type="text" onChange={event => onExistDepartmentEndDateChangeEvent(event, item)}    onFocus={() => setSelectedDepartmentCode(item.departmentCode)} />) : (<input className='department-info-middle-left-bottom-table-body-end-date'   defaultValue={item.departmentEndDate}   type="text" disabled />) }
                          { deptInfoList ? (<input className='department-info-middle-left-bottom-table-body-dept-tel'   defaultValue={item.departmentTelNumber} type="text" onChange={event => onExistDepartmentTelNumberChangeEvent(event, item)}  onFocus={() => setSelectedDepartmentCode(item.departmentCode)} />) : (<input className='department-info-middle-left-bottom-table-body-dept-tel'   defaultValue={item.departmentTelNumber} type="text" disabled />) }
                          { deptInfoList ? (<input className='department-info-middle-left-bottom-table-body-dept-fax'   defaultValue={item.departmentFax}       type="text" onChange={event => onExistDepartmentFaxChangeEvent(event, item)}        onFocus={() => setSelectedDepartmentCode(item.departmentCode)} />) : (<input className='department-info-middle-left-bottom-table-body-dept-fax'   defaultValue={item.departmentFax}       type="text" disabled />) }
                        </div>
                      ))}
                    <div className='department-info-middle-left-bottom-table-body-new' onClick={onNewDepartmentInfoClickHandler} onFocus={() => setSelectedDepartmentCode(null)}>
                      <div className='department-info-middle-left-bottom-table-body-new-no' ></div>
                      <div className='department-info-middle-left-bottom-table-body-new-dept-code'></div>
                        <input className='department-info-middle-left-bottom-table-body-new-dept-name' value={departmentNameInfo}  type="text" onChange={onDepartmentNameChangeEvent} />
                        <input className='department-info-middle-left-bottom-table-body-new-start-date' value={departmentStartDate}  type="text" onChange={onDepartmentStartDateChangeEvent} />
                        <input className='department-info-middle-left-bottom-table-body-new-end-date'   value={departmentEndDate}    type="text" onChange={onDepartmentEndDateChangeEvent} />
                        <input className='department-info-middle-left-bottom-table-body-new-dept-tel'   value={departmentTelNumber}  type="text" onChange={onDepartmentTelNumberChangeEvent} />
                        <input className='department-info-middle-left-bottom-table-body-new-dept-fax'   value={departmentFax}        type="text" onChange={onDepartmentFaxChangeEvent} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className='department-info-right-bottom'></div>
        </div>
      </div>
  )
}