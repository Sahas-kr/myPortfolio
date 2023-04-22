import pic from '../images/myimage.JPG'

function Component4() {
    return (
        <div>

            <h5 class="text-center">Get to know me</h5>
            <h1 class="text-center">About Me</h1>
            <div class="row">
                <div class="col-3 me-5">
                    <img class="image-about" src={pic} border="1" height="350px" width="250px"></img>
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
                            <p>email: sahasiyer23@gmail.com</p>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <p>Age: 27</p>
                        </div>
                        <div class="col-6">
                            <p>Location: Bengaluru</p>
                        </div>
                    </div>
                    <button class="btn btn-success rounded-pill">Download CV</button>
                </div>

            </div>

        </div>
    )
}
export default Component4;