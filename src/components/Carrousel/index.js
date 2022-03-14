import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import './index.css'


export default () => {

    const [scrollX, setScrollX] = useState(-400)
    const handleLeftArrow = () =>{ //quando para esquerda scrollx soma
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x>0){
            x = 30;
        }
        setScrollX(x)
    }

    const handleRigthArrow = () =>{ //
        let x = scrollX - Math.round(window.innerWidth / 2)

        setScrollX(x)
    }

    return (
        <section className="slides--info">

            <div className="text">
                <div className="banheiro">
                    Banheiro
                </div>
                <div className="sala">
                    Sala
                </div>
                <div className="cozinha">
                    Cozinha
                </div>
            </div>
            <div className="slides">
            <div className='movieRow--left' onClick={handleLeftArrow}>
            <FontAwesomeIcon icon={faAngleLeft} style={{fontSize: 40}} />          
            </div>

            <div className='movieRow--rigth' onClick={handleRigthArrow}>
            <FontAwesomeIcon icon={faAngleRight} style={{fontSize: 40}} />          
            </div>
                <div id="slide1">
                    <img src="https://res.cloudinary.com/danielcd/image/upload/v1647211849/666a4762-1653-4959-bc6d-75920c7efd5a_ruypem.jpg" />
                </div>
                <div id="slide2">
                    <img src="https://res.cloudinary.com/danielcd/image/upload/v1647211849/9f881dac-1d2d-4c62-92f5-1d99c3777e06_b939su.jpg" />
                </div>
                <div id="slide3">
                    <img src="https://res.cloudinary.com/danielcd/image/upload/v1647210185/773691a5-2e15-4868-a7ff-a5f3eb45d844_o1jzbc.jpg" />
                </div>
            </div>

        </section>
    );
}


