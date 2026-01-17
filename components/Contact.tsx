'use client';

import { useState, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

const Earth = () => {
    return (
        <Sphere args={[1, 32, 32]} scale={2.5}>
            <MeshDistortMaterial
                color="#4c1d95"
                attach="material"
                distort={0.5}
                speed={2}
                wireframe
            />
        </Sphere>
    );
};

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setForm({ name: '', email: '', message: '' });
        }, 2000);
    };

    return (
        <section className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden p-10 z-10 relative">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex-[0.75] bg-black/20 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
                <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">
                    Get in touch
                </p>
                <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Contact.
                </h3>
                <p className="text-white mt-4 text-[18px]">
                    Email: <a href="mailto:chawlagunit123@gmail.com" className="text-blue-400 hover:underline">chawlagunit123@gmail.com</a>
                </p>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-white/10"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-white/10"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Message</span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium bg-white/10"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:scale-105 transition-transform"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <Canvas camera={{ position: [0, 0, 5] }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 0, 5]} intensity={1} />
                        <Earth />
                        <OrbitControls enableZoom={false} autoRotate />
                    </Suspense>
                </Canvas>
            </motion.div>
        </section>
    );
}
