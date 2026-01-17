import Background3D from '@/components/Background3D';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Tech from '@/components/Tech';
import Works from '@/components/Works';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative z-0 bg-black">
      <Background3D />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Works />
        <Contact />
      </div>
    </main>
  );
}
