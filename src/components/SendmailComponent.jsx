import { Button } from '@mui/material'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
//service_whxhphg
const SendmailComponent = () => {
const[email, setEmail]= useState('');
const[message,setMessage] = useState('');
    const sendEmail = (e)=> {
        e.preventDefault()
      const templateParams ={
        from_name 
        :'Revathy',
        from_email:'revathylilly@gmail.com',
       
        to_email:'revul.143@gmail.com',
        message:message
      };
       emailjs.sendForm('service_whxhphg','template_ykwdyxq', templateParams,'CWxU6GArCYHPLFPQ6').
       then((response)=>{
        console.log("sent.")
        setEmail('');
        setMessage('');
       }).catch((error)=>{
        console.log("error", error)
       });
       alert(`send`)
    }
  return (
    <div className='SendmailComponent' >
        <h1 className='page_title'>Send Mail</h1>
        <form action="" className='contact_form' onSubmit={sendEmail} style={{ maxWidth:"400px",margin:"0 auto",padding:"20px", backgroundColor:"skyblue", borderRadius:"8px",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <label htmlFor="emailTo">Email id</label>
            <input type="email"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <br /> <br />
            <label htmlFor="message">Message Body</label>
            <textarea type="text" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
            <br /><br />
            <Button type="submit" variant="contained" > Send</Button>
        </form>
    </div>
  )
}

export default SendmailComponent