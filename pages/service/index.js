import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Spiner from "@/components/Spiner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

function Service() {
  const router = useRouter();
  const form = useRef();

  const initialFormData = {
    sender: "",
    phonetwo: "",
    kakao: "",
    recipient: "",
    shipping: "",
    recipientphone: "",
    recipientaddress: "",
    date: "",
    courier: "",
    invoice: "",
    weight: "",
    messagetwo: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.sender)
      newErrors.sender = "보내는 고객님 이름을 입력해주세요.";
    if (!formData.phonetwo)
      newErrors.phonetwo = "보내는 고객님 전화번호를 입력해주세요.";
    if (!formData.kakao)
      newErrors.kakao = "보내는 고객님 카카오톡 아이디를 입력해주세요.";
    if (!formData.recipient)
      newErrors.recipient = "받는 고객님 이름을 영어로 입력해주세요.";
    if (!formData.shipping)
      newErrors.shipping = "배송방법을 입력해주세요.";
    if (!formData.recipientphone)
      newErrors.recipientphone = "받는 고객님 번호를 입력해주세요.";
    if (!formData.recipientaddress)
      newErrors.recipientaddress = "받는 고객님 주소를 입력해주세요.";
    if (!formData.date) newErrors.date = "보낸날짜를 입력해주세요.";
    if (!formData.courier) newErrors.courier = "택배사를 입력해주세요.";
    if (!formData.invoice) newErrors.invoice = "송장번호를 입력해주세요.";
    if (!formData.weight) newErrors.weight = "상품무게를 입력해주세요.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    emailjs
      .sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current,
        EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("예약신청이 완료되었습니다.");
          console.log(result.text);
          setIsLoading(false);
          router.push("/");
        },
        (error) => {
          alert("전송에 실패하였습니다. 다시 시도해주세요.");
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isLoading]);

  return (
    <>
      <section className="sendEmail">
        <h1 className="emailTitle">특송예약 신청서</h1>
        <form className="emailForm" ref={form} onSubmit={sendEmail}>
          <div className="inputGrid emailOneInput">
            <Form.Label>이름</Form.Label>
            <Form.Control
              type="text"
              name="sender"
              value={formData.sender}
              placeholder="보내는 고객님 이름을 적어주세요"
              onChange={handleInputChange}
            />
          </div>
          {errors.sender && <p className="emailErr">{errors.sender}</p>}

          <div className="inputGrid">
            <Form.Label>전화번호</Form.Label>
            <Form.Control
              type="text"
              name="phonetwo"
              value={formData.phonetwo}
              placeholder="보내는 고객님 전화번호를 적어주세요"
              onChange={handleInputChange}
            />
          </div>
          {errors.phonetwo && <p className="emailErr">{errors.phonetwo}</p>}

          <div className="inputGrid">
            <Form.Label>카카오톡 아이디</Form.Label>
            <Form.Control
              type="text"
              name="kakao"
              value={formData.kakao}
              placeholder="보내는 고객님 카카오톡 아이디를 적어주세요"
              onChange={handleInputChange}
            />
          </div>
          {errors.kakao && <p className="emailErr">{errors.kakao}</p>}

          <div className="inputGrid">
            <Form.Label>받는사람</Form.Label>
            <Form.Control
              type="text"
              name="recipient"
              value={formData.recipient}
              placeholder="받는 고객님 이름을 영어로 입력해주세요"
              onChange={(e) => {
                const value = e.target.value;
                const regex = /^[A-Za-z\s]*$/;
                if (regex.test(value) || value === "") {
                  handleInputChange(e);
                }
              }}
            />
          </div>
          {errors.recipient && <p className="emailErr">{errors.recipient}</p>}

          <div className="inputGrid">
            <Form.Label>배송방법</Form.Label>
            <Form.Select
              name="shipping"
              value={formData.shipping}
              onChange={handleInputChange}
            >
              <option value="">배송방법을 선택해주세요</option>
              <option value="택배">택배</option>
              <option value="그랩(퀵,방콕한정)">그랩(퀵,방콕한정)</option>
            </Form.Select>
          </div>
          {errors.shipping && <p className="emailErr">{errors.shipping}</p>}

          <div className="inputGrid">
            <Form.Label>받는사람 전화번호(태국)</Form.Label>
            <Form.Control
              type="text"
              name="recipientphone"
              value={formData.recipientphone}
              placeholder="받는 고객님 연락가능한 번호를 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          {errors.recipientphone && (
            <p className="emailErr">{errors.recipientphone}</p>
          )}

          <div className="inputGrid">
            <Form.Label>현지주소</Form.Label>
            <Form.Control
              type="text"
              name="recipientaddress"
              value={formData.recipientaddress}
              placeholder="현지주소를 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          {errors.recipientaddress && (
            <p className="emailErr">{errors.recipientaddress}</p>
          )}

          <div className="inputGrid">
            <Form.Label>보낸날짜</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>
          {errors.date && <p className="emailErr">{errors.date}</p>}

          <div className="inputGrid">
            <Form.Label>택배사</Form.Label>
            <Form.Control
              type="text"
              name="courier"
              value={formData.courier}
              placeholder="택배사를 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          {errors.courier && <p className="emailErr">{errors.courier}</p>}

          <div className="inputGrid">
            <Form.Label>송장번호</Form.Label>
            <Form.Control
              type="text"
              name="invoice"
              value={formData.invoice}
              placeholder="송장번호를 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          {errors.invoice && <p className="emailErr">{errors.invoice}</p>}

          <div className="inputGrid">
            <Form.Label>상품무게</Form.Label>
            <div className="weight">
              <Form.Control
                type="text"
                name="weight"
                value={formData.weight}
                placeholder="상품무게를 입력해주세요"
                onChange={handleInputChange}
              />
              <span>KG</span>
            </div>
          </div>
          {errors.weight && <p className="emailErr">{errors.weight}</p>}

          <div className="inputGrid">
            <Form.Label>문의사항</Form.Label>
            <Form.Control
              as="textarea"
              name="messagetwo"
              value={formData.messagetwo}
              placeholder=""
              onChange={handleInputChange}
            />
          </div>

          <div className="emailBtn">
            <Button className="sendEmailBtn" type="submit" disabled={isLoading}>
              예약하기
            </Button>
          </div>
        </form>
      </section>
      {isLoading && <Spiner />}
    </>
  );
}

export default Service;
