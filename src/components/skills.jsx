import "./skills.scss";
import FadeInSection from "./fading";
import React from "react";

export default function Skills() {

    const data = [
        {
            id: 1,
            header: "Machine Learning",
            skill1: "Python - 4",
            skill2: "NLP(Spacy/flairNLP/Gensim/NLTK) - 3",
            skill3: "Deep Learning(Pytorch) - 3",
            barwidth1: "80",
            barwidth2: "60",
            barwidth3: "60",
            style1: {
                width: "80%"
            },

            style2: {
                width: "60%"
            },

            style3: {
                width: "60%"

            },
            
            delay: {
                transitionDelay: "100ms"
            }

        
    },

    {
        id: 2,
        header: "Data Analytics",
        skill1: "Presenting/Teaching - 4",
        skill2: "Visualization(Matplotlib/Plotly/Seaborn) - 4",
        skill3: "Data Analysis(Pandas) - 4",
        barwidth1: "80",
        barwidth2: "80",
        barwidth3: "80",

        style1: {
            width: "80%"
        },

        style2: {
            width: "80%"
        },

        style3: {
            width: "80%"

        },
        delay: {
            transitionDelay: "300ms"
        }
    },

    {
        id: 3,
        header: "Devops",
        skill1: "Databases(SQL) - 4 ",
        skill2: "Linux/Bash - 2",
        skill3: " Big Data(HIVE / Spark) - 2",
        barwidth1: "80",
        barwidth2: "40",
        barwidth3: "40",

        style1: {
            width: "80%"
        },

        style2: {
            width: "40%"
        },

        style3: {
            width: "40%"

        },
        delay: {
            transitionDelay: "500ms"
        }

    },

    {

        id: 4,
        header: "Web Development",
        skill1: "HTML AND CSS - 4",
        skill2: "JavaScript(ReactJS) - 3",
        skill3: "PHP - 2",
        barwidth1: "80",
        barwidth2: "60",
        barwidth3: "40",

        style1: {
            width: "80%"
        },

        style2: {
            width: "60%"
        },

        style3: {
            width: "40%"

        },
        delay: {
            transitionDelay: "700ms"
        }
    }
]
    return (
        <div className="skills" id = "skills">
            <div className = "header">
                <FadeInSection>
                <h1><i className="fas fa-code"></i> Skills and Technologies</h1>
                </FadeInSection>
                <FadeInSection>
                <p>1 - Basic<span></span> 2 - Novice<span></span> 3 - Intermediate<span></span></p>
                <p> 4 - Advanced<span></span> 5 - Expert<span></span></p>
                </FadeInSection>
            </div>
            <div className = "container">
                <div className = 'skills-section'>
                    {data.map((d)=>(
                   <React.Fragment key={d.id}>
                    <div className ='skills-column'>
                        <FadeInSection style={d.delay}>
                        <h4>{d.header}</h4>
                        <div className='single-skill'>
                           <p>{d.skill1}</p>
                           <div className="sb_progress" data-width={d.barwidth1}>
                                <div className="sb_bar" style={d.style1}>
                                    <div className="sb_label">
                                    </div>
                                 </div>
                            </div>
                        </div>
                        <div className='single-skill'>
                            <p>{d.skill2}</p>
                            <div className="sb_progress" data-width={d.barwidth2}>
                                <div className="sb_bar" style={d.style2}>
                                    <div className="sb_label">
                                    </div>
                                 </div>
                            </div>
                        </div>
                        <div className='single-skill'>
                            <p>{d.skill3}</p>
                            <div className="sb_progress" data-width={d.barwidth3}>
                                <div className="sb_bar"style={d.style3} >
                                    <div className="sb_label">
                                    </div>
                                 </div>
                            </div>
                        </div>
                        </FadeInSection>
                    </div>
                    </React.Fragment>
                  
                    ))}
                </div>
            </div>
    </div>
    );
}