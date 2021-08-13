import React, {useState,useEffect} from 'react' 

const Language = (props) =>{

    const [charge, setCharge]=useState(0)
    let cont=0;

    useEffect(()=>{
        setCharge(0)
        setInterval(()=>{
            if(cont<=props.finish){
                cont++;
                setCharge(prev=>prev+1)
                console.log(charge)
            }else{
                clearInterval();
            }
        },10)
    },[props.update])

    return(
        <>
            <div className="language" >
                <div className="container-img" width="100%" height="100%">
                        <img src={props.img} className="language-img img-fluid" alt=""/>
                </div>
                <div className="language-container">
                    <div className="language-background" style={{height:`${charge}%`}}>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Language