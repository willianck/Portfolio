import "./projects.scss"
import FadeInSection from "./fading";
import React from "react";

export default function Projects(){
// This data contains a list of all projects data added to the Projects section on the website 
    const data = [
        {
            id: 1,
            year: "May 2022",
            title: "Multilingual Document Similarity",
            desc: "We developed a model to find how similara pair of documents in different languages convey the same news story",
            git:"https://github.com/willianck/Multilingual-Document-Similarity",
            skills: ["Transformers", "pytorch", "Sklearn", "Pandas" , "Matplotlib" , "Numpy" ],
            style : {
                    "transitionDelay": "200ms"
            },
            medium_link: "https://medium.com/p/6a0690364c39"
    
    
        },


    {
        id: 2,
        img: "/assets/farm.png",
        year: "May 2021",
        title:"Predicting Food Insecurity in Low-income countries",
        desc: "In collaboration with the Alan Turing Institute of London we investigate the main factors for food insecurity over 35,000 households and develop a model to predict this outcome.",
        git:'https://github.com/willianck/ADS',
        skills: ["Numpy","Sklearn","Plotly","Pandas","Matplotlib","Seaborn"],
        style: {
            "transitionDelay": "500ms"
        },
        medium_link: "https://medium.com/p/ce8ff39b732c"
        

    },

    {
        id: 3,
        img: "/assets/wc.png",
        year: "May 2021",
        title: "Summarizing Stance Dependent Claims on Twitter",
        desc: " In this paper, I look at extracting the claims that summarise the opinions of tweets posted by users about a specific target or topic with a supervised approach.",
        git :"https://github.com/willianck/Thesis",
        skills: ["Python","Sklearn","FlairNLP","Pytorch","Spacy","NLTK","Gensim","Pandas"],
        style: {
            "transitionDelay": "300ms"
        },
        medium_link: ""
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
                           
                                <a className= 'medium' href = {d.medium_link}><i class="fa-brands fa-medium"></i></a>
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
                        <React.Fragment key={s}>
                        <FadeInSection>
                            <li>{s}</li> 
                         </FadeInSection>
                        </React.Fragment>
                        
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