import React from 'react';
import './about.css';
import Container from 'react-bootstrap/Container';
import { Slide } from 'react-awesome-reveal';

function About() {
    return (
        <section id='about-me' className='about-me'>
            <h1 className='text-center'>About Me</h1>
            <Slide direction='right' triggerOnce>
                <Container className='about-me-container'>
                    <div className='about-me'>
                        <div className='about-me-image'></div>
                    </div>

                    <div className='about-me-content text-center mb-5'>
                        <p>
                            I'm a dedicated professional with a multifaceted educational journey. In 2019, I earned two degrees at Cedar Crest College, a Bachelor of Science in Environmental Conservation and a Bachelor of Arts in New Media.
                            <br></br><br></br>
                            Taking my passion for problem-solving and creativity to the next level, I delved into the world of technology. Fast forward to August 2023, I successfully completed a rigorous 6-month Full-Stack Development course at the University of North Carolina, Chapel Hill.
                            <br></br><br></br>
                            I'm on the verge of earning a graduate certificate in Fisheries Management from Oregon State University, with just one class standing between me and this accomplishment. This unique blend of environmental sciences, technology, and management encapsulates my commitment to holistic problem-solving.
                            <br></br><br></br>
                            As a professional, I pride myself on being organized, hard-working, and dependable. These qualities have been instrumental not only in my academic pursuits but also in my approach to real-world challenges. I thrive on the thrill of mastering new programming languages and techniques, constantly seeking ways to innovate and elevate my skills.
                        </p>
                    </div>
                </Container>
            </Slide>
        </section>
    );
}

export default About;