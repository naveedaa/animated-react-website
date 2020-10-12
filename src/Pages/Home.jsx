import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeImg from '../images/mainGiphy2.gif';
import Webanimation from '@wellyshen/use-web-animations';
import useWebAnimations, { pulse, bounce, backInDown, jello } from "@wellyshen/use-web-animations";

function Home() {
    const { keyframes, timing } = pulse;
    const  refPulse  = useWebAnimations({
      keyframes,
      timing: {
        ...timing,
        delay: 2000, 
        iterations: Infinity,
        duration: 1800,
        direction: "alternate",
        easing: "ease-in-out", 
      },
    });

    const bounceAnimation = bounce;
    const refBounce = useWebAnimations({
    keyframes: bounceAnimation.keyframes,
    timing: {
      iterations: 1,
      duration: 2000,
     }
    });

    const backInDownAnimation = backInDown;
    const refbackInDown = useWebAnimations({
    keyframes: backInDownAnimation.keyframes,
    timing: {
      iterations: 1,
      duration: 2000,
    }
    });

    const jelloAnimation = jello;
    const refJello = useWebAnimations({
    keyframes: jelloAnimation.keyframes,
    timing: {
       iterations: Infinity,
       duration: 3000,
      }
    });

    const imgRotate = Webanimation({
        keyframes: [
            { transform: 'translate(10px) rotate(360deg)' },
        ],
        timing: {
            delay: 2000,
            duration: 12000,
            iterations: Infinity,
        },
    });

    return (
        <>
          <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10  mx-auto">
                        <div className="content row">
                        <div ref={refPulse.ref} className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1 ref={refBounce.ref}>
                                Make Your Day With 
                                <strong className="brand-name"> Starbucks</strong> 
                            </h1>
                            <h2 className="my-3">
                                
                                We have a different items that you can enjoy
                            </h2>
                            <div className="mt-3">
                                <NavLink to='/service' ref={refJello.ref} className="btn-get-started">                                    
                                    Let's try
                                </NavLink>
                            </div>
                        </div>

                        <div ref={refbackInDown.ref} className="col-lg-6 col-md-6 order-md-2 order-1 order-lg-2 header-img">
                            <img 
                                
                                ref={imgRotate.ref}
                                src={HomeImg} 
                                width="420vh"
                                className="img-fluid animated" 
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

export default Home;