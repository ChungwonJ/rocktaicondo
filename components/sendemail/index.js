import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Spiner from "@/components/Spiner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SendEmail() {
  const form = useRef();
  const today = new Date();
  const formattedToday = today.toISOString().split('T')[0];
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formattedTomorrow = tomorrow.toISOString().split('T')[0];

  const initialFormData = {
    startDate: "",
    endDate: "",
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

    if (!formData.startDate || !formData.endDate) {
      newErrors.reservationDate = "날짜를 확인해주세요.";
    } else {
      const startDate = new Date(formData.startDate);
      const endDate = new Date(formData.endDate);
      if (endDate <= startDate) {
        newErrors.reservationDate = "날짜를 확인해주세요.";
      }
    }

    if (!formData.name) newErrors.name = "이름을 입력해주세요.";
    if (!formData.phone) newErrors.phone = "전화번호를 입력해주세요.";
    if (!formData.passport) newErrors.passport = "여권번호를 입력해주세요.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID
    const EMAIL_TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID
    const EMAIL_PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY

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

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <>
      <section className="sendEmail">
        <h1 className="emailTitle">예약신청서</h1>
        <form className="emailForm" ref={form} onSubmit={sendEmail}>
          <div className="reservationDate">
            <div className="inputGrid">
              <Form.Label>입실일</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                min={formattedToday}
                onChange={handleInputChange}
              />
            </div>

            <div className="inputGrid">
              <Form.Label>퇴실일</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={formData.endDate}
                min={formData.startDate ? new Date(new Date(formData.startDate).setDate(new Date(formData.startDate).getDate() + 1)).toISOString().split('T')[0] : formattedTomorrow}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {errors.reservationDate && <p className="emailErr">{errors.reservationDate}</p>}

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
            <Form.Label>여권번호</Form.Label>
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
