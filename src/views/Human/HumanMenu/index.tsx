import React from 'react'
import './style.css'

import { useNavigate } from 'react-router-dom';
import { HUMAN_ANNUAL_PRICE, HUMAN_APPLY_DAY_OFF, HUMAN_APPLY_DAY_OFF_CANCEL, HUMAN_EMPLOYEE_INFO, HUMAN_EMPLOYEE_INFO_DETAIL, HUMAN_INCENTIVE, HUMAN_INCENTIVE_DELETE, HUMAN_MANAGE_DAY_OFF, HUMAN_WORK_TIME, HUMAN_WORK_TIME_DELETE } from 'src/constants';

export default function HumanMenu() {

  const navigator = useNavigate();

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
  const onManageDayOffButtonClickHandler = () => {
    navigator(HUMAN_MANAGE_DAY_OFF);
  }
  const onApplyDayOffButtonClickHandler = () => {
    navigator(HUMAN_APPLY_DAY_OFF);
  }
  const onApplyDayOffDeleteButtonClickHandler = (apply_day_off_code: number | string) => {
    navigator(HUMAN_APPLY_DAY_OFF_CANCEL(apply_day_off_code));
  }
  const onWorkTimeButtonClickHandler = () => {
    navigator(HUMAN_WORK_TIME);
  }
  const onWorkTimeDeleteButtonClickHandler = (work_date:Date, employee_code:number | string) => {
    navigator(HUMAN_WORK_TIME_DELETE(work_date, employee_code));
  }
  

  return (
    <div></div>
  )
}
