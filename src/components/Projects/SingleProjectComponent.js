import React, {useState, useEffect} from 'react' 
import arrowRight from '../../img/arrow-slider.png'
import arrowLeft from '../../img/arrow-slider-left.png'
import 'bootstrap/dist/js/bootstrap.min.js';

const SingleProjectComponent = (props) =>{
    const {id,title, images, description, repository, web, technologies}=props;

    const [displayed, setDisplayed]=useState({
        description:true,
        technologies:false,
    })

    useEffect(() =>{
       var description=document.querySelector('#description')
       var techs=document.querySelector('#techs')
       var links=document.querySelector('#links')

       if(displayed.description){
           description.classList.add("activo")
           techs.classList.remove("activo")
           links.classList.remove("activo")
       }else if(displayed.technologies){
            description.classList.remove("activo")
            techs.classList.add("activo")
            links.classList.remove("activo")
       }else{
            description.classList.remove("activo")
            techs.classList.remove("activo")
            links.classList.add("activo")
       }


    },[displayed.description, displayed.technologies])


    return( 
       <div id={title} className="container-fluid project-element p-3">
             <h2 className="project-title">{title}</h2>
             <div className="d-flex slider-links-container align-items-center h-100">
                <div id={"carouselExampleControls"+id} class="carousel slide carousel-container" data-bs-interval="false" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={images.image1} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={images.image2}  className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={images.image3}  className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target={"#carouselExampleControls"+id} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" style={{backgroundImage:`url(${arrowLeft})`}} aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleControls"+id} data-bs-slide="next">
                        <span className="carousel-control-next-icon" style={{backgroundImage:`url(${arrowRight})`}} aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="menu-project">
                    <nav>
                        <ul className="d-flex flex-row justify-content-center nav-project">
                            <li className="btn-project">
                                <button onClick={()=>setDisplayed({description:true,technologies:false})} className="btn"><h6 id="description" className="btn-project-inner m-0 py-2">Description</h6> </button>
                            </li>
                            <li className="btn-project">
                                <button onClick={()=>setDisplayed({description:false,technologies:true})} className="btn"><h6 id="techs" className="btn-project-inner m-0 py-2">Techs</h6></button>
                            </li>
                            <li className="btn-project">
                                <button onClick={()=>setDisplayed({description:false,technologies:false})} className="btn"><h6 id="links" className="btn-project-inner m-0 py-2">Links</h6></button>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-text-project">
                       { 
                       displayed.description ?
                            <Description
                                description={description}
                            />
                        : displayed.technologies ?
                            <Technologies
                                technologies={technologies}
                            />
                        :
                            <Links
                                repository={repository}
                                web={web}
                            />
                        }
                    </div>
                </div>
             </div>            
        </div>
    )
}

const Description = (props) =>{
    return(
        <div className="d-flex align-items-center justify-content-center">
            <p className="text-white text-center paragraph-description">{props.description}</p>
        </div>

    )
}

const Technologies = (props) =>{
    return( 
        <div className="imgs-container">
            {
                props.technologies.map(techs=>{
                    return(
                        <div className="img-container">
                            <img src={techs} className="img-fluid" alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

const Links = (props) =>{
    return(
        <div className="d-flex links-out-container">
            <a target="_blank" rel="noreferrer" className="link-out"  href={props.repository}><i class="bi bi-braces"></i> Repository</a>
            <a target="_blank" rel="noreferrer" className="link-out"  href={props.web}><i class="bi bi-file-post-fill"></i> Web-Side</a>
        </div>
    )
}

export default SingleProjectComponent;
 