import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  function sendEmail(e){
      e.preventDefault();

      emailjs.sendForm('gmail', 'template_wn4meys', e.target, 'user_RGchjDEpAojOiC34MHwys')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit, sendEmail)}>
      <input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />
      <select name="Title" ref={register({ required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <input type="text" placeholder="Message " name="Message " ref={register} />

      <input type="submit" />
    </form>
  );
}