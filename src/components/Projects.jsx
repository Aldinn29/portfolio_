import React from 'react'
import { useState } from 'react'

const projects = [
    {
        id: 1, title: 'MoviesTMDB', description: 'React.js Movie App with TMDB API, Bootstrap, AOS and FontAwesome', image: '/image1.PNG',
        github: 'https://github.com/Aldinn29/movie-app', demo: 'https://movie-app-by-aldin.netlify.app/#'
    },
    {
        id: 2, title: 'Gemini Clone', description: 'React.JS Gemini App with Gemini API and Bootstrap', image: '/image2.PNG',
        github: 'https://github.com/Aldinn29/gemini-clone-app', demo: 'https://gemini-app-by-aldin.netlify.app/'
    },
    {
        id: 3, title: 'Weather App', description: 'React.JS Weather App with Weather API and Bootstrap', image: '/image3.PNG',
        github: 'https://github.com/Aldinn29/weather-app', demo: 'https://weather-app-by-aldin.netlify.app/'
    },
    {
        id: 4, title: 'Quiz App', description: 'React.JS Quiz App with Bootstrap and JSON', image: '/image4.PNG',
        github: 'https://github.com/Aldinn29/quizz-app', demo: 'https://quiz-app-by-aldin.netlify.app/'
    },
    {
        id: 5, title: 'Nasa App', description: 'React.JS Nasa App with Nasa API, Bootstrap and LocalStorage', image: '/image5.PNG',
        github: 'https://github.com/Aldinn29/nasa-app', demo: 'https://nasa-app-by-aldin.netlify.app/'
    },
    {
        id: 6, title: 'Text To Speech Converter', description: 'Text to Speech Converter App using JavaScript and the Web Speech API', image: '/image6.PNG',
        github: 'https://github.com/Aldinn29/text-to-speech-converter', demo: 'https://texttospeach-app-by-aldin.netlify.app/'
    }
]

export default function Projects() {
    const [hoveredItem, setHoveredItem] = useState(null)

    return (
        <section id='projects' className='container-fluid text-light vh-100 d-flex justify-content-center align-items-center flex-column gap-3 border-bottom border-light'
            style={{ backgroundColor: 'black' }}>
            <h1 className='mb-5'>My Projects</h1>
            <div className='container'>
                <div className='row g-5'>
                    {projects.map(project => (
                        <div key={project.id} className='col-12 col-md-6 col-lg-4' onMouseEnter={() => setHoveredItem(project)} onMouseLeave={() => setHoveredItem(null)}>
                            {hoveredItem && hoveredItem.id === project.id ?
                                (<div className='card text-white bg-dark h-100 border-light text-center'>
                                    <div className='card-header border-bottom border-light' style={{ background: '#141619' }}>
                                        <h5 className='card-title'>{project.title}</h5>
                                    </div>
                                    <div className='card-body'>
                                        <p className='card-text'>{project.description}</p>
                                    </div>
                                    <div className='card-footer d-flex justify-content-around'>
                                        <a href={project.github} className="btn text-light rounded-pill px-4 fw-bold"
                                            style={{ background: 'linear-gradient(45deg, #0072ff, #004aad)' }}>GitHub</a>
                                        <a href={project.demo} className="btn text-light rounded-pill px-4 fw-bold"
                                            style={{ background: 'linear-gradient(45deg,#ff5c39, #e67e22' }}>Demo</a>
                                    </div>
                                </div>) : (
                                    <img src={project.image} alt={project.title} className='img-fluid' />
                                )}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}
