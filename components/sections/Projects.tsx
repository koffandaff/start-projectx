"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterTabs from "@/components/ui/FilterTabs";
import ProjectCard from "@/components/ui/ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";

const TABS = [
  { label: "ALL", value: "all" },
  { label: "FULL STACK", value: "Full Stack" },
  { label: "AI & ML", value: "AI / ML" },
  { label: "BLOCKCHAIN", value: "Blockchain" },
  { label: "PYTHON", value: "Python" },
  { label: "C++", value: "C++" },
  { label: "JAVA", value: "Java" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Standard 3-column layout

  const projects = projectsData as Project[];

  // Normalize stacks for accurate filtering
  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.stack === filter
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (val: string) => {
    setFilter(val);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-32 relative bg-[var(--bg-root)]">      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <SectionHeading
            title="The Vault"
            subtitle="A showcase of past projects we've built from scratch for students."
            />
            <div className="w-full md:w-auto md:min-w-[400px]">
                <FilterTabs
                    tabs={TABS}
                    active={filter}
                    onChange={handleFilterChange}
                    className="w-full"
                />
            </div>
        </div>

        <motion.div layout className="relative min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {currentProjects.length > 0 ? (
              // 3 Column grid for a balanced layout
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {currentProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layoutId={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center pt-20"
              >
                <p className="text-xl text-[#064E3B]/50 font-bold tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
                  No vault records found.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Minimalist Editorial Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-between border-t-2 border-[#064E3B] pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="text-sm font-bold uppercase tracking-widest text-[#064E3B] hover:text-[#10B981] disabled:opacity-30 transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              ← Previous
            </button>
            <div className="text-xl font-black text-[#022C22]" style={{ fontFamily: "var(--font-display)" }}>
              {String(currentPage).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="text-sm font-bold uppercase tracking-widest text-[#064E3B] hover:text-[#10B981] disabled:opacity-30 transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
