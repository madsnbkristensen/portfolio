import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import SomeIcons from '../components/SomeIcons'
import contactImg from "../assets/contactpage-img-min.webp";

export default function Contactpage() {
    return (

        <main
            className="contentpages-main">
            <div className="column-1 contactpage-column-1">
                <section className="aboutpage-sections">
                    <h3 className="content-headline">Want to work with me?</h3>
                    <p>
                        If you are interested in collaborating with me, please do not hesitate to reach out. I am eager to engage in a conversation with you and learn more about potential opportunities for cooperation. Additionally, if you have any questions about me, please feel free to ask. Thank you for taking the time to review my portfolio!
                    </p>
                </section>
                <section className="contact-info-section">
                    <p><FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                        madskristensen@hotmail.dk</p>
                    <p><FontAwesomeIcon className='contact-icon' icon={faPhone} />41 81 94 50</p>
                </section>
                <SomeIcons />
            </div>
            <div className='column-2'>
                <img className='contactpage-img' src={contactImg} alt="groupwork image" />
            </div>

        </main>

    )
}