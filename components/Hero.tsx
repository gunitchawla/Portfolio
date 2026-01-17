'use client';

import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start justify-start px-6 sm:px-16">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                            Hi, I'm <span className="text-gradient">Gunit Chawla</span>
                        </h1>
                        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-5">
                            I craft immersive web experiences and <br className="sm:block hidden" />
                            scalable full-stack applications.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 border-white/20">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            className="w-3 h-3 rounded-full bg-white mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
}
