import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import FadeIn from './FadeIn';

const Flip = ({ name, frontChild, backChild }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [toFlip, setToFlip] = useState(true);
    const ref = useRef(null);

    async function handleEnter() {
        const sleep = (time) => new Promise(res => setTimeout(res, time))
        await sleep(500);
        if (!isAnimating && 
            toFlip && 
            ref.current.matches(":hover")) {
                setIsFlipped((prev) => !prev);
                setIsAnimating(true);
                setToFlip(false);

        }
    
    }

    const handleLeave = () => {
        if (isFlipped) {
            setIsFlipped((prev) => !prev);
            setIsAnimating(true);
            setToFlip(true);

        }

    }

  return (
    <div className={ `flipWrapper ${name}-wrapper` }
        // onMouseEnter={ () => handleEnter() }
        // onMouseLeave={ () => handleLeave() }
        onClick={ () => setIsFlipped(!isFlipped) 
          && setIsAnimating(true) }
        ref={ref}
    >
        <motion.div 
            className={ `${name}-front front` }
            initial={false}
            animate={{
                rotateY: isFlipped? 180: 360
            }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setIsAnimating(false)}
        >
            { frontChild }
        </motion.div>
        <motion.div
            className={ `${name}-back back` }
            initial={false}
            animate={{
                rotateY: isFlipped? 0: 180
            }}
            transition={{ duration: 1 }}
            onAnimationComplete={() => setIsAnimating(false)}
        >
            { backChild }
        </motion.div>
    </div>
  )


};

export default Flip