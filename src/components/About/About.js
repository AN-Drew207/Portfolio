import React from 'react' 
import reactpng from '../../img/react.png' 
import HTML from '../../img/HTML5.png'
import CSS from '../../img/css3.png'
import SASS from '../../img/sass-logo-new.png'
import js from '../../img/js.png'
import Language from './Language'

const About = (props) =>{

    const languages =[
        {
            name:"React",
            image:reactpng,
            finish:"80"
        },
        {
            name:"HTML",
            image:HTML,
            finish:"95"
        },
        {
            name:"CSS",
            image:CSS,
            finish:"90"
        },
        {
            name:"SASS",
            image:SASS,
            finish:"90"
        },
        {
            name:"JavaScript",
            image:js,
            finish:"95"
        },
    ]

    return( 
        <section id="about">
            <div className="container-about">
                <div className=" d-dlock h-auto">
                    <h3 className="title-about">About</h3>
                    <p className="paragraph-about">
                        ¡Hello Everyone! My name is Andrés Contreras, I live in Caracas, Venezuela and
                         I'm a Computer Science student from Central University of Venezuela,  
                         I'm a passionate Front-end Web Developer who likes
                        make web apps and web pages about anything, 
                        likes to experiments with new technologies and learn how to use them. <br/><br/>
                        I'm on my way to become to a Full Stack Developer, 
                        I'm about to learn tecnologies like Next, Express and MongoDB, I already learned 
                        React, Bootstrap, SASS and the basic ones, HTML, CSS and JS. 
                        I'm so excited to learn BackEnd new languages and get expert on FrontEnd.<br/><br/>
                        I like to make interesting projects, that represent a challenge for me as a 
                        programmer and that help me to overcome more and more and if you choose me to do yours, 
                        rest assured that I will do my best to carry it out. 
                    </p>
                </div>
                <div className="d-block h-auto">
                    <h3 className="title-about">Languages and Technologies</h3>
                    <div className="languages-container">
                        {
                            languages.map(language =>{
                                return(
                                    <Language
                                        img={language.image}
                                        finish={language.finish}
                                        update={props.update}
                                        name={language.name}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About;