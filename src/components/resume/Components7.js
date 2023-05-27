import Components10 from "./Components10";
import Components8 from "./Components8";
import Components9 from "./Components9";


export default function Components7() {
    return (
        <div className="container1">

            <div class="me-5" id="topHdngResponsive">
                <h6 class="text-center" style={{ marginTop: "90px" }} id='loadingResp460'>Check out my resume</h6>
                <h1 class="text-center" id='loadingResp460'>Resume</h1>
                <div class="loader" id='loading'></div>
            </div>

            <div class="row" id="resResponsive">

                <div class="row justify-content-md-center ms-5 " >
                    <div class="col-md-6 " >
                        <h3>Education</h3>
                        <Components8 title="MERN Full Stack" title1="ETHNUS / 2022" definition="I joined Ethnus on August 2022 to study MERN fullstack course." definition1="With excellent trainers, I learned the course with more interest, also gained some practical knowledge. " />
                        <Components8 title="Civil Engineering" title1="SCE / 2014-2018" definition="I studied Civil Engineering at Sapthagiri College Of Engineering, Bengaluru." definition1="Without any backlogs, I successfully graduated in the year 2018."/>
                        <Components8 title="PUC, Science" title1="Vijaya PU College / 2012-2014" definition="I studied at The Bangalore Education Society till 10th standard." definition1="Later for my 11th & 12th I opted for Biology to get to know the basics of life." />
                    </div>
                    <div class="col-md-6">
                        <h3>Experience</h3>
                        <Components9 title="Web developer Intern" title1="ETHNUS / 2023-Present" definition="My role here is to develop basic projects using HTML,CSS, Bootstrap, JavaScript and help trainers who in-turn use the code to train new students." definition1="I have created more than 40 tasks and indirectly helped new students in understanding the concept. "/>
                        <Components9 title="Civil Engineer | Interior Designer" title1=" 2019-2022" definition="I worked as a site engineer and learned interior designing from my colleagues and later was designing interiors during this period." definition1="I also did an freelance Interior Design for a 3bhk flat and executed it on my own."/>
                        {/* <Components9 title="UI/UX Designer" title1="Google / 2018-2020" /> */}
                    </div>
                    <div className="row mt-5">
                        <div class="col-md-4">
                            <p><b>Link to download my Resume:</b></p>
                            <button class="btn btn-success rounded-pill">Download </button>
                        </div>
                    </div>
                </div>


                <div class="row justify-content-md-center ms-5 mt-5">
                    <div class=" mt-5" id="mySkills">
                        <h6>My level of knowledge in some tools</h6>
                        <h1>My Skills</h1>
                    </div>
                    <div class="col-md-6">

                        <div class=" my-4 mt-4">
                            <Components10 title2="HTML/CSS" number="75" />
                            <Components10 title2="JavaSCRIPT" number="65" />
                            <Components10 title2="Node.js " number="50" />
                        </div>

                    </div>

                    <div class="col-md-6">

                        <div class=" my-4 mt-4">
                            <Components10 title2="React.js" number="70" />
                            <Components10 title2="Express.js" number="40" />
                            <Components10 title2="MongoDB" number="40" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}