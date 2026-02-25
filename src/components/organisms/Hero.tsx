
// we are using this version of the Hero component now, which has a blue background and more closely matches the original UI design. It also includes the vertical line with social icons on the left, and the status badge is repositioned to fit better with the overall layout. The typography is dynamic, scaling appropriately for different screen sizes, and the buttons are styled to match the UI's design language.
/** @format */
import { motion } from 'framer-motion';
import Button from '../atoms/Button';
import TechTag from '../molecules/TechTag';
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-20 md:py-32 max-w-7xl mx-auto overflow-hidden">
      {/* 1. The Fading Vertical Line (Desktop Only) */}
      {/* Using 'hidden lg:flex' ensures this doesn't clutter smaller screens */}
      <div className="absolute left-4 xl:left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
        <div className="w-[1px] h-24 bg-gradient-to-t from-blue-500/50 to-transparent" />
        <div className="flex flex-col gap-4 text-gray-500">
          <SiGithub
            className="hover:text-blue-500 cursor-pointer transition-colors"
            size={18}
          />
          <SiLinkedin
            className="hover:text-blue-500 cursor-pointer transition-colors"
            size={18}
          />
          <SiX
            className="hover:text-blue-500 cursor-pointer transition-colors"
            size={18}
          />
        </div>
        <div className="w-[1px] h-24 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        /* Added lg:pl-20 to prevent content from touching the vertical line on desktops */
        className="w-full lg:pl-20 pt-16 md:pt-0"
      >
        {/* 2. Status Badge */}
        <div className="mb-8 md:mb-10 w-fit">
          {/* The entire badge is now one cohesive pill */}
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            {/* Animated Dot - Now nested inside the border */}
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>

            {/* Text Component */}
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-blue-500 uppercase font-mono leading-none pr-1">
              Available for hire
            </span>
          </div>
        </div>

        <p className="text-gray-400 font-medium mb-2 text-sm md:text-base">
          Hello, I am
        </p>

        {/* Dynamic Typography: Scale down on mobile (text-4xl) and up on desktop (text-8xl) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-4">
          Aondona Pre<span className="text-gray-500">cious.</span>
        </h1>

        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-wrap items-center gap-2 md:gap-4 mb-8 font-mono text-gray-100">
          <span className="text-blue-600 font-mono">{">"}</span>
          Front end developer
          <span className="inline-block w-[3px] md:w-[6px] h-[1.1em] bg-blue-600 ml-2 md:ml-4 animate-[pulse_1s_infinite] align-middle" />
        </h2>

        <p className="max-w-xl text-gray-400 text-base md:text-lg mb-10 md:mb-12 leading-relaxed">
          I build accessible, pixel-perfect, and performant web experiences.
          Currently focused on building human-centric AI interfaces.
        </p>

        {/* 3. Responsive Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-20">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all w-full sm:w-fit">
            View Projects <span className="text-xl">→</span>
          </Button>
          <Button
            variant="outline"
            className="border-gray-800 hover:border-gray-600 text-white px-8 py-4 rounded-lg font-bold w-full sm:w-fit"
          >
            Contact Me
          </Button>
        </div>

        {/* 4. Tools Section */}
        <div className="space-y-4">
          <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3em]">
            Technologies & Tools
          </span>
          <div className="flex flex-wrap gap-3">
            <TechTag label="React" icon={SiReact} />
            <TechTag label="TypeScript" icon={SiTypescript} />
            <TechTag label="Tailwind" icon={SiTailwindcss} />
            <TechTag label="Node.js" icon={SiNodedotjs} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

