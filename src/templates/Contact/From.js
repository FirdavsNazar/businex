// New email sender, EMAILJS

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import FormInput from "../../components/UI/Input";

const From = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n4eoimf', 'template_8sxujfv', form.current, 'uVDNvDIzvlP1xvV8T')
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form-wrap">
      <form ref={form} onSubmit={sendEmail} id="contact-form">
        <div className="row">
          <div className="col-md-6">
            <FormInput tag="input" type="text" name="first_name" placeholder="First Name *" />
          </div>
          <div className="col-md-6">
            <FormInput tag="input" type="text" name="last_name" placeholder="Last Name *" />
          </div>
          <div className="col-md-6">
            <FormInput tag="input" type="email" name="email_address" placeholder="Email address *" />
          </div>
          <div className="col-md-6">
            <FormInput tag="input" type="text" name="phone_no" placeholder="Phone No" />
          </div>
          <div className="col-12">
            <FormInput tag="textarea" name="con_message" placeholder="Write Your Message *" />
            <FormInput tag="button" classes="btn-outline" />
            <div className="form-message" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default From;









// email sender, formsubmit


// import React from 'react';
// import FormInput from "../../components/UI/Input";

// const From = () => {
//     return (
//         <div className="contact-form-wrap">
//             <form id="contact-form" action="https://formsubmit.co/kcerafredreck@gmail.com" method="POST">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <FormInput
//                             tag={'input'}
//                             type={'text'}
//                             name={'first_name'}
//                             placeholder={'First Name *'}
//                         />
//                     </div>

//                     <div className="col-md-6">
//                         <FormInput
//                             tag={'input'}
//                             type={'text'}
//                             name={'last_name'}
//                             placeholder={'Last Name *'}
//                         />
//                     </div>

//                     <div className="col-md-6">
//                         <FormInput
//                             tag={'input'}
//                             type={'email'}
//                             name={'email_address'}
//                             placeholder={'Email address *'}
//                         />
//                     </div>

//                     <div className="col-md-6">
//                         <FormInput
//                             tag={'input'}
//                             type={'text'}
//                             name={'phone_no'}
//                             placeholder={'Phone No'}
//                         />
//                     </div>

//                     <div className="col-12">
//                         <FormInput
//                             tag={'textarea'}
//                             name={'con_message'}
//                             placeholder={'Write Your Message *'}
//                         />

//                         <FormInput
//                             tag={'button'}
//                             classes={'btn-outline'}
//                         />

//                         <div className="form-message"/>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default From;





// old one

// import React from 'react';
// import FormInput from "../../components/UI/Input";

// const From = () => {
//     return (
//         <div className="contact-form-wrap">
//             <form id="contact-form">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <FormInput
//                             tag={'input'}
//                             type={'text'}
//                             name={'first_name'}
//                             placeholder={'First Name *'}
//                         />
//                     </div>

//                     <div className="col-md-6">
//                         <FormInput
//                             tag={'input'}
//                             type={'text'}
//                             name={'last_name'}
//                             placeholder={'Last Name *'}
//                         />
//                     </div>

//                     <div className="col-md-6">
//                         <FormInput
//                             tag={'input'}
//                             type={'email'}
//                             name={'email_address'}
//                             placeholder={'Email address *'}
//                         />
//                     </div>

//                     <div className="col-md-6">
//                         <FormInput
//                             tag={'input'}
//                             type={'text'}
//                             name={'phone_no'}
//                             placeholder={'Phone No'}
//                         />
//                     </div>

//                     <div className="col-12">
//                         <FormInput
//                             tag={'textarea'}
//                             name={'con_message'}
//                             placeholder={'Write Your Message *'}
//                         />

//                         <FormInput
//                             tag={'button'}
//                             classes={'btn-outline'}
//                         />

//                         <div className="form-message"/>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default From;