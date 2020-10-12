import React, { useState } from 'react'
import useWebAnimations, { jello, shakeY } from "@wellyshen/use-web-animations";

export const Contact = () => {
    const [data, setData ] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say: ${data.msg} `);
    };

    const jelloAnimation = jello;
    const refJello = useWebAnimations({
    keyframes: jelloAnimation.keyframes,
    timing: {
       iterations: Infinity,
       duration: 3000,
      }
    });

    const shakeYAnimation = shakeY;
    const refshakeY = useWebAnimations({
    keyframes: shakeYAnimation.keyframes,
    timing: {
       iterations: 1,
       duration: 3000,
      }
    });

    return (
       <>
       <div className="my-5">
           <h1 ref={refshakeY.ref} className="text-center contact"> Contact Us</h1>
       </div>
       <div className="container contact_div">
           <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                   <form onSubmit={formSubmit}>
                       <div className="mb-3">
                            <label for ="exampleFormControlInput1" className="form-label">
                                Full Name
                            </label>
                            <input 
                                required
                                type="text" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                name="fullname"
                                value={data.fullname}
                                onChange={InputEvent}
                                placeholder="Enter your name" 
                            />
                       </div>
                       <div className="mb-3">
                            <label for ="exampleFormControlInput1" className="form-label">
                                Moile Number
                            </label>
                            <input 
                                required
                                type="number" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                name="phone"
                                value={data.phone}
                                onChange={InputEvent}
                                placeholder="mobile number" 
                            />
                       </div>
                       <div className="mb-3">
                            <label for ="exampleFormControlInput1" className="form-label">
                                Email address
                            </label>
                            <input 
                                required
                                type="email" 
                                className="form-control" 
                                id="exampleFormControlInput1" 
                                name="email"
                                value={data.email}
                                onChange={InputEvent}
                                placeholder="name@example.com" 
                            />
                       </div>

                       <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">
                                Message
                            </label>
                            <textarea 
                                class="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"
                                name="msg"
                                value={data.msg}
                                onChange={InputEvent}
                            ></textarea>
                       </div>
                       <div  className="col-12">
                           <button ref={refJello.ref} className="submit change-color" type="submit">
                               Submit form
                           </button>
                       </div>

                       
                   </form>
               </div>
           </div>
       </div>
       
       </>
    )
}

export default Contact;