import "./contact.scss";
import FadeInSection from "./fading";


export default function Contact(){

    return (
            <div className='contact' id='contact'>
                <FadeInSection>
                <h1><i className="fas fa-code"></i> Get In Touch</h1>
                </FadeInSection>
                <FadeInSection>
                <div className='contactme'>
                    <p>I am currently looking for new opportunities and challenges to solve. My inbox is always open whether you have a question or just want to say hi. I will try my best to get back to you! </p>
                </div>
                </FadeInSection>
                <FadeInSection>
                <a href="mailto:willian_ck@outlook.com"><div className='hello'>
               Message Me
                </div></a>
                </FadeInSection>
            </div>

    )
}