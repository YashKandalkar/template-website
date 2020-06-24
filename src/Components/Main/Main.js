import React from 'react';
import './Main.css'
import { motion } from 'framer-motion';

const Main = () => {
    const variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        },
        hidden: {
            opacity: 1,
            y: '100%'
        }
    }
    return (
        <div id="main">
            <motion.div 
                id="main-content"
            >
                <motion.div 
                    className="top"
                    initial={"hidden"}
                    animate={"visible"}
                    variants={variants}
                >
                    <motion.div className="greetings">
                        About ME
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="about-me"
                    initial={"hidden"}
                    animate={"visible"}
                    variants={variants}
                >
                    {/*Uncomment this if you want to keep it*/}
                    {/*<div style={{textAlign: 'right'}}>Hey, hello there!</div>*/}
                    <div>
                        Write something about yourself here!
                        (Go to src/Components/Main/Main.js)
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Main;