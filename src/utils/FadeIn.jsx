import React, { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";

const FadeIn = forwardRef(({ children, className, externalRef=false }, ref) => {
    const innerRef = useRef(null);
    const isInView = useInView(externalRef || innerRef, { once: true });
    
    return (
        <motion.div
        className={ `fade-in-view ${className}` }
        ref={ externalRef || innerRef }
        initial={{
            opacity: 0,
            y: "50%",
        }}
        animate={
            isInView? {opacity: 1, y: "0"}: {}}
        transition={{
            duration: 0.6,
            ease: "easeInOut"
        }}>
        { children }
        </motion.div>

    )

})

export default FadeIn