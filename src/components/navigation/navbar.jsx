import './navbar.scss';
import FadeInSection from "../fading";

export default function Navbar(){
    return (
        <div className = "navbar">
            <div className="links">
            <FadeInSection style={{"transitionDelay": "100ms"}}>
            <div><a href ="/"> <p>/home</p></a></div>
            </FadeInSection>
            <FadeInSection style={{"transitionDelay": "200ms"}}>
            <div><a href ="#about"> <p>/about</p></a></div>
            </FadeInSection>
            <FadeInSection style={{"transitionDelay": "300ms"}}>
            <div><a href ="#skills"> <p>/skills</p></a></div>
            </FadeInSection>
            <FadeInSection style={{"transitionDelay": "400ms"}}>
            <div><a href ="#projects"> <p>/projects</p></a></div>
            </FadeInSection>
            <FadeInSection style={{"transitionDelay": "500ms"}}>
            <div><a href ="#contact"> <p>/contact</p></a></div>
            </FadeInSection>
            </div>
            
            <div className = 'icons'>
                <a href="https://github.com/willianck"><i className="fab fa-github"></i></a>
                <a href= "https://www.linkedin.com/in/william-nafack-585210173/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:willian_ck@outlook.com"><i className="fa-regular fa-envelope"></i></a>
            </div>
           
        </div>



    );
}