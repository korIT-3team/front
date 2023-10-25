import React from 'react'
import './style.css'

import { useLocation, useNavigate } from 'react-router-dom';
import { HUMAN_ANNUAL_PRICE, HUMAN_APPLY_DAY_OFF, HUMAN_APPLY_DAY_OFF_CANCEL, HUMAN_EMPLOYEE_INFO, HUMAN_EMPLOYEE_INFO_DETAIL, HUMAN_INCENTIVE, HUMAN_INCENTIVE_DELETE, HUMAN_MANAGE_DAY_OFF, HUMAN_WORK_TIME, HUMAN_WORK_TIME_DELETE } from 'src/constants';

export default function HumanMenu() {

  const { pathname } = useLocation();
  //          function          //
  const navigator = useNavigate();
  const clickEmployeeInfoMenu = pathname.includes(HUMAN_EMPLOYEE_INFO);
  const clickAnnualPriceMenu = pathname.includes(HUMAN_ANNUAL_PRICE);
  const clickIncentiveMenu = pathname.includes(HUMAN_INCENTIVE);
  const cliskWorkTimeMenu = pathname.includes(HUMAN_WORK_TIME);

  //          event handler          //
  const onEmployeeInfoButtonClickHandler = () => {
    navigator(HUMAN_EMPLOYEE_INFO);
  }
  const onEmployeeInfoDetailButtonClickHandler = (employee_code: number | string) => {
    navigator(HUMAN_EMPLOYEE_INFO_DETAIL(employee_code));
  }
  const onAnnualPriceButtonClickHandler = () => {
    navigator(HUMAN_ANNUAL_PRICE);
  }
  const onIncentiveButtonClickHandler = () => {
    navigator(HUMAN_INCENTIVE);
  }
  const onIncentiveDeleteButtonClickHandler = (incentive_code: number | string) => {
    navigator(HUMAN_INCENTIVE_DELETE(incentive_code));
  }
  const onWorkTimeButtonClickHandler = () => {
    navigator(HUMAN_WORK_TIME);
  }
  const onWorkTimeDeleteButtonClickHandler = (work_date:Date, employee_code:number | string) => {
    navigator(HUMAN_WORK_TIME_DELETE(work_date, employee_code));
  }
  

  return (
    <div id='human-menu'>
      <div className='human-menu-left'>
        <div className='human-menu-left-top'>
          <div className='human-menu-left-top-text'>인사관리</div>
        </div>
        <div className='human-menu-left-detail'>
          <div className='human-menu-left-detail-left'>
            <div className='vertical-divider'></div>
          </div>
          <div className='human-menu-left-detail-right'>
            <div className='human-menu-left-detail-right-text'>
              <div className={clickEmployeeInfoMenu ? 'employee-info-registration-active' : 'employee-info-registration'} 
                onClick={onEmployeeInfoButtonClickHandler}>인사정보등록</div>
              <div className={clickAnnualPriceMenu ? 'annual-price-info-registration-active' : 'annual-price-info-registration'} 
                onClick={onAnnualPriceButtonClickHandler}>연봉정보등록</div>
              <div className={clickIncentiveMenu ? 'incentive-info-registration-active' : 'incentive-info-registration'}
                onClick={onIncentiveButtonClickHandler}>급/상여정보등록</div>
              <div className={cliskWorkTimeMenu ? 'worktime-info-registration-active' : 'worktime-info-registration'} 
                onClick={onWorkTimeButtonClickHandler}>근태정보입력</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
