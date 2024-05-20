import cert from '../images/cert.png'
import star from '../images/purp_star.svg'
import intern from '../images/intern.png'

const Certificates = () => {

    return (
        <div className="certificates">
            <p className='cert-heading'>Unlock <span className='cert-highlight'>6 Certificates</span> & <span className='cert-highlight'>Internship Opportunities!</span></p>
            <div className='cert-container'>
                <div className='cert-left'>
                    <h1>Get 6 Industry Recognized Certificates!</h1>
                    <img src={cert} alt='cert' className='cert-img'/>
                    <div className='cert-star-text-container'>
                        <div className='cert-star-text'>
                            <img src={star} alt='star' className='purp-star'/>
                            <h2>Official and Verified</h2>
                        </div>
                        <div className='cert-star-text'>
                            <img src={star} alt='star' className='purp-star'/>
                            <h2>Enhances Credibility</h2>
                        </div>
                    </div>
                </div>
                <div className='cert-right'>
                    <p>Bag Internship Opportunities!</p>
                    <h1>With every course, we make you not only industry-ready but also help you crack your first internship.</h1>
                    <img src={intern} alt='intern'/>
                </div>
            </div>
        </div>
    )
}

export default Certificates