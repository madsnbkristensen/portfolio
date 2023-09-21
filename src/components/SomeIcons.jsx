
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'


export default function SomeIcons() {
    return (
        <div className='some-icon-container'>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/madsnbkristensen"><FontAwesomeIcon className='some-icon' icon={faGithub} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mads-nederby-bj%C3%B8dstrup-kristensen-30364324a/"><FontAwesomeIcon className='some-icon' icon={faLinkedin} /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/mads.kristensen.169"><FontAwesomeIcon className='some-icon' icon={faFacebook} /></a>
        </div>
    )
}