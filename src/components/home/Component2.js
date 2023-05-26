import { useTypewriter, Cursor } from 'react-simple-typewriter';
function Components2(){

    
    const [text1] = useTypewriter({
        words: ['Developer', 'Programmer', 'Designer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 80,
    })
    return(
        <div class="heading"  >
            <h1 style={{fontWeight:'bolder', fontSize:'70px'}}>Sahas K R</h1>
            <h3 style={{fontSize:'30px', margin:'30px'}}>
                I'm a {" "}
                <span style={{color:"green"   }}>
                    {text1}
                </span>
                <span >
                    <Cursor  cursorStyle="|" cursorColor='green' cursorBlinking=""/>
                </span>
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