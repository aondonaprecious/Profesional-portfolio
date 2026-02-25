// /** @format */

// // src/components/organisms/ExperienceSection.tsx
// import { motion } from "framer-motion";
// import { useSelector } from "react-redux";
// import type { RootState } from "../../store";
// import SectionHeading from "../molecules/SectionHeading";
// import TechTag from "../molecules/TechTag";
// import {
//   SiJavascript,
//   SiReact,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiDocker,
//   SiAmazonwebservices,
// } from "react-icons/si";

// const ExperienceSection = () => {
//   const { experience } = useSelector((state: RootState) => state.portfolio);

//   return (
//     <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
//       <div className="lg:col-span-12">
//         <SectionHeading
//           title="Experience &"
//           highlight="Skills"
//           subtitle="A detailed timeline of my professional journey."
//         />
//       </div>

//       {/* Left Column: Timeline */}
//       <div className="lg:col-span-7 space-y-12 relative">
//         {/* The Vertical Line Spine */}
//         <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800" />

//         {experience.map((item, index) => (
//           <motion.div
//             key={item.id}
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.2 }}
//             className="relative pl-12"
//           >
//             {/* Timeline Dot */}
//             <div className="absolute left-2.5 top-1 w-3.5 h-3.5 rounded-full bg-blue-600 border-4 border-gray-900 z-10" />

//             <div className="bg-[--color-surface-dark] border border-gray-800 p-6 rounded-2xl hover:border-blue-500/30 transition-colors">
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h3 className="text-xl font-bold">{item.role}</h3>
//                   <p className="text-blue-400 font-mono text-sm uppercase tracking-wider">
//                     {item.company}
//                   </p>
//                 </div>
//                 <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold">
//                   {item.period}
//                 </span>
//               </div>
//               <p className="text-gray-400 text-sm leading-relaxed mb-4">
//                 {item.description}
//               </p>
//               <ul className="space-y-2">
//                 {item.achievements.map((ach, i) => (
//                   <li
//                     key={i}
//                     className="text-xs text-gray-500 flex items-start gap-2"
//                   >
//                     <span className="text-blue-500 mt-1">✓</span> {ach}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Right Column: Proficiency Cards (Task 6.2) */}
//       <div className="lg:col-span-5 space-y-6">
//         <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//           <span className="text-blue-500 text-xl">⚙</span> Technical Proficiency
//         </h3>

//         <div className="bg-[--color-surface-dark] border border-gray-800 p-8 rounded-3xl">
//           <SkillGroup
//             title="Frontend"
//             icons={[SiReact, SiJavascript, SiTailwindcss]}
//             color="text-blue-400"
//           />
//           <hr className="my-8 border-gray-800" />
//           <SkillGroup
//             title="Backend"
//             icons={[SiNodedotjs]}
//             color="text-green-400"
//           />
//           <hr className="my-8 border-gray-800" />
//           <SkillGroup
//             title="DevOps"
//             icons={[SiDocker, SiAmazonwebservices]}
//             color="text-purple-400"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// // Internal Sub-component for clean code
// const SkillGroup = ({
//   title,
//   icons,
//   color,
// }: {
//   title: string;
//   icons: any[];
//   color: string;
// }) => (
//   <div>
//     <h4
//       className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${color}`}
//     >
//       {title}
//     </h4>
//     <div className="flex flex-wrap gap-3">
//       {icons.map((Icon, i) => (
//         <div
//           key={i}
//           className="p-3 bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all cursor-default"
//         >
//           <Icon className="size-6 text-gray-300" />
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default ExperienceSection;








// src/components/organisms/ExperienceSection.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import  type { RootState } from '../../store';
import SectionHeading from '../molecules/SectionHeading';
import ExperienceCard from '../molecules/ExpereinceCard';
import TimelineNode from '../atoms/TimelineNodes';
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiPostgresql, SiDocker, SiAmazonwebservices, SiFigma } from 'react-icons/si';

const ExperienceSection: React.FC = () => {
  const { experience } = useSelector((state: RootState) => state.portfolio);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading 
        title="Experience &" 
        highlight="Skills" 
        subtitle="A detailed timeline of my professional journey and the technical arsenal I use to build modern digital products." 
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: The Timeline Cards (7 Columns) */}
        <div className="lg:col-span-7 relative">
          {/* Vertical Spine Line - Positioned to the left */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-gray-800 to-transparent ml-[-1px]" />
          
          <div className="flex flex-col gap-12">
            {experience.map((item, index) => (
              <div key={item.id} className="relative pl-12">
                <TimelineNode />
                <ExperienceCard data={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Technical Proficiency (5 Columns) */}
        <aside className="lg:col-span-5 space-y-8">
          <div className="sticky top-32">
             <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
               <span className="p-2 bg-blue-500/10 rounded-lg"><SiNodedotjs className="text-blue-500 size-5"/></span>
               Technical Proficiency
             </h3>

             <div className="space-y-6">
                <SkillCategory title="Frontend" icons={[SiReact, SiTypescript, SiTailwindcss]} />
                <SkillCategory title="Backend" icons={[SiNodedotjs, SiPython, SiPostgresql]} />
                <SkillCategory title="Tools & DevOps" icons={[SiDocker, SiAmazonwebservices, SiFigma]} />
             </div>
          </div>
        </aside>

      </div>
    </section>
  );
};

/**
 * Internal Molecule: SkillCategory
 * Renders the skill boxes found in screen 3.jpg
 */
const SkillCategory = ({ title, icons }: { title: string, icons: any[] }) => (
  <div className="bg-[--color-surface-dark] border border-gray-800/50 p-6 rounded-[24px]">
    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5 flex items-center gap-2">
      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {title}
    </h4>
    <div className="flex flex-wrap gap-4">
      {icons.map((Icon, i) => (
        <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500/40 transition-all cursor-default group">
          <Icon className="size-5 text-gray-400 group-hover:text-blue-400" />
          <span className="text-sm font-medium text-gray-300 group-hover:text-white">{Icon.name.replace('Si', '')}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ExperienceSection;
