function Component1(){
    return(
        <div>
            
            <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand badge bg-light text-dark" href="ReactPortfolio/">
    Developer
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-dark" href="/About">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark" href="/Resume">Resume</a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link active text-dark" href="/Portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active text-dark" href="/Blog">Blog</a>
        </li> */
        <li class="nav-item">
          <a class="nav-link active text-dark" href="/Contact">Contact</a>
        </li> }
      </ul>
    </div>
  </div>
</nav>



        </div>
    )
}
export default Component1;