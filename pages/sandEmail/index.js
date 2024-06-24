// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// import Title from '@/components/atoms/Title';
// import Spiner from '@/components/template/Spiner';

// export default function SendEmail() {
//   const form = useRef();

//   const initialFormData = {
//     name: '',
//     select: '증명사진',
//     message: '',
//     phone: '',
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const options = [
//     '증명사진',
//     '여권사진',
//     '프로필사진',
//     '트윈사진',
//     '반려동물사진',
//     '바디프로필',
//     '컨셉사진',
//     '스냅사진',
//     '가족사진',
//     '상업촬영',
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));

//     if (errors[name]) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: '',
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = '이름을 입력해주세요.';
//     if (!formData.phone) newErrors.phone = '전화번호를 입력해주세요.';
//     if (!formData.message) newErrors.message = '메세지를 입력해주세요.';

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setIsLoading(true);
//     emailjs.sendForm('service_zmjw1bj', 'template_to4e1y7', form.current, 'SsFeyiwkcLWPLI81b')
//       .then((result) => {
//         alert('전송에 성공하였습니다.');
//         console.log(result.text);
//         setIsLoading(false);
//         setFormData(initialFormData);
//       }, (error) => {
//         alert('전송에 실패하였습니다. 다시 시도해주세요.');
//         console.log(error.text);
//         setIsLoading(false);
//       });
//   };

//   return (
//     <>
//       <section id='contact'>
//         <Title title={'Contact'}/>
//         <div className='sendEmail'>
//           <form className='emailForm' ref={form} onSubmit={sendEmail}>
//             <div className='emailOne'>
//               <div className="inputGrid emailOneInput">
//                 <input
//                   className='inputActive'
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   placeholder='이름을 입력해주세요'
//                   onChange={handleInputChange}
//                 />
//                 <span className="focusBorder"><i></i></span>
//               </div>

//               <div className="inputGrid">
//                 <select
//                   name="select"
//                   id="select"
//                   value={formData.select}
//                   onChange={handleInputChange}
//                 >
//                   {options.map((option, index) => (
//                     <option key={index} value={option}>{option}</option>
//                   ))}
//                 </select>
//                 <span className="focusBorder"><i></i></span>
//               </div>
//             </div>
//             {errors.name && <p className='emailErr'>{errors.name}</p>}

//             <div className="inputGrid">
//               <input
//                 className='inputActive'
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 placeholder='전화번호를 입력해주세요'
//                 onChange={handleInputChange}
//               />
//               <span className="focusBorder"><i></i></span>
//             </div>
//             {errors.phone && <p className='emailErr'>{errors.phone}</p>}

//             <div className="inputGrid">
//               <textarea
//                 className='inputActive'
//                 name="message"
//                 value={formData.message}
//                 placeholder='메세지를 입력해주세요'
//                 onChange={handleInputChange}
//               />
//               <span className="focusBorder"><i></i></span>
//             </div>
//             {errors.message && <p className='emailErr'>{errors.message}</p>}

//             <button className='sendEmailBtn' type="submit" disabled={isLoading}>
//               {isLoading ? 'Sending...' : 'Send'}
//             </button>
//           </form>
//         </div>
//       </section>
//       {isLoading && <Spiner/>}
//     </>
//   );
// }
