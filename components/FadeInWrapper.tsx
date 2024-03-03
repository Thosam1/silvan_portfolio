
"use client";
import {motion} from "framer-motion";
import {ReactNode} from "react";

// wrapper for fade in animation
export const FadeInWrapper = ({children}: { children: ReactNode }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            transition={{duration: 1.0, ease: "anticipate"}}
            variants={{
                visible: {opacity: 1, scale: 1},
                hidden: {opacity: 0, scale: 1},
            }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInWrapper;
