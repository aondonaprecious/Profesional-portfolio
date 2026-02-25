/** @format */

// src/components/organisms/ProjectGrid.tsx
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { motion } from "framer-motion";
import SectionHeading from "../molecules/SectionHeading";

const ProjectGrid = () => {
  const { projects } = useSelector((state: RootState) => state.portfolio);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        title="Selected"
        highlight="Works"
        subtitle="A curated gallery of web applications and system architectures."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            className="group bg-[--color-surface-dark] border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors"
          >
            <div className="aspect-video bg-gray-800 relative overflow-hidden">
              {/* Replace with <img> tag when your personal photos are ready */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              <span className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] text-gray-500 font-mono border border-gray-800 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;