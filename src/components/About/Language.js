import React, { useState, useEffect } from 'react'

const Language = (props) => {

    const [charge, setCharge] = useState(props.finish)
    let cont = 0;
    useEffect(() => {
        if(props.update===1){
            setCharge(() => 0)
            cont = 0
            let xd = setInterval(() => {
                if (cont < props.finish) {
                    if (charge<=props.finish){
                        cont += 1;
                        setCharge((prev) => prev + 1)
                    }
                } else {
                    clearInterval(xd);
                }
            }, 10)
         }
    }, [props.update])


    return (
        <div className="language">
            <div className="language-inner" >
                <div className="container-img" width="100%" height="100%">
                    <img src={props.img} className="language-img" alt="" />
                </div>
                <h5 className="percent m-0">{charge}%</h5>
                <div className="language-container">
                    <div className="language-background" style={{ height: `${charge}%` }}>
                    </div>
                </div>
            </div>
            <h4 className="text-white my-2">{props.name}</h4>
        </div>
    )

}

export default Language