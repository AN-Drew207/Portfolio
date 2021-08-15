import React, {useState} from 'react' 
import emailjs from 'emailjs-com'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Contact = () =>{

    const [open, setOpen] = useState(false);

    const sendEmail =(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_66djiuq','template_m9crxrs', e.target, 'user_poowqL0Hqg0zTF5mqqRhY')
        .then((result)=>{
            setOpen(()=>true)
        }, (error)=>{

        })
    }

    const closeModal = () =>{
        setOpen(()=>false)
    }

    return( 
        <section className="d-flex" id="contact">
            <div className="col-md-6 d-flex flex-column align-items-center">
                <h4 className="text-center title">My Social Medias</h4>
                <ul>
                    <li>
                        <a className="link-out" href="https://www.linkedin.com/in/andr%C3%A9s-contreras-b9612620b/">
                            <h5 className="link-out"><i class="bi bi-linkedin"></i> <span>Andrés Contreras</span> </h5>
                        </a>
                    </li>
                    <li>
                        <a className="link-out" href="https://github.com/AN-Drew207">
                            <h5 className="link-out"><i class="bi bi-github"></i> <span>AN-Drew207</span> </h5>
                        </a>   
                    </li>
                    <li>
                        <a className="link-out" href="https://twitter.com/Andres20072001">
                            <h5 className="link-out"><i class="bi bi-twitter"></i> <span>Andres20072001</span> </h5>
                        </a>
                    </li>
                    <li>
                        <a className="link-out" href="https://www.instagram.com/andcont207/">
                            <h5 className="link-out"><i class="bi bi-instagram"></i> <span>andcont207</span> </h5>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-md-6  d-flex flex-column">
                <h4 className="text-center title">Send Me an Email</h4>
                <form className="form-group mx-4" onSubmit={sendEmail}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <input type="text" placeholder="Name" name="user_name" className="form-control text-white my-2 bg-transparent" required/>
                        <input type="email" placeholder="Email" name="user_email" className="form-control text-white my-2 bg-transparent" required/>
                        <textarea placeholder="Text" className="form-control  text-white my-2 bg-transparent" name="message" id="" required></textarea>
                        <button type="submit" className="btn btn-danger">Send</button>
                    </div>
                </form>
            </div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                    <h4 className="modal-text m-0">You Email has been Sent</h4>
            </Popup>
        </section>
    )
}

export default Contact