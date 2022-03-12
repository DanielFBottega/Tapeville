import React from "react"
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

export default () => {


    return (

        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            backgroundImage: `url(https://res.cloudinary.com/danielcd/image/upload/v1647109994/Tapeville_Tapetes_ub1wf9.jpg)`,

        }}>
            <div className="featured--horizontal">
                <div className="featured--icon">
                    Quem Somos?<br />
                    <FontAwesomeIcon icon={faHeart} beat />
                </div>
                <div className="featured--text">
                    Uma empresa familiar que traz amor em cada produto.<br />
                    Peças pensadas para o bem-estar da sua casa<br />
                    com o melhor conforto para você!
                </div>
                <div className="featured--contact">
                    <strong>Contatos</strong>

                    <div className="featured--contact-phone">
                        <FontAwesomeIcon icon={faPhone} />
                        ⠀(66) 9 9986-4767
                    </div>
                    <div className="featured--contact-face">
                        <FontAwesomeIcon icon={faFacebookF} />
                        ⠀fb/tapetestapeville
                    </div>
                </div>
            </div>
        </section>

    )
}