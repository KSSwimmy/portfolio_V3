import React, { useState } from 'react';
import styled from 'styled-components'
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('user_RGchjDEpAojOiC34MHwys')


export default function Form() {
    const { register, handleSubmit, watch, errors } = useForm();
    const [statusMessage, setStatusMessage] = useState("Message");
    const [contactNumber, setContactNumber] = useState("000000");


  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }


  const onSubmit = data => {
    console.log(data)
    const ContactForm = document.querySelector('#contact-form')
    const statusMsg = document.querySelector('.status-message')

    generateContactNumber()

    sendForm('gmail', 'template_wn4meys', 'contact-form')
    .then(result => {
      console.log('SUCCESS!', result.status, result.text)
      ContactForm.reset();
      setStatusMessage("Message sent!");
      statusMsg.className = 'status-message success';
      setTimeout(()=> {
        statusMsg.className = 'status-message'
      }, 4000)
    }, error => {
      console.log('FAILED...', error)
      setStatusMessage('Failed to send message! Please try again later.');
      statusMsg.className = 'status-message fail';
      setTimeout(()=> {
        statusMsg.className = 'status-message'
      }, 6000)
    });
  }

  const name = watch('name') || "";
  // eslint-disable-next-line
  const nameCharsLeft = 30 - name.length;

  const message = watch('message') || "";
  const messageCharsLeft = 2000 - message.length;

  
  
  return (
    <LetsTalkDiv>
    <p className='status-message'>{statusMessage}</p>    
    <FormContainer className='contact-form' id='contact-form' onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} />
     
      {errors.user_name && errors.user_name.type === "required" && (
            <div role="alert">First name is required<br/></div>
          )}

      <Input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} />
      
      {errors.user_name && errors.user_name.type === "required" && (
            <div role="alert">First name is required<br/></div>
          )}

      <Input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />

      {errors.user_email && errors.user_email.type === "required" && (
            <div role="alert">Email is required<br/></div>
          )}

      <Input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} />

      <Textarea type="text" placeholder="Message " name="Message " maxLength='2000'
      aria-invalid={errors.message ? "true" : "false"} ref={register({ required: true })} />
      
      {errors.message && errors.message.type === "required" && (
            <div role="alert">Message is required<br/></div>
          )}

      <Input type="submit" />
    </FormContainer>
    </LetsTalkDiv>
  );
}

const LetsTalkDiv = styled.div`
padding-top: 200px;
padding-bottom: 100px;
font-weight: lighter:
width: 100%;
height: auto;
display: flex;
text-align: center;
justify-content: space-evenly;
background: rgb(22,0,57);
`;


const FormContainer = styled.form`

`;

const Input = styled.input`
width: 600px;
font-size: 2.5rem;
width: 50%;
margin: 50px; 
`;

const Textarea = styled.textarea`
height: 10em;
width: 600px;
`;