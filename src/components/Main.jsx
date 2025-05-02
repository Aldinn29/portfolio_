import React from 'react'

export default function Main() {
    return (
        <section id='home' className='container-fluid text-light vh-100 d-flex justify-content-center align-items-center flex-column gap-3 border-bottom border-light'
            style={{ backgroundColor: 'black' }}>
            <img src='./src/assets/photo.jpg' className='img-fluid rounded-circle mt-5 h-50 mb-2' />
            <h1>I'm <span style={{
                backgroundImage: 'linear-gradient(45deg, #00c6ff, #0072ff)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
            }}>Aldin Bišanović</span>, a Front-End Developer</h1>
            <h4 style={{ color: '#d3d3d3' }}>4th Year Computer Science Student at Sinergija University</h4>
            <h5 style={{ color: '#d3d3d3' }}>Passionate about crafting modern, user-friendly web applications and have a solid foundation in front-end technologies.</h5>
            <div className='d-flex gap-3'>
                <button className='btn text-light fs-5 rounded-5 px-4 fw-bold'
                    style={{ background: 'linear-gradient(45deg, #0072ff, #004aad)' }}>Contact me</button>
                <button className='btn text-light fs-5 rounded-5 px-4 fw-bold'
                    style={{ background: 'linear-gradient(45deg,#ff5c39, #e67e22' }}>Resume</button>
            </div>
        </section>
    )
}
