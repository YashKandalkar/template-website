import React, {useState} from 'react';
import './ProjectItem.css'
import { 
    motion
} from 'framer-motion';

const websiteVariants = {
    visible: {
        opacity: 1,
        x: 0,
        display:'block'
    },
    hidden: {
        opacity: 0,
        x: 50,
        display:'none'
    }
}

const ProjectItem = ({
    variant, 
    name, 
    description, 
    img, 
    url
}) => {
    const [state, setState] = useState({open: false, style:{}})
    const desRef = React.createRef();
  
    const onTap = () => {
        if(!state.open){
            desRef.current.style.whiteSpace = 'initial';
            setState({style:{height:'120px'}});
        }else{
            desRef.current.style.whiteSpace = 'nowrap';
            setState({style:{height:'0px'}})
        }
        setState({open: !state.open});
    }
    return (
        <motion.div
            className="project-item"
            variants={variant}
            style={state.style}
            onClick={onTap}
            
        >
            <motion.div className="preview">
                <img src={img} alt="preview"/>
            </motion.div>
            <div className="content">
                <div className="title">{name}</div>
                <div 
                    className="description"
                    ref={desRef}
                >
                    {description}
                </div>
                <motion.a 
                    className="go-to-website"
                    variants={websiteVariants}
                    animate={(state.open)?'visible':'hidden'}
                    href={url} 
                    target='_blank' 
                    rel='noopener noreferrer'
                >
                    Go to website
                </motion.a>
            </div>
        </motion.div>
    );
}

export default ProjectItem;