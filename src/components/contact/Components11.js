export default function Components11(){

    // const nameEl  = document.getElementById('name');
    // const emailEl = document.getElementById('email');
    // const subjectEl = document.getElementById('subject');
    // const messageEl = document.getElementById('message');

    // function setError(ele,msg){

    // }


    const submit = () => {
        window.alert("Message sent successfully")
    } 
    return(
        <div>
            <div class="me-5" id="topHdngResponsive">
            <h6 class="text-center" style={{marginTop: "90px"}} id='loadingResp460'>Feel free to contact me anytime</h6>
            <h1 class="text-center" id='loadingResp460'>Get in Touch</h1>
            <div class="loader"  id='loading'></div>
            </div>

            <div className="row" style={{marginLeft: "22%", marginTop: "60px"}}>
                <div className="col-8 ">
                    <h3>Message me</h3>
                    <form>
                    <div class="row mt-4">
                         <div class="col-6">
                            <input type="text" class="form-control" placeholder="Name" id="name"></input>
                         </div>
                         <div class="col-6">
                             <input type="email" class="form-control" placeholder="Email" id="email" ></input>
                         </div>
                         <div class="col my-4">
                             <input type="text" class="form-control" placeholder="Subject" id="subject"></input>
                        </div>
                        <div class="input-group rows-4">
                             <textarea class="form-control" placeholder="Message" id="message"></textarea>
                        </div>
                        <div class="col-4 my-4" id="btnResponsive">
                             <button class="btn btn-success rounded-pill" onClick={submit}>Send Message</button>
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