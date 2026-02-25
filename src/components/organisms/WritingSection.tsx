/** @format */

// src/components/organisms/WritingSection.tsx
import React from "react";
import SectionHeading from "../molecules/SectionHeading";
import ArticleCard from "../molecules/ArticleCard";
import SearchInput from "../atoms/SearchInput";
import Button from "../atoms/Button";
import { FiMail } from "react-icons/fi";
import { m } from "motion/react";
import mttImage from "../../assets/3mtt.webp";
import codeImage from "../../assets/code ss.webp";

const WritingSection: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        title="Technical"
        highlight="Writing"
        subtitle="Deep dives into code, architecture, and developer life."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* MAIN FEED (Col 8) */}
        <div className="lg:col-span-8 space-y-12">
          {/* Featured Article - High Visibility */}
          <div className="relative group rounded-[32px] overflow-hidden border border-gray-800 aspect-[16/9] md:aspect-[21/9]">
            <img
              src={codeImage}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              alt="Featured"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent p-8 md:p-12 flex flex-col justify-end">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4">
                FEATURED
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Bugs That Built Heroes: My Journey Through Challenges and
                Collaboration
              </h2>
              <p className="text-gray-400 max-w-xl mb-6 hidden md:block">
                A comprehensive guide to how RSCs are changing the way we build
                web applications, from hydration to data fetching patterns.
              </p>
              <Button
                variant="primary"
                size="sm"
                className="w-fit"
                onClick={() =>
                  window.open(
                    "https://medium.com/@aondonaprecious2/skill-application-challenge-reflection-781d4d63972c",
                    "_blank",
                  )
                }
              >
                {/* <a
                  href="https://medium.com/@aondonaprecious2/skill-application-challenge-reflection-781d4d63972c"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a> */}
                Read Article &rarr;
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h4
              className="text-xl font-bold flex items-center gap-2
            "
            >
              <a href="https://medium.com/@aondonaprecious2/self-awareness-the-silent-force-behind-my-growth-659e12c5f42f">
                Recent Articles
              </a>{" "}
              <span className="text-blue-500">#</span>
            </h4>
            <ArticleCard
              title="Self-Awareness: The Silent Force Behind My Growth"
              category="TypeScript"
              date="SEPT. 20, 2024"
              excerpt="When I joined the 3MTT program, I didn’t fully understand the journey I was about to embark on. I thought it would be just another course, another certification. But as I sit down to reflect, I realize how deeply self-awareness has woven itself into every step of this journey. This program didn’t just teach me to code — it revealed layers of myself I didn’t even know existed"
              image ={mttImage}
            />
            {/* Add more ArticleCards here */}
          </div>
        </div>

        {/* SIDEBAR (Col 4) */}
        <aside className="lg:col-span-4 space-y-8">
          <SearchInput />

          <div className="bg-[--color-surface-dark] border border-gray-800 p-8 rounded-[32px]">
            <h4 className="font-bold mb-6 flex items-center gap-2">
              <FiMail className="text-blue-500" /> Weekly Dev Tips
            </h4>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Join 5,000+ developers receiving weekly insights on architecture
              and code quality.
            </p>
            <input
              className="w-full bg-gray-900 border border-gray-800 rounded-xl py-3 px-4 text-sm mb-4 focus:outline-none focus:border-blue-500"
              placeholder="your@email.com"
            />
            <Button variant="primary" className="w-full">
              Subscribe
            </Button>
            <p className="text-[10px] text-gray-600 mt-4 text-center italic">
              No spam. Unsubscribe anytime.
            </p>
          </div>

          <div className="p-4">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-gray-500">
              Topics
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Frontend", "Backend", "DevOps", "System Design"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-400 hover:text-blue-400 hover:border-blue-400 cursor-pointer transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default WritingSection;
