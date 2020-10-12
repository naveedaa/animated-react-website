import React from 'react'
import { NavLink } from 'react-router-dom';
import useWebAnimations, { headShake } from "@wellyshen/use-web-animations";

export const Card = (props) => {
    const rollInAnimation = headShake;
    const refHeadShake = useWebAnimations({
    keyframes: rollInAnimation.keyframes,
    timing: {
      iterations: Infinity,
      duration: 2000,
      }
    });

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text  text">
                                Coffee Impacts More Than Just Your Morning. Get Involved. Shop now.
                            </p>
                            <NavLink ref={refHeadShake.ref} to="/about" className=" change-color">
                                Go somewhere
                            </NavLink>                                
                        </div>
                </div>
             </div>  
        </>
    )
}

export default Card;