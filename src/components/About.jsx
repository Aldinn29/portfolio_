import React from 'react'

export default function About() {
    return (
        <section id='about' className='container-fluid text-light vh-100 d-flex justify-content-center align-items-center flex-column gap-5 p-0 border-bottom border-light'
            style={{ backgroundColor: 'black' }}>
            <h1 className='mt-4'>About me</h1>
            <div className='container-fluid d-flex flex-column flex-md-row align-items-center p-0'>
                <div className='d-flex w-75 w-md-50 justify-content-center mb-4 mb-md-0'>
                    <img src='/photo.jpg' className='img-fluid rounded-circle' />
                </div>
                <div className='w-50 d-flex flex-column pe-5'>
                    <p>Hi, I'm <span className='fw-bold' style={{
                        backgroundImage: 'linear-gradient(45deg, #00c6ff, #0072ff)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}>Aldin Bišanović</span>, a 4th-year Computer Science student at Sinergija University in Bijeljina, Bosnia and Herzegovina. I'm passionate about
                        web development, especially frontend technologies. I’m currently focused on enhancing my skills in building user-friendly websites and web
                        development, especially frontend technologies.</p>
                    <p>Before university, I graduated from the Economic High School as a Business Administrative Technician. This background has given me a solid
                        understanding of both the technical and business sides of development.</p>
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-between'><h6>HTML</h6><h6>90%</h6></div>
                        <div className='progress'>
                            <div className='progress-bar' role='progressbar' style={{ width: '90%', background: 'linear-gradient(45deg, #00c6ff, #0072ff)' }}
                                aria-valuenow='90' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                    <div className='d-flex flex-column mt-4'>
                        <div className='d-flex justify-content-between'><h6>CSS & Bootstrap</h6><h6>85%</h6></div>
                        <div className='progress'>
                            <div className='progress-bar' role='progressbar' style={{ width: '85%', background: 'linear-gradient(45deg, #00c6ff, #0072ff)' }}
                                aria-valuenow='85' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                    <div className='d-flex flex-column mt-4'>
                        <div className='d-flex justify-content-between'><h6>Javascript</h6><h6>75%</h6></div>
                        <div className='progress'>
                            <div className='progress-bar' role='progressbar' style={{ width: '75%', background: 'linear-gradient(45deg, #00c6ff, #0072ff)' }}
                                aria-valuenow='75' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                    <div className='d-flex flex-column mt-4'>
                        <div className='d-flex justify-content-between'><h6>ReactJS</h6><h6>65%</h6></div>
                        <div className='progress'>
                            <div className='progress-bar' role='progressbar' style={{ width: '65%', background: 'linear-gradient(45deg, #00c6ff, #0072ff)' }}
                                aria-valuenow='65' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                    <div className='d-flex flex-column mt-4'>
                        <div className='d-flex justify-content-between'><h6>PHP & MySQL</h6><h6>55%</h6></div>
                        <div className='progress'>
                            <div className='progress-bar' role='progressbar' style={{ width: '55%', background: 'linear-gradient(45deg, #00c6ff, #0072ff)' }}
                                aria-valuenow='55' aria-valuemin='0' aria-valuemax='100'></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
