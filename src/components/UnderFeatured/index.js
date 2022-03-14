import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'
import { faHandHoldingDollar, faLightbulb, faThumbsUp  } from '@fortawesome/free-solid-svg-icons'


export default () => {


    return (

        <section className="underfeat">
            <div className="underfeat--icons">
                <div className="underfeat--icon1">
                    <FontAwesomeIcon icon={faHandHoldingDollar} size="2x" />

                </div>
                <div className="underfeat--icon2">
                <FontAwesomeIcon icon={faLightbulb} size="2x" />
                </div>

                <div className="underfeat--icon3">
                <FontAwesomeIcon icon={faThumbsUp} size="2x" />
                </div>
            </div>
            <div className="underfeat--text">
            <p className="text1" >
                    Custo Benefício
                </p>
                <p className="text2">
                    Peça do seu Jeito
                </p>
                <p className="text3">
                    Garantia de Qualidade
                </p>
            </div>
        </section>


    )
}