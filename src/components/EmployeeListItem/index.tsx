import React from 'react'
import './style.css'
import { EmployeeListView } from 'src/stores/employeelistview.response.store';

interface Props {
     item : EmployeeListView;
}

export default function EmployeeViewListItem({item} : Props) {
     //!          state          //
     // description: 리스트 상태 //
     const { no, employeeCode, employeeName, genderName, departmentName, position, email, employmentType } = item;

     return (
          <div className='employee-list-item'>
               <div className="employee-list-number">{no}</div>
               <div className="employee-list-code">{employeeCode}</div>
               <div className="employee-list-name">{employeeName}</div>
               <div className="employee-list-gender">{genderName}</div>
               <div className="employee-list-department">{departmentName}</div>
               <div className="employee-list-position">{position}</div>
               <div className="employee-list-email">{email}</div>
               <div className="employee-list-employement">{employmentType}</div>
          </div>
     )
}
