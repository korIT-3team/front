import React from 'react'
import AccountingMenu from '../AccountingMenu'
import './style.css'

export default function InvoiceDetail() {
  // 각 store 생성하고 상태에 따라서 노출시키기

  //!         render : 수주 카드        //
  const OrderInfoCard = () => {
    return(
      <>
        <div className='invoice-right-detail-text'>수주</div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>주문번호</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>판매계획코드</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>주문일자</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>거래처코드</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>수주금액</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>담당자</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-last-line-text'>수주상세</div>
          <div className='invoice-detail-last-line-box'>
            <div className='invoice-detail-last-line-box-code-box'>
              <input className='invoice-detail-last-line-box-code-box-text' type="text" />
            </div>
          </div>
        </div>
      </>
    )
  }

  //!         render : 매출 카드        //
  const SalesInfoCard = () => {
    return(
      <>
        <div className='invoice-right-detail-text'>매출</div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>매출번호</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>판매계획코드</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>마감일자</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>거래처코드</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>매출금액</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>담당자</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-last-line-text'>매출상세</div>
          <div className='invoice-detail-last-line-box'>
            <div className='invoice-detail-last-line-box-code-box'>
              <input className='invoice-detail-last-line-box-code-box-text' type="text" />
            </div>
          </div>
        </div>
      </>
    )
  }

  //!         render : 급/상여 카드        //
  const IncentiveInfoCard = () => {
    return(
      <>
        <div className='invoice-right-detail-text'>급/상여</div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>급/상여번호</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>구분</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>지급일자</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>수령자</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-last-line-text'>금액</div>
          <div className='invoice-detail-last-line-box'>
            <div className='invoice-detail-last-line-box-code-box'>
              <input className='invoice-detail-last-line-box-code-box-text' type="text" />
            </div>
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-last-line-text'>상세</div>
          <div className='invoice-detail-last-line-box'>
            <div className='invoice-detail-last-line-box-code-box'>
              <input className='invoice-detail-last-line-box-code-box-text' type="text" />
            </div>
          </div>
        </div>
      </>
    )
  }

  //!              render               //
  return (
    <div id='invoice-detail-wrapper'>
      <AccountingMenu />
      <div className='invoice-detail-right'>
        <div className='invoice-right-detail-top'>
          <div className='invoice-right-detail-top-title'>전표 조회</div>
          <div className='invoice-right-detail-top-divider'></div>

          <div className='invoice-right-detail-text'>전표 상세</div>
          <div className='invoice-detail-search-condition'>
            <div className='invoice-detail-search-dept'>
              <div className='invoice-detail-search-dept-text'>전표 번호</div>
              <div className='invoice-detail-search-dept-box'>
                <div className='invoice-detail-search-dept-box-code-box'>
                  <input className='invoice-detail-search-dept-box-code-box-text' type="text" />
                </div>
              </div>
            </div>
            <div className='invoice-detail-search-employee'>
              <div className='invoice-detail-search-employee-text'>전표 유형</div>
              <div className='invoice-detail-search-employee-box'>
                <div className='invoice-detail-search-employee-box-code-box'>
                  <input className='invoice-detail-search-employee-box-code-box-text' type="text" />
                </div>
              </div>              
            </div>
          </div>

          {/* 수주 */}
          <OrderInfoCard/>
          {/* 매출 */}
          {/* <SalesInfoCard /> */}
          {/* 급/상여 */}
          <IncentiveInfoCard />
          
        </div>
      </div>
    </div>
  )
}
