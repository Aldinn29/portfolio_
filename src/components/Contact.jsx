import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <section id='contact' className='container-fluid text-light min-vh-100 d-flex justify-content-center align-items-center flex-column gap-3 py-3'
            style={{ backgroundColor: 'black' }}>
            <h1 className='my-5'>Contact me</h1>
            <div className='container-fluid px-4'>
                <div className='row gap-5 gap-lg-0'>
                    <div className='col-12 col-lg-6 d-flex flex-column justify-content-center gap-3'>
                        <h3 style={{
                            backgroundImage: 'linear-gradient(45deg, #00c6ff, #0072ff)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                        }}>Let's talk</h3>
                        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        <span><FontAwesomeIcon icon={faEnvelope} className='me-2 text-info' /> aldinbisanovic1rt@gmail.com</span>
                        <span><FontAwesomeIcon icon={faPhone} className='me-2 mt-2 text-info' /> +387 66 977-940</span>

                        <div className='d-flex justify-content-center  gap-5 mt-3'>
                            <a href='https://github.com/Aldinn29'><FontAwesomeIcon icon={faGithub} className='me-2 text-info' /> </a>
                            <a href='https://www.linkedin.com/in/aldin-bisanovic-919546350/'><FontAwesomeIcon icon={faLinkedin} className='me-2 text-info' /> </a>
                            <a href='https://www.instagram.com/aldinbisanovic'><FontAwesomeIcon icon={faInstagram} className='me-2 text-info' /> </a>
                            <a href='https://www.facebook.com/aldinbisanovic'><FontAwesomeIcon icon={faFacebook} className='me-2 text-info' /> </a>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <form>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'> Name</label>
                                <input type='text' className='form-control shadow-none' id='name' placeholder='Enter your name' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input type='email' className='form-control shadow-none' id='email' placeholder='Enter your email' />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='message' className='form-label'>Message</label>
                                <textarea className='form-control shadow-none' id='message' rows='3'></textarea>
                            </div>
                            <button type='submit' className='btn text-light fw-bold mt-1' style={{ background: 'linear-gradient(45deg, #0072ff, #004aad)' }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}
