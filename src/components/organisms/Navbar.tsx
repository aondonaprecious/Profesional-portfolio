/** @format */

// src/components/organisms/Navbar.tsx
// import Button from '../atoms/Button'; // Importing our existing Atom

// const Navbar = () => {
//   return (
//     <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
//       <div className="bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-full px-8 py-3 flex justify-between items-center shadow-2xl">
//         <div className="font-bold text-xl flex items-center gap-2">
//           <div className="bg-blue-600 p-1 rounded-md text-sm">{"</>"}</div>
//           <span className="tracking-tight">Aondonaprecious Portfolio</span>
//         </div>
        
//         <div className="hidden md:flex gap-8 text-sm text-gray-400 font-medium">
//           <a href="#projects" className="hover:text-white transition-colors">Projects</a>
//           <a href="#experience" className="hover:text-white transition-colors">Experience</a>
//           <a href="#about" className="hover:text-white transition-colors">About</a>
//           <a href="#contact" className="hover:text-white transition-colors">Contact</a>
//         </div>

//         {/* Using our Atomic Button instead of a raw <button> */}
//         <Button variant="primary" className="rounded-full !px-6 !py-2 text-xs">
//           Resume
//         </Button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



/** @format */
// import { motion } from 'framer-motion';

// const Navbar = () => {
//   const navLinks = [
//     { name: 'Projects', href: '#projects' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'About', href: '#about' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
//       <motion.div 
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-2xl border border-white/5 bg-dark-bg/80 backdrop-blur-md shadow-2xl"
//       >
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <div className="bg-blue-600 p-1.5 rounded-lg text-white font-bold text-xs italic">
//             {"</>"}
//           </div>
//           <span className="text-white font-bold tracking-tight">
//             Aondonaprecious <span className="text-gray-400 font-medium">Portfolio</span>
//           </span>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a
//               key={link.name}
//               href={link.href}
//               className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Resume Button */}
//         <button className="bg-blue-600/10 hover:bg-blue-600 border border-blue-500/30 text-blue-400 hover:text-white px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300">
//           Resume
//         </button>
//       </motion.div>
//     </nav>
//   );
// };

// export default Navbar;











// src/components/organisms/Navbar.tsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Button from '../atoms/Button'; // Reusing your Button atom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  /**
   * INDUSTRY STANDARD: Direct Download Handler
   * Triggers download of the PDF from the public folder.
   */
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Aondona_Precious_Resume.pdf'; 
    link.download = 'Aondona_Precious_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-0">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        /* REMOVED: top-0, left-0, right-0 and full width background.
           FIXED: px-6 py-3, max-width, and constant glassmorphism.
        */
        className="flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-2xl md:rounded-full border border-white/10 bg-gray-900/60 backdrop-blur-xl shadow-2xl"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white font-bold text-xs italic">
            {"</>"}
          </div>
          <span className="text-white font-bold tracking-tight text-sm md:text-base">
            Aondonaprecious <span className="text-gray-400 font-medium hidden sm:inline">Portfolio</span>
          </span>
        </div>

        {/* Desktop Links - Stays hidden on small screens */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Logic & Resume Button */}
        <div className="flex items-center gap-3">
          {/* Using your Atomic Button with the download handler */}
          <Button 
            onClick={handleResumeDownload}
            variant="primary" 
            className="rounded-full px-5 py-2 text-[10px] md:text-xs font-bold whitespace-nowrap"
          >
            Resume
          </Button>

          {/* Hamburger Menu for Mobile Responsiveness */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-20 left-0 right-0 mx-auto w-[95%] p-6 bg-gray-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 text-lg font-medium border-b border-gray-800 pb-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;