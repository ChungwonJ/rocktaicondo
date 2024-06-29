import { GUIDELINE, PRICE, REFUND } from "@/define";
import Accordion from "react-bootstrap/Accordion";

function AccordionComponent() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>콘도가격</Accordion.Header>
        <Accordion.Body>
          <div className="roomPriceGrid">
            {PRICE.map((item, index) => (
              <div key={index} className="roomPrice">
                <p>{item.date}</p>
                <p>{item.price}</p>
              </div>
            ))}
            <p className="roomPriceRed">※전기,수도 포함입니다</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>환불규정</Accordion.Header>
        <Accordion.Body>
        <div className="roomPriceGrid">
            {REFUND.map((item, index) => (
              <div key={index} className="roomPrice">
                <p>{item.date}</p>
                <p>{item.price}</p>
              </div>
            ))}
            <p className="roomPriceRed">※객실 보증금은 체크아웃시 환불해드립니다.</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>안내사항</Accordion.Header>
        <Accordion.Body>
          <ul className="roomGuide">
            {GUIDELINE.map((item,index)=>(
              <li key={index}>
                {item.list}
              </li>
            ))}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComponent;
