import pic from '../images/myimage.JPG'

function Component4() {
    return (
        <div>

            <h6 class="text-center" style={{marginTop: "50px"}}>Get to know me</h6>
            <h1 class="text-center">About Me</h1>
            <div class="loader" style={{marginLeft: "46.1%", marginBottom: "75px"}}></div>
            <div class="row">
                <div class="col-3 me-5">
                    <img class="image-about" src={pic} alt='myimage' border="1" height="350px" width="250px"></img>
                </div>
                <div class="col-8 my-auto mx-2">
                    <h6 class="text-success">Who am I?</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium necessitatibus, dignissimos facere quia nemo dolore ad perferendis in itaque odio accusamus provident! Ratione, distinctio. Eligendi ea aspernatur ad quod omnis amet error suscipit dolore fuga dolorem! Voluptatem reiciendis natus blanditiis, sit quam quisquam nihil tenetur molestias similique ratione, quibusdam sunt.</p>
                    <hr></hr>
                    <div class="row">
                        <div class="col-6">
                            <p>Name: Sahas K R</p>
                        </div>
                        <div class="col-6">
                            <p>Email: <a href="#a" class="text-success" style={{textDecoration: "none"}}>sahasiyer23@gmail.com</a></p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <p>Age: 27</p>
                        </div>
                        <div class="col-6">
                            <p>Location: Bengaluru, India</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                        <button class="btn btn-success rounded-pill">Download CV</button>
                        </div>
                        <div class="col-8" >
                       <a href="#a"> <i class="fa-brands fa-facebook fa-xl mx-1 my-4" id="link"></i></a>
                       <a href="#a"><i class="fa-brands fa-whatsapp fa-xl mx-1 my-4" style={{color: "green"}} id="link"></i></a>
                       <a href="#a"> <i class="fa-brands fa-instagram fa-xl mx-1 my-4" style={{color: "red"}} id="link"></i></a>
                       <a href="#a"> <i class="fa-brands fa-linkedin fa-xl mx-1 my-4" id="link"></i></a>
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}
export default Component4;