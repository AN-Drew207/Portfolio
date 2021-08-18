import React,{useState, useEffect} from 'react' 
import SingleProjectComponent from './SingleProjectComponent'
import Andrew1 from '../../img/AN-Drew/1.png'
import Andrew2 from '../../img/AN-Drew/2.png'
import Andrew3 from '../../img/AN-Drew/3.png'
import Calculator1 from '../../img/Calculator/1.png'
import Calculator2 from '../../img/Calculator/2.png'
import Calculator3 from '../../img/Calculator/3.png'
import Documentacion1 from '../../img/Documentation/1.png'
import Documentacion2 from '../../img/Documentation/2.png'
import Documentacion3 from '../../img/Documentation/3.png'
import Ecommerce1 from '../../img/Ecommerce/1.png'
import Ecommerce2 from '../../img/Ecommerce/2.png'
import Ecommerce3 from '../../img/Ecommerce/3.png'
import Todo1 from '../../img/To-do/1.png'
import Todo2 from '../../img/To-do/2.png'
import Todo3 from '../../img/To-do/3.png'
import reactpng from '../../img/react.png' 
import HTML from '../../img/HTML5.png'
import CSS from '../../img/css3.png'
import SASS from '../../img/sass-logo-new.png'
import js from '../../img/js.png'

const Projects = () =>{

    const [firstProject]=useState(       
        {
            id:1,
            title:"ROPA Ecommerce WebSide",
            images:{
                image1:Ecommerce1,
                image2:Ecommerce2,
                image3:Ecommerce3
            },
            description:"ROPA Ecommerce WebSide is an Ecommerce Example with all the features that an Ecommerce needs, Products setions, Cart, Single Products-Page.",
            repository: "https://github.com/AN-Drew207/ROPA-Ecommerce",
            web:"https://an-drew207.github.io/ROPA-Ecommerce/#/",
            technologies:[reactpng, SASS]
        }
    )

    const [projects]=useState([
        {
            id:1,
            title:"ROPA Ecommerce WebSide",
            images:{
                image1:Ecommerce1,
                image2:Ecommerce2,
                image3:Ecommerce3
            },
            description:"ROPA Ecommerce WebSide is an Ecommerce Example with all the features that an Ecommerce needs, Products setions, Cart, Single Products-Page.",
            repository: "https://github.com/AN-Drew207/ROPA-Ecommerce",
            web:"https://an-drew207.github.io/ROPA-Ecommerce/#/",
            technologies:[reactpng, SASS]
        },
        {
            id:2,
            title:"AN-Drew Official WebPage",
            images:{
                image1:Andrew1,
                image2:Andrew2,
                image3:Andrew3
            },
            description:"This is my page as a singer, in that I show all my songs and some things about me as an artist.",
            repository: "https://github.com/AN-Drew207/AN-Drew-Web",
            web:"https://an-drew207.github.io/AN-Drew-Web/",
            technologies:[reactpng, SASS]
        },

        {
            id:3,
            title:"To-do List",
            images:{
                image1:Todo1,
                image2:Todo2,
                image3:Todo3
            },
            description:"This is a to-do list where you can save your tasks that you have to do in the day. Don't worry if you have to close your browser, your tasks will be waiting for you when you open the page again.",
            repository: "https://github.com/AN-Drew207/To-do-list",
            web:"https://an-drew207.github.io/To-do-list/",
            technologies:[HTML, CSS, SASS, js]
        },
        {
            id:4,
            title:"Calculator",
            images:{
                image1:Calculator1,
                image2:Calculator2,
                image3:Calculator3
            },
            description:"Calculator with all the basics calculations.",
            repository: "https://github.com/AN-Drew207/Calculator-Js",
            web:"https://an-drew207.github.io/Calculator-Js/",
            technologies:[HTML, CSS, SASS, js]
        },
        {
            id:5,
            title:"Documentation Page",
            images:{
                image1:Documentacion1 ,
                image2:Documentacion2,
                image3:Documentacion3
            },
            description:"Documentation Page Example based in C++ Documentation",
            repository: "https://github.com/AN-Drew207/Documentation-Page",
            web:"https://an-drew207.github.io/Documentation-Page/",
            technologies:[HTML, CSS, js]
        },

    ])

    const activo = (e) =>{
        projects.forEach(project =>{
            if(e.target.innerText===project.title){
                e.target.classList.add("activo")
            }else{
                var xd=document.getElementById(`${project.title}link`)
                xd.classList.remove("activo")
            }
        })
    }

    const [display, setDisplay]=useState(projects[0])

    const handleChange =(e)=>{
        projects.filter(project =>project.title===e.target.value).map(project =>{
            setDisplay(project)
        })
        projects.forEach(project =>{
            if(e.target.value===project.title){
                var a=document.getElementById(`${project.title}link`)
                a.classList.add("activo")
            }else{
                var xd=document.getElementById(`${project.title}link`)
                xd.classList.remove("activo")
            }
        })
    }

    return( 
        <section id="projects" className="d-flex flex-column">
            <form className="form" action="">
                <select value={display.title} onChange={handleChange} className="w-75 my-2 select-project" name="" id="">
                    {
                        projects.map(project =>{
                            return(
                                <option value={project.title}>{project.title}</option>
                            )
                        })
                    }
                </select>
            </form>
            <div className="container-fluid d-flex projects-inner">
                <div className="col-lg-2 col-left d-flex flex-column">
                    <div className="project-link-container">
                                    <button onClick={(e)=>{
                                         activo(e);
                                         setDisplay(firstProject);
                                         }} id={firstProject.title+"link"} className="project-link p-1 activo">{firstProject.title}</button>
                    </div>
                    {
                        projects.filter(project => project.title!==firstProject.title).map(project =>{
                            
                            return(
                                <div className="project-link-container">
                                    <button onClick={(e)=>{
                                         activo(e);
                                         setDisplay(project);
                                         }} id={project.title+"link"} className="project-link p-1">{project.title}</button>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-lg-10 col-right">
                                 <SingleProjectComponent
                                    id={display.id}
                                    title={display.title}
                                    description={display.description}
                                    images={display.images}
                                    repository={display.repository}
                                    web={display.web}
                                    technologies={display.technologies}
                                />

                </div>
            </div>
        </section>
    )
}

export default Projects