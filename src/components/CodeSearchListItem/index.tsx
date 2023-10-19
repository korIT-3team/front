import React, { useState } from 'react'
import './style.css';
import SearchCodeResponseDto from 'src/interfaces/response/common/search-code.response.dto';

interface Props{
     label : string;
     onCloseButtonClick : () => void;
     dtoList: SearchCodeResponseDto[];
}

export default function CodeSearchListItem({label, dtoList, onCloseButtonClick} : Props) {
     //!          state          //
     
     //!          function          //
     const isDeptSearch = label.includes('부서');
     const isEmployeeSearch = label.includes('사원');
     const isCustomerSearch = label.includes('거래처');
     const isProjectSearch = label.includes('프로젝트');

     //!             event handler              //
     

     
     //!         render : 데이터가 담기는 아이템        //
     const DataItem = ( item : SearchCodeResponseDto) => {
          return (
               <>
                    <div className='code-item-info-middle-right-user-define-list-body'>
                         <div className='code-item-info-middle-right-user-define-list-body-detail-no'>{item.no}</div>
                         <div className='code-item-info-middle-right-user-define-list-body-detail-code'>{item.detailCode}</div>
                         <div className='code-item-info-middle-right-user-define-list-body-detail-name'>{item.name}</div>                      
                    </div>
               </>
          )
     }

     //!          render          //
     return (
          <div className='code-item-info-middle-right'>
               <div className='code-item-info-middle-right-user-define'>
                    <div className='code-item-info-middle-right-user-define-top'>
                         <div className='code-item-info-middle-right-user-define-top-right'>
                              <div className='code-item-info-middle-right-user-define-top-right-text'>{label}</div>
                              <div className='code-item-info-middle-right-user-define-top-right-code'></div>
                         </div>
                         <div className='code-item-info-middle-right-user-define-top-left'>
                              <div className='code-item-info-middle-right-user-define-top-left-text' onClick={onCloseButtonClick}>X</div>
                              <div className='code-item-info-middle-right-user-define-top-left-icon'></div>
                         </div>
                         </div>
                         <div className='code-item-info-middle-right-user-define-container'>
                         <div className='code-item-info-middle-right-user-define-list'>
                              <div className='code-item-info-middle-right-user-define-list-title'>
                              <div className='code-item-info-middle-right-user-define-list-title-detail-no'>No</div>
                              <div className='code-item-info-middle-right-user-define-list-title-detail-code'>세부코드</div>
                              <div className='code-item-info-middle-right-user-define-list-title-detail-name'>세부명</div>
                              </div>
                              {/* objectList.map ->  DataItem item={item}*/}
                              {dtoList.map((item) => (<DataItem {...item} />))}
                         </div>
                    </div>
               </div>
          </div>
     )
}
