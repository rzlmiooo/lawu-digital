'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MotionWrapperProps {
    children: React.ReactNode;
}

function MotionImage({ children }: MotionWrapperProps) {
    return (
        <motion.div layoutId={`project-image-${children}`}>
            {children}
        </motion.div>
    );
}

function MotionTextContent({ children }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 flex flex-col justify-end h-full p-8 md:p-16 text-white bg-gradient-to-t from-black/70 to-transparent"
        >
            {children}
        </motion.div>
    );
}

function MotionProjectDetailComponent({ children }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
}


 function MotionProjectDescription({ children }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
}


 function MotionProjectGallery({ children }: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
}

export default { MotionTextContent , MotionImage , MotionProjectDescription , MotionProjectDetailComponent , MotionProjectGallery};