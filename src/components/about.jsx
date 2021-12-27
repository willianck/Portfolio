import "./about.scss"
import FadeInSection from "./fading";


// const style={
//     display: flex,
//     flex-direction: row;
//                 position: relative;
                
               
// }
export default function About(){
    return (
        <div className = "about" id ='about'>
        <FadeInSection>
        <h1><i className="fas fa-code"></i> About me </h1>
        </FadeInSection>
            <div className = 'container'>
               <FadeInSection>
                <div className ='biography'>
                      <p>I am a grad student at <b>UCLA</b> studying a <b>Master’s in Engineering</b> with <b>Data Science</b>.</p>

                      <p>I am fuelled by my passion for analysing complex data  and create effective models driven by machine learning and data science particularly in the social science domain. Working with data concerning the development, structure, and functioning of human society is something I find thrilling.</p>

                      <p>My fields of interest include Natural Language Processing , Machine Learning, Deep Learning and Software Development. I like to spend my free time in social gatherings, experimenting in the kitchen  and playing the piano.</p>
               </div>
               </FadeInSection>
              
              
                <div className = 'profile'>
                   <FadeInSection>
                    <div className = 'wrapper'>
                        <img src="/assets/profile.png" alt=" "/>
                    </div>
                    </FadeInSection>
                    
                </div>
               
            </div>
        </div>
      
    )
}