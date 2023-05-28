import { Link } from "react-router-dom";
import pic from "../images/weather.jpg";
import pic1 from "../images/calc.jpg";
import pic2 from "../images/crud.jpg";
import pic3 from "../images/stopwatch.jpg";
import pic4 from "../images/age.jpg";

function Component12() {
    return (
        <div className="container1">
            
            <h6 class="text-center" style={{ marginTop: "50px" }}  id='loadingResp460'>Check out my latest projects</h6>
            <h1 class="text-center text-success"  id='loadingResp460'>My Projects</h1>
            <div class="loader"  id='loading1' ></div>

            <div className="row"  id="projectsResponsive">
                <div className="col-4 ms-auto " >
                    <Link to={'https://sahas-kr.github.io/weatherApp/'} target="blank"><img src={pic} class="img-fluid" alt="..." height="325px" width="325px"/></Link>
                    <p className="mt-3 "><b>1. Weather app.</b></p>
                </div>
                <div className="col-4 ms-auto">
                    <Link to={'https://sahas-kr.github.io/calculatorApp/'}  target="blank"><img src={pic1} class="img-fluid" alt="..." height="325px" width="325px"/></Link>
                    <p className="mt-3"><b>2. Basic Calculator.</b></p>
                </div>
                <div className="col-4 ms-auto">
                    <Link to={'https://sahas-kr.github.io/crudApp/'}  target="blank"><img src={pic2} class="img-fluid" alt="..." height="325px" width="325px"/></Link>
                    <p className="mt-3"><b>3. CRUD app.</b></p>
                </div>
            </div>
            <div className="row" style={{ marginTop:"80px"}} id="projectsResponsive">
                <div className="col-4 ms-auto ">
                    <Link to={'https://sahas-kr.github.io/stopWatch/'}  target="blank"><img src={pic3} class="img-fluid" alt="..." height="325px" width="325px"/></Link>
                    <p className="mt-3"><b>4. Stopwatch.</b></p>
                </div>
                <div className="col-4 ms-auto">
                    <Link to={'https://sahas-kr.github.io/ageCalculator/'}  target="blank"><img src={pic4} class="img-fluid" alt="..." height="325px" width="325px"/></Link>
                    <p className="mt-3"><b>5. Age calculator.</b></p>
                </div>
                <div className="col-4 ms-auto">
                    {/* <Link><img src={pic} class="img-fluid" alt="..." height="325px" width="325px"/></Link>
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur.</p> */}
                </div>
            </div>

        </div>
    )
}

export default Component12;