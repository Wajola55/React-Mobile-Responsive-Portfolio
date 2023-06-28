import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles.css';
import Email from './images/email.png';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d91dwrl', 'template_r7x4run', e.target, 'wSf6Il96W9JWT-Znh')
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="Contact" className="contact-form">
      <div className="w-left">
        <div className="technical">
          <h1 className="px-2 text-2xl sm:text-3xl md:text-3xl lg:text-7xl font-bold">
            Get in<span> touch</span>
          </h1>
          <h1 className="px-2 text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-custom-green">
            <span>Contact Me</span>
          </h1>
          <img src={Email} alt="Your description" className="image-class" />
        </div>
      </div>
      <div className="c-right">
        <form onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name" required />
          <input type="email" name="user_email" className="user" placeholder="Email" required />
          <textarea name="message" className="user" placeholder="Message" required />
          <input type="submit" value="Send" className="button" />
          {isSent && <span className="message">Message sent successfully!</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
