import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Spiner from "@/components/Spiner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SendEmail() {
  const form = useRef();

  const initialFormData = {
    name: "",
    phone: "",
    passport: "",
    message: "",
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
    if (!formData.name) newErrors.name = "이름을 입력해주세요.";
    if (!formData.phone) newErrors.phone = "전화번호를 입력해주세요.";
    if (!formData.passport) newErrors.passport = "여권번호를 입력해주세요.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    emailjs
      .sendForm(
        "service_zmjw1bj",
        "template_to4e1y7",
        form.current,
        "SsFeyiwkcLWPLI81b"
      )
      .then(
        (result) => {
          alert("전송에 성공하였습니다.");
          console.log(result.text);
          setIsLoading(false);
        },
        (error) => {
          alert("전송에 실패하였습니다. 다시 시도해주세요.");
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <>
      <section className="sendEmail">
        <h1 className="emailTitle">예약신청서</h1>
        <form className="emailForm" ref={form} onSubmit={sendEmail}>
          <div className="emailOne">
            <div className="inputGrid emailOneInput">
              <Form.Label>이름</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                placeholder="이름을 입력해주세요"
                onChange={handleInputChange}
              />
            </div>
          </div>
          {errors.name && <p className="emailErr">{errors.name}</p>}

          <div className="inputGrid">
            <Form.Label>전화번호</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="전화번호를 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          {errors.phone && <p className="emailErr">{errors.phone}</p>}

          <div className="inputGrid">
            <Form.Label>전화번호</Form.Label>
            <Form.Control
              type="text"
              name="passport"
              value={formData.passport}
              placeholder="여권번호를 입력해주세요"
              onChange={handleInputChange}
            />
          </div>
          {errors.passport && <p className="emailErr">{errors.passport}</p>}

          <div className="inputGrid">
            <Form.Label>문의사항</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
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
