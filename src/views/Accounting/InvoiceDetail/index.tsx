import React, {useEffect, useState} from 'react'
import AccountingMenu from '../AccountingMenu'
import './style.css'
import { useInvoiceListStore } from 'src/stores'
import { useNavigate, useParams } from 'react-router-dom'
import { getInvoiceDetailIncentiveRequest, getInvoiceDetailOrderRequest, getInvoiceDetailSalesRequest } from 'src/apis'
import InvoiceDetailRequestDto from 'src/interfaces/request/accounting/invoice-detail.request.dto'
import { GetInvoiceDetailIncentiveResponseDto, GetInvoiceDetailOrderResponseDto, GetInvoiceDetailSalesResponseDto } from 'src/interfaces/response/accounting'
import ResponseDto from 'src/interfaces/response/response.dto'
import { ACCOUNTING_INVOICE_PATH, INVOICE_TYPE } from 'src/constants'

export default function InvoiceDetail() {
  //!          state          //
  // description : 전표 번호 //
  const{ invoiceCode } = useParams();
  // description : 전표 유형 구분 상태(매입,매출,급상여) //
  const[ invoiceType, setInvoiceType ] = useState<string>('');
  // description : 전표 스토어 //
  const { invoiceList, resetInvoiceList } = useInvoiceListStore();       
  // description : 수주전표 상태 //
  const [orderInvoice, setOrderInvoice] = useState<GetInvoiceDetailOrderResponseDto | null>(null);
  // description : 매출전표 상태 //
  const [salesInvoice, setSalesInvoice] = useState<GetInvoiceDetailSalesResponseDto | null>(null);
  // description : 급/상여 전표 상태 //
  const [incentiveInvoice, setIncentiveInvoice] = useState<GetInvoiceDetailIncentiveResponseDto | null>(null);


  //!           function            //
  const navigator = useNavigate();
  // description : 전표(수주) 불러오기 응답 처리 함수 //
  const getOrderInfoResponseHandler = (responsebody : GetInvoiceDetailOrderResponseDto | ResponseDto) => {
    const { code } = responsebody;
    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code === 'NI') alert('존재하지않는 전표입니다.');
    if( code !== 'SU') return;

    const orderInvoice =  responsebody as GetInvoiceDetailOrderResponseDto;
    setOrderInvoice(orderInvoice);
  }
  // description : 전표(매출) 불러오기 응답 처리 함수 //
  const getSalesInfoResponseHandler = (responsebody : GetInvoiceDetailSalesResponseDto | ResponseDto) => {
    const { code } = responsebody;
    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code === 'NI'){
      alert('존재하지않는 전표입니다.');
      navigator(ACCOUNTING_INVOICE_PATH);
    } 
    if( code !== 'SU') return;

    const salesInvoice =  responsebody as GetInvoiceDetailSalesResponseDto;
    setSalesInvoice(salesInvoice);
  }
  // description : 전표(급/상여) 불러오기 응답 처리 함수 //
  const getIncentiveResponseHandler = (responsebody : GetInvoiceDetailIncentiveResponseDto | ResponseDto) => {
    const { code } = responsebody;
    if( code === 'NE') alert('존재하지않는 회원입니다.');
    if( code === 'DE') alert('데이터베이스 에러');
    if( code === 'NP') alert('권한이 없습니다.');
    if( code === 'NI'){
      alert('존재하지않는 전표입니다.');
      navigator(ACCOUNTING_INVOICE_PATH);
      return;
    } 
    if( code !== 'SU') return;

    const incentiveInvoice =  responsebody as GetInvoiceDetailIncentiveResponseDto;
    setIncentiveInvoice(incentiveInvoice);
  }

  //!         event Handler          //


  //!            effect             //
  useEffect(() => {
    // description : invoice code 로 클릭된 전표 가져오기
    const found = invoiceList?.find(item => item.invoiceCode == Number(invoiceCode) );
    if(!found) return;
    const data: InvoiceDetailRequestDto = {
      primaryKey : found.invoiceDetailPk,
    }
    setInvoiceType(found.invoiceTypeName);
    if(found.invoiceTypeName == INVOICE_TYPE.ORDER){
      getInvoiceDetailOrderRequest(found.invoiceCode, data).then(getOrderInfoResponseHandler);
    }
    else if(found.invoiceTypeName == INVOICE_TYPE.SALE){
      getInvoiceDetailSalesRequest(found.invoiceCode, data).then(getSalesInfoResponseHandler);
    }
    else if(found.invoiceTypeName == INVOICE_TYPE.INCENTIVE){
      getInvoiceDetailIncentiveRequest(found.invoiceCode, data).then(getIncentiveResponseHandler);
    }
  }, [])

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
                <input className='invoice-detail-search-dept-box-code-box-text' type="text" value={orderInvoice?.orderCode}/>
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>프로젝트</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' value={orderInvoice?.projectName} type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>주문일자</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' value={orderInvoice?.orderDate} type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>거래처</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' value={orderInvoice?.customerName} type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>수주금액</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' value={orderInvoice?.orderPrice + ' 원'} type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>담당자</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' value={orderInvoice?.employeeName} type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-last-line-text'>수주상세</div>
          <div className='invoice-detail-last-line-box'>
            <div className='invoice-detail-last-line-box-code-box'>
              <input className='invoice-detail-last-line-box-code-box-text' value={orderInvoice?.orderDetail} type="text" />
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
                <input className='invoice-detail-search-dept-box-code-box-text' value={salesInvoice?.salesCode} type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>프로젝트</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' value={salesInvoice?.projectName} type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>마감일자</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' value={salesInvoice?.deadlineDate} type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>거래처</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' value={salesInvoice?.customerName} type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>매출금액</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' value={salesInvoice?.salesPrice + ' 원'} type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>담당자</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' value={salesInvoice?.employeeName} type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-last-line-text'>매출상세</div>
          <div className='invoice-detail-last-line-box'>
            <div className='invoice-detail-last-line-box-code-box'>
              <input className='invoice-detail-last-line-box-code-box-text' value={salesInvoice?.salesDetail} type="text" />
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
                <input className='invoice-detail-search-dept-box-code-box-text' value={incentiveInvoice?.incentiveCode} type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>구분</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' value={incentiveInvoice?.incentiveCategoryName} type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-search-dept'>
            <div className='invoice-detail-search-dept-text'>지급일자</div>
            <div className='invoice-detail-search-dept-box'>
              <div className='invoice-detail-search-dept-box-code-box'>
                <input className='invoice-detail-search-dept-box-code-box-text' value={incentiveInvoice?.paymentDate} type="text" />
              </div>
            </div>
          </div>
          <div className='invoice-detail-search-employee'>
            <div className='invoice-detail-search-employee-text'>수령자</div>
            <div className='invoice-detail-search-employee-box'>
              <div className='invoice-detail-search-employee-box-code-box'>
                <input className='invoice-detail-search-employee-box-code-box-text' value={incentiveInvoice?.employeeName} type="text" />
              </div>
            </div>              
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-last-line-text'>금액</div>
          <div className='invoice-detail-last-line-box'>
            <div className='invoice-detail-last-line-box-code-box'>
              <input className='invoice-detail-last-line-box-code-box-text' value={incentiveInvoice?.incentivePrice + ' 원'} type="text" />
            </div>
          </div>
        </div>
        <div className='invoice-detail-search-condition'>
          <div className='invoice-detail-last-line-text'>상세</div>
          <div className='invoice-detail-last-line-box'>
            <div className='invoice-detail-last-line-box-code-box'>
              <input className='invoice-detail-last-line-box-code-box-text' value={incentiveInvoice?.content} type="text" />
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
                  <input className='invoice-detail-search-dept-box-code-box-text' value={invoiceCode} type="text" />
                </div>
              </div>
            </div>
            <div className='invoice-detail-search-employee'>
              <div className='invoice-detail-search-employee-text'>전표 유형</div>
              <div className='invoice-detail-search-employee-box'>
                <div className='invoice-detail-search-employee-box-code-box'>
                  <input className='invoice-detail-search-employee-box-code-box-text' value={invoiceType} type="text" />
                </div>
              </div>              
            </div>
          </div>
          { invoiceType == INVOICE_TYPE.ORDER && (<OrderInfoCard/>) }
          { invoiceType == INVOICE_TYPE.SALE && (<SalesInfoCard/>) }
          { invoiceType == INVOICE_TYPE.INCENTIVE && (<IncentiveInfoCard/>) }
        </div>
      </div>
    </div>
  )
}
