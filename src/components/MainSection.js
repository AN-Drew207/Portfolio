import React, {useState, useEffect} from 'react' 
import logo from '../img/AC-Logo-alternativo-transparente.png'


const MainSection = () =>{

    return(
        <section id="main" className="row" style={{backgroundColor: 'transparent'}}>
            <div className="xd col-sm-6 d-flex align-items-center justify-content-center">
                <img className="logo-main img-fluid w-100" src={logo} alt="" />
            </div>
            <div className="xd col-sm-4 d-flex flex-column aling-items-center justify-content-center">
                <h2 className="text-main text-center text-white">
                    I'm <span style={{color: '#dd0000'}}>Andrés Contreras</span> 
                </h2>
                <p className="text-main text-center text-white">
                    a <span style={{color: '#dd0000'}}>Front-End</span> Developer
                </p>
            </div>  
        </section>
    )

}

export default MainSection