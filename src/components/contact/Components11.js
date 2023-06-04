// import { useState } from "react"
import emailjs from 'emailjs-com'

export default function Components11(){

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_tvfy8rs', 'template_ecn3q7k', e.target, 'Ls-qsO3Hz_I8qfJ7L')
        .then(res=>{
            alert('Message Successfully sent to Sahas.')
            window.location.reload('http://localhost:3000/?#/Contact')
        }).catch(err=>alert('An error occured, please try again'));
    }


    // const [values, setValues] = useState({name:'', email:'', subject:'', message:''})
    // const [errors, setErrors] = useState({})

    // function handleInput(e){
    //     const newObj = {...values, [e.target.name]: e.target.value}
    //     setValues(newObj)
    // }

    //  function handleValidation () {
    //     setErrors(Validation(values)) ;
    //  }

    return(
        <div>
            <div class="me-5" id="topHdngResponsive">
            <h6 class="text-center" style={{marginTop: "90px"}} id='loadingResp460'>Feel free to contact me anytime</h6>
            <h1 class="text-center text-success" id='loadingResp460'>Get in Touch</h1>
            <div class="loader"  id='loading'></div>
            </div>

            <div className="row" style={{marginLeft: "22%", marginTop: "60px"}}>
                <div className="col-8 ">
                    <h3>Message me</h3>
                    <form onSubmit={sendEmail}>
                    <div class="row mt-4">
                         <div class="col-6">
                            <input type="text" class="form-control" name='name' placeholder="Name" id="name" /*onChange={handleInput}*/></input>
                         </div>
                            {/* {errors.name && <p style={{color:'red'}}>{errors.name}</p>} */}
                         <div class="col-6">
                             <input type="email" class="form-control" name='email' placeholder="Email" id="email" /*onChange={handleInput}*/></input>
                         </div>
                            {/* {errors.email && <p style={{color:'red'}}>{errors.email}</p>} */}
                         <div class="col my-4">
                             <input type="text" class="form-control" placeholder="Subject" name='subject' id="subject" /*onChange={handleInput}*/></input>
                        </div>
                             {/* {errors.subject && <p style={{color:'red'}}>{errors.subject}</p>} */}
                        <div class="input-group rows-4">
                             <textarea class="form-control" placeholder="Message" name='message' id="message" /*onChange={handleInput}*/></textarea>
                        </div>
                             {/* {errors.message && <p style={{color:'red'}}>{errors.message}</p>} */}
                        <div class="col-4 my-4" id="btnResponsive">
                             <button class="btn btn-success rounded-pill" /*onClick={handleValidation}*/>Send Message </button>
                             {/* <input type='submit' className="btn btn-success rounded-pill" value='Send Message'/> */}
                        </div>
                    </div>
                    </form>
                </div>

{/* 
                <div className="col-6">
                     <h3>Contact Info</h3>
                     <p>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                     <div className="row ms-2 my-4">
                        <div className="col-2 ">
                        <i class="fa-solid fa-user fa-2xl"></i>
                        </div>
                        <div className="col-10">
                            <span style={{display: "grid", }}> 
                                <p style={{fontSize:"18px"}}><b>Name</b></p>
                                <p style={{fontSize:"14px"}}>Sahas K R</p>
                            </span>
                        </div>
                     </div>
                </div> */}
            </div>
        </div>
    )
}