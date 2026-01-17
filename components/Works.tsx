'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        name: "Train Reservation System - RailEase",
        description:
            "A comprehensive train reservation system allowing users to search for trains, check availability, and book tickets seamlessly.",
        tags: [
            { name: "react", color: "text-blue-500" },
            { name: "node", color: "text-green-500" },
            { name: "mongodb", color: "text-pink-500" },
        ],
        image: "https://via.placeholder.com/300",
        link: "https://train-reservation-system-rail-ease.vercel.app/",
    },
    {
        name: "Medication Reminder and Tracker",
        description:
            "An application designed to help users track their medication schedule, set reminders, and monitor their adherence history.",
        tags: [
            { name: "react", color: "text-blue-500" },
            { name: "firebase", color: "text-orange-500" },
            { name: "pwa", color: "text-purple-500" },
        ],
        image: "https://via.placeholder.com/300",
        link: "https://medication-reminder-and-tracking.vercel.app/",
    },
    {
        name: "Vulnerability Checker",
        description:
            "A security tool that scans websites for common vulnerabilities, providing detailed reports and recommendations for mitigation.",
        tags: [
            { name: "python", color: "text-yellow-500" },
            { name: "security", color: "text-red-500" },
            { name: "automation", color: "text-blue-400" },
        ],
        image: "https://via.placeholder.com/300",
        link: "https://vulnerability-checker-eight.vercel.app/",
    },
    {
        name: "Architect AI",
        description:
            "An AI-powered architectural design assistant that helps generate and visualize building concepts based on user inputs.",
        tags: [
            { name: "ai", color: "text-indigo-500" },
            { name: "threejs", color: "text-white" },
            { name: "nextjs", color: "text-blue-500" },
        ],
        image: "https://via.placeholder.com/300",
        link: "https://architect-ai-alpha.vercel.app/",
    },
];

const ProjectCard = ({ index, name, description, tags, image, link }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.75 }}
            className="bg-black/40 p-5 rounded-2xl sm:w-[360px] w-full border border-white/10 backdrop-blur-sm"
        >
            <div className="relative w-full h-[230px]">
                <div className="w-full h-full bg-gradient-to-br from-violet-900 to-fuchsia-900 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                    {/* Placeholder for image */}
                    {name[0]}
                </div>
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                    <div
                        onClick={() => window.open(link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/50 hover:bg-black/80 transition-colors border border-white/20"
                    >
                        <span className="text-white text-xs">🔗</span>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
            </div>

        </motion.div>
    );
};

export default function Works() {
    return (
        <section id="work" className="relative w-full min-h-screen mx-auto p-10 z-10">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">
                    My work
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Projects.
                </h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7 justify-center">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </section>
    );
}
