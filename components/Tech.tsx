'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Text, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind", "Bootstrap",
    "Node.js", "Express", "MongoDB", "MySQL", "Redux",
    "C", "C++", "Java", "Python"
];

const SkillText = ({ text, position }: { text: string; position: [number, number, number] }) => {
    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Text
                color="white"
                fontSize={0.5}
                position={position}
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#8b5cf6"
            >
                {text}
            </Text>
        </Float>
    );
};

export default function Tech() {
    return (
        <section className="w-full h-screen relative flex flex-col items-center justify-center z-10">
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-10">
                My Skills.
            </h2>
            <div className="w-full h-[600px]">
                <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Suspense fallback={null}>
                        <group>
                            {skills.map((skill, i) => {
                                const phi = Math.acos(-1 + (2 * i) / skills.length);
                                const theta = Math.sqrt(skills.length * Math.PI) * phi;
                                const x = 4 * Math.cos(theta) * Math.sin(phi);
                                const y = 4 * Math.sin(theta) * Math.sin(phi);
                                const z = 4 * Math.cos(phi);
                                return <SkillText key={skill} text={skill} position={[x, y, z]} />;
                            })}
                        </group>
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    );
}
