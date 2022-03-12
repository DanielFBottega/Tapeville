import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './index.css'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'


export default () =>{


    return(

        <section className="underfeat">

        <div className="underfeat--info1">
            <FontAwesomeIcon icon={faHandHoldingDollar} size="2x"/>
            ALOHA
        </div>

        <div className="underfeat--info2">
            Que
        </div>

        <div className="underfeat--info3">
            Delicia
        </div>

        </section>

    )
}