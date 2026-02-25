/** @format */

// src/components/organisms/Footer.tsx
import { SiGithub, SiLinkedin, SiGitter } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t border-gray-900 bg-[--color-bg-dark] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="font-bold text-2xl flex items-center gap-2 mb-4">
            <div className="bg-blue-600 p-1 rounded-md text-sm">{"</>"}</div>
            DevPortfolio
          </div>
          <p className="text-gray-500 max-w-sm">
            Building digital products, brands, and experiences with a focus on
            motion, interaction, and performance.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Links</h4>
          <ul className="text-gray-500 space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Socials</h4>
          <div className="flex gap-4">
            <SiGithub className="size-5 text-gray-500 hover:text-white cursor-pointer" />
            <SiLinkedin className="size-5 text-gray-500 hover:text-white cursor-pointer" />
            <SiGitter className="size-5 text-gray-500 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-[10px] uppercase tracking-widest border-t border-gray-900 pt-8">
        © {new Date().getFullYear()} DevPortfolio. Built with React & Tailwind
        CSS.
      </div>
    </footer>
  );
};

export default Footer;
