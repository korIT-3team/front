import React, {useState, useEffect} from 'react'
import './style.css'
import SystemMenu from '../SystemMenu'
import { useUserStore } from 'src/stores'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { GetDepartmentInfoResponseDto } from 'src/interfaces/response/system';
import ResponseDto from 'src/interfaces/response/response.dto';
import DepartmentListResponseDto from 'src/interfaces/response/system/department-list.response.dto';
import { getDepartmentInfoRequest } from 'src/apis';

export default function Employee() {

  //          state          //
  // 로그인한 사용자의 정보 상태
  const { user, setUser } = useUserStore();
  // 쿠키 상태
  const [cookies, setCookie] = useCookies();
  // description: 부서 정보 불러오기
  const [departmentList, setDepartmentList] = useState<DepartmentListResponseDto[]>([]);

  //          function            //
  const navigator = useNavigate();
  // description: 부서 정보 불러오기 
  const getDepartmentInfoResponseHandler = (responsebody: GetDepartmentInfoResponseDto | ResponseDto) => {
    const { code } = responsebody;

    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code !== 'SU') return;

    const { departmentList } = responsebody as GetDepartmentInfoResponseDto;
    setDepartmentList(departmentList);

  }

  //          effect            //
  useEffect(() => {
    getDepartmentInfoRequest().then(getDepartmentInfoResponseHandler)
  }, [user])


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
            <input className='department-info-right-top-search-dept-box-name-box-text' type="text" />
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
                    { departmentList.map((item) => (
                      <div className='department-info-middle-left-bottom-table-body'>
                        <div className='department-info-middle-left-bottom-table-body-no'>{item.no}</div>
                        <div className='department-info-middle-left-bottom-table-body-dept-code'>{item.departmentCode}</div>
                        <input className='department-info-middle-left-bottom-table-body-dept-name' defaultValue={item.departmentName} type="text"/>
                        <input className='department-info-middle-left-bottom-table-body-start-date' defaultValue={item.departmentStartDate} type="text"/>
                        <input className='department-info-middle-left-bottom-table-body-end-date' defaultValue={item.departmentEndDate} type="text"/>
                        <input className='department-info-middle-left-bottom-table-body-dept-tel' defaultValue={item.departmetTelnumber} type="text"/>
                        <input className='department-info-middle-left-bottom-table-body-dept-fax' defaultValue={item.departmentFax} type="text"/>
                      </div>
                    )) }
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