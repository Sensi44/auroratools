import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function FormPage() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <input type='hidden' name='contact_number' />
      <label>
        Name
        <input type='text' name='from_name' />
      </label>
      <label>
        Email
        <input type='email' name='from_email' />
      </label>
      <label>
        Subject
        <input type='text' name='subject' />
      </label>
      <label>
        Message
        <textarea name='html_message' />
      </label>
      <input type='submit' value='Send' />
    </form>
  );
}

export { FormPage };
