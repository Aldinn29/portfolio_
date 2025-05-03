import React from 'react'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [active, setActive] = useState(() => {
        const hash = window.location.hash;
        return hash ? hash.substring(1) : 'home';
    })

    useEffect(() => {
        const sections = document.querySelectorAll('section')
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id)
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section)
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section)
            })
        }
    }, [])

    return (
        <nav className='navbar navbar-expand-lg navbar-dark fixed-top border-bottom border-white' style={{ backgroundColor: 'black' }}>
            <div className='container-fluid'>
                <a className='navbar-brand px-2' href='#about' onClick={() => setActive('about')}>
                    <img src='/photo.jpg' style={{ width: '40px' }} className='rounded-circle me-2' /> Aldin Bišanović
                </a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a href='#home' className={`nav-link ${active === 'home' ? 'active' : ''}`} onClick={() => setActive('home')}>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#about' className={`nav-link ${active === 'about' ? 'active' : ''}`} onClick={() => setActive('about')}>About me</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#projects' className={`nav-link ${active === 'projects' ? 'active' : ''}`} onClick={() => setActive('projects')}>Projects</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#contact' className={`nav-link ${active === 'contact' ? 'active' : ''}`} onClick={() => setActive('contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
