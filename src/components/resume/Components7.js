import Components10 from "./Components10";
import Components8 from "./Components8";
import Components9 from "./Components9";


export default function Components7(){
    return(
        <div>

            <div class="me-5">
            <h6 class="text-center" style={{marginTop: "90px"}}>Check out my resume</h6>
            <h1 class="text-center">Resume</h1>
            <div class="loader" style={{marginLeft: "46.1%"}}></div>
            </div>

            <div class="row" style={{marginLeft: "90px", marginTop: "90px"}}>

                <div class="row ms-5">
                <div class="col-6 ">
                <h3>Education</h3>
                    <Components8 title="MERN Full Stack" title1="ETHNUS / 2022"/>
                    <Components8 title="Civil Engineering" title1="SCE / 2014-2018" />
                    <Components8 title="PUC, Science" title1="Vijaya PU College / 2012-2014" />
                </div>
                <div class="col-6">
                <h3>Experience</h3>
                    <Components9 title="Software Engineer" title1="ETHNUS / 2022-Present"/>
                    <Components9 title="Back-End Developer" title1="Adobe / 2020-2022" />
                    <Components9 title="UI/UX Designer" title1="Google / 2018-2020" />
                </div>
                </div>
               
               
                <div class="row ms-5 mt-5">
                         <div class=" mt-5">
                              <h6>My level of knowledge in some tools</h6>
                              <h1>My Skills</h1>
                         </div>
                    <div class="col-6">

                         <div class=" my-4 mt-4">
                             <Components10 title2="HTML/CSS" number="75"/>
                             <Components10 title2="JavaSCRIPT"number="60"/>
                             <Components10 title2="Node.js " number="40"/>
                         </div>

                    </div>

                    <div class="col-6">

                    <div class=" my-4 mt-4">
                             <Components10 title2="React.js" number="55"/>
                             <Components10 title2="Express.js" number="40"/>
                             <Components10 title2="MongoDB" number="40"/>
                         </div>

                    </div>
                </div>
                </div>
            </div>
    );
}