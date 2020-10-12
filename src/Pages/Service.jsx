import React from 'react'
import Card from '../Components/Card';
import ServiceData from '../ServiceData';
import useWebAnimations, { rollIn, flash } from "@wellyshen/use-web-animations";

function Service() {
    
    const rollInAnimation = rollIn;
    const refHead = useWebAnimations({
    keyframes: rollInAnimation.keyframes,
    timing: {
        iterations: 1,
        duration: 1500,
      }
    });

    const flashAnimation = flash;
    const refFlash = useWebAnimations({
    keyframes: flashAnimation.keyframes,
    timing: {
        iterations: 1,
        duration: 1500,
       }
    });

    return (
        <>        
        <div className="my-5">
            <h1 ref={refHead.ref} className="text-center service"> Our Services </h1>
        </div>
        <div className="container-fluid mb-5 service">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div  ref={refFlash.ref} className="row gy-4 setImage">
                        {
                            ServiceData.map((val, ind) => {
                                return <Card    
                                   key={ind}
                                   imgsrc={val.imgsrc}
                                   title={val.title}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Service;