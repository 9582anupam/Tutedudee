import intern_node from './images/intern_node.png';
import intern_node_mobile from './images/intern_node_mobile.png';

const Internship = () => {
    return (
        <div className='intern-node-container'> 
            <p>How does the Internship Program works?</p>
            <div className="intern-node-img-div">
                <img src={intern_node} alt="intern-node" className='intern-node-img'/>
            </div>

            <div className='intern-mobile-container'>
                <img src={intern_node_mobile} alt="intern-node-mobile" className='intern-node-mobile'/>
                <div className='intern-mobile-text-container'>
                    <div className='intern-node-text1'>
                        <h1 className='intern-text1'>Learn from our structured pre recorded courses made by experts to meet industry needs</h1>
                        <h1 className='intern-text2'>Personal mentors to guide and help you throughout your journey as a friend</h1>
                        <h1 className='intern-text3'>Get guaranteed paid internships after completion of the program along with course completion certificates</h1>
                    </div>
                    <div className='intern-node-text2'>
                        <h1 className='intern-text4'>1:1 live doubt solving support available throughout the day to clear your doubts instantly </h1>
                        <h1 className='intern-text5'>Build major projects which makes your resume stand apart</h1>
                    </div>
                </div>
            </div>

            
            <div className='intern-node-button'>
                <h1>Apply now for ₹ 2999</h1>
            </div>
        </div>
    )
}

export default Internship;