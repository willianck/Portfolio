import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef} from "react";
import FadeInSection from "./fading";


export default function Intro(){
    const textRef = useRef();
    useEffect( () =>{
        init(textRef.current, { 
                backSpeed:  50,
                startDelay: 800,
                backDelay: 400,
                showCursor: true,
                typeSpeed: 100,
                 strings: ['Welcome...', 'First thing first NLP for the win!', 'I love building cool things.' ] })
    },[])
    return (
        <div className = "intro" id = 'intro'>
            <div className ='intro-speech'>
              
                <div className = 'wrapper'>
                <FadeInSection>
                    <h1> Hi, my<br></br>name is <span>William.</span> </h1>
                 </FadeInSection>
                 <FadeInSection>
                    <h2><span ref={textRef}></span> </h2>
                </FadeInSection>
             
                </div>
                
              
                
            </div>
            <div className ='intro-logo'>
                <FadeInSection>
                <div className='logo-container'>
                    <img id ='logo' src = "/assets/ipad.svg" alt=""/>
                </div>
                </FadeInSection>

            </div>
        </div>
    );
}