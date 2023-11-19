import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_mj5r7sq',
                'template_7mzv5fm',
                form.current,
                '9rlWkZN-SznTnZXXN'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id='contact'>
            <h2>Get in Touch</h2>
            <span className='line'></span>
            <div className='c-right'>
                <form ref={form} onSubmit={sendEmail} className='form-box'>
                    <input
                        type='text'
                        name='user_name'
                        className='user'
                        placeholder='Name'
                        required
                    />
                    <input
                        type='email'
                        name='user_email'
                        className='user'
                        placeholder='Email'
                        required
                    />
                    <textarea
                        name='message'
                        className='user'
                        placeholder='Message'
                        required
                    ></textarea>
                    <input type='submit' value='Send' className='button' />
                    <span>{done && alert('Thanks for Contacting me')}</span>
                </form>
            </div>
        </div>
    );
};

export default Contact;
