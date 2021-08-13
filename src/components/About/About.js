import React, {useState} from 'react' 
import reactpng from '../../img/react.png' 
import Language from './Language'

const About = () =>{

    const languages =[
        {
            image:reactpng,
            finish:"90"
        }
    ]

    return( 
        <section id="about">
            <div className="container-fluid h-100 d-flex flex-column" >
                <div className="d-flex flex-column h-auto">
                    <h3 className="title-about">About</h3>
                    <p className="paragraph-about">
                        ¡Hello Everyone! My name is Andrés Contreras, I live in Caracas, Venezuela and
                         I'm a Computer Science student from Central University of Venezuela,  
                         I'm a passionate Front-end Web Developer who likes
                        make web apps and web pages about anything, 
                        likes to experiments with new technologies and learn how to use them. <br/><br/>
                        I'm on my way to become to a Full Stack Developer, 
                        I want to learn tecnologies like Next, Express and MongoDB, I already learned 
                        React, Bootstrap, SASS and the basic ones, HTML, CSS and JS. 
                        I'm so excited to learn BackEnd new languages and get expert on FrontEnd.<br/><br/>
                        I like to make interesting projects, that represent a challenge for me as a 
                        programmer and that help me to overcome more and more and if you choose me to do yours, 
                        rest assured that I will do my best to carry it out. 
                    </p>
                </div>
                <div className="d-flex flex-column">
                    <h3 className="title-about">Languages and Technologies</h3>
                    <div className="d-flex flex-row align-items-center justify-content-center">
                        {
                            languages.map(language =>{
                                return(
                                    <Language
                                        img={language.image}
                                        finish={language.finish}
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