import React from 'react';
import './ContactMe.css';
import Icon from '../Icon/Icon'

import { 
    faInstagram,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import { 
    faEnvelope
} from '@fortawesome/free-regular-svg-icons';

import { 
    motion
} from 'framer-motion';

const ContactMe = ({ isOpen }) => {
    return (
        <div className="container">
            <div className="heading">
                <div className="main">
                    Let's chat!
                </div>
                <div className="sub-heading"> 
                    Contact me on any of my social media
                </div>
            </div>
            <motion.div 
                id="content"
            >
                {/*Fill in the URLs in usehref attribute*/}
                <Icon 
                    icon={faInstagram} 
                    useclass='instagram' 
                    usehref=''
                />
                <Icon 
                    icon={faGithub} 
                    useclass='github'
                    usehref=''
                />
                <Icon 
                    icon={faLinkedin} 
                    useclass='linkedin'
                    usehref=''
                />
                <Icon 
                    icon={faEnvelope} 
                    useclass='gmail'
                    usehref='mailto:' //write your mail infront of mailto:
                />

            </motion.div>
            <div id="credit">
                {
                    (isOpen)?
                    <a href="https://yashkandalkar.github.io/" target='_blank' rel='noopener noreferrer'>
                        Website Template made by Yash
                    </a>
                    :""
                }
            </div>
        </div>
    );
}

export default ContactMe;