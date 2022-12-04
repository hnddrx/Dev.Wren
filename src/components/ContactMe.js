//* react-bootstrap-icon
import * as Icon from 'react-bootstrap-icons';
//*Hook
import React, { useRef } from 'react';
import { useState } from 'react';
//* EmailJS
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccessMessage] = useState('');

  const hideSuccessMessage = (timeOut) => {
    setTimeout(() => {
      setSuccessMessage('');
    }, timeOut);
  };
  const form = useRef();

  const onSubmitForm = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_trped2r', 'template_3g1xdci', form.current, 'er57-VUb-cWBsMCcf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setMessage('');
    setName('');
    setEmail('');
    setSuccessMessage('Message sent!');
    hideSuccessMessage(1500);
  };
  return (
    <div className='container bg-contact' id='contact'>
      <section className='mb-4'>
        {/* Header */}
        <h2 className='h1-responsive font-weight-bold text-center my-4 landing-text fs-1'>
          Need a Developer?
        </h2>

        {/* Description */}
        <p className='text-center w-responsive mx-auto mb-5 lead fs-5'>
            Please do not hesitate to contact me directly. 
        </p>
        <div className='flex-row d-flex flex-wrap justify-content-center'>
        <div className='lg-5 col-md-2 text-center'>
            <ul className='list-unstyled mb-0'>
              <li>
                <Icon.CloudDownloadFill size={30} />
                <p><a  href={require('../assets/WrenMacayan_FullStackDev_MERN_2022.pdf')} download='WrenMacayan_Resume' target='_blank' rel='noreferrer'  className='link-dark text-decoration-none'>Download my Résumé</a></p>
              </li>
              <li>
                <Icon.Linkedin size={30} />
                <p><a href='https://www.linkedin.com/in/wrenmcyn/' className='link-dark text-decoration-none' target='_blank' rel='noreferrer'>linkedin.com/in/wrenmcyn/</a></p>
              </li>
              <li>
                <Icon.Github size={30} />
                <p><a href = 'https://github.com/hnddrx' className='link-dark text-decoration-none' target='_blank' rel='noreferrer'>github.com/hnddrx</a></p>
              </li>
            </ul>
          </div>
          <div className='col-md-3 text-center'>
            <ul className='list-unstyled mb-0'>
              <li>
                <Icon.GeoAltFill size={30} />
                <p><a href='https://www.google.com/maps/place/Villasis/@15.8997631,120.5865593,17z/data=!3m1!4b1!4m5!3m4!1s0x3391393d8472abed:0xafe8b01616770572!8m2!3d15.899758!4d120.588748' target='_blank' rel='noreferrer'  className='link-dark text-decoration-none'>Villasis, Pangasinan, Philippines</a></p>
              </li>
              <li>
                <Icon.PersonLinesFill size={30} />
                <p><a href='tel:+639060063919' className='link-dark text-decoration-none' target='_blank' rel='noreferrer'> +63 906 006 3919</a></p>
              </li>
              <li>
                <Icon.EnvelopeFill size={30} />
                <p><a href = 'mailto: macayanwren@gmail.com' className='link-dark text-decoration-none' target='_blank' rel='noreferrer'> macayanwren@gmail.com</a></p>
              </li>
            </ul>
          </div>
          {/* Grid Column */}
          <div className='form'>
            <form
            className='form-inline'
              ref={form}
              id='contact-form'
              name='contact-form'
              onSubmit={(e) => {
                onSubmitForm(e);
              }}
            >
              {/* Grid Row */}
              <div className='row '>
                {/* Grid Column */}
                <div className='col-md-5 '>
                  <div className='md-form mb-0 '>
                  <label htmlFor='name'></label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Your name'
                      className='form-control'
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                {/* Grid Column */}
                <div className='col-md-5 '>
                  <div className='md-form mb-0'>
                  <label htmlFor='email'></label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='Your Email'
                      className='form-control'
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Grid Row */}
              <div className='row'>
                {/* Grid Column */}
                <div className='col-md-10'>
                  <div className='md-form'>
                    <label htmlFor='message'></label>
                    <textarea
                      type='text'
                      id='message'
                      name='message'
                      placeholder='Write a message...'
                      rows='4'
                      className='form-control md-textarea contactUsTextArea'
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='text-center'>
                {success ? (
                  <small className='text-success'>{success}</small>
                ) : null}
                <br />
                <button type='submit ' className='btn btn-dark send-message'>
                  <Icon.SendFill /> Send
                </button>
              </div>
            </form>
            <div className='status'></div>
          </div>
          {/* Grid Column */}
        

          
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
