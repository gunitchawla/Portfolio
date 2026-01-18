'use client';

import { motion } from 'framer-motion';

const services = [
    {
        title: "Web Developer",
        icon: "💻",
    },
    {
        title: "Database Management",
        icon: "�️",
    },
    {
        title: "Backend Developer",
        icon: "⚙️",
    },
];

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: string }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.2, duration: 0.75 }}
        className="xs:w-[250px] w-full"
    >
        <div className="w-full p-[1px] rounded-[20px] bg-gradient-to-r from-pink-500 to-violet-500 shadow-card">
            <div className="bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <div className="text-6xl">{icon}</div>
                <h3 className="text-white text-[20px] font-bold text-center">
                    {title}
                </h3>
            </div>
        </div>
    </motion.div>
);

export default function About() {
    return (
        <section id="about" className="relative w-full min-h-screen mx-auto p-10 z-10">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
            >
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10 justify-center">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </section>
    );
}
