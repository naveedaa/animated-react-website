import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeImg from '../images/mainGiphy.gif';
import './About.css';
import useWebAnimations, { rubberBand, backInLeft, wobble } from "@wellyshen/use-web-animations";

function About() {
    const rollInAnimation = rubberBand;
    const refRubberBand = useWebAnimations({
    keyframes: rollInAnimation.keyframes,
    timing: {
      iterations: 1,
      duration: 2000,
    }
    });

    const backInLeftAnimation = backInLeft;
    const refBackInLeft = useWebAnimations({
    keyframes: backInLeftAnimation.keyframes,
    timing: {
      iterations: 1,
      duration: 2000,
    }
    });

    const refBInLeftAnimation = backInLeft;
    const refBInLeft = useWebAnimations({
    keyframes: refBInLeftAnimation.keyframes,
    timing: {
      iterations: 1,
      duration: 5000,
    }
    });

    const wobbleAnimation = wobble;
    const refwobble = useWebAnimations({
    keyframes: wobbleAnimation.keyframes,
    timing: {
      iterations: Infinity,
      duration: 5000,
    }
    });

    return (
        <>
          <section id="head" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row my-15" >
                    <div className="col-10  mx-auto">
                        <div className="d-flex justify-content-center align-items-start content row content-two">
                        <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  flex-column">
                            <h2 ref={refRubberBand.ref} className="mainHead">
                                Expect more than coffee
                            </h2>
                            <p ref={refBackInLeft.ref} className="my-3 para">
                            We’re not just passionate purveyors of coffee, but everything else that goes with a full and rewarding coffeehouse experience. We also offer a selection of premium teas, fine pastries and other delectable treats to please the taste buds. And the music you hear in store is chosen for its artistry and appeal.
                            It’s not unusual to see people coming to Starbucks to chat, meet up or even work. We’re a neighborhood gathering place, a part of the daily routine – and we couldn’t be happier about it. Get to know us and you’ll see: we are so much more than what we brew.
                            <br /> <br />
                            We make sure everything we do is through the lens of humanity – from our commitment to the highest quality coffee in the world, to the way we engage with our customers and communities to do business responsibly.
                            <br /> <br />
                            So, don't waste your time engage your bussiness with us
                            </p>
                            <div ref={refBInLeft.ref}  className="mt-3 column">
                                <NavLink ref={refwobble.ref} to='/contact' className="contact change-color">                                    
                                    Contact Now
                                </NavLink>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 order-md-2 mt-2 order-1 order-lg-2 head-img">
                            <img 
                                src={HomeImg} 
                                className="img-fluid animated setImg" 
                                alt=" " 
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
        </>
    )
}

export default About;