import React, { useState, useEffect } from 'react';
import './BottomTab.css';
import useWindowDimensions from '../useWindowDimentions';
import ContactMe from '../ContactMe/ContactMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { 
    motion, 
    useMotionValue, 
    useTransform
} from 'framer-motion';
                              
const BottomTab = ( {activeTab} ) => {
    const { height, width } = useWindowDimensions();
    const [state, setState] = useState({open: false});

    const isPhone = (width <= 480);

    const dragConstraints = (isPhone)?
                            {
                                top: 0,
                                bottom: height - 30
                            }
                            :
                            {
                                top: height*0.5 - 30,
                                bottom: height - 30
                            }


    const dragTransition = { 
        bounceStiffness: 600, 
        bounceDamping: 30,
    }

    let animate = {
        y: [
            dragConstraints.bottom,
            dragConstraints.bottom - 30, 
            dragConstraints.bottom
        ]
    }

    let y = useMotionValue(dragConstraints.bottom)
    const opacity = useTransform(
        y,
        [dragConstraints.top, dragConstraints.bottom],
        [1, 0]
    );

    const arrowRotation = useTransform(
        y,
        [dragConstraints.top, dragConstraints.bottom],
        [180, 0]
    );

    useEffect(() => {
        function updateOpen() {
          if(y.get() <= dragConstraints.top){
            setTimeout(() => {
                setState({open: true});
            }, 100);
          } else{
            setState({open: false});
          }
        }

        const unsubscribeY = y.onChange(updateOpen)

        return () => {
          unsubscribeY()
        }
      }, [dragConstraints.top, y])

    const onTap = (event, info) => {
        if (y.get() >= dragConstraints.bottom-20){
            y.set(dragConstraints.top);
            setTimeout(() => {
                setState({open: true});
            }, 100);
        }
        else if (y.get() <= dragConstraints.top+20){
            y.set(dragConstraints.bottom);
            setState({open: false});
        }
    }
   
    return (
        <div className="bottom-tab">
            <motion.div
                className="bottom-tab-arrow"
                animate={animate}
                transition={{ ease: "easeOut", duration: 0.7, delay: 2 }}
                style={{y}}
                drag="y"
                dragConstraints={dragConstraints}
                dragElastic={0.2}
                dragTransition={dragTransition}
                onTap={onTap}
            >
                <motion.div
                     style={{transform: 'rotate('+arrowRotation.get()+'deg)'}}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </motion.div>
            </motion.div>
            <motion.div
                className="bottom-tab-content"
                style={{opacity, y}}
            >
                <ContactMe isOpen={state.open}/>
            </motion.div>
        </div>
    )
}


export default BottomTab;