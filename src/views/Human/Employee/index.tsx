import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import HumanMenu from '../HumanMenu'
import { GetDepartmentCodeListRequestDto, GetEmployeeCodeListRequestDto } from 'src/interfaces/request/common';
import { getDepartmentCodeListRequest, getEmployeeCodeListRequest, getEmploymentTypeRequest } from 'src/apis';
import GetSearchCodeListResponseDto from 'src/interfaces/response/common/get-search-code-list.response.dto';
import ResponseDto from 'src/interfaces/response/response.dto';
import SearchCodeResponseDto from 'src/interfaces/response/common/search-code.response.dto';
import { useHumanRequestStore, useHumanResponseStore } from 'src/stores';
import CodeSearchListItem from 'src/components/CodeSearchListItem';
import { useLocation } from 'react-router-dom';
import { HumanEmploymentTypeResponseDto } from 'src/interfaces/response/human';
import { GetEmploymentTypeListResponseDto } from 'src/interfaces/response/searchView';

export default function Employee() {

  //          state           //
  // description : path 상태 //
  const { pathname } = useLocation();  
  // description: 조회조건 정보 store //
  const { humanEmployeeCode, humanDepartmentCode, humanEmploymentType, sethumanEmployeeCode, sethumanDepartmentCode, sethumanEmploymentType, resetHumanReqeust} = useHumanRequestStore();
  // description: 조회조건 : 조건 검색창 오픈상태 //
  const [ open, setOpen ] = useState<boolean>(false);  
  // description: 조회조건 : 조건 검색창 상단제목라벨 //
  const [ label, setLabel ] =useState<string>('');  
  // description: 조회조건 : 조건 검색창 내부 데이터 상태 //
  const [ searchCodeList, setSearchCodeList ] = useState<SearchCodeResponseDto[]>([]);  
  // description: 조회조건 : 조건 작성자 사원명 //
  const [ employeeName, setEmployeeName ] =useState<string>('');  
  // description: 조회조건 : 조건 부서명 //
  const [ departmentName, setDepartmentName ] =useState<string>('');  
  // description: 조회조건 : 재직구분 리스트 Store //
  const [ employmentTypeList, setEmploymentTypeList ] = useState<HumanEmploymentTypeResponseDto[]>([]);
  // description: 사원List 상태 //
  const { humanList, setHumanList } = useHumanResponseStore();


    //          event handler           //
    // description: 검색창 조회목록 아이템 클릭 이벤트 //
    const onDataItemClickHandler = ( item : SearchCodeResponseDto ) => {
      if(label.includes('사원')){
        sethumanEmployeeCode(item.detailCode);
        setEmployeeName(item.name);
      }
      else if(label.includes('부서')){
        sethumanDepartmentCode(item.detailCode);
        setDepartmentName(item.name);
      }    
    }
    // description: 검색창 닫기 //
    const onCloseButtonClickHandler = () => {
      setOpen(false);
    }    

    // description: 검색창 사원목록 조회 응답 함수 //
    const getEmployeeCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {

      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
      setSearchCodeList(searchCodeList);
    }       
    // description : 검색버튼 사원코드창 열기 이벤트 //
    const onEmployeeSearchOpenButtonClickHandler = () => {
      setOpen(true);
      setLabel('사원코드도움');
      const data: GetEmployeeCodeListRequestDto = {
        employeeCode : humanEmployeeCode,
      }
      getEmployeeCodeListRequest(data).then(getEmployeeCodeListResponseHandelr);
    }

    // description: 검색창 부서목록 조회 응답 함수 //
    const getDepartmentCodeListResponseHandelr = (responsebody: GetSearchCodeListResponseDto | ResponseDto ) => {

      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { searchCodeList } = responsebody as GetSearchCodeListResponseDto;
      setSearchCodeList(searchCodeList);
    }    

    // description : 검색버튼 부서코드창 열기 이벤트 //
    const onDepartmentSearchOpenButtonClickHandler = () => {
      setOpen(true);
      setLabel('부서코드도움');
      const data: GetDepartmentCodeListRequestDto = {
        departmentCode : humanDepartmentCode,
      }
      getDepartmentCodeListRequest(data).then(getDepartmentCodeListResponseHandelr);
    }    

    // description: 재직구분 조회 응답 함수 //
    const getHumanEmploymentTypeListResponseHandler = (responsebody:GetEmploymentTypeListResponseDto | ResponseDto) => {
     
      const {code} = responsebody;
      if( code === 'NE') alert('존재하지않는 회원입니다.');
      if( code === 'DE') alert('데이터베이스 에러');
      if( code === 'NP') alert('권한이 없습니다.');
      if( code !== 'SU') return;

      const { employmentTypeList } = responsebody as GetEmploymentTypeListResponseDto;
      setEmploymentTypeList(employmentTypeList);

    }
    // description : 재직구분 선택 이벤트 //
    const onInvoiceTypeChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      sethumanEmploymentType(parseInt(event.target.value));
    }    
    

    //          effect            //
    // description : 뷰에 들어올 때 한번만 실행 //
    let flag = false;
    useEffect(()=>{
      if(flag == false){
        flag = true;
        return;
      }
      // description : 전표유형 콤보박스 리스트 호출
      getEmploymentTypeRequest().then(getHumanEmploymentTypeListResponseHandler);
    }, [])   

    // description : path가 바뀔 때마다 실행 //
    useEffect(()=>{
      resetHumanReqeust();
      
 }, [pathname])    


    return (
    <div>
      <div id='employee-info-wrapper'>
        <HumanMenu />
        <div className='employee-info-right'>
          <div className='employee-info-right-top'>
            <div className='employee-info-right-top-title'>인사정보등록</div>
            <div className='employee-info-right-top-divider'></div>
            <div className='employee-info-right-top-search-condition'>
              <div className='employee-info-right-top-search-dept'>
                <div className='employee-info-right-top-search-dept-text'>부서</div>
                <div className='employee-info-right-top-search-dept-box'>
                  <div className='employee-info-right-top-search-dept-box-code-box'>
                    <div className='employee-info-right-top-search-dept-box-code-box-text'>{humanDepartmentCode? humanDepartmentCode : ''}</div>
                  </div>
                  <div className='employee-info-right-top-search-button' onClick={ onDepartmentSearchOpenButtonClickHandler }>검색</div>
                  <div className='employee-info-right-top-search-dept-box-name-box'>
                    <div className='employee-info-right-top-search-dept-box-name-box-text'>{departmentName? departmentName : ''}</div>
                  </div>
                </div>
              </div>
              <div className='employee-info-right-top-search-employee'>
              <div className='employee-info-right-top-search-employee-text'>사원</div>
                <div className='employee-info-right-top-search-employee-box'>
                  <div className='employee-info-right-top-search-employee-box-code-box'>
                    <div className='employee-info-right-top-search-employee-box-code-box-text'>{humanEmployeeCode? humanEmployeeCode : ''}</div>
                  </div>
                  <div className='employee-info-right-top-search-button' onClick={ onEmployeeSearchOpenButtonClickHandler } >검색</div>
                  <div className='employee-info-right-top-search-employee-box-name-box'>
                    <div className='employee-info-right-top-search-employee-box-name-box-text'>{employeeName? employeeName : ''}</div>
                  </div>
                </div>              
              </div>
              <div className='employee-info-right-top-search-employment-status'>
                <div className='employee-info-right-top-search-employment-status-text'>재직구분</div>
                <div className='employee-info-right-top-search-employment-status-box'>
                  <div className='employee-info-right-top-search-employment-status-box-combo-box'>
                    <select className='invoice-right-top-search-employment-status-box-combo-box-text' onChange={onInvoiceTypeChangeHandler} name="employment-type" id="employment-type">
                      <option value="0">전체</option>
                      { employmentTypeList.map( ({userDefineDetailName, userDefineDetailCode}) => (<option value={userDefineDetailCode}>{userDefineDetailName}</option>))  }
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='employee-info-middle'>
          <div className='employee-info-middle-left'>
            <div className='employee-info-middle-left-top'>
              <div className='employee-info-middle-left-top-text'>사원 리스트</div>
            </div>
            <div className='employee-info-middle-left-bottom'>
              <div className='employee-info-middle-left-bottom-container'>
                <div className='employee-info-middle-left-bottom-table'>
                  <div className='employee-info-middle-left-bottom-table-title'>
                    <div className='employee-info-middle-left-bottom-table-title-no'>No</div>
                    <div className='employee-info-middle-left-bottom-table-title-employee-code'>사원번호</div>
                    <div className='employee-info-middle-left-bottom-table-title-employee-name'>사원명</div>
                    <div className='employee-info-middle-left-bottom-table-title-dept-name'>부서명</div>
                  </div>
                  { humanList !== null &&
                    humanList.map((item) => (                  
                      <div className='employee-info-middle-left-bottom-table-body'>
                        <div className='employee-info-middle-left-bottom-table-body-no'>{item.no}</div>
                        <div className='employee-info-middle-left-bottom-table-body-employee-code'>{item.employeeCode}</div>
                        <div className='employee-info-middle-left-bottom-table-body-employee-name'>{item.employeeName}</div>
                        <div className='employee-info-middle-left-bottom-table-body-dept-name'>{item.departmentName}</div>
                        </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='employee-info-middle-right'>
            <div className='employee-info-middle-right-top'>
              <div className='employee-info-middle-right-top-text'>인적 정보</div>
            </div>
            <div className='employee-info-middle-right-bottom'>
                <div className='employee-info-middle-right-bottom-employee-info-box'>
                  <div className='employee-info-middle-right-bottom-employee-info-box-left'>
                    <div className='employee-info-middle-right-bottom-employee-info-box-left-profile-box'>사진등록</div>
                  </div>
                  <div className='employee-info-middle-right-bottom-employee-info-box-right'>
                    <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1'>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-left'>
                        <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-left-text'>사원번호</div>
                        <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-left-box'></div>
                      </div>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-right'>
                        <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-left-text'>사원명</div>
                        <div className='employee-info-middle-right-bottom-employee-info-box-right-raw1-left-box'></div>                        
                      </div>
                    </div>
                    <div className='employee-info-middle-right-bottom-employee-info-box-right-raw2'>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw2-left'></div>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw2-right'></div>                      
                    </div>
                    <div className='employee-info-middle-right-bottom-employee-info-box-right-raw3'></div>
                    <div className='employee-info-middle-right-bottom-employee-info-box-right-raw4'>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw4-left'></div>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw4-right'></div>                       
                    </div>
                    <div className='employee-info-middle-right-bottom-employee-info-box-right-raw5'>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw5-left'></div>
                      <div className='employee-info-middle-right-bottom-employee-info-box-right-raw5-right'></div>                          
                    </div>
                  </div>
                </div>
                <div className='employee-info-middle-right-bottom-employee-info-detail-box'></div>
            </div>
          </div>
          {open && <CodeSearchListItem label={label} dtoList={searchCodeList} onCloseButtonClick={onCloseButtonClickHandler} onDataItemClickHandler={onDataItemClickHandler}/>}
        </div>
          <div className='employee-info-right-bottom'></div>
        </div>
      </div>
    </div>
  )
}