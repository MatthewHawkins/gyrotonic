/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import image from '../assets/images/keep1.png';
import { ContactPage } from '@mui/icons-material';

import AnimatedButton from '../components/AnimatedButton';
import Gyrotonic from '../components/Gyrotonic';
import Lessons from '../sections/Lessons';


export default function ContactHours() {

    const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const pageStyles = css`
    display: flex;
    flex-direction: column;
    font-family: 'Cormorant Garamond', serif;
  `;

  const infoStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Cormorant Garamond', serif;
    padding: 10px 30px 10px 10px;
    width: 100%;
    font-size: 1.15em;
  `;

  const hoursStyles = css`
  background-image: linear-gradient(rgba(255,255,255,.6),rgba(255,255,255,.6)), url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 85vh;
  font-size: 1.15em;
  `;

  const hoursTitle = css`
      font-size: 3rem;
  `

  const hoursText = css`
    font-size: 1.2em;
    font-weight: 500;
  `




const formData = useRef();
    const [name, setName] = useState();
    const [subject, setSubject] = useState();
    const [formEmail, setFormEmail] = useState();
    const [message, setMessage] = useState();

    function handleSubmit(e){
        e.preventDefault();
        // emailjs
        //   .sendForm(
        //     "service_5k4sxcs",
        //     "template_ymal3ma",
        //     formData.current,
        //     "w3ewBSBwkCZ0m3ji-"
        //   )
        //   .then(
        //     (result) => {
        //       console.log(result.text);
        //     },
        //     (error) => {
        //       console.log(error.text);
        //     }
        //   );
        // setName("")
        // setSubject("")
        // setFormEmail("")
        // setMessage("")
        // alert("Email sent - thank you!")
      };

    const bodyStyles = css`
        background-color: #f0e6da;
        display: flex;
        height: 100vh;
        position: relative;
        align-items: center;
        @media screen and (max-width: 480px) {
            margin-top: 400px;
        }
    `;

    const contactBackgroundStyles = css`
        width: 20px;
        height: 100%;
        position: absolute;
    `;


    const contactWrapperStyles = css`
        padding: 50px;
        display: flex;

        @media screen and (max-width: 480px) {
            flex-direction: column;
            padding: 0px 50px;
        }
    `;

    const leftStyles = css`
        flex: 1;
    `;

    const contactTitleStyles = css`
        font-size: 4em;
        width: 60%;

        @media screen and (max-width: 480px) {
            font-size: 30px;
        }
    `;

    const contactInfoStyles = css`
    
    `;

    const contactItemStyles = css`
        display: flex;
        align-items: center;
        margin: 50px 0px;
        font-weight: 300px;

        @media screen and (max-width: 480px) {
            margin: 20px 0px;
            width: 100%;
        }
    `;

    const contactIconStyles = css`
        height: 30px;
        width: 30px;
        margin-right: 20px;
    `;






    const rightStyles = css`
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space;
        flex-direction: column;
        
        form{
            margin-top: 20px;
            outline: none;
        }
        input{
            width: 55%;
            height: 50px;
            border: hidden;
            /* border-bottom: 1px solid black; */
            margin: 10px 0px;
            font-size: 1em;
            padding-left: 10px;
            outline: none;
        }
        textarea{
            width: 100%;
            margin: 20px 0px;
            font-size: 1em;
            padding-left: 10px;
            border: hidden;
        }
        button{
            border: hidden;
            background-color: #F6F5E8;
        }

        @media screen and (max-width: 480px) {
            form {
                margin-top: 0px;
                display: flex;
                flex-wrap: wrap;
            }

            input {
                width: 40%;
                height: 40px;
                margin: 10px;
                margin-left: 0;
            }

            button {
                margin-top: 10px;
            }
        }
    `;

    const contactDescriptionStyles = css`
        font-size: 1.15em;
        font-weight: 200px;

        @media screen and (max-width: 480px) {
            display: none;
        }
    `;


/* 
Use something like this for tables? This would be needed in the hours section and prices.
*/


  return (
    <div css={pageStyles}>
      {/* <div css={hoursStyles} id="hours-and-prices">
        <div css={infoStyles}>
          <h2 css={hoursTitle}>Hours</h2>
          <p css={hoursText}>You guys tell me when the hours are :)
          </p>
        </div>
        <div css={infoStyles}>
          <h2 css={hoursTitle}>Prices</h2>
          <div css={hoursText}>
          Training dates can be chosen according to openings in the trainers' schedules. 
          There are four training options:
          <ul>
            <li>Single lesson - €50</li>
            <li>Three Introductory Lessons - €135</li>
            <li>Six Lesson Package - €270</li>
            <li>Ten Lesson Package - €450</li>
          </ul>
        Registration is done by phone , e-mail or personally in the studio. 
          </div>
        </div>
      </div> */}
      <Lessons />
      <div id='contact' css={bodyStyles}>
            <div css={contactBackgroundStyles}></div>
            <div css={contactWrapperStyles}>
                <div css={leftStyles}>
                    <h1 css={contactTitleStyles}> Feel free to get in touch</h1>
                    <div css={contactInfoStyles}>
                        <div css={contactItemStyles}>
                            +49 178 614 5467 (phone)<br />
                            +39 351 789 5709 (whatsapp)<br />
                            +43 660 916 3118 (whatsapp)
                        </div>
                        <div css={contactItemStyles}>
                            therootsstudio.gyrotonic@gmail.com (email)
                        </div>
                    </div>
                </div>
                <div css={rightStyles}>
                    <p css={contactDescriptionStyles}>
                    <b>We'd love to hear from you!</b> Please reach out with any inquiries or questions you might have about our studio, methods, or anything else.
                    </p>
                    <form ref={formData} id="emailForm" onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' value={name} onChange={(event) => {setName(event.target.value)}} name='user_name'></input>
                        <input type='text' placeholder='Subject' value={subject} onChange={(event) => {setSubject(event.target.value)}} name='user_subject'></input>
                        <input type='text' placeholder='Email' value={formEmail} onChange={(event) => {setFormEmail(event.target.value)}} name='user_email'></input>
                        <textarea rows='5' placeholder='message' value={message} onChange={(event) => {setMessage(event.target.value)}} name='message'/>
                        <button type='submit'><AnimatedButton text='SUBMIT'/></button>
                    </form>
                </div>
            </div>
        </div>
        {/* <div><Gyrotonic /> is a registered trademark of Gyrotonic Sales Corp and is used with their permission.</div> */}
    </div>
  )
}
