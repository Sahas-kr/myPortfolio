
import { useState, useEffect } from "react";
function Components2(){
    const [role, setRole] = useState('');
    useEffect(()=>{
        const arr = ["Developer", "Designer", "Freelancer"];
        let i = -1;
        const interval = setInterval(()=>{
            if (i <= arr.length){
                i = i+1;
            }else {
                i=0;
            }
            setRole(arr[i]);
        },1500)
        return ()=>clearInterval(interval);
    })
    return(
        <div class="heading">
            <h1 >Sahas K R</h1>
            <h3>
            <span>  I'm a {role}</span>
            </h3>
        </div>
    );
}

export default Components2;



























// function Component2(){
//     return(
//         <div class = 'heading'>
//   <h1 >Sahas K R</h1>
//   <h3>I'm a Developer</h3>
// </div>
//     );
// }
// export default Component2;