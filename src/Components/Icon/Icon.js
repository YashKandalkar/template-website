import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import './Icon.css';

const Icon = ({ icon, useclass, usehref }) => {
    return (
        <motion.div
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
        >
            <a href={usehref} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon 
                    icon={icon} 
                    size="6x"
                    className={useclass}
                />
            </a>
        </motion.div>
    );
}

export default Icon;