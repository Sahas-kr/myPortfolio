import Component1 from "./Component1";
import Component2 from "./Component2";
import '../../App.css'
import Component3 from "./Component3";

function Home() {
    return(
        <div class="homePage" >
              <Component1 />
             <Component2/>
             <Component3/>
            
        </div>
    );
}
export default Home;