import hat from './images/hat.svg';
import star from './images/award_star.svg';
import enroll from './images/enroll.svg';
import question from './images/question.svg';

const Hero = () => {

    return (
        <div className='hero'>
            <div className="hat-iit-alumuni">
                <img src={hat} alt="hat img" className="hat-image" />
                <p className="iit-alumuni">An <span className='iit-alumuni-highlight'>IIT Delhi</span> Alumni Initiative</p>
            </div>
            <div>
                <section className="hero-section">
                    <h1>Become an Expert in the field of <span>Data Science with 6 courses</span></h1>
                    <p>A specially crafted Tech Kickstarter, with <span>5+ extensive online courses.</span></p>
                    <div className="features">
                        <div className="feature-item"><img src={star} alt="star" className="star-image" /><p>Personal Mentorship</p></div>
                        <div className="feature-item"><img src={star} alt="star" className="star-image" /><p>Internship Assistance</p></div>
                        <div className="feature-item"><img src={star} alt="star" className="star-image" /><p>Industry Certified Courses</p></div>
                    </div>
                    <div className="cta-buttons">
                        <div className="enroll-now"><p>Enroll Now</p><img src={enroll} alt="enroll now" className="enroll-image" /></div>
                        <div className="know-more"><p>Know More</p><img src={question} alt="enroll now" className="enroll-image" /></div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Hero;