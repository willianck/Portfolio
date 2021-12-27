import "./projects.scss"
import FadeInSection from "./fading";
import React from "react";

export default function Projects(){
// This data contains a list of all projects data added to the Projects section on the website 
    const data = [
    {
        id: 1,
        img: "/assets/wc.png",
        year: "May 2021",
        title: "Summarizing Stance Dependent Claims on Twitter",
        desc: " In this paper, I look at extracting the claims that summarise the opinions of tweets posted by users about a specific target or topic with a supervised approach.",
        git :"https://github.com/willianck/Thesis",
        skills: ["Python","Sklearn","FlairNLP","Pytorch","Spacy","NLTK","Gensim","Pandas"],
        style: {
            "transitionDelay": "300ms"
        }
    },

    {
        id: 2,
        img: "/assets/farm.png",
        year: "May 2021",
        title:"Predicting Food Insecurity in Low-income countries",
        desc: "In collaboration with the Alan Turing Institute of London we investigate  the main factors for food insecurity over 35,000 households located across 33 different countries and create a model able to predict this outcome from the survey data.",
        git:'https://github.com/willianck/ADS',
        skills: ["Python","Sklearn","Plotly","Pandas","Matplotlib","Seaborn"],
        style: {
            "transitionDelay": "500ms"
        }
        

    },

    {
        id: 3,
        img: "/assets/sceemspace.jpg",
        year:"May 2020",
        title: "SCEEM SPACE",
        desc:" Web application for managing offices across the School of Engineering buildings at the University of Bristol.",
        git:"https://github.com/willianck/SCEEMSPACE",
        skills: ["Java Spring","MySQL","HTML","CSS","JavaScript"],
        style: {
            "transitionDelay": "100ms"
        }
    }
]




  
  


    return (
        <div className = "projects" id = 'projects'>
            <FadeInSection>
            <h1><i className="fas fa-code"></i> Projects</h1>
            </FadeInSection>
            <div className='container'>
                <ul className='items-grid'>
                  {data.map((d)=>(
                <React.Fragment key={d.id}>
                <FadeInSection style={d.style}>
                <li className ="items" >
                        <div className ='top'>
                            <div className='folder-icon'>
                                <i className="far fa-folder"></i>
                            </div>
                            <div className='link-icon'>
                                <a href={d.git}><i className="fab fa-github"></i></a>
                            </div>
                           
                         
                         </div>
                        <div className='item-title'>
                            {d.title}
                        </div>
                        <div className='item-desc'>
                            {d.desc}
                        </div>

                        <ul className='item-tech'>
                       
                        {d.skills.map((s)=> 
                        <FadeInSection>
                            <li key={s}>{s}</li> 
                         </FadeInSection>
                        
                        )}
                       
                        </ul>
                 </li>
                 </FadeInSection>
                 </React.Fragment>
                ))}
                </ul>

            </div>
        </div>
    );
}