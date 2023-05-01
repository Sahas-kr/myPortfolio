function Component1(){
    return(
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand badge bg-light text-dark mx-3" href="/ReactPortfolio">
    Developer
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mx-3 mb-2 mb-lg-0" >
        <li class="nav-item">
          <a class="nav-link active text-dark" href="/About" id="tabs">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark" href="/Resume" id="tabs">Resume</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link active text-dark" href="/Portfolio"  id="tabs">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark" href="/Blog"  id="tabs">Blog</a>
        </li> */
        <li class="nav-item">
          <a class="nav-link active text-dark" href="/Contact" id="tabs">Contact</a>
        </li> }
      </ul>
    </div>
  </div>
</nav>



        </div>
    )
}
export default Component1;