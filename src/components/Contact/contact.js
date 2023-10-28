import React, { useRef } from 'react';
import './contact.css'
import Twitter from '../../assests/Images/twitter.png';
import Instagram from '../../assests/Images/instagram.png';
import Github from '../../assests/Images/github.png';
import emailjs from '@emailjs/browser';




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uqdo9yg', 'template_va6mqyj', form.current, 'Pbi8rzP2aUkcK5zxz')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert(error);
      });
  };




  return (
    
    <div id="contactPage">
            <span className='contactProgress'></span>


        <div id="contact">
          

        
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Wanna have a chat? <br />Then <br />Lets Begin...</span>

            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" name='from_name' placeholder='Your Name' />
                <input type="text" className="email" name='from_email' placeholder='Your Email' />
                <textarea name="message" rows="5"  placeholder='Message' className='msg'></textarea>
                <button type='submit'  value="send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={Github} alt="" className='clientImg' />
                    
                    <img src={Instagram} alt="" className='clientImg' />
                    <img src={Twitter} alt="" className='clientImg' />

                </div>
              
            </form>

           

        </div>

    </div>
  )
}

export default Contact;
