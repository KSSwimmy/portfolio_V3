import React, { useState } from 'react';
import styled  from 'styled-components'
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import { device } from '../../device'



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
    setStatusMessage("Yay! Message sent! We'll Talk Soon.");
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

<LetsTalkBorderDiv 
          style={{
          borderBottomStyle: 'solid',
          borderBottomColor: '#DCE3FF', 
          borderWidth: 'thin'}}>
          <LetsTalk>LET'S TALK!</LetsTalk>
      </LetsTalkBorderDiv>

  <MsgSpan style={{ fontSize: '6rem', fontFamily: 'Open Sans', fontWeight: 'bold', color: statusMessage === "Yay! Message sent! We'll Talk Soon." ? "#00830B"  : "#ff0000" }} className='status-message'>{statusMessage} </MsgSpan>    
  <FormContainer className='contact-form' id='contact-form' onSubmit={handleSubmit(onSubmit)}>

  <InputDiv1> 

    <InputColumn>
      <Input type="text" placeholder="First name" name="First_name" aria-invalid={errors.First_name ? "true" : "false"} ref={register({required: true, maxLength: 80})} />
    
      {errors.First_name && errors.First_name.type === "required" && (
            <MsgSpan2 style={{ fontSize: '4rem', color: 'red', fontWeight: 'bold'}} role="alert">First name is required<br/></MsgSpan2>
          )}
    </InputColumn>

    <InputColumn>
      <Input type="text" placeholder="Last name" name="Last_name" aria-invalid={errors.Last_name ? "true" : "false"} ref={register({required: true, maxLength: 100})} />
      
      {errors.Last_name && errors.Last_name.type === "required" && (
            <MsgSpan2 style={{ fontSize: '4rem', color: 'red'}} role="alert">Last name is required<br/></MsgSpan2>
          )}
    </InputColumn>

  </InputDiv1>

  <InputDiv1>

    <InputColumn>
      <Input type="text" placeholder="Email" name="user_email" aria-invalid={errors.user_email ? "true" : "false"} ref={register({required: true, pattern: /^\S+@\S+$/i})} />

      {errors.user_email && errors.user_email.type === "required" && (
            <MsgSpan2 style={{ fontSize: '4rem', color: 'red'}} role="alert">Email is required<br/></MsgSpan2>
          )}
    </InputColumn>

    <InputColumn>
      <Input type="tel" placeholder="Mobile number" name="Mobile number" />
    </InputColumn>
  
  </InputDiv1> 

  <SubTextDiv>
    <Textarea type="text" placeholder="Message " name="message" maxLength='2000'
    aria-invalid={errors.message ? "true" : "false"} ref={register({ required: true })} />
   
    {errors.message && errors.message.type === "required" && (
          <MsgSpan2 style={{ fontSize: '4rem', color: 'red', marginBottom: '1em'}} role="alert">Message is required<br/></MsgSpan2>
        )}
  
    <SubmitButton type="submit" >Submit</SubmitButton>
  </SubTextDiv>

  </FormContainer>
  </LetsTalkDiv>
);
}



const MsgSpan = styled.span`
opacity: 0;
width: 100%;
height: auto;
text-align: center;
font-family: 'Open Sans', sans-serif;
font-size: 6rem;
`;

const MsgSpan2 = styled.div`
width: 100%;
height: auto;
text-align: center;
font-weight: 900;
color: red;
font-family: 'Open Sans', sans-serif;
`;

const InputDiv1 = styled.div`
display: flex;
flex-direction: row;
width: 100%;
margin: 0 auto;
text-align: center;
justify-content: space-around;

@media ${device.iPad} {
  flex-direction: column;
}
`;

const InputColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
text-align: center;
`; 

const LetsTalkBorderDiv = styled.div`
text-align: center;
width: 350px;
margin: 0 auto;

`


const InputDiv2 = styled.div`
display: flex;
flex-direction: row;

@media ${device.iPad} {
  flex-direction: column;
  margin: 0 auto;
}
`



const LetsTalkDiv = styled.div`
width: 100%;
margin: 0 auto;
height: auto;
display: flex;
flex-direction: column;
text-align: center;
justify-content: space-around;

@media ${device.iPad} {
  Margin-top: 109em;
}
`;

const LetsTalk = styled.h1`
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 6rem;
text-align: center;

`;


const FormContainer = styled.form`
margin: 0 auto;
width: 100%;

`;

const SubTextDiv = styled.div`
display: flex;
flex-direction: column;
margin: 40px;
`;

const Input = styled.input`
font-size: 3.5rem;
padding: 10px 20px 10px 20px;
width: 90%;
height: 70px;
border-radius: 60px;
margin: 40px;
font-family: 'Open Sans', sans-serif;
background: #DCE3FF;
`;

const SubmitButton = styled.button`
border-radius: 60px;
width: 15%;
height: 70px;
margin: 0 auto 40px;
background: #8934EC;
font-family: 'Exo 2', sans-serif;
cursor: pointer;
color: #DCE3FF;
font-size: 5rem;
border: solid #DCE3FF;
border-width: thin; 
`;

const Textarea = styled.textarea`
height: 10em;
width: 70%;
padding: 30px;
border-radius: 60px;
font-size: 3.5rem;
font-family: 'Open Sans', sans-serif;
margin: 0 auto 40px;
background: #DCE3FF;
`;

init('user_RGchjDEpAojOiC34MHwys')