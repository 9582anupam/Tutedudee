import clock from "../images/clock.svg";
import scribble from "../images/scribble.svg";
import progress from "../images/progress.svg";
import steps from "../images/steps.svg";
import step_access from "../images/step_access.svg";
import steps_mobile from "../images/setps_mobile.svg";

const RefundOffer = () => {
    return (
        <div className="refund-offer-container">
            <h1 className="refund-heading">
                Don't miss out on this
                <span className="refund-highlight">
                    {" "}
                    limited-time
                     opportunity{" "}
                </span>
                to learn for
                <span className="refund-highlight"> Free!</span>
            </h1>
            <div className="offer-box">
                <img
                    src={scribble}
                    alt="scribble"
                    className="offer-scribble"></img>
                <div className="offer-header">
                    <span className="offer-percent">100% Refund Offer 😎</span>
                    <span className="seat-left">20 Seats Left</span>
                    <img src={progress} alt="progress" className="progress" />
                    <span className="offer-end">
                        <img src={clock} alt="clock"></img>
                        <p>Offer ends in 10:00Mins</p>
                    </span>
                </div>
            </div>
            <h2>How does it work?</h2>
            <div className="step-icon-container">
                <div className="steps-line"></div>
                <div className="step-overlay-container">
                    <p className="step-overlay-text">Step 1</p>
                    <img src={steps} alt="steps" className="steps-icon" />
                </div>
                <div className="step-overlay-container">
                    <p className="step-overlay-text">Step&nbsp;2</p>
                    <img src={steps} alt="steps" className="steps-icon" />
                </div>
                <div className="step-overlay-container">
                    <p className="step-overlay-text">Step&nbsp;3</p>
                    <img src={steps} alt="steps" className="steps-icon" />
                </div>
            </div>
            <div className="step-container-mobile">
                <img
                    src={steps_mobile}
                    alt="steps_mobile"
                    className="steps-mobile"
                />
                <div className="steps-container">
                    <div className="step-card">
                        <div className="step">
                            <div className="step-body">
                                <h3>
                                    Step 1 : Enroll into your favorite course for
                                    only ₹1,499
                                </h3>
                                <img
                                    src={step_access}
                                    alt="sccess"
                                    width={102}
                                    height={69}
                                    className="step-access"></img>
                                <p>
                                    Start Learning with{" "}
                                    <span>Lifetime Course Access.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step">
                            <div className="step-body">
                                <h3>
                                    Step 2 : Complete Course & Assignments within 2
                                    Years!
                                </h3>
                                <div className="step-card-det">
                                    <h4>2</h4>
                                    <h5>years time from the date of enrollment</h5>
                                </div>
                                <p>
                                    Finish the course within <span>2 years</span> to
                                    qualify for refund.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="step-card">
                        <div className="step">
                            <div className="step-body">
                                <h3>
                                    Step 3 : Receive 100% Refund upon completion
                                </h3>
                                <div className="step-card-det">
                                    <h4>100%</h4>
                                    <h5>Enrollment Fee is refunded</h5>
                                </div>
                                <p>
                                    Upon course completion within{" "}
                                    <span>2 years</span>, get your
                                    <span> ₹1,499 back.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefundOffer;
