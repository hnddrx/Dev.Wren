
import wren from '../assets/homepage_images/Wren.jfif';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactMe';
import Skills from '../components/Skills'
const AboutMe = () => {
    return (
        <>
        <div>
            <Navbar />
            <div className='container text-center' id='about'>
                <div className='fs-2 m-4 fw-bold'>About Me</div>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-6 col-sm-3 align-items-center justify-content-center'>
                        <img className='about-me m-auto' alt='wren' src={wren}/>
                        <h2 className='fw-2 text-center'>Wren Macayan</h2>
                        <p className='paragraph'>Uplift Code Camp Student <br/>DICT Batch 1 - 2022 </p>
                        <p>
                            <a className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#wren' rel='noreferrer' href='https://bit.ly/3cd3luC' target='_blank'>More Info &raquo;</a>
                            <div className='modal fade mt-1' id='wren' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
                            <div className='modal-dialog about-modal'>
                                <div className='modal-content'>
                                <div className='modal-header'>
                                    <h1 className='modal-title fs-5' id='staticBackdropLabel'>More Info</h1>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                </div>
                                <div className='modal-body'>
                                I am Wren Macayan, I graduated bachelor of science in information technology at Pangasinan State University, last August 31, 2022. My passion is building and designing websites that would help us innovate, I believe that you should never stop learning. We must constantly seek for ways to advance in a world where technology is constantly being developed and we should never stop chasing our goals and be the best version of ourselves                                </div>
                                <div className='modal-footer'>
                                <a  className='link' href={require('../assets/WrenMacayan_FullStackDev_MERN_2022.pdf')} download='WrenMacayan_Resume' target='_blank' rel='noreferrer'>Download my Résumé</a>
                                   
                                </div>
                                </div>
                            </div>
                            </div>
                            </p>
                    </div>
                </div>
            </div>
        
        </div>
            <Skills />
             <ContactUs />
             </>
    )
};

export default AboutMe;
