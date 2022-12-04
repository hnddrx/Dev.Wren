
import { useLottie } from 'lottie-react';
import groovyWalkAnimation from '../assets/homepage_images/hero-portfolio.json';
import Projects from './Projects';
const LandingPage = () => {
     const options = {
    animationData: groovyWalkAnimation,
    loop: true
  };
  const { View } = useLottie(options);
    return (
        <>
        <section id='landing'>
            <div className='px-4 py-5 my-5 text-center'>
                <div className='lottie-container d-flex justify-content-center'>
                    <div className='lottie '>
                        {View}
                    </div>
                </div>
                <h2 className='display-6 lead fs-3'>
                    Wren Macayan
                </h2>
                <h1 className='display-5 fw-bold landing-text'>
                    Web Developer
                </h1>
                <div className='col-lg-5 mx-auto'>
                    <p className='lead mb-3 fs-6'>Hello, my name is Wren, I'm a fullstack web developer and I specialize in developing websites with MongoDB, ReactJS, ExpressJS, and NodeJS. It will be a pleasure to work with you. </p>
                    <div className='d-grid gap-2 d-sm-flex justify-content-center'>
                        <a className='View' href='#projects' >View Projects</a><p>or</p><a className='View' href='/about_me'>Read more about me</a>
                    </div>
                </div>
            </div>
        </section>
        <Projects id='projects'/>
        </>
    )
};

export default LandingPage;