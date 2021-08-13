import React from 'react' 
import 'bootstrap/dist/js/bootstrap.min.js';

const SingleProjectComponent = (props) =>{
    const {id,title, images, description, repository}=props;
    return( 
       <div id={title} className="container-fluid project-element p-3">
             <h2 className="project-title">{title}</h2>
             <div className="d-flex flex-row">
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
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target={"#carouselExampleControls"+id} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="links-container">
                    <h4 className="project-title">Links</h4>
                    <div className="d-flex flex-column">
                        <a target="_blank" rel="noreferrer" className="link-out"  href={repository}><i class="bi bi-braces"></i> Repository</a>
                        <a target="_blank" rel="noreferrer" className="link-out"  href={repository}><i class="bi bi-file-post-fill"></i> Web-Side</a>
                    </div>
                </div>
             </div>
            <div className="row w-100">
                <div className="col-sm-6 p-2">
                    <h4 className="project-title">Description</h4>
                    <p className="text-white m-0 text-center">{description}</p>
                </div>
                <div className="col-sm-6 p-2">
                    <h4 className="project-title">Technologies</h4>
                </div>
            </div>
            
        </div>
    )
}

export default SingleProjectComponent;
 