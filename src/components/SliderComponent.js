import React, {useState, useEffect} from 'react' 
import MainSection from './MainSection'
import Projects from './Projects/Projects';
import 'bootstrap/dist/js/bootstrap.min.js';
import Particles from 'react-tsparticles'
import Contact from './Contact'
import About from './About/About';
import 'pathseg'


const SliderComponent = () =>{

    const [update, setUpdate]=useState(0)

    return( 
        <section>
            <Particles
                id="tsparticles"
                            options={{
                            background: {
                                color: {
                                value: "transparent",
                                },
                            },
                            fpsLimit: 60,
                            interactivity: {
                                events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                resize: true,
                                },
                                modes: {
                                bubble: {
                                    distance: 200,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 20,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                                },
                            },
                            particles: {
                                color: {
                                value: ["#d50000","#fff"],
                                },
                                links: {
                                color: "#d50000",
                                distance: 100,
                                enable: true,
                                opacity: 0.5,
                                width: 0.5,
                                },
                                collisions: {
                                enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: true,
                                    speed: 2,
                                    straight: true,
                                },
                                number: {
                                density: {
                                    enable: true,
                                    value_area: 1000,
                                },
                                value: 100,
                                },
                                opacity: {
                                value: 0.5,
                                },
                                shape: {
                                type: "circle",
                                },
                                size: {
                                random: true,
                                value: 4,
                                },
                                push :{
                                    particles_nb: 4
                                }
                            },
                            detectRetina: true,
                    }}
            />
            <div id="mainSlider" data-bs-interval="false" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <div className="mx-2">
                        <button 
                            data-bs-target="#mainSlider" 
                            data-bs-slide-to="0" 
                            className="d-flex aling-items-center active" 
                            aria-current="true" 
                            aria-label="Slide 1">
                                <h6 className="text-white text-center">Home</h6>
                        </button>
                    </div>
                    <div className="mx-2">
                        <button 
                            data-bs-target="#mainSlider" 
                            className="d-flex aling-items-center" 
                            data-bs-slide-to="1" 
                            aria-label="Slide 2">
                                <h6 onClick={()=>setUpdate(prev=>prev+1)} className="text-white text-center">About</h6>
                        </button>
                    </div>
                    <div className="mx-2">
                        <button 
                            data-bs-target="#mainSlider" 
                            className="d-flex aling-items-center" 
                            data-bs-slide-to="2" 
                            aria-label="Slide 3">
                                <h6  className="text-white text-center">Contact</h6>
                        </button>
                    </div>
                    <div className="mx-2">
                        <button 
                            data-bs-target="#mainSlider" 
                            className="d-flex aling-items-center" 
                            data-bs-slide-to="3" 
                            aria-label="Slide 4">
                                <h6 className="text-white text-center">Projects</h6>
                        </button>
                    </div>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <MainSection/>
                    </div>
                    <div className="carousel-item">
                        <About 
                            update={update}
                        />
                    </div>
                    <div className="carousel-item">
                        <Contact/>
                    </div>
                    <div className="carousel-item">
                        <Projects/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SliderComponent