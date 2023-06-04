import { Link } from "react-router-dom";

function Component1() {
  return (
    <div className="container1">

      <nav class="navbar navbar-expand-lg navbar-light " >
        <div class="container-fluid">
          {/* <a class="navbar-brand badge bg-light text-dark mx-3" href="/ReactPortfolio"> */}
          <Link className="navbar-brand badge bg-light text-dark mx-3" to="/">
            Sahas Portfolio
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span class="navbar-toggler-icon"></span> */}
            <i class="fa-solid fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mx-3 mb-2 mb-lg-0"  >
              <li class="nav-item">
                <Link class="nav-link active text-dark " to="/About" id="tabs">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-dark" to="/Resume" id="tabs">Resume</Link>
              </li>
              {/* <li class="nav-item">
          <Link class="nav-link active text-dark" to="/Portfolio"  id="tabs">Portfolio</Link>
         </li> */}
              <li class="nav-item">
                <Link class="nav-link active text-dark" to="/Project" id="tabs">Projects</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active text-dark" to="/Contact" id="tabs">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>



    </div>
  )
}
export default Component1;