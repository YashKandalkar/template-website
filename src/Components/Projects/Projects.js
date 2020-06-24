import React from 'react';
import './Projects.css';
import ProjectItem from '../ProjectItem/ProjectItem';
import { 
    motion
} from 'framer-motion';

// IMAGES
import canary from '../../assets/canary.png';

const Projects = ({ isOpen }) => {
    const list = {
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.2,
        },
      },
      hidden: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
    }

    const item = {
        visible: {
            opacity: 1,
            x: 0,
        },
        hidden: {
            opacity: 0,
            x: 100,
        }
    }

    return(
        <div id="container">
            <div id="heading">
                {"My Projects"}
            </div>
            <motion.div 
                initial="hidden"
                animate={(isOpen)?"visible":"hidden"}
                variants={list}
                id='project-items-container'
            >
                {/* Change name, description, img and url. */}
                {/* Add images to src/assets/ and import them above */}
                {/* Add more ProjectItem tags below the current one to add more projects */}
                <ProjectItem 
                    name="Example"
                    description="This is an example project"
                    variant={item}
                    img={canary}
                    url={""}
                />

            </motion.div>
        </div>
    )
}

export default Projects;